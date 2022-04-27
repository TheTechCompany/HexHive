import { makeExecutableSchema } from "@graphql-tools/schema"
import { stitchSchemas } from "@graphql-tools/stitch"
import { delegateToSchema } from '@graphql-tools/delegate'
import { OperationTypeNode, Source } from "graphql"
import { execute, parse } from 'graphql'

describe('Merge Schemas/Resolvers', () => {
    it('Merges schemas', async () => {
        let schema1 = makeExecutableSchema({
            typeDefs: `
                type Query {
                    projects : [Project]
                }
                type Project {
                    id: ID
                    name: String
                    files: [File]
                }

                type File {
                    id: ID
                }
            `, 
            resolvers: {
                Query: {
                    projects: () => {
                        console.log("Get project")
                        return [
                            {
                                id: '101',
                                name: "Test 1",
                                files: [{id: '1'}, {id: '2'}]
                            },
                            {
                                id: '102',
                                name: "Test 2",
                                files: [{id: '3'}]
                            }
                        ]
                    }
                },
                Project: {
                    files: (parent, args, context, info) => {
                        const result = delegateToSchema({
                            schema: schema2,
                            operation: OperationTypeNode.QUERY,
                            fieldName: 'files',
                            args: {
                                ids: parent?.files?.map((x: any) => x.id)
                            },
                            info,
                            context
                        })
                        console.log({result})
                        return result;
                    }
                }
            }})

        let schema2 = makeExecutableSchema({
            typeDefs: `
                type Query {
                    files(ids: [ID]): [File]
                }

                type File {
                    id: ID
                    size: Int
                    path: String
                }
        `,
            resolvers: {
                Query: {
                    files: (parent, args) => {
                            let files = [{id: '1', size: 3010}, {id: '2', size: 200 }, {id: '3', size: 300}].filter((a) => args.ids.indexOf(a.id) > -1)
                            console.log({files})
                            return files;
                    }
                }
            }})

        const schema = stitchSchemas({
            subschemas: [
                {
                    schema: schema1
                },
                {
                    schema: schema2
                }
            ]
        })


        const res = await execute({
            schema,
            operationName: 'Q',
            document: parse(new Source(`query Q{ projects {id name files { id path size } }}`))
        })
        console.log({res: JSON.stringify(res.data?.projects)})

    })

    // it('Merges schemas + resolvers', () => {

    // })
})