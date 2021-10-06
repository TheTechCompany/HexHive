import { config } from 'dotenv'
config()
import { Kafka } from 'kafkajs';
import { nanoid } from 'nanoid';
import axios from 'axios'
import neo4j, {Session} from 'neo4j-driver'
import {MSSQLWorker} from '@hexhive/mssql-worker'
import { readFileSync } from 'fs';
import { WorkerTask } from '@hexhive/mssql-worker';
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

const TOPIC = 'LOAD-STREAM-IN';

interface HiveEvent {
    id: string;
    type: string;
    primaryKey: string;
    data: any;
    actions: "CREATE" | "UPDATE";
}

const parseEvent = async (event: HiveEvent) => {
    


    
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

    const initialState = await session.readTransaction(async (tx) => {
        const r = await Promise.all<any[]>(task.map(async (t: WorkerTask) => {
            const r = await tx.run(`
                MATCH (org:HiveOrganisation {id: $orgId})-[*]->(item:${t.type})
                RETURN item
            `, {
                orgId: process.env.ORG_ID
            })
            return {[t.family.cluster]: r.records.map((x) => {
                let props = x.get(0).properties

                t.collect.forEach((val) => {
                    switch (val.type){
                        case 'Date':
                            props[val.to] = props[val.to].toString()
                            break;
                    }
                })
                return props;
            })}
        }))
        return r.reduce<any>((prev, curr) => ({...prev, ...curr}), {})
    })


	const worker = new MSSQLWorker({
		server: process.env.SQL_SERVER || ``,
		user: process.env.SQL_USER,
		password: process.env.SQL_PASSWORD,
		database: process.env.SQL_DB,
        stream: true,
		options: {
			trustServerCertificate: process.env.SQL_TRUST_CERT ? true : false
		}
	}, task, initialState)

	await worker.start()

    worker.on('NEW', async (event: any) => {
        console.log("NEW EVENT", event)
        const new_task = task.find((a: any) => a.family.cluster == event.id)

        let createObject : any = {}

        Object.keys(event.value[0]).forEach((key) => {
            createObject[key] = {
                type: new_task.collect.find((a: any) => a.to == key).type,
                value: event.value[0][key]
            }
        })

        await producer.send({
            topic: TOPIC,
            messages: [
                {
                    value: JSON.stringify({
                        action: 'CREATE',
                        data: createObject,
                        primaryKey: new_task?.family.species,
                        id: event.value[new_task?.family.species],
                        type: new_task?.type
                    })
                }
            ]
        })


        console.log("NEW", event)
    })

    worker.on('UPDATE', async (event: any) => {
        // console.log("UPDATE", event)
    
        let t = task.find((a: any) => a.family.cluster == event.id)

        let updateObject : any = {}

        Object.keys(event.value).forEach((key) => {
            updateObject[key] = {
                type: t.collect.find((a: any) => a.to == key).type,
                value: event.value[key]?.[1]
            }
        })

        await producer.send({
            topic: TOPIC,
            messages: [
                {
                    value: JSON.stringify({
                        action: 'UPDATE',
                        id: event.valueId,
                        data: updateObject,
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