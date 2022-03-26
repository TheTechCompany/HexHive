import {JwksClient} from 'jwks-rsa'
import { Router } from 'express';
import {verify} from 'jsonwebtoken';
import { GraphQLSchema } from 'graphql'
import { getGraphQLParameters, processRequest, renderGraphiQL, shouldRenderGraphiQL, sendResult } from "graphql-helix";
import { Driver } from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { GraphQLUpload, graphqlUploadExpress } from 'graphql-upload'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { stitchSchemas } from '@graphql-tools/stitch'
import bodyParser from 'body-parser'
import {OGM} from '@neo4j/graphql-ogm'
import { HashType } from './directives/hash'
import gql from 'graphql-tag';
import schema from './schema';

export interface HiveGraphOptions {
	rootServer: string;
	schema: GraphQLSchema | {typeDefs: any, resolvers: any, driver: Driver};
	dev?: boolean;
	uploads?: boolean;
}

const graphqlHTTP = (schema: GraphQLSchema) => {
	return async (req: any, res: any, next: any) => {
		const request = {
			body: req.body,
			headers: req.headers,
			method: req.method,
			query: req.query,
		};
		
		// Determine whether we should render GraphiQL instead of returning an API response
		if (shouldRenderGraphiQL(request)) {
			res.send(renderGraphiQL());
		} else {
			// Extract the Graphql parameters from the request
			const { operationName, query, variables } = getGraphQLParameters(request);
		
			// Validate and execute the query
			const result = await processRequest({
				operationName,
				query,
				variables,
				request,
				schema,
			});
		
			// processRequest returns one of three types of results depending on how the server should respond
			// 1) RESPONSE: a regular JSON payload
			// 2) MULTIPART RESPONSE: a multipart response (when @stream or @defer directives are used)
			// 3) PUSH: a stream of events to push back down the client for a subscription
			// The "sendResult" is a NodeJS-only shortcut for handling all possible types of Graphql responses,
			// See "Advanced Usage" below for more details and customizations available on that layer.
			sendResult(result, res);
		}
	}
}

export class HiveGraph {

	private ogm?: OGM;
	
	private dev: boolean;

	private router: Router;

	private rootServer?: string;

	private scalarSchema: GraphQLSchema;

	private schema: GraphQLSchema;

	private jwksClient?: JwksClient;

	private keys?: string[] = [];

	constructor(options: HiveGraphOptions){
		this.rootServer = options.rootServer;
		this.dev = options.dev || false

		this.schema = new GraphQLSchema({})


		this.scalarSchema = makeExecutableSchema({
			typeDefs: gql`
				scalar Upload
			`,
			resolvers: {
				Upload: GraphQLUpload
			}
		})

		if(options.schema instanceof GraphQLSchema){
			this.schema = stitchSchemas({subschemas: [options.schema, this.scalarSchema]});
		}else{
			const { typeDefs, resolvers = {}, driver } = options.schema;

			const mergedTypeDefs = mergeTypeDefs([
				schema({uploads: options.uploads || false}),
				typeDefs
			])

			let ScalarTypes : any = {}
			if(options.uploads) ScalarTypes['Upload'] = GraphQLUpload;

			const neo = new Neo4jGraphQL({
				typeDefs: mergedTypeDefs,
				// schema: stitchSchemas({subschemas: [this.scalarSchema, neoSchema]}),
				resolvers: {
					...resolvers,
					Hash: HashType,
					...ScalarTypes
				},
				driver,
				// typeDefs: mergedTypeDefs
			})

			this.ogm = new OGM({ typeDefs: mergedTypeDefs, driver })

			neo.getSchema().then((schema) => {
				this.schema = schema;
			}) 
		}

		this.jwksClient = new JwksClient({
			jwksUri: `${this.rootServer}/.well-known/jwks.json`
		})
		
		this.router = Router()

	}

	get isDev(){
		return process.env.NODE_ENV === 'development' || this.dev
	}

	async init(){
		await this.getRootConfiguration()

		// if(!this.schema) return;
		if(this.schema){
			this.router.use(bodyParser.json());
			if(!this.isDev) this.router.use('/graphql', this.isAuthenticated.bind(this))
			this.router.use(
				'/graphql', 
				graphqlUploadExpress({maxFileSize: 10 * 1024 * 1024, maxFiles: 20}),
				graphqlHTTP(this.schema)
				// async (req, res, graphqlParams) => ({
				// 	schema: this.schema,
				// 	graphiql: true,
				// 	context: {
				// 		...req,
				// 		ogm: this.ogm
				// 	}
				// }))
			)
		}
	}

	isAuthenticated(req: any, res: any, next: any){
		const hiveJwt = req.headers["x-hive-jwt"]?.toString();

		if (hiveJwt) {
		  const verified = verify(
			hiveJwt,
			this.keys?.[0] || '',
			{ algorithms: ["RS256"] }
		  );
		
		  (req as any).jwt = {
			  ...(verified as any || {}),
			id: (verified as any)?.sub,
		  };
		  next();
		} else {
		  res.send({ error: "No JWT" });
		}
	}

	async getRootConfiguration(){
		const keys = await this.jwksClient?.getSigningKeys()
		this.keys = keys?.map((x) => x.getPublicKey())
	}

	get middleware(){
		return this.router
	}

	get graphManager(){
		return this.ogm
	}
	
}
