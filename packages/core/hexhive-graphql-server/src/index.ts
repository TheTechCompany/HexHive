import { JwksClient } from 'jwks-rsa'
import { Router, json } from 'express';
import { GraphQLSchema } from 'graphql'
import { graphqlUploadExpress } from 'graphql-upload'
import { graphqlHTTP } from './handler';
import { setupSchema } from './schema/setup';
import { isAuthenticated } from './utils/is-authenticated';
import { registerEndpoint } from './registration';


export interface GraphResource {
	name: string; //Name of resource in GraphQL
	fields?: string[]; //Optional list of fields to use for condition builder
	actions: string[]; //Action verbs that can be used with this resource
}

export interface HiveGraphOptions {
	rootServer: string; //Reachable gateway instance
	
	name: string;
	backend_url: string;
	entrypoint: string;
	slug: string;

	secretKey?: string; //Shared key for gateways setup with PSK auth
	dontRegister?: boolean; //Dont register this gateway against the rootServer automatically

	schema: GraphQLSchema | { typeDefs: any, resolvers: any };

	resources: GraphResource[];

	contextFactory?: (context: any) => any;
	dev?: boolean;
	uploads?: boolean;
}

export class HiveGraph {

	private dev: boolean;

	private router: Router;

	private rootServer?: string;

	public name: string;
	public backend_url: string;
	public entrypoint: string;
	public slug: string;

	private secretKey?: string;
	private dontRegister?: boolean;

	private schema: GraphQLSchema;

	private resources: GraphResource[];

	private jwksClient?: JwksClient;

	private keys?: string[] = [];

	private contextFactory?: (context: any) => any;

	constructor(options: HiveGraphOptions) {

		this.name = options.name;
		this.backend_url = options.backend_url;
		this.entrypoint = options.entrypoint;
		this.slug = options.slug;

		this.rootServer = options.rootServer;
		this.dontRegister = options.dontRegister;
		this.secretKey = options.secretKey;

		this.dev = options.dev || false

		this.resources = options.resources || [];

		this.contextFactory = options.contextFactory;
		
		const { schema } = setupSchema(options.schema, this.resources, options.uploads);

		this.schema = schema;

		this.jwksClient = new JwksClient({
			jwksUri: `${this.rootServer}/.well-known/jwks.json`
		})

		this.router = Router();
	}

	get isDev() {
		return process.env.NODE_ENV === 'development' || this.dev
	}

	get middleware() {
		return this.router
	}

	async init() {
		await this.getRootConfiguration()

		if (this.schema) {
			this.router.use(json());

			if (!this.isDev) this.router.use('/graphql', isAuthenticated(this.keys || []))

			this.router.use(
				'/graphql',
				graphqlUploadExpress({ maxFileSize: 10 * 1024 * 1024, maxFiles: 20 }),
				graphqlHTTP(this.schema, this.contextFactory)
			)
		}

		if(!this.dontRegister){
			await registerEndpoint({
				host: `${this.rootServer || ''}/register-endpoint`,
				secret: this.secretKey
			}, {
				name: this.name, 
				backend_url: this.backend_url,
				slug: this.slug,
				entrypoint: this.entrypoint,
				resources: this.resources
			});
		}
	}

	async getRootConfiguration() {
		const keys = await this.jwksClient?.getSigningKeys()
		this.keys = keys?.map((x) => x.getPublicKey())
	}

}
