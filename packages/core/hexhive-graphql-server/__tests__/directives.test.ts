import { config } from 'dotenv'
config()
import { HiveGraph } from "../src"
import neo4j from 'neo4j-driver'
import express from 'express'
import { gql, request } from 'graphql-request'

let server;
let app;

beforeAll(async () => {
    app = express()


    
    server  = new HiveGraph({
        rootServer: 'http://localhost:7000',
        schema: {
            typeDefs: `
                type Test {
                    id: ID! @id
                }

                type Mutation {
                    uploadSingle(file: Upload): Test
                }
            `,
            resolvers: {
                Mutation: {
                    uploadSingle: (parent: any, args: any) => {
                        console.log("Upload single")
                    }
                }
            },
        },
        dev: true
    });

   await server.init();

    app.use(server.middleware)

    app.listen(9001, () => {
        console.log("Listening")
    })
})
describe('Directives', () => {
    it('Hash Directive', async () => {

        const query = gql`
            mutation M{
                createTests(input: [{name: "test"}]) {
                    tests {
                        name
                    }
                }

                uploadSingle(file: "test") {
                    id
                }
            }
        `

        const result = await request('http://localhost:9001/graphql', query)

        console.log({result: result.createTests.tests})

        expect(result.name).toBe('hash')
    })

    it('Hash Values', async () => {
        const query = gql`
            {
                tests {
                    id
                    name
                }
            }
        `

        const result = await request('http://localhost:9001/graphql', query)
        console.log({result: result.tests})
    })
})