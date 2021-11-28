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

(async () => {
	const app = express();

	app.use(cors())
	const driver = neo4j.driver(
		process.env.NEO4J_URI || "localhost",
		neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "test")
	)
	console.log(`Neo4j...`)


	const fs = new FileStore();

	await fs.init()

	const resolved = resolvers(fs)
	const ogm = new OGM({typeDefs, driver})
	const neoSchema : Neo4jGraphQL = new Neo4jGraphQL({ typeDefs, resolvers: resolved , driver })


	app.use('/api/', signageApi(ogm, fs))

	app.use("/graphql", graphqlHTTP({
		schema: neoSchema.schema,
		graphiql: true,
	}))

	app.listen(process.env.PORT || 9009, () => {
		console.log(`Signage Server Running on ${process.env.PORT || 9009}`)
	})

})()