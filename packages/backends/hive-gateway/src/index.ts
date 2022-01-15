require("dotenv").config()


import neo4j from "neo4j-driver"

import { REMOTE_SCHEMA } from "./remotes"
import { DefaultRouter } from "./routes"

import { TaskRegistry } from "./task-registry"

import { Driver, Session } from "neo4j-driver"
import { HiveRouter } from "./router"
import { SchemaEndpoint, SchemaRegistry } from "./schema-registry"
import hive from "./schema/hive"
import { KeyManager } from "./keys"

const {NODE_ENV} = process.env

const { PORT = (NODE_ENV == "production" ? 80 : 7000), AUTH_SITE = "https://next.hexhive.io", ISSUER = `http://localhost:${PORT}` } = process.env

export class HiveGateway {

	private router?: HiveRouter;

	private taskRegistry: TaskRegistry = new TaskRegistry();

	private keyManager: KeyManager;

	private schemaRegistry?: SchemaRegistry;
	private schemaReloader?: NodeJS.Timer;

	private neoDriver?: Driver;

	private neoSession?: Session;

	private options : { dev: boolean, endpoints?: SchemaEndpoint[]};


	constructor(opts: {dev: boolean, endpoints?: SchemaEndpoint[]}){
		
		this.keyManager = new KeyManager();
		this.options = opts;
	
	}

	get isDev(){
		return this.options.dev
	}

	async init(){
		this.initDB();
		await this.keyManager.init()

		this.router = new HiveRouter({
			neoDriver: this.neoDriver
		})

		await this.initHive();
		await this.initRouter()
		await this.schemaRegistry?.reload()

		this.schemaReloader = setInterval(async () => {
			console.log("Reloading Schema...")
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
		if(!this.neoDriver) throw new Error("No Neo4j Driver")

		const schema = await hive(this.neoDriver, this.taskRegistry)
		this.schemaRegistry = new SchemaRegistry({
			initialEndpoints: this.options.endpoints || [],
			internalSchema: schema,
			keyManager: (payload: any) => this.keyManager.sign(payload),
		});
	}

	initRouter(){
		if(!this.neoDriver) return;
		this.router?.mount(DefaultRouter(this.neoDriver, this.taskRegistry)) 

		this.router?.mount('*', (req: any, res: any, next: any) => {
			// console.log({user: req.user, jwt: (req as any).jwt});
			req.jwt = req.user;
			next()
		})
		this.router?.mount('/.well-known/jwks.json', (req: any, res: any) => {
			res.send(this.keyManager.jwks)
		})
		this.router?.mount('/graphql', this.schemaRegistry?.middleware())

	}

	initDB(){

		this.neoDriver = neo4j.driver(
			process.env.NEO4J_URI || "localhost",
			neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "test")
		)

		this.neoSession = this.neoDriver.session();
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