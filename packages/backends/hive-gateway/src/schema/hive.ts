
import { Neo4jGraphQL } from "@neo4j/graphql";
import neo4j, { Driver } from "neo4j-driver";
import gql from 'graphql-tag';
import {OGM} from '@neo4j/graphql-ogm'
import { nanoid } from "nanoid";
import apps from './subschema/apps'
import automate from './subschema/automate'
import files from './subschema/files'
import { TaskRegistry } from "../task-registry";

require("dotenv").config();

export default (driver: Driver) => {

    const taskRegistry = new TaskRegistry()

    const typeDefs = gql`

    type Mutation {
        convertFiles(files: [ID], pipeline: String): HiveFileProcess
    }

    type HiveOrganisation {
        id: ID! @id
        name: String
        appliances: [HiveIntegration] @relationship(type: "CAN_ACCESS", direction: OUT)
    }

    type HivePermission {
        id: ID! @id
        name: String
        create: [HiveIntegration]
        read: [HiveIntegration]
        update: [HiveIntegration]
        remove: [HiveIntegration]
    }

    ${apps}
    ${files}
    ${automate}

 
    `;
    // MATCH path = (root:File)-[:HAS_CHILD]->(m:File)
    // WHERE m.name = \\"File\\" AND NOT ()-[:HAS_CHILD]->(root)
    // WITH [node in nodes(path) | node.name] as trailNames AND \\"/\\" + apoc.text.join(trailNames, "/") as trail



    const session = driver.session()

    const ogm = new OGM({typeDefs, driver})

    const HiveFileProcess = ogm.model('HiveFileProcess')

    const HivePipeline = ogm.model('HivePipeline')

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
            updateHivePipelines: async (root: any, args: any, context: any) => {
                const hivePipeline =  await HivePipeline.update({where: args.where, update: args.update, rootValue: root, args, context})
                const tasks = await HivePipeline.find({where: args.where, selectionSet: `{
                    nodes{
                        runner{
                            id
                            name
                        }
                    }
                }`})
                console.log(tasks[0].nodes)
                if(args.update.nodes[0].create){
                    console.log("Create new container", args.update.nodes[0].create)
                    const result = await taskRegistry.updateTask('TestTask', tasks[0].nodes.map((x: any) => ({
                        name: x.runner.id,
                        image: 'alpine:edge',
                        mountPoints: [{
                            sourceVolume: 'TaskFiles',
                            containerPath: '/runner/files'
                        }]
                    })))
                }
                // console.log("Update Hive Pipeline", args.update, hivePipeline)
                return hivePipeline
            },
            convertFiles: async (root: any, args: {pipeline: string, files: string[]}, context: any) => {
                let id = nanoid()
                const writeResult = await session.writeTransaction(async (tx) => {

                    const result = await tx.run(`
                    MATCH (pipeline:HivePipeline {id: $pipeline})
                    CREATE (process:HiveFileProcess {id: $id, createdAt: $date})
                    CREATE (process)-[:ACTIVE_PIPELINE]->(pipeline)
                    RETURN process
                    `, {
                        id: id,
                        pipeline: args.pipeline,
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
