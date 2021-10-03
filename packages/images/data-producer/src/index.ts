import { config } from 'dotenv'
config()
import { Kafka } from 'kafkajs';
import { nanoid } from 'nanoid';
import axios from 'axios'
import neo4j, {Session} from 'neo4j-driver'
import {MSSQLWorker} from '@hexhive/mssql-worker'
import { readFileSync } from 'fs';
const {  KAFKA_URL } = process.env;

if(!KAFKA_URL) throw new Error("No KAFKA_URL env specified")

const driver = neo4j.driver(
    process.env.NEO4J_URI || 'localhost',
    neo4j.auth.basic(process.env.NEO4J_USER || 'neo4j', process.env.NEO4J_PASSWORD || 'test')
);

const session = driver.session()

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [KAFKA_URL]
})

const TOPIC = 'DATA-IN-01';

interface HiveEvent {
    id: string;
    type: string;
    data: any;
    actions: "CREATE" | "UPDATE";
}

const parseEvent = async (event: HiveEvent) => {
    
    const result = await session.writeTransaction(async (tx) => {
        const pipeline_result = await tx.run(`
            MATCH (run:HivePipelineRun {id: $id})-[:ACTIVE_PIPELINE]->(pipeline)
            SET run.startedAt = $time
            RETURN pipeline
        `, {
            id: event.id,
            time: new Date().toISOString()
        })
        const pipeline = pipeline_result.records?.[0]?.get(0)?.properties


        return pipeline;
    })


    
    // return await submitFileEvent({id: event.id, pipeline: result.id})

    // switch(event.service){
    //     case 'Files':
    //         submitFileEvent(event).then((parsed) => {
    //             console.log("File Event", parsed)
    //         })
    //         break;
    //     default:
    //         break;
    // }
}


const main = async () => {
    const producer = kafka.producer()

    const task = JSON.parse(readFileSync('./task.json', 'utf8'))

    await producer.connect()

	const worker = new MSSQLWorker({
		server: process.env.SQL_SERVER || ``,
		user: process.env.SQL_USER,
		password: process.env.SQL_PASSWORD,
		database: process.env.SQL_DB,
		options: {
			trustServerCertificate: process.env.SQL_TRUST_CERT ? true : false
		}
	}, task)

	await worker.start()

    worker.on('NEW', async (event: any) => {
        await producer.send({
            topic: TOPIC,
            messages: [
                {
                    value: JSON.stringify({
                        action: 'CREATE',
                        data: event.value,
                        type: task.find((a: any) => a.family.cluster == event.id)?.type
                    })
                }
            ]
        })
        console.log("NEW", event)
    })

    worker.on('UPDATE', async (event: any) => {
        console.log("UPDATE", event)
        await producer.send({
            topic: TOPIC,
            messages: [
                {
                    value: JSON.stringify({
                        action: 'UPDATE',
                        id: event.valueId,
                        data: event.value,
                        type: task.find((a: any) => a.family.cluster == event.id)?.type
                    })
                }
            ]
        })
    })

    // await producer.send({
    //     topic: TOPIC,
    //     messages: [
    //         {value: JSON.stringify({
    //             service: "Files",
    //             event: "convert_files",
    //             data: {
    //                 inputs: ["123"]
    //             }
    //         })}
    //     ]
    // })

    
    // const consumer = kafka.consumer({groupId: 'data-worker'})

    // await consumer.connect()

    // await consumer.subscribe({topic: TOPIC, fromBeginning: true})

    // await consumer.run({
    //     eachMessage: async ({topic, partition, message}) => {
    //         let json = JSON.parse(message.value?.toString() || '{}')
            
    //         await parseEvent(json)

    //     }
    // })

    // await consumer.disconnect()
    // await producer.disconnect()
}

main()