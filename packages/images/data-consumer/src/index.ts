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

const TOPIC = 'LOADER-STREAM';

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

}

const stringToDate = (date: any) => {
    console.log(date)
    if(!date) return undefined;
    if(date instanceof Date){
        return date;
    }
    let parts = date.split('/')
    if(parts.indexOf('NaN') > -1){
        return undefined
    }
    if(parts.length === 3){
        return new Date(parts[2] + '-' + parts[1] + '-' + parts[0]).toISOString()
    }else{
        return new Date(date).toISOString()
    }
    
}

const main = async () => {

    const consumer = kafka.consumer({groupId: 'data-in-worker'})

    await consumer.connect()

    await consumer.subscribe({topic: TOPIC, fromBeginning: true})


    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            let json = JSON.parse(message.value?.toString() || '{}')

                switch(json.action){
                    case 'CREATE':
                        let create : any = {}
                        if(Array.isArray(json.data)){
                            json.data = json.data[0]
                        }
                        Object.keys(json.data).forEach((key) => {
                            if(json.data[key].type == "Date" || json.data[key].type == "Function"){
                                create[key] = stringToDate(json.data[key].value)
                            }else{
                                create[key] = json.data[key].value;
                            }
                        })

                        console.log(json)
                        let firstSet = Object.keys(json.data || {}).filter((a) => {
                            if(json.data[a].type == "Date" || json.data[a].type == "Function"){
                                return json.data[a].value && json.data[a].value.indexOf('NaN') <0
                            }
                            return json.data[a].value
                        }).map((key) => {
                            return `SET item.${key} = ${json.data[key]?.type == "Date" || json.data[key]?.type == "Function" ? `datetime($${key})` : `$${key}`}`;
                        }).join('\n')
    
                        let keyField = {[json.primaryKey]: json.data[json.primaryKey]}
                        console.log(keyField)

                        const items =  await session.run(`
                            MATCH (org:HiveOrganisation {id: $orgId})
                            MATCH (org)-[:HAS_${json.type.toUpperCase()}]->(item:${json.type} {${json.primaryKey}: $${json.primaryKey}})
                            ${firstSet}
                            RETURN item
                        `, {
                            orgId: process.env.ORG_ID,
                            ...keyField,
                            ...create
                        })
                        if(items.records.length < 1){

                            
                            let createSet = Object.keys(json.data).filter((a) => {
                                if(json.data[a].type == "Date" || json.data[a].type == "Function"){
                                    return json.data[a].value && json.data[a].value.indexOf('NaN') <0
                                }
                                return json.data[a].value
                            }).map((key) => {
                               return `${key}: ${json.data[key]?.type == "Date" || json.data[key]?.type == "Function" ? `datetime($${key})` : `$${key}`}`
                            }).join(', ')

                            await session.run(`
                                MATCH (org:HiveOrganisation {id: $orgId})
                                CREATE (item:${json.type} {${createSet}})
                                CREATE (org)-[:HAS_${json.type.toUpperCase()}]->(item)
                                RETURN item
                            `, {
                                orgId: process.env.ORG_ID,
                                ...create
                            })
                        }
                        break;
                    case 'UPDATE':
                    let update : any = {}
                    Object.keys(json.data).forEach((key) => {
                        if(json.data[key].type == "Date" || json.data[key].type == "Function"){
                            update[key] = stringToDate(json.data[key].value)
                        }else{
                            update[key] = json.data[key].value;
                        }                   
                     })

                    let set = Object.keys(json.data || {}).filter((a) => {
                        if(json.data[a].type == "Date" || json.data[a].type == "Function"){
                            return json.data[a].value && json.data[a].value.indexOf('NaN') <0
                        }
                        return json.data[a].value
                    }).map((key) => {
                        return `SET item.${key} = ${json.data[key]?.type == "Date" || json.data[key]?.type == "Function" ? `datetime($${key})` : `$${key}`}`;
                    }).join('\n')

                    console.log("Update Set", set)
                    if(set && set.length > 0){
                        await session.run(`
                            MATCH (org:HiveOrganisation {id: $orgId})
                            MATCH (item:${json.type} {id: $id})
                            ${set}
                            RETURN item
                        `, {
                            orgId: process.env.ORG_ID,
                            id: json.id,
                            ...update
                        })
                    }
                    break;
                }
            
        }

    
    })

}

main()