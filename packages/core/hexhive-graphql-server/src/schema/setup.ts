import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { stitchSchemas } from "@graphql-tools/stitch";
import { GraphQLSchema, print } from "graphql";
import { GraphQLJSON, GraphQLJSONObject, DateTimeResolver, DateResolver } from "graphql-scalars";
import { GraphQLUpload } from "graphql-upload";
import schema, { ACL_Schema } from ".";
import { HashType } from "../directives/hash";

export const setupSchema = (graphSchema: GraphQLSchema | { typeDefs: any, resolvers: any }, resources: any[], uploads?: boolean) => {
    let finalSchema = new GraphQLSchema({})

		const scalarSchema = makeExecutableSchema({
			typeDefs: `
				scalar Upload
				scalar JSON
				scalar JSONObject
			`,
			resolvers: {
				Upload: GraphQLUpload,
				JSON: GraphQLJSON,
				JSONObject: GraphQLJSONObject
			}
		})

		if (graphSchema instanceof GraphQLSchema) {
			finalSchema = stitchSchemas({ subschemas: [graphSchema, scalarSchema] });
		} else {
			const { typeDefs, resolvers = {} } = graphSchema

			let ScalarTypes: any = {}
			if (uploads) ScalarTypes['Upload'] = GraphQLUpload;
			ScalarTypes['JSON'] = GraphQLJSON
			ScalarTypes['JSONObject'] = GraphQLJSONObject

			const mergedTypeDefs = mergeTypeDefs([
				schema({ uploads: uploads || false }),
				typeDefs
			])

			const mergedResolvers = mergeResolvers([
				resolvers,
				{
					Hash: HashType,
					DateTime: DateTimeResolver,
					Date: DateResolver,
					...ScalarTypes
				},
				{
					Query: {
						_sdl: () => print(mergedTypeDefs),
						_resources: () => resources
					}
				}
			])

			finalSchema = makeExecutableSchema({
				typeDefs: mergeTypeDefs([mergedTypeDefs, ACL_Schema]),
				resolvers: mergedResolvers
			})

		}

        return {
            schema: finalSchema
        }
}