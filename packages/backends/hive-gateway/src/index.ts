require("dotenv").config()

import { DefaultRouter } from "./routes"

import { HiveRouter } from "./router"
import { SchemaEndpoint, SchemaRegistry } from "./schema-registry"
import hive from "./schema/hive"
import { KeyManager } from "./keys"
import passport from "passport"

import { graphqlUploadExpress } from 'graphql-upload'
import { PrismaClient } from "@hexhive/data"

const {NODE_ENV} = process.env

const { PORT = (NODE_ENV == "production" ? 80 : 7000), AUTH_SITE = "https://next.hexhive.io", ISSUER = `http://localhost:${PORT}` } = process.env

const prisma = new PrismaClient()

export class HiveGateway {

	private router?: HiveRouter;


	private keyManager: KeyManager;

	private schemaRegistry?: SchemaRegistry;
	private schemaReloader?: NodeJS.Timer;

	// private neoDriver?: Driver;


	private options : { dev: boolean, endpoints?: SchemaEndpoint[]};


	constructor(opts: {dev: boolean, endpoints?: SchemaEndpoint[]}){
		
		this.keyManager = new KeyManager();

	
		this.options = opts;
	
	}

	get isDev(){
		return this.options.dev
	}

	get jwtSecret(){
		return this.keyManager.publicKey
	}

	
	async init(){
		await this.keyManager.init()

		
		this.router = new HiveRouter({})

		await this.initHive();
		await this.initRouter()
		await this.schemaRegistry?.reload()

		this.schemaReloader = setInterval(async () => {
			console.debug("Reloading Schema...")
			await this.schemaRegistry?.reload()
		}, 60 * 1000);
	}

	get connect(){
		return this.router?.connect
	}

	get endpoints(){
		return this.schemaRegistry?.graphEndpoints || []
	}
	
	async initHive(){

		this.schemaRegistry = new SchemaRegistry({
			initialEndpoints: this.options.endpoints || [],
			schemaFactory: hive,
			keyManager: (payload: any) => this.keyManager.sign(payload),
			prisma: prisma
		});
	}

	initRouter(){
		// if(!this.neoDriver) return;
		this.router?.mount(DefaultRouter()) 

		this.router?.mount('*', (req: any, res: any, next: any) => {
			req.jwt = req.user;
			next()
		})
		
		this.router?.mount('/.well-known/jwks.json', (req: any, res: any) => {
			res.send(this.keyManager.jwks)
		})

		if(!this.isDev){
			this.router?.mount('/graphql',  (req: any, res: any, next: any) => {
				if(req.user){
					next();
				}else{
					passport.authenticate(['jwt', 'headerapikey'], {session: false})(req, res, next)
				}
			})
		}
		this.router?.mount('/graphql', graphqlUploadExpress({maxFileSize: 100 * 1024 * 1024, maxFiles: 30}));
		this.router?.mount('/graphql', this.schemaRegistry?.middleware())

	}


}

// (async () => {
// 	console.log(`Setting up data connections...`)


// 	const taskRegistry = new TaskRegistry()

// 	// const collaborationServer = new CollaborationServer();
         

// 	await connect_data()

// 	console.log(`Data connections setup`)


	

	




// 	if (process.env.NODE_ENV == "production" || process.env.NODE_ENV == "local-auth") {

// 		app.use("/graphql", async (req, res, next) => {

// 			try {

// 				console.log(req.user);
// 					(req as any).jwt = {
// 						iat: 1516239022,
// 						roles: ["admin"],
// 						...req.user
// 					}

// 				next()
// 			}catch(e){
// 				next("No user info found")
// 			}
// 		})
// 	}

// 	const graphqlServer = new GraphQLServer({})

// 	const reloadSchema = async () => {
// 		console.log("Loading Schema")
// 		subschemas = await SubSchema(REMOTE_SCHEMA)
// 		schema = stitchSchemas({
// 			subschemas: subschemas
// 		})
// 		hiveSchema(driver, mqChannel, pgClient,  taskRegistry).then((hive) => {
// 			// app.stack.find((a) => a.ro)
// 			graphqlServer.setSchema( mergeSchemas({schemas: [printerSchema, hive, schema]}))
// 			// app.use("/graphql", graphqlHTTP({
// 			// 	graphiql: true,
// 			// }))
// 		})
	 
// 	}
	
// 	const middleware = graphqlServer.http({})
// 	await reloadSchema()

// 	if(middleware) app.use('/graphql', middleware)

// 	//Reload remote schema every 5 minutes
// 	setInterval(async () => {
// 		await reloadSchema()
// 	}, 5 * 60 * 1000)



// })()