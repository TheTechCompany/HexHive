require("dotenv").config()


import neo4j from "neo4j-driver"
import pg, {Client, Pool} from 'pg'

import { REMOTE_SCHEMA } from "./remotes"
import { DefaultRouter } from "./routes"

import { TaskRegistry } from "./task-registry"

import amqp from 'amqplib'

import { Driver, Session } from "neo4j-driver"
import { HiveRouter } from "./router"
import { SchemaEndpoint, SchemaRegistry } from "./schema-registry"
import hive from "./schema/hive"

const {NODE_ENV} = process.env

const { PORT = (NODE_ENV == "production" ? 80 : 7000), AUTH_SITE = "https://next.hexhive.io", ISSUER = `http://localhost:${PORT}` } = process.env

export class HiveGateway {

	private router: HiveRouter;

	private taskRegistry: TaskRegistry = new TaskRegistry();

	private schemaRegistry?: SchemaRegistry;

	private pool?: Pool;
	private neoDriver?: Driver;

	private neoSession?: Session;

	private mq?: amqp.Connection;
	private mqChannel?: amqp.Channel;

	private options : {port: number, endpoints?: SchemaEndpoint[]};


	constructor(opts: {port: number, endpoints?: SchemaEndpoint[]}){
		this.router = new HiveRouter({port: opts.port})
		this.options = opts;

	
	}

	async init(){
		this.initDB();
		await this.initMQ();
		await this.initHive();
		await this.initRouter()
		await this.schemaRegistry?.reload()
	}

	async start(){
		await this.router.start()
	}

	async initHive(){
		if(!this.neoDriver) throw new Error("No Neo4j Driver")
		if(!this.mqChannel) throw new Error("No RabbitMQ")
		if(!this.pool) throw new Error("No Pool")

		const schema = await hive(this.neoDriver, this.mqChannel, this.pool, this.taskRegistry)
		this.schemaRegistry = new SchemaRegistry({
			initialEndpoints: this.options.endpoints || [],
			internalSchema: schema
		});
	}

	initRouter(){
		if(!this.neoDriver) return;
		this.router.mount('/', DefaultRouter(this.neoDriver, this.taskRegistry)) 
		this.router.mount('/graphql', this.schemaRegistry?.middleware())
	}

	initDB(){
		this.pool = new Pool({
			host: process.env.TIMESERIES_HOST || 'localhost',
			user: process.env.TIMESERIES_USER || 'postgres',
			password: process.env.TIMESERIES_PASSWORD || 'quest',
			port: 5432,
			connectionTimeoutMillis: 60 * 1000
		})


		this.neoDriver = neo4j.driver(
			process.env.NEO4J_URI || "localhost",
			neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "test")
		)

		this.neoSession = this.neoDriver.session();
	}
	
	async initMQ(){
		this.mq = await amqp.connect(
			process.env.RABBIT_URL || 'amqp://localhost'
		)
	
		console.log("RabbitMQ")
	
		this.mqChannel = await this.mq.createChannel()
	
		await this.mqChannel.assertQueue(`COMMAND:DEVICE:CONTROL`)
		await this.mqChannel.assertQueue(`COMMAND:DEVICE:MODE`);
		await this.mqChannel.assertQueue(`COMMAND:FLOW:PRIORITIZE`);
	
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