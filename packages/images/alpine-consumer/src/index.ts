import { Kafka } from 'kafkajs';
import { nanoid } from 'nanoid';
import axios from 'axios'
import neo4j, {Session} from 'neo4j-driver'
const { WEBHOOK_URL, KAFKA_URL } = process.env;

if(!WEBHOOK_URL) throw new Error("No WEBHOOK_URL env provided")
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

const TOPIC = 'SPINE';

interface HiveEvent {
    id: string;
    token: string;

    appliance?: string; //Appliance ID
    routingKey?: string; //Appliance Event Key
    clientId?: string; //Client ID of message origin
    queuedAt: number;
    data?: {
        [key: string]: any
    }
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


    
    return await submitFileEvent({id: event.id, token: event.token, pipeline: result.id})

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

const submitFileEvent = async (event: {id: string, token: string, pipeline: string}) => {
    const r = await axios({
        method: "POST",
        url: `http://${WEBHOOK_URL}`,
        responseType: 'json',
        data: {
            event
        },
        headers: {
            "Content-Type": "application/json",
            "JobID": event.id,
            "Pipeline": event.pipeline,
            "Token": event.token
        }
    });
    return await r.data;
}

const main = async () => {
    // const producer = kafka.producer()

    // await producer.connect()

    // await producer.send({
    //     topic: TOPIC,
    //     messages: [
    //         {value: JSON.stringify({
    //             service: "Files",
    //             event: "convert_files",
    //             data: {
    //                 inputs: ["123"]
    //             }c
    //         })}
    //     ]
    // })

    const consumer = kafka.consumer({groupId: 'worker'})

    await consumer.connect()

    await consumer.subscribe({topic: TOPIC, fromBeginning: true})

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            let json = JSON.parse(message.value?.toString() || '{}')
            
            await parseEvent(json)

        }
    })

    // await consumer.disconnect()
    // await producer.disconnect()
}

main()