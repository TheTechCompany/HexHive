
import gql from "graphql-tag"
import subschema from "./subschema"

import { stitchingDirectives } from '@graphql-tools/stitching-directives'

import { Pool } from "pg"
import { PrismaClient } from '@hexhive/data'

import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeResolvers } from "@graphql-tools/merge"
import nodemailer from 'nodemailer'

require("dotenv").config()

const { allStitchingDirectivesTypeDefs } = stitchingDirectives();


export default (prisma: PrismaClient, schemas: { [key: string]: {acl: any[]} }, transporter?: nodemailer.Transporter) => {

	const {typeDefs: subschemaTypeDefs, resolvers: subschemaResolvers} = subschema(prisma, schemas, transporter);

	const typeDefs = gql`
		${allStitchingDirectivesTypeDefs}

		type Query {
			empty: String
		}

		type Mutation {
			empty: String
		}

		type Subscription {
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
