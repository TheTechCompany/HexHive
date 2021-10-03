
import { Neo4jGraphQL } from "@neo4j/graphql"
import neo4j, { Driver } from "neo4j-driver"
import gql from "graphql-tag"
import {OGM} from "@neo4j/graphql-ogm"
import { nanoid } from "nanoid"
import apps from "./subschema/apps"
import automate from "./subschema/automate"
import flow from "./subschema/flow"

import files from "./subschema/files"
import { TaskRegistry } from "../task-registry"
import { CoreV1Api, KubeConfig, KubernetesObjectApi } from "@kubernetes/client-node"
import path from "path"
import { apply } from "../task-registry/k8s"

import { Kafka } from "kafkajs"
import { createTask, createWorkflow } from "../task-registry/yml-templater"
import { getPortEnv } from "../routes/pipelines/util"
import acl from "./subschema/acl"
import { createHash } from "crypto"
import { sendInvite } from "../email"

require("dotenv").config()

const TOPIC = "the-topic"

const kafka = new Kafka({
	clientId: "my-app",
	brokers: [process.env.KAFKA_URL || ""]
})


const event_producer = kafka.producer()



// const kc = new KubeConfig();
// kc.loadFromFile(path.join(__dirname, './config'))

// console.log(kc)

// kc.setCurrentContext('arn:aws:eks:ap-southeast-2:471796009502:cluster/hexhive-automate')
// kc.loadFromOptions({
//     clusters: [{name: 'hexhive-automate.ap-southeast-2.eksctl.io', server: 'https://90CCBD4348606DE3668A1B876660C93F.sk1.ap-southeast-2.eks.amazonaws.com'}],
//     users: [{name: 'iam-root-account@hexhive-automate.ap-southeast-2.eksctl.io'}],
//     contexts: [{name: 'iam-root-account@hexhive-automate.ap-southeast-2.eksctl.io', user: 'iam-root-account@hexhive-automate.ap-southeast-2.eksctl.io', cluster: 'hexhive-automate.ap-southeast-2.eksctl.io'}],
//     currentContext: 'iam-root-account@hexhive-automate.ap-southeast-2.eksctl.io'
// });

// const k8sApi = kc.makeApiClient(CoreV1Api);
// const client = KubernetesObjectApi.makeApiClient(kc)

export default  async (driver: Driver, taskRegistry: TaskRegistry) => {
	await event_producer.connect()

	const typeDefs = gql`

	type Mutation {
		convertFiles(files: [ID], pipeline: String): HiveFileProcess
		publishHivePipeline(id: ID): String
		publishHiveTask(id: ID): String
		runWorkflow(id: ID, params: [HivePipelineResourceInput]): HivePipelineRun
	}


	${apps}
	${files}
	${automate}
	${acl}
	${flow}

 
	`
	// MATCH path = (root:File)-[:HAS_CHILD]->(m:File)
	// WHERE m.name = \\"File\\" AND NOT ()-[:HAS_CHILD]->(root)
	// WITH [node in nodes(path) | node.name] as trailNames AND \\"/\\" + apoc.text.join(trailNames, "/") as trail



	const session = driver.session()

	const ogm = new OGM({typeDefs, driver})
	const HiveOrganisation = ogm.model("HiveOrganisation")
	const HiveUser = ogm.model("HiveUser")

	const HiveFileProcess = ogm.model("HiveFileProcess")

	const HivePipeline = ogm.model("HivePipeline")
	const HiveProcess = ogm.model("HiveProcess")

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
			inviteHiveUser: async (root: any, args: {name: string, email: string}, context: any) => {
				const users = await HiveUser.find({where: {username: args.email}, selectionSet: `
					{
						id
						name
						username
					}
				`})

				let user = users[0]
				let q = {};
				
				const pwd = nanoid()

				const pwdHash = createHash('sha256').update(pwd).digest("hex")
				if(user){
					q = {connect: {where: {node: {id: user.id}}}}
				}else{
					q = {create: {node: { name: args.name, username: args.email, password: pwdHash}}}
				}
				const update = await HiveOrganisation.update({
					update: {
						members: [q]
					}
				})

				await sendInvite({
					to: args.email, 
					sender: context.user.name, 
					receiver: args.name, 
					link: `https://auth.hexhive.io/signup`
				})
				return "Invited"
			},
			updateHiveOrganisations: async (root: any, args: any, context: any) => {
				if(!args.where) args.where = {}
				if(args.where && !args.where.id){
					args.where.id = context.user.organisation;
				}
				return await HiveOrganisation.update({
					where: args.where, 
					update: args.update, 
					connect: args.connect, 
					disconnect: args.disconnect, 
					create: args.create, 
					rootValue: root, 
					args: args, 
					context: context
				})
			},
			publishHiveTask: async (root: any, args: any) => {
				const pipeline = await HiveProcess.find({where: {
					id: args.id,
				}, selectionSet: `
					{
						id
						name
						ports {
							id
							name
							type
							direction
						}
						task
					}
				`})
				const task = pipeline[0]

				let steps : string = task.task

				task.ports.filter((a: any) => a.direction == "output").forEach((port: any) => {
					const name = `\\[\\[outputs.${port.name}\\]\\]`

					const regex = new RegExp(name, "g")
					console.log(name, steps.match(regex))
					steps = steps.replace(regex, `$(results.${port.id}.path)`)
				})

				task.ports.filter((a: any) => a.direction == "input").forEach((port: any) => {
					const name = `\\[\\[inputs.${port.name}\\]\\]`

					const regex = new RegExp(name, "g")
					console.log(name, steps.match(regex))
					if(port.type.toLowerCase() == "file"){
						steps = steps.replace(regex, `"/workspace/${port.name}"`)
					}else{
						steps = steps.replace(regex, `$${getPortEnv(port.id)}`)
					}
				})

				const definition = createTask(
					task.id, 
					steps, 
					task.ports.filter((a: any) => a.direction == "input").map((x: any) => ({name: x.id, type: x.type})), 
					task.ports.filter((a: any) => a.direction == "output").map((x: any) => ({name: x.id, key: x.name, type: x.type}))
				)
				console.log(definition)

				await apply(definition)

				return definition
			},
			publishHivePipeline: async (root: any, args: any, context: any) => {
				const pipeline = await HivePipeline.find({where: {
					id: args.id
				}, selectionSet: `
				{
					id
					name
					inputs{
						key
						type
					}
				   
					nodes {
						id
						options
						nextConnection {
							edges {
								source
								target
							}
						}
						callerConnection {
							edges {
								source
								target
							}
						}
						runner {
							... on HiveProcess {
								id
								name
								ports {
									id
									direction
									type
								}
							}
							... on HivePipelineTrigger {
								produces { 
									id
								}
							}
							
						}
					}
				}`})              
				console.log("Pipeline", pipeline[0].nodes)

				// const nodes = pipeline[0]?.nodesConnection.edges;

				const tasks = pipeline[0].nodes?.filter((a: any) => !a.runner?.produces).map((x: any) => {
					const inputs = x.callerConnection.edges.map((conn: any) => {
						const node = pipeline[0].nodes?.find((a: {runner: any}) => a.runner?.ports?.find((port: {id: string}) => port?.id == conn.source))
						const target = x.runner?.ports?.find((a: {id: string}) => a?.id == conn.target)

						return {source: node?.id, sourceHandle: conn.source, target: x.id, targetHandle: target?.id }
					})
					return {
						id: x.id,
						name: x.id,
						task: x.runner?.id,
						inputs: inputs.filter((a: any) => a.source)
					}
				})

				const definition = createWorkflow(pipeline[0].id, tasks, [])
				console.log(definition)

				await apply(definition)

				return definition
			},
			updateHivePipelines: async (root: any, args: any, context: any) => {
				const hivePipeline =  await HivePipeline.update({where: args.where, update: args.update, rootValue: root, args, context})
				const tasks = await HivePipeline.find({where: args.where, selectionSet: `{
					nodes{
						runner{
							... on HiveProcess {
								id
								name
							}

							... on HivePipelineTrigger {
								id
								name
							}
		
						}
					}
				}`})
				console.log(tasks[0].nodes)
				if(args.update.nodes[0].create){
					console.log("Create new container", args.update.nodes[0].create)

					// const taskDefinition = await taskRegistry.formatTaskDefinition()
					// const result = await taskRegistry.updateTask('TestTask', tasks[0].nodes.map((x: any) => ({
					//     name: x.runner.id,
					//     image: 'alpine:edge',
						
					// })))
				}
				// console.log("Update Hive Pipeline", args.update, hivePipeline)
				return hivePipeline
			},
			runWorkflow: async (root: any, args: {id: string, params: {key: string, type: string, urn: string}[]}) => {
				const id = nanoid()

				
				const workflow = await session.writeTransaction(async (tx) => {
					const new_workflow = await tx.run(`
						MATCH (pipeline:HivePipeline {id: $id})
						CREATE (run:HivePipelineRun {id: $pipeline_id})
						CREATE (run)-[:ACTIVE_PIPELINE]->(pipeline)
						RETURN run
					`, {
						pipeline_id: id,
						id: args.id
					})

					await Promise.all(args.params.map(async (param) => {
						const new_resources = await tx.run(`
							MATCH (run:HivePipelineRun {id: $id})
							CREATE (res:HivePipelineResource {id: $res_id, key: $key, type: $type, urn: $urn})
							CREATE (run)-[:USES]->(res)
							RETURN res
						`, {
							id: id,
							res_id: nanoid(),
							key: param.key,
							type: param.type,
							urn: param.urn
						})
						return new_resources.records?.[0]?.get(0).properties
					}))
					return new_workflow.records?.[0].get(0).properties
				})
				const result = await event_producer.send({
					topic: TOPIC,
					messages: [
						{value: JSON.stringify({
							service: "Files",
							id: id,
							pipeline: args.id
						})}
					]
				})
				console.log("RESULT", result)
				return workflow
			},
			convertFiles: async (root: any, args: {pipeline: string, files: string[]}, context: any) => {
				const id = nanoid()
				// const writeResult = await session.writeTransaction(async (tx) => {

				//     const input_query = await tx.run(`
				//         MATCH (pipeline:HivePipeline {id: $id})-[:CAN_USE]->(resource:HivePipelineResource)
				//         RETURN resource
				//     `)

				//     const inputs = input_query.records.map((x) => x.get(0).properties)

				//     const result = await tx.run(`
				//     MATCH (pipeline:HivePipeline {id: $pipeline})
				//     CREATE (process:HivePipelineRun {id: $id, createdAt: $date})
				//     CREATE (process)-[:ACTIVE_PIPELINE]->(pipeline)
				//     RETURN process
				//     `, {
				//         id: id,
				//         pipeline: args.pipeline,
				//         date: new Date().toISOString()
				//     })

				//     const process = result.records[0].get(0).properties
				//     console.log("Process", process)

				//     await Promise.all(args.files.map(async (file: string) => {
				//         const result = await tx.run(`
				//         MATCH (process:HivePipelineRun {id: $id})
				//         MATCH (file:HiveFile {id: $file})
				//         CREATE (res:HivePipelineResource {key: $key, urn: $urn})
				//         CREATE (process)-[rel:USES]->(res)
				//         RETURN rel
				//         `, {
				//             id: process.id,
				//             file: file,
				//             key: 
				//         })
				//         return result.records
				//     }))
				

				//     return process;
				// })   

				// const [info] = await HiveFileProcess.find({where: {id: id}, context})
				// console.log(info)

				// return info
			}
		}
	}
	const neoSchema : Neo4jGraphQL = new Neo4jGraphQL({ typeDefs, resolvers,    driver })

	return neoSchema.schema
}
