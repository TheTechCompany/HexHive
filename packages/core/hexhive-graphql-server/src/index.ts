import {JwksClient} from 'jwks-rsa'
import { Router } from 'express';
import {verify} from 'jsonwebtoken';
import { GraphQLSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'

export interface HiveGraphOptions {
	rootServer: string;
	schema: GraphQLSchema;
}

export class HiveGraph {
	
	private router: Router;

	private rootServer?: string;

	private schema?: GraphQLSchema;

	private jwksClient?: JwksClient;

	private keys?: string[] = [];

	constructor(options: HiveGraphOptions){
		this.rootServer = options.rootServer;

		this.schema = options.schema;

		this.jwksClient = new JwksClient({
			jwksUri: `${this.rootServer}/.well-known/jwks.json`
		})
		
		this.router = Router()

	}

	async init(){
		await this.getRootConfiguration()

		if(this.schema){
			this.router.use('/graphql', this.isAuthenticated)
			this.router.use('/graphql', graphqlHTTP({
				schema: this.schema,
				graphiql: true,
			}))
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
	
}
