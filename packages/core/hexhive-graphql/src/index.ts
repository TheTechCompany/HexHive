import {JwksClient} from 'jwks-rsa'
import { Router } from 'express';
import {verify} from 'jsonwebtoken';

export interface HiveGraphOptions {
	rootServer: string;
}

export class HiveGraph {
	
	private router: Router;

	private rootServer?: string;

	private jwksClient?: JwksClient;

	private keys?: string[] = [];

	constructor(options: HiveGraphOptions){
		this.rootServer = options.rootServer;

		this.jwksClient = new JwksClient({
			jwksUri: `${this.rootServer}/.well-known/jwks.json`
		})
		
		this.router = Router()

	}

	async init(){
		await this.getRootConfiguration()

		this.router.use('/graphql', this.isAuthenticated)
	}

	isAuthenticated(req, res, next){
		const hiveJwt = req.headers["x-hive-jwt"]?.toString();

		console.log(req.headers);
		if (hiveJwt) {
		  const verified = verify(
			hiveJwt,
			this.keys?.[0],
			{ algorithms: ["RS256"] }
		  );
	
		  console.log(verified);
	
		  (req as any).jwt = {
			  ...(verified as any || {}),
			id: verified?.sub,
		  };
		  next();
		} else {
		  res.send({ error: "No JWT" });
		}
	}

	async getRootConfiguration(){
		const keys = await this.jwksClient.getSigningKeys()
		this.keys = keys.map((x) => x.getPublicKey())
	}

	get middleware(){
		return this.router
	}
	
}
