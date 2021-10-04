import { config } from 'dotenv'
config()
import { Kafka } from 'kafkajs';
import { nanoid } from 'nanoid';
import axios from 'axios'
import neo4j, {Session} from 'neo4j-driver'
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

    const consumer = kafka.consumer({groupId: 'data-in-worker'})

    await consumer.connect()

    await consumer.subscribe({topic: TOPIC, fromBeginning: true})


    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            let json = JSON.parse(message.value?.toString() || '{}')

                switch(json.action){
                    case 'CREATE':
                        const items =  await session.run(`
                            MATCH (org:HiveOrganisation {id: "6109254ac84bdb80e6b027e0"})
                            MATCH (org)-[:HAS_${json.type.toUpperCase()}]->(item:${json.type} {${json.primaryKey}: $${json.primaryKey}})
                            ${Object.keys(json.data[0]).map((key) => `SET item.${key} = $${key}`).join('\n')}
                            RETURN item
                        `, {
                            [json.primaryKey]: json.id,
                            ...json.data[0]
                        })
                        if(items.records.length < 1){

                        

                        await session.run(`
                            MATCH (org:HiveOrganisation {id: "6109254ac84bdb80e6b027e0"})
                            CREATE (item:${json.type} {${Object.keys(json.data[0]).map((key) => `${key}: $${key}`).join(', ')}})
                            CREATE (org)-[:HAS_${json.type.toUpperCase()}]->(item)
                        `, {
                            ...json.data[0]
                        })
                    }
                        break;
                    case 'UPDATE':
                    console.log("UPDATE", json)  
                    await session.run(`
                        MATCH (org:HiveOrganisation {id: "6109254ac84bdb80e6b027e0"})
                        MATCH (item:${json.type} {id: $id})
                        ${Object.keys(json.data[0]).map((key) => `SET item.${key} = $${key}`).join('\n')}
                    `, {
                        id: json.id,
                        ...json.data[0]
                    })
                    break;
                }
            
                
            console.log(json)
            // await parseEvent(json)

        }

    
    })

    // await consumer.disconnect()
    // await producer.disconnect()
}

main()