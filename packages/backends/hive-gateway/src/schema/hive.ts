
import gql from "graphql-tag"
import subschema from "./subschema"

import { TaskRegistry } from "../task-registry"
import { stitchingDirectives } from '@graphql-tools/stitching-directives'

import { Pool } from "pg"
import { PrismaClient } from '@hexhive/data'

import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeResolvers } from "@graphql-tools/merge"

require("dotenv").config()

const { allStitchingDirectivesTypeDefs } = stitchingDirectives();


export default  async (pool: Pool, prisma: PrismaClient, taskRegistry: TaskRegistry) => {

	const {typeDefs: subschemaTypeDefs, resolvers: subschemaResolvers} = subschema(prisma);

	const typeDefs = gql`
		${allStitchingDirectivesTypeDefs}

		type Query {
			empty: String
		}

		type Mutation {
			empty: String
		}

		${subschemaTypeDefs}
	`
	
	const resolvers = mergeResolvers([
		{

		},
		subschemaResolvers
	])
	
	return makeExecutableSchema({
		typeDefs,
		resolvers
	})
}
