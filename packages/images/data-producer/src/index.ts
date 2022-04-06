import { config } from 'dotenv'
config()
import { nanoid } from 'nanoid';
import axios from 'axios'
import neo4j, {Session} from 'neo4j-driver'
import {MSSQLWorker, WorkerTask} from '@hexhive/mssql-worker'
import { readFileSync } from 'fs';
import { updateRecord } from './sync';

const TOPIC = 'LOADER-STREAM';

interface HiveEvent {
    id: string;
    type: string;
    primaryKey: string;
    data: any;
    actions: "CREATE" | "UPDATE";
}



const main = async () => {
    const driver = neo4j.driver(
        process.env.NEO4J_URI || 'localhost',
        neo4j.auth.basic(process.env.NEO4J_USER || 'neo4j', process.env.NEO4J_PASSWORD || 'test')
    );
    
    const session = driver.session()

    console.log('=> Data Collector starting...')

    const task = JSON.parse(readFileSync('./task.json', 'utf8'))

    console.log('=> Fetching initial state')
    const initialState = await session.readTransaction(async (tx) => {
        const r = await Promise.all<any[]>(task.map(async (t: WorkerTask) => {
            console.log(`Fetch => ${t.type}`)
            const r = await tx.run(`
                MATCH (org:HiveOrganisation {id: $orgId})-->(item:${t.type})
                RETURN item
            `, {
                orgId: process.env.ORG_ID
            })
            return {[t.family.cluster]: r.records.map((x) => {
                let props = x.get(0).properties

                let ret : any = {};

                t.collect.forEach((val: any) => {
                    ret[val.to] = props[val.to];
                    
                    switch (val.type){
                        case 'Date':
                            ret[val.to] = props[val.to].toString()
                            break;
                    }
                })

                return ret;
            })}
        }))
        console.log(`Fetched ${r.length} records`)
        return r.reduce<any>((prev, curr) => ({...prev, ...curr}), {})
    })

    console.log("Starting worker...")
	const worker = new MSSQLWorker({
		server: process.env.SQL_SERVER || ``,
		user: process.env.SQL_USER,
		password: process.env.SQL_PASSWORD,
		database: process.env.SQL_DB,
        // stream: true,
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

        await updateRecord({
            action: 'CREATE',
            data: createObject,
            primaryKey: new_task?.family.species,
            id: event.value[new_task?.family.species],
            type: new_task?.type
        })


        console.log("NEW", event)
    })

    worker.on('UPDATE', async (event: any) => {
        console.log("UPDATE", event)
    
        let t = task.find((a: any) => a.family.cluster == event.id)

        let updateObject : any = {}

        Object.keys(event.value).forEach((key) => {
            updateObject[key] = {
                type: t.collect.find((a: any) => a.to == key).type,
                value: event.value[key]?.[1]
            }
        })

        await updateRecord({
            action: 'UPDATE',
            id: event.valueId,
            data: updateObject,
            primaryKey: t?.family.sepcies,
            type: task.find((a: any) => a.family.cluster == event.id)?.type
        })

    })
}

main()