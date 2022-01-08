import {JwksClient} from 'jwks-rsa'
import { Router } from 'express';
import {verify} from 'jsonwebtoken';
import { GraphQLSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'
import { Driver } from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql'
import { mergeTypeDefs } from '@graphql-tools/merge'

import {OGM} from '@neo4j/graphql-ogm'

import gql from 'graphql-tag';
import schema from './schema';

export interface HiveGraphOptions {
	rootServer: string;
	schema: GraphQLSchema | {typeDefs: any, resolvers: any, driver: Driver};
	dev?: boolean;
}

export class HiveGraph {

	private ogm?: OGM;
	
	private dev: boolean;

	private router: Router;

	private rootServer?: string;

	private schema: GraphQLSchema;

	private jwksClient?: JwksClient;

	private keys?: string[] = [];

	constructor(options: HiveGraphOptions){
		this.rootServer = options.rootServer;
		this.dev = options.dev || false

		if(options.schema instanceof GraphQLSchema){
			this.schema = options.schema;
		}else{
			const { typeDefs, resolvers, driver } = options.schema;

			const mergedTypeDefs = mergeTypeDefs([
				schema,
				typeDefs
			])
			const neo = new Neo4jGraphQL({
				resolvers,
				driver,
				typeDefs: mergedTypeDefs
			})

			this.ogm = new OGM({ typeDefs: mergedTypeDefs, driver })
			this.schema = neo.schema
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
			if(!this.isDev) this.router.use('/graphql', this.isAuthenticated.bind(this))
			this.router.use(
				'/graphql', 
				graphqlHTTP(async (req, res, graphqlParams) => ({
					schema: this.schema,
					graphiql: true,
					context: {
						...req,
						ogm: this.ogm
					}
				}))
			)
		}
	}

	isAuthenticated(req: any, res: any, next: any){
		const hiveJwt = req.headers["x-hive-jwt"]?.toString();

		console.log(req.headers);
		if (hiveJwt) {
		  const verified = verify(
			hiveJwt,
			this.keys?.[0] || '',
			{ algorithms: ["RS256"] }
		  );
	
		  console.log(verified);
	
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
