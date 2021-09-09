
import { Neo4jGraphQL } from "@neo4j/graphql";
import neo4j, { Driver } from "neo4j-driver";
import gql from 'graphql-tag';
import {OGM} from '@neo4j/graphql-ogm'
import { nanoid } from "nanoid";

require("dotenv").config();

export default (driver: Driver) => {
    const typeDefs = gql`

    type Mutation {
        convertFiles(files: [ID]): HiveFileProcess
    }

    type HiveOrganisation {
        id: ID! @id
        name: String
        appliances: [HiveIntegration] @relationship(type: "CAN_ACCESS", direction: OUT)
    }

    type HiveService {
        id: ID!
        name: String
    }

    union HiveIntegration = HiveService | HiveAppliance

    type HivePermission {
        id: ID! @id
        name: String
        create: [HiveIntegration]
        read: [HiveIntegration]
        update: [HiveIntegration]
        remove: [HiveIntegration]
    }

    type HiveAppliance {
        id: ID! @id
        name: String!
        description: String
        
        permissions: [HivePermission] @relationship(type: "USES", direction: OUT)
        services: [HiveService] @relationship(type: "USES", direction: OUT)
        brand_image: HiveFile @relationship(type: "USES", direction: OUT)

    }

    type FileSystem {
        name: String!
        files: [HiveFile!]! @relationship(type: "CONTAINS", direction: OUT)
    }

   
    type HiveFileProcess @exclude {
        id: ID!
        createdAt: DateTime @timestamp(operations: [CREATE])
        completedAt: DateTime
        inputs: [HiveFile] @relationship(type: "CONVERTING", direction: OUT)
        outputs: [HiveFile] @relationship(type: "CONVERTED", direction: OUT)
    }

    type HiveFile {
        id: ID! @id
        name: String!
        path_id: String
            @cypher(
                statement: """
                MATCH path = (root:FileSystem)-[:CONTAINS *1..]->(m:HiveFile)
                WHERE m.id = this.id AND NOT ()-[:CONTAINS]->(root)
                WITH [node in nodes(path) | node.id] as trailNames
                RETURN COALESCE(\\"/\\" + apoc.text.join(trailNames, \\"/\\"), \\"/\\") 
                """
            )
        path: String
            @cypher(
                statement: """
                MATCH path = (root:FileSystem)-[:CONTAINS *1..]->(m:HiveFile)
                WHERE m.id = this.id AND NOT ()-[:CONTAINS]->(root)
                WITH [node in nodes(path) | node.name] as trailNames
                RETURN COALESCE(\\"/\\" + apoc.text.join(trailNames, \\"/\\"), \\"/\\") 
                """
            )
        fs: FileSystem @relationship(type: "CONTAINS", direction: IN)
        isFolder: Boolean
        parent: HiveFile @relationship(type: "CONTAINS", direction: IN)
        children: [HiveFile] @relationship(type: "CONTAINS", direction: OUT)

        conversions: [HiveFileProcess] @relationship(type: "CONVERTING", direction: IN)
        convertedBy: HiveFileProcess @relationship(type: "CONVERTED", direction: IN)

        convertedFrom: HiveFile @relationship(type: "CONVERSION", direction: IN)
        convertedTo: [HiveFile] @relationship(type: "CONVERSION", direction: OUT)
    }
    `;
    // MATCH path = (root:File)-[:HAS_CHILD]->(m:File)
    // WHERE m.name = \\"File\\" AND NOT ()-[:HAS_CHILD]->(root)
    // WITH [node in nodes(path) | node.name] as trailNames AND \\"/\\" + apoc.text.join(trailNames, "/") as trail



    const session = driver.session()

    const ogm = new OGM({typeDefs, driver})

    const HiveFileProcess = ogm.model('HiveFileProcess')

    HiveFileProcess.setSelectionSet(`
        {
            id
            createdAt
            completedAt
            inputs {
                id
                name
            }
            outputs {
                id
                name
            }
        }
    `)
    const resolvers = {
        HiveFile: {
            // path: (source: any, args: any, context: any) => {
            //     console.log(source, args, context)
            //     let prefix = '';
            //     if(source.parent?.name ) prefix += source.parent.name 
            //     return prefix + '/' + source.name
            // }
        },
        Mutation: {
            convertFiles: async (root: any, args: any, context: any) => {
                let id = nanoid()
                const writeResult = await session.writeTransaction(async (tx) => {

                    const result = await tx.run(`
                    CREATE (process:HiveFileProcess {id: $id, createdAt: $date})
                    RETURN process
                    `, {
                        id: id,
                        date: new Date().toISOString()
                    })

                    const process = result.records[0].get(0).properties
                    console.log("Process", process)

                    await Promise.all(args.files.map(async (file: string) => {
                        const result = await tx.run(`
                        MATCH (process:HiveFileProcess {id: $id})
                        MATCH (file:HiveFile {id: $file})
                        CREATE (process)-[rel:CONVERTING]->(file)
                        RETURN rel
                        `, {
                            id: process.id,
                            file: file
                        })
                        return result.records
                    }))
                

                    return process;
                })   

                const [info] = await HiveFileProcess.find({where: {id: id}, context})
                console.log(info)

                return info
            }
        }
    }
    const neoSchema : Neo4jGraphQL = new Neo4jGraphQL({ typeDefs, resolvers,    driver });

    return neoSchema.schema
}
