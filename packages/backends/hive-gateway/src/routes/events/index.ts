import { Router } from "express"
import { HiveMQ } from "@hexhive/mq"
import { Session } from "neo4j-driver"
import { nanoid } from "nanoid"
import { addStepResult, createPipelineRun, getPipelinesByTrigger, getPipelineTriggers } from "../../queries/pipeline"
import { HiveTriggerEvent } from "core/hexhive-events/src/types"
import { pipeline } from "stream"
import jwt from 'jsonwebtoken'

const apiKeyAuth = require("api-key-auth")


export default (neo: Session) => {
	const router = Router()

	const mq = new HiveMQ({
		clientId: "hive-gateway",
		brokers: [process.env.KAFKA_URL || ""]
	})

	const getSecret = async (keyId: string, done: (err: Error | null, secret?: string, result?: any) => void) => {
		const result = await neo.readTransaction(async (tx) => {
			return await tx.run(`
          MATCH (key:APIKey {key: $key})
          RETURN key
        `, {
				key: keyId
			})
		})

		const key = result.records?.[0]?.get(0)?.properties
		if (!key) {
			return done(new Error("Unknown api key"))
		}
		const clientApp = key
		done(null, clientApp.secret, {
			id: clientApp.id,
			name: clientApp.name
		})
	}
    

	mq.connect().then(() => {
		console.log("Broker is live")

		router.use(apiKeyAuth({ getSecret }))

		//Routes
		router.route("/:TOPIC")
			.post(async (req, res) => {
				let message_template : HiveTriggerEvent = {
					appliance: (req as any).credentials.id,
					routingKey: req.params.TOPIC, 
					queuedAt: Date.now(),
					data: req.body
				}

				console.log(JSON.stringify(req.body.file))

				const runs = await neo.writeTransaction(async (tx) => {

					const trigger = await getPipelineTriggers(tx, req.params.TOPIC, (req as any).credentials.id)

					const pipeline_result = await Promise.all(trigger.map(async (trig) => {
						const pipe = await getPipelinesByTrigger(tx, trig.id)
						return pipe.map((x) => ({
							...x
						}))
					}))

					const pipelines = pipeline_result.reduce<any[]>((prev, curr) => {
						return prev.concat(curr)
					}, [])

					console.log("Found pipelines", pipelines, req.headers)
					return await Promise.all(pipelines.map(async (pipeline) => {
						const run_id = await createPipelineRun(tx, pipeline.id, req.body)

						//Add token

						let token = jwt.sign({
							sub: run_id,
							organisation: req.headers.organisation,
							iss: process.env.AUTH_SERVER || "auth.hexhive.io",
							aud:  new URL(process.env.UI_URL || "https://next.hexhive.io/dashboard").host
						}, 'secret')
				

						await addStepResult(tx, run_id, pipeline.trigger, req.body)

						console.log("Created run", run_id)
						return Object.assign({
							id: run_id,
							token: token,
						}, message_template)
					}))
		
				})

				
				//req.params.TOPIC
				//Simple Programming Interface Near Edge

				let results = await Promise.all(runs.map(async (run) => {
					const result = await mq.emitEvent("SPINE", run)
					return result
				}))

				console.log("SPINE", results)
				res.send({results})
			})


	})

 

	return router
}