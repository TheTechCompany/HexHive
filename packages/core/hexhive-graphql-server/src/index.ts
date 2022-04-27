import {JwksClient} from 'jwks-rsa'
import { Router } from 'express';
import {verify} from 'jsonwebtoken';
import { GraphQLSchema, print } from 'graphql'
import { getGraphQLParameters, processRequest, renderGraphiQL, shouldRenderGraphiQL, sendResult } from "graphql-helix";
import { Driver } from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { GraphQLUpload, graphqlUploadExpress } from 'graphql-upload'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { stitchSchemas } from '@graphql-tools/stitch'
import bodyParser from 'body-parser'
import {OGM} from '@neo4j/graphql-ogm'
import { HashType } from './directives/hash'
import gql from 'graphql-tag';
import schema from './schema';
import { graphqlHTTP } from './handler';
import { DateResolver, DateTimeResolver } from 'graphql-scalars';

export interface HiveGraphOptions {
	rootServer: string;
	schema: GraphQLSchema | {typeDefs: any, resolvers: any};
	dev?: boolean;
	uploads?: boolean;
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
			const { typeDefs, resolvers = {} } = options.schema;

			console.log('=> HiveGraph: Setting up schema')

			let ScalarTypes : any = {}
			if(options.uploads) ScalarTypes['Upload'] = GraphQLUpload;

			const mergedTypeDefs = mergeTypeDefs([
				schema({uploads: options.uploads || false}),
				typeDefs
			])

			const mergedResolvers = mergeResolvers([
				resolvers,
				{
					Hash: HashType,
					DateTime: DateTimeResolver,
					Date: DateResolver,
					...ScalarTypes
				},
				{
					Query: {
						_sdl: () => print(mergedTypeDefs)
					}
				}
			])


			console.log('=> HiveGraph: Merged TypeDefs')

			this.schema = makeExecutableSchema({
				typeDefs: mergedTypeDefs,
				resolvers: mergedResolvers
			})

			console.log(`=> HiveGraph : Schema setup`)
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
			)
		}
	}

	isAuthenticated(req: any, res: any, next: any){
		const hiveJwt = req.headers["x-hive-jwt"]?.toString();

		const gatewayUrl = req.headers['x-hive-gateway']?.toString();

		if (hiveJwt) {
		  const verified = verify(
			hiveJwt,
			this.keys?.[0] || '',
			{ algorithms: ["RS256"] }
		  );

		  (req as any).token  = hiveJwt;
			
		  (req as any).gatewayUrl = gatewayUrl;
		  
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
