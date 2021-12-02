
import { Neo4jGraphQL } from "@neo4j/graphql"
import neo4j, { Driver } from "neo4j-driver"
import gql from "graphql-tag"
import {OGM} from "@neo4j/graphql-ogm"
import { nanoid } from "nanoid"
import apps from "./subschema/apps"
import automate from "./subschema/automate"
import command from "./subschema/command"
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

import { DeviceValue } from '@hexhive/types'

import amqp from 'amqplib'

import { text } from "stream/consumers"
import { Client, Pool } from "pg"
import { x } from "tar"
import { getDeviceActions } from "../data/command"

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

/*
	type Mutation {
		convertFiles(files: [ID], pipeline: String): HiveFileProcess
		publishHivePipeline(id: ID): String
		publishHiveTask(id: ID): String
		runWorkflow(id: ID, params: [HivePipelineResourceInput]): HivePipelineRun
	}


*/
export default  async (driver: Driver, channel: amqp.Channel, pgClient: Pool, taskRegistry: TaskRegistry) => {
	await event_producer.connect()

	const typeDefs = gql`

	type Query {
		empty: String
	}

	type Mutation {
		empty: String
	}



	${apps}
	${files}
	${automate}
	${acl}
	${flow}

	${command}
 
	`
	// MATCH path = (root:File)-[:HAS_CHILD]->(m:File)
	// WHERE m.name = \\"File\\" AND NOT ()-[:HAS_CHILD]->(root)
	// WITH [node in nodes(path) | node.name] as trailNames AND \\"/\\" + apoc.text.join(trailNames, "/") as trail



	const session = driver.session()

	const ogm = new OGM({typeDefs, driver})
	const HiveOrganisation = ogm.model("HiveOrganisation")
	const HiveUser = ogm.model("HiveUser")

	// const HiveFileProcess = ogm.model("HiveFileProcess")

	const HivePipeline = ogm.model("HivePipeline")
	const HiveProcess = ogm.model("HiveProcess")

	// HiveFileProcess.setSelectionSet(`
	// 	{
	// 		id
	// 		createdAt
	// 		completedAt
	// 		inputs {
	// 			id
	// 			name
	// 		}
	// 		outputs {
	// 			id
	// 			name
	// 		}
	// 	}
	// `)
	const resolvers = {
		HiveIntegrationPath: {
			collections: (source: any, args: any, context: any) => {
				return [{name: "vw_Jsis_Jobs"}]
				console.log(source, args, context)
			}
		},
		HiveFile: {
			// path: (source: any, args: any, context: any) => {
			//     console.log(source, args, context)
			//     let prefix = '';
			//     if(source.parent?.name ) prefix += source.parent.name 
			//     return prefix + '/' + source.name
			// }
		},
		Query: {
			commandDeviceTimeseriesTotal: async (root: any, args: {
				deviceId: string, //device in quest
				device: string, //deviceId in quest
				valueKey?: string,
				startDate?: string,
			}) => {
				const client = await pgClient.connect()

				const { deviceId, device, valueKey, startDate } = args

				console.log({deviceId}, {device}, {valueKey})
				const query = `
				SELECT 
					sum(SUB.total) as total
				FROM 
					(
						SELECT (CAST(value AS DOUBLE PRECISION) / 60) * EXTRACT(EPOCH from (LEAD(timestamp) over (order by timestamp) - timestamp)) as total
						FROM
							command_device_values
						WHERE
							device = $1
							AND deviceId = $2
							AND valueKey = $3
							AND timestamp >= NOW() - (7 * INTERVAL '1 day') 
						GROUP by deviceId, device, valueKey, timestamp, value
					) as SUB
				`//startDate
				const result = await client.query(query, [deviceId, device, valueKey ])
				await client.release()
				console.log(result)
				return result.rows?.[0]
			},
			commandDeviceTimeseries: async (root: any, args: {
				deviceId: string, //device in quest
				device: string, //deviceId in quest
				valueKey?: string,
				startDate?: string,
			}) => {
				const client = await pgClient.connect()

				let query = `SELECT * FROM command_device_values WHERE deviceId=$1 AND device=$2`;
				let params = [args.device, args.deviceId]

				if(args.startDate){
					params.push(new Date(args.startDate).toISOString())
					query += ` AND timestamp >= $${params.length}`
				}
				if(args.valueKey) {
					params.push(args.valueKey)

					query += ` AND valueKey=$${params.length}`
				}

				console.log(query, params)

				const result = await client.query(
					query,
					params
				)

				await client.release()
				return result.rows;
			},
			commandDeviceValue: async (root: any, args: {
				bus: string,
				device: string,
				port: string
			}) => {

				const values = await DeviceValue.find({device: args.device});

				// const client = await pgClient.connect()

				// let where = ``;
				// let whereClause : string[] = []
				// let whereArgs : {key: string, value: string}[] = []

				// if(args.bus) {
				// 	// whereClause.push(`bus=$1`)
				// 	whereArgs.push({value: args.bus, key: 'bus'})
				// }

				// if(args.device){
				// 	whereArgs.push({value: args.device, key: 'device'})
				// 	// whereClause.push(`device=$2`)
				// }

				// if(args.port){
				// 	whereArgs.push({value: args.port, key: 'bus'})
				// }

				// if(whereClause.length > 0){
				// 	where += `WHERE ${whereArgs.map((x, ix) => `${x.key}=$${ix + 1}`).join(' AND ')}`
				// }


				// const values = await client.query(
				// 	`SELECT * FROM commandDeviceValues ${where} LATEST BY device,deviceId,valueKey`,
				// 	[whereArgs.map((x) => x.value)]
				// )

				// await client.release()
				
				return values;
			},
			flowWorkInProgress: async (root: any, args: {startDate: Date, endDate: Date}, context: any) => {
				return await session.readTransaction(async (tx) => {
					let q = args.startDate ? 'WHERE p.startDate > datetime($startDate)' : ''
					if(args.startDate && args.endDate) q += ` AND p.endDate < datetime($endDate)`
					const r = await tx.run(`
						MATCH (p:Project {status: "Job Open"})
						${q}
						MATCH (r:ProjectResult {id: p.id})
						RETURN {
							invoiced: sum(r.invoiced), 
							quoted: sum(r.quoted)
						}
					`, {
						startDate: args.startDate,
						endDate: args.endDate
					})
					return r.records?.[0]?.get(0)
				})
			},
			resolveFS: async (root: any, args: {appId: string, mountPath: string}, context: any) => {
				
				let parts = args.mountPath.split('/')

				console.log(args, parts)

				const appFolder = await session.readTransaction(async (tx) => {
					const result = await tx.run(`
						MATCH (org:HiveOrganisation {id: $org})-[:HAS_FS]->(fs:FileSystem)-[:HAS_FILE]->(appFolder:HiveFile {name: "Applications"})
						RETURN appFolder	
					`, {
						org: context.user.organisation
					})
					return result.records?.[0]?.get(0).properties
				})

				if(!appFolder){
					await session.writeTransaction(async (tx) => {
						await tx.run(`
							MATCH (org:HiveOrganisation {id: $org})-[:HAS_FS]->(fs:FileSystem)
							CREATE (appFolder:HiveFile {id: $id, name: "Applications", isFolder: true})
							CREATE (fs)-[:HAS_FILE]->(appFolder)
							RETURN appFolder
						`, {
							org: context.user.organisation,
							id: nanoid()
						})
					})
				}

				const result =  await session.readTransaction(async (tx) => {
					const result = await tx.run(`
						MATCH (org:HiveOrganisation {id: $org})-[:HAS_FS]->(:FileSystem)-[:HAS_FILE]->(appFolder:HiveFile {name: "Applications"})
						MATCH (appFolder)-[:CONTAINS]->(parentFolder:HiveFile {name: $parentPath})
						RETURN parentFolder
					`, {
						org: context.user.organisation,
						parentPath: parts[1],
						childPath: parts[2]
					})
					return result.records.map((x) => x.get(0).properties)
				})

				if(result.length == 0){
					await session.writeTransaction(async (tx) => {
						await tx.run(`
						MATCH (org:HiveOrganisation {id: $org})-[:HAS_FS]->(fs:FileSystem)-[:HAS_FILE]->(appFolder:HiveFile {name: "Applications"})
						CREATE (parentFolder:HiveFile {id: $id, name: $parentPath, isFolder: true})
						CREATE (appFolder)-[:CONTAINS]->(parentFolder)
						CREATE (fs)-[:HAS_FILE]->(parentFolder)
						`, {
							org: context.user.organisation,
							id: nanoid(),
							parentPath: parts[1],
						})
					})
				}

				let child;

				const endPath =  await session.readTransaction(async (tx) => {
					const r = await tx.run(`
						MATCH (org:HiveOrganisation {id: $org})-[:HAS_FS]->(fs:FileSystem)-[:HAS_FILE]->(appFolder:HiveFile {name: "Applications"})
						MATCH (appFolder)-[:CONTAINS]->(:HiveFile {name: $parentPath})-[:CONTAINS]->(endPath:HiveFile {name: $childPath})
						RETURN endPath
					`, {
						org: context.user.organisation,
						parentPath: parts[1],
						childPath: parts[2]
					})
					return r.records?.map((x) => x.get(0).properties)
				})

				if(endPath.length == 0){
					const r = await session.writeTransaction(async (tx) => {
						const result = await tx.run(`
						MATCH (org:HiveOrganisation {id: $org})-[:HAS_FS]->(fs:FileSystem)-[:HAS_FILE]->(appFolder:HiveFile {name: "Applications"})
						MATCH (appFolder)-[:CONTAINS]->(parentFolder:HiveFile {name: $parentPath})
						CREATE (childFolder:HiveFile {id: $id, name: $childPath, isFolder: true})
						CREATE (parentFolder)-[:CONTAINS]->(childFolder)
						CREATE (fs)-[:HAS_FILE]->(childFolder)
						RETURN childFolder
						`, {
							org: context.user.organisation,
							id: nanoid(),
							parentPath: parts[1],
							childPath: parts[2]
						})
						return result.records?.map((x) => x.get(0).properties)
					})
					console.log(r)
					child = r[0]
				}else{
					console.log(endPath)
					child = endPath[0]
				}
				console.log("RESOLVE FS", child)
				return child;

			}
		},
		Mutation: {
			requestFlow: async (root: any, args: any, context: any) => {
				console.log(args)
				const device = await session.readTransaction(async (tx) => {

					const res = await tx.run(`
						MATCH (device:CommandDevice {id: $id})
						OPTIONAL MATCH (action:CommandProgramAction {id: $actionId})-->(flow:CommandProgramFlow)
						RETURN device{.*, action: flow{.*}}
					`, {
						id: args.deviceId,
						actionId: args.actionId
					})
					return res.records?.[0]?.get(0)
					// return await getDeviceActions(tx, args.deviceId, args.deviceName)
				
				})

				let action = device.action

				console.log(device, action)
				if(action){
					let actionRequest = {
						address: `opc.tcp://${device.network_name}.hexhive.io:8440`,
						deviceId: args.deviceId,
						flow: action.id
					}
					return await channel.sendToQueue(`COMMAND:FLOW:PRIORITIZE`, Buffer.from(JSON.stringify(actionRequest)))
				}
				// 	return await channel.sendToQueue(`COMMAND:DEVICE:CONTROL`, Buffer.from(JSON.stringify(actionRequest)))
				// }

				// console.log("DEVICE ACTION", device, args.action, action)

				// let stateChange = {
				// 	device: `opc.tcp://${device.network_name}.hexhive.io:8440`, //opc.tcp://${network_name}.hexhive.io:8440
				// 	busPath: `/Objects/1:Devices/1:${device.type.toUpperCase()}|${device.id}|${args.port}/1:value`, ///1:Objects/1:Devices/${TYPE|SERIAL|PORT}/${key}
				// 	value: args.value == '0' ? false : true //false
				// }

				// console.log("Sending state change", stateChange)
			
				// return await channel.sendToQueue(`COMMAND:DEVICE:CONTROL`, Buffer.from(JSON.stringify(stateChange)))
			},
			performDeviceAction: async (root: any, args: any, context: any) => {
				console.log(args)
				const device = await session.readTransaction(async (tx) => {

					return await getDeviceActions(tx, args.deviceId, args.deviceName)
					
					// const result = await tx.run(`
					// 	MATCH (hostDevice:CommandDevice)-->(peripheral:CommandDevicePeripheral)-[reality:PROVIDES_REALITY]->(device:CommandDevicePlaceholder {name: $name})
					// 	MATCH (map:CommandDevicePeripheralMap)-[:USES_DEVICE]->(device)
					// 	MATCH (map)-[:USES_STATE]->(state:CommandProgramDeviceState {key: $key})
					// 	MATCH (map)-[:USES_VARIABLE]->(variable)
					// 	RETURN device {
					// 		network_name: hostDevice.network_name,
					// 		type: peripheral.type,
					// 		id: peripheral.id,
					// 		valueKey: 
					// 	}
					// 	(device:CommandDevice {id: $id})-[:HAS_PERIPHERAL]->(bus:CommandDevicePeripheral {id: $peripheral})
					// 	RETURN device{
					// 		network_name: device.network_name,
					// 		type: bus.type,
					// 		id: bus.id
					// 	}
					// `, {
					// 	name: args.device,
					// 	key: args.key
					// })
					// return result?.records?.[0]?.get(0)
				})

				let action = device.actions?.find((a: any) => a.key == args.action)

				if(action){
					let actionRequest = {
						address: `opc.tcp://${device.network_name}.hexhive.io:8440`,
						deviceId: args.deviceId,
						deviceName: args.deviceName,
						action: action.key
					}

					return await channel.sendToQueue(`COMMAND:DEVICE:CONTROL`, Buffer.from(JSON.stringify(actionRequest)))
				}
				// console.log("DEVICE ACTION", device, args.action, action)

				// let stateChange = {
				// 	device: `opc.tcp://${device.network_name}.hexhive.io:8440`, //opc.tcp://${network_name}.hexhive.io:8440
				// 	busPath: `/Objects/1:Devices/1:${device.type.toUpperCase()}|${device.id}|${args.port}/1:value`, ///1:Objects/1:Devices/${TYPE|SERIAL|PORT}/${key}
				// 	value: args.value == '0' ? false : true //false
				// }

				// console.log("Sending state change", stateChange)
			
				// return await channel.sendToQueue(`COMMAND:DEVICE:CONTROL`, Buffer.from(JSON.stringify(stateChange)))
			},
			changeMode: async (root: any, args: {
				deviceId: string,
				mode: string
			}, context: any) => {

				const device = await session.readTransaction(async (tx) => {

					const res = await tx.run(`
						MATCH (device:CommandDevice {id: $id})
						RETURN device{.*}
					`, {
						id: args.deviceId
					})
					return res.records?.[0]?.get(0)
					// return await getDeviceActions(tx, args.deviceId, args.deviceName)
				
				})

				let actionRequest = {
					address: `opc.tcp://${device.network_name}.hexhive.io:8440`,
					deviceId: args.deviceId,
					mode: args.mode
				}

				await session.writeTransaction(async (tx) => {
					await tx.run(`
						MATCH (device:CommandDevice {id: $id})
						SET device.operatingMode = $mode
						RETURN device
					`, {
						id: args.deviceId,
						mode: args.mode
					})
				})

				return await channel.sendToQueue(`COMMAND:MODE`, Buffer.from(JSON.stringify(actionRequest)))
			},
			changeDeviceMode: async (root: any, args: {
				deviceId: string,
				deviceName: string,
				mode: string
			}, context: any) => {
				const device = await session.readTransaction(async (tx) => {

					return await getDeviceActions(tx, args.deviceId, args.deviceName)
				
				})

				let actionRequest = {
					address: `opc.tcp://${device.network_name}.hexhive.io:8440`,
					deviceId: args.deviceId,
					deviceName: args.deviceName,
					mode: args.mode
				}

				return await channel.sendToQueue(`COMMAND:DEVICE:MODE`, Buffer.from(JSON.stringify(actionRequest)))
			},
			changeDeviceValue: async (root: any, args: {
				deviceId: string, 
				deviceName: string, 
				key: string, 
				value: string
			}, context: any) => {
				
				
				const device = await session.readTransaction(async (tx) => {

					const result = await tx.run(`
						MATCH (device:CommandDevice {id: $id})
						RETURN device{
							.*
						}
					`, {
						id: args.deviceId,
					})
					return result?.records?.[0]?.get(0)
				})

				console.log(args.value)

				let stateChange = {
					address: `opc.tcp://${device.network_name}.hexhive.io:8440`, //opc.tcp://${network_name}.hexhive.io:8440
					busPath: `/Objects/1:Devices/1:${args.deviceName}/1:${args.key}`, ///1:Objects/1:Devices/${TYPE|SERIAL|PORT}/${key}
					value: args.value
				}

				console.log("Sending state change", stateChange)
			
				return await channel.sendToQueue(`COMMAND:DEVICE:VALUE`, Buffer.from(JSON.stringify(stateChange)))
			},
			updateHiveIntegrationInstanceState: async (root: any, args: any, context: any) => {
				let org = context.user.organisation;

				const result = await session.writeTransaction(async (tx) => {
					const r = await tx.run(`
						MATCH (org:HiveOrganisation {id: $org})-[:USES_INTEGRATION]->(inst:HiveIntegrationInstance {id: $id})\
						SET inst.isRunning = $state
						RETURN inst
					`, {
						org,
						id: args.id,
						state: args.state
					})
					return r.records.map((x) => x.get(0).properties)
				})
				return result !== undefined
			},
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
			// publishHiveTask: async (root: any, args: any) => {
			// 	const pipeline = await HiveProcess.find({where: {
			// 		id: args.id,
			// 	}, selectionSet: `
			// 		{
			// 			id
			// 			name
			// 			ports {
			// 				id
			// 				name
			// 				type
			// 				direction
			// 			}
			// 			task
			// 		}
			// 	`})
			// 	const task = pipeline[0]

			// 	let steps : string = task.task

			// 	task.ports.filter((a: any) => a.direction == "output").forEach((port: any) => {
			// 		const name = `\\[\\[outputs.${port.name}\\]\\]`

			// 		const regex = new RegExp(name, "g")
			// 		console.log(name, steps.match(regex))
			// 		steps = steps.replace(regex, `$(results.${port.id}.path)`)
			// 	})

			// 	task.ports.filter((a: any) => a.direction == "input").forEach((port: any) => {
			// 		const name = `\\[\\[inputs.${port.name}\\]\\]`

			// 		const regex = new RegExp(name, "g")
			// 		console.log(name, steps.match(regex))
			// 		if(port.type.toLowerCase() == "file"){
			// 			steps = steps.replace(regex, `"/workspace/${port.name}"`)
			// 		}else{
			// 			steps = steps.replace(regex, `$${getPortEnv(port.id)}`)
			// 		}
			// 	})

			// 	const definition = createTask(
			// 		task.id, 
			// 		steps, 
			// 		task.ports.filter((a: any) => a.direction == "input").map((x: any) => ({name: x.id, type: x.type})), 
			// 		task.ports.filter((a: any) => a.direction == "output").map((x: any) => ({name: x.id, key: x.name, type: x.type}))
			// 	)
			// 	console.log(definition)

			// 	await apply(definition)

			// 	return definition
			// },
			// publishHivePipeline: async (root: any, args: any, context: any) => {
			// 	const pipeline = await HivePipeline.find({where: {
			// 		id: args.id
			// 	}, selectionSet: `
			// 	{
			// 		id
			// 		name
			// 		inputs{
			// 			key
			// 			type
			// 		}
				   
			// 		nodes {
			// 			id
			// 			options
			// 			nextConnection {
			// 				edges {
			// 					source
			// 					target
			// 				}
			// 			}
			// 			callerConnection {
			// 				edges {
			// 					source
			// 					target
			// 				}
			// 			}
			// 			runner {
			// 				... on HiveProcess {
			// 					id
			// 					name
			// 					ports {
			// 						id
			// 						direction
			// 						type
			// 					}
			// 				}
			// 				... on HivePipelineTrigger {
			// 					produces { 
			// 						id
			// 					}
			// 				}
							
			// 			}
			// 		}
			// 	}`})              
			// 	console.log("Pipeline", pipeline[0].nodes)

			// 	// const nodes = pipeline[0]?.nodesConnection.edges;

			// 	const tasks = pipeline[0].nodes?.filter((a: any) => !a.runner?.produces).map((x: any) => {
			// 		const inputs = x.callerConnection.edges.map((conn: any) => {
			// 			const node = pipeline[0].nodes?.find((a: {runner: any}) => a.runner?.ports?.find((port: {id: string}) => port?.id == conn.source))
			// 			const target = x.runner?.ports?.find((a: {id: string}) => a?.id == conn.target)

			// 			return {source: node?.id, sourceHandle: conn.source, target: x.id, targetHandle: target?.id }
			// 		})
			// 		return {
			// 			id: x.id,
			// 			name: x.id,
			// 			task: x.runner?.id,
			// 			inputs: inputs.filter((a: any) => a.source)
			// 		}
			// 	})

			// 	const definition = createWorkflow(pipeline[0].id, tasks, [])
			// 	console.log(definition)

			// 	await apply(definition)

			// 	return definition
			// },
			// updateHivePipelines: async (root: any, args: any, context: any) => {
			// 	const hivePipeline =  await HivePipeline.update({where: args.where, update: args.update, rootValue: root, args, context})
			// 	const tasks = await HivePipeline.find({where: args.where, selectionSet: `{
			// 		nodes{
			// 			runner{
			// 				... on HiveProcess {
			// 					id
			// 					name
			// 				}

			// 				... on HivePipelineTrigger {
			// 					id
			// 					name
			// 				}
		
			// 			}
			// 		}
			// 	}`})
			// 	console.log(tasks[0].nodes)
			// 	if(args.update.nodes[0].create){
			// 		console.log("Create new container", args.update.nodes[0].create)

			// 		// const taskDefinition = await taskRegistry.formatTaskDefinition()
			// 		// const result = await taskRegistry.updateTask('TestTask', tasks[0].nodes.map((x: any) => ({
			// 		//     name: x.runner.id,
			// 		//     image: 'alpine:edge',
						
			// 		// })))
			// 	}
			// 	// console.log("Update Hive Pipeline", args.update, hivePipeline)
			// 	return hivePipeline
			// },
			// runWorkflow: async (root: any, args: {id: string, params: {key: string, type: string, urn: string}[]}) => {
			// 	const id = nanoid()

				
			// 	const workflow = await session.writeTransaction(async (tx) => {
			// 		const new_workflow = await tx.run(`
			// 			MATCH (pipeline:HivePipeline {id: $id})
			// 			CREATE (run:HivePipelineRun {id: $pipeline_id})
			// 			CREATE (run)-[:ACTIVE_PIPELINE]->(pipeline)
			// 			RETURN run
			// 		`, {
			// 			pipeline_id: id,
			// 			id: args.id
			// 		})

			// 		await Promise.all(args.params.map(async (param) => {
			// 			const new_resources = await tx.run(`
			// 				MATCH (run:HivePipelineRun {id: $id})
			// 				CREATE (res:HivePipelineResource {id: $res_id, key: $key, type: $type, urn: $urn})
			// 				CREATE (run)-[:USES]->(res)
			// 				RETURN res
			// 			`, {
			// 				id: id,
			// 				res_id: nanoid(),
			// 				key: param.key,
			// 				type: param.type,
			// 				urn: param.urn
			// 			})
			// 			return new_resources.records?.[0]?.get(0).properties
			// 		}))
			// 		return new_workflow.records?.[0].get(0).properties
			// 	})
			// 	const result = await event_producer.send({
			// 		topic: TOPIC,
			// 		messages: [
			// 			{value: JSON.stringify({
			// 				service: "Files",
			// 				id: id,
			// 				pipeline: args.id
			// 			})}
			// 		]
			// 	})
			// 	console.log("RESULT", result)
			// 	return workflow
			// },
			// convertFiles: async (root: any, args: {pipeline: string, files: string[]}, context: any) => {
			// 	const id = nanoid()
			// 	// const writeResult = await session.writeTransaction(async (tx) => {

			// 	//     const input_query = await tx.run(`
			// 	//         MATCH (pipeline:HivePipeline {id: $id})-[:CAN_USE]->(resource:HivePipelineResource)
			// 	//         RETURN resource
			// 	//     `)

			// 	//     const inputs = input_query.records.map((x) => x.get(0).properties)

			// 	//     const result = await tx.run(`
			// 	//     MATCH (pipeline:HivePipeline {id: $pipeline})
			// 	//     CREATE (process:HivePipelineRun {id: $id, createdAt: $date})
			// 	//     CREATE (process)-[:ACTIVE_PIPELINE]->(pipeline)
			// 	//     RETURN process
			// 	//     `, {
			// 	//         id: id,
			// 	//         pipeline: args.pipeline,
			// 	//         date: new Date().toISOString()
			// 	//     })

			// 	//     const process = result.records[0].get(0).properties
			// 	//     console.log("Process", process)

			// 	//     await Promise.all(args.files.map(async (file: string) => {
			// 	//         const result = await tx.run(`
			// 	//         MATCH (process:HivePipelineRun {id: $id})
			// 	//         MATCH (file:HiveFile {id: $file})
			// 	//         CREATE (res:HivePipelineResource {key: $key, urn: $urn})
			// 	//         CREATE (process)-[rel:USES]->(res)
			// 	//         RETURN rel
			// 	//         `, {
			// 	//             id: process.id,
			// 	//             file: file,
			// 	//             key: 
			// 	//         })
			// 	//         return result.records
			// 	//     }))
				

			// 	//     return process;
			// 	// })   

			// 	// const [info] = await HiveFileProcess.find({where: {id: id}, context})
			// 	// console.log(info)

			// 	// return info
			// }
		}
	}
	const neoSchema : Neo4jGraphQL = new Neo4jGraphQL({ typeDefs, resolvers,    driver })

	return neoSchema.schema
}
