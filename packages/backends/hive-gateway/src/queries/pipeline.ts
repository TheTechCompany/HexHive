import { connection } from "mongoose";
import { nanoid } from "nanoid";
import { Transaction } from "neo4j-driver";
import { x } from "tar";


export const addStepResult = async (tx: Transaction, runId: string, stepId: string, results: {[key: string]: {properties: {id?: string}, type: string}[]}) => {
	const id = nanoid();
	const step_result = await tx.run(`
		MATCH (run:HivePipelineRun {id: $runId})
		CREATE (result:HivePipelineStepResult {id: $id, step: $stepId})
		CREATE (result)-[:ACTIVE_RUN]->(run)
		RETURN result
	`, {
		id: id,
		runId,
		stepId
	})

	let resource_queries : any[] = [];

	Object.keys(results).map((key) => {
		resource_queries.concat(results[key].map(async (resource) => {
			const res = await tx.run(`
				MATCH (step:HivePipelineStepResult {id: $id})
				MATCH (resource:${resource.type} {id: $res_id})
				CREATE (step)-[:PROVIDED {key: $key}]->(resource)
				RETURN resource 
			`, {
				id: id,
				res_id: resource.properties.id,
				key
			})
			return res.records.map((x) => x.get(0).properties)
		}))
	})
	

	return step_result.records.map((x) => x.get(0))
}

export const getPipelineTriggers = async (tx: Transaction, routingKey: string, applianceId: string) => {
	const trigger_result = await tx.run(`
		MATCH (trigger:HivePipelineTrigger {routingKey: $routingKey, appliance: $appliance})
		RETURN trigger
	`, {
		routingKey,
		appliance: applianceId
	})

	return trigger_result.records.map((x) => x.get(0).properties)
}

export const getPipelineResources = async (tx: Transaction, runId: string) => {
	const file_result = await tx.run(`
		MATCH (:HivePipelineRun {id: $run_id})-[ref:USES]->(resources)
		RETURN resources, ref
	`, {
		run_id: runId
	})

	return file_result.records.map((x) => {
		let res = x.get(0).properties
		let key = x.get(1)
		return {
			...res,
			key: key.properties.key,
		}
	})
}

export const getPipelineArtifacts = async (tx: Transaction, runId: string, stepId: string) => {
	console.log("Get pipeline artifacts", runId, stepId)
	const step_results = await tx.run(`
		MATCH (result:HivePipelineStepResult {step: $step})-[:ACTIVE_RUN]->(:HivePipelineRun {id: $run})
		MATCH (result)-[ref:PROVIDED]->(artifacts)
		RETURN artifacts{.*, key: ref.key}
	`, {
		step: stepId,
		run: runId
	})

	return step_results.records.map((x) => x.get(0))
}

export const getNodeConnections = async (tx: Transaction, pipelineId: string, nodeId: string) => {
		const connection_result = await tx.run(`
                    MATCH (:HivePipeline {id: $pipeline})-[:HAS_NODE]->(current:HivePipelineNode {id: $step_id})
                    MATCH (current)<-[rel:RUN_NEXT]-(previous:HivePipelineNode)
                    RETURN rel{ 
						.*,
						source: previous.id,
						sourceHandle: rel.source,
						targetHandle: rel.target,
						target: current.id
					}
                `, {
						pipeline: pipelineId,
						step_id: nodeId
				})


				const current_ports = await tx.run(`
					MATCH (:HivePipeline {id: $pipeline})-[:HAS_NODE]->(current:HivePipelineNode {id: $step_id})
					MATCH (current)-[:USES_TASK]->()-[:HAS_PORT]->(port:HiveProcessPort {direction: "input"})
					WITH port
					RETURN port
				`, {
						pipeline: pipelineId,
						step_id: nodeId
				})


				const ports = await tx.run(`
                    MATCH (:HivePipeline {id: $pipeline})-[:HAS_NODE]->(current:HivePipelineNode {id: $step_id})
                    MATCH (current)<-[:RUN_NEXT]-(previous:HivePipelineNode)
                    MATCH (previous)-[:USES_TASK]->()-[:HAS_PORT]->(port:HiveProcessPort {direction: "output"})
                    WITH port
                    RETURN port
                `, {
						pipeline: pipelineId,
						step_id: nodeId
					})

		let conn = connection_result.records.map((x) => x.get(0))
		console.log("CONNNN", conn)
		return {
			previous: ports.records.map((x) => x.get(0).properties),
			current: current_ports.records.map((x) => x.get(0).properties),
			connections: conn,
		}
}

export const getPipelineOrigins = async (tx: Transaction, pipelineId: string) => { 
		//Use {id: $node_id} as a filter on HivePipelineNode for boolean check

	const origin_result	= await tx.run(`
		MATCH (:HivePipeline {id: $id})-[:HAS_NODE]->(node:HivePipelineNode )
		WHERE NOT ()-[:RUN_NEXT]->(node)
		RETURN node
	`, {
		id: pipelineId
	})

	return origin_result.records?.map((x) => x.get(0).properties)
}


export const getActivePipeline = async (tx: Transaction, runId: string) : Promise<{
	id: string,
	name: string
} | undefined> => {
	const pipeline_result =  await tx.run(`
		MATCH (:HivePipelineRun {id: $run_id})-[:ACTIVE_PIPELINE]->(pipeline:HivePipeline)
		RETURN pipeline
	` , {run_id: runId})

	const pipeline = pipeline_result.records?.[0]?.get(0).properties
	return pipeline
}

export const createPipelineRun = async (tx: Transaction, pipeline: string) => {

// 	const param_query = await tx.run(`
// 		MATCH (:HivePipeline {id: $id})-[:CAN_USE]->(resources:HivePipelineResource)
// 		RETURN resources
// 	`, {
// 		id: pipeline
// 	})

// 	const input_params = param_query.records.map((x) => x.get(0).properties)

// //Param = {type, key, urn?}

// 	const parameters = input_params.map((x) => ({key: x.key, urn: `ipfs://${params[x.key]}`}))

	const run_id = nanoid()

	const run = await tx.run(`
		MATCH (pipeline:HivePipeline {id: $id})
		CREATE (run:HivePipelineRun {id: $run_id})
		CREATE (run)-[:ACTIVE_PIPELINE]->(pipeline)
		RETURN run
	`, {
		id: pipeline,
		run_id
	})
	// //TODO make params not just files - CID only for now

	// let resource_queries : any = [];

	// Object.keys(resources).map((key) => {
	// 	resource_queries.concat(resources[key].map(async (resource) => {
	// 		const res = await tx.run(`
	// 			MATCH (pipeline:HivePipelineRun {id: $id})
	// 			MATCH (resource:${resource.type} {id: $res_id})
	// 			CREATE (pipeline)-[:USES {key: $key}]->(resource)
	// 		`, {
	// 			id: run_id,
	// 			res_id: resource.properties.id,
	// 			key
	// 		})
	// 		return res.records.map((x) => x.get(0).properties)
	// 	}))
	// })
	// await Promise.all(resource_queries)
	return run_id
}

//TODO add org flags for auth
export const getPipelinesByTrigger = async (tx: Transaction, triggerId: string) => {

	const pipelines = await tx.run(`
		MATCH (pipelines:HivePipeline)-[:HAS_NODE]->(node:HivePipelineNode)-[:USES_TASK]->(:HivePipelineTrigger {id: $id})
		RETURN pipelines {
			.*,
			trigger: node.id
		}
	`, {
		id: triggerId
	})

	return pipelines.records.map((x) => x.get(0))
}