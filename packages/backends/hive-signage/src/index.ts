import dotenv from 'dotenv';
dotenv.config()

import neo4j from "neo4j-driver"
import { Neo4jGraphQL } from "@neo4j/graphql"
import { graphqlHTTP } from "express-graphql"
import express from 'express'
import cors from 'cors';

import typeDefs from './schema'
import resolvers from "./resolvers"

import signageApi from './routes'

import {OGM} from "@neo4j/graphql-ogm"
import { FileStore } from './de-file-store'
import { Pool } from 'pg';
import { createServer } from "http"

const greenlock = require("greenlock-express")

(async () => {
	const app = express();

	const server = createServer(app)


	app.use(cors())
	const driver = neo4j.driver(
		process.env.NEO4J_URI || "localhost",
		neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "test")
	)
	console.log(`Neo4j...`)

	const pgClient = new Pool({
		// database: 'qdb',
		host: process.env.TIMESERIES_HOST,
		port: 5432,
		user: 'postgres',
		password: process.env.TIMESERIES_PASSWORD,
	});

	console.log("Postgres")

	const fs = new FileStore();

	await fs.init()

	const resolved = await resolvers(fs, pgClient)
	const ogm = new OGM({typeDefs, driver})
	const neoSchema : Neo4jGraphQL = new Neo4jGraphQL({ typeDefs, resolvers: resolved , driver })


	app.use('/api/', signageApi(ogm, fs))

	app.use("/graphql", graphqlHTTP({
		schema: neoSchema.schema,
		graphiql: true,
	}))


	if(process.env.NODE_ENV == "production"){
		const httpsWorker = (glx: any)  => {
			const server = glx.httpsServer()
			
			// const io = new Server(server)
			// var ws = new WebSocketServer({ server: server, perMessageDeflate: false});
			// ws.on("connection", function(ws: WebSocket, req: any) {
			//     // inspect req.headers.authorization (or cookies) for session info
			//     collaborationServer.handleConnection(ws)
			// });
        
			// servers a node app that proxies requests to a localhost
			glx.serveApp(app)
		}

		if(!process.env.MAINTAINER_EMAIL) throw new Error("Provide a maintainer email through MAINTAINER_EMAIL environment variable")
		greenlock.init({
			packageRoot: __dirname + "/../",
			configDir: "./greenlock.d",
     
			// contact for security and critical bug notices
			maintainerEmail: process.env.MAINTAINER_EMAIL,
     
			// whether or not to run at cloudscale
			cluster: false
		}).ready(httpsWorker)
	}else{

		app.listen(process.env.PORT || 9009, () => {
			console.log(`Signage Server Running on ${process.env.PORT || 9009}`)
		})
	}

})()