import { config } from 'dotenv'

config();
import { connect_data } from '@hexhive/types'
import neo4j from 'neo4j-driver'
import { MongoClient } from 'mongodb'
import { nanoid } from 'nanoid';
import { ScheduleItem } from '@hexhive/types';

const driver = neo4j.driver(
    process.env.NEO4J_URI || 'localhost',
    neo4j.auth.basic(process.env.NEO4J_USER || 'neo4j', process.env.NEO4J_PASSWORD || 'test')
);

const session = driver.session()


async function run () {
	await connect_data()

	const items  = await ScheduleItem.find({organisation: '6109254ac84bdb80e6b027e0'})
	// console.log(items.find((a: any) => a.managers.length > 0))
	// const items = await db.collection('timelineitems').find({timeline: "Projects"}).toArray()

	await session.writeTransaction(async (tx) => {
		await Promise.all(items.map(async (item: any) => {
			let new_item: any = {
				date: item.date.toISOString(),
				notes: item.notes
			}

			let new_item_text = Object.keys(new_item).filter((a: string) => new_item[a]).map((x) => `${x}: $${x}`).join(', ')

			await tx.run(`
				MATCH (org:HiveOrganisation {id: "6109254ac84bdb80e6b027e0"})-[:HAS_PROJECT]->(project:Project {id: $projectId})
				CREATE (plan:ScheduleItem {id: $id, ${new_item_text}})
				CREATE (plan)-[:SCHEDULE_PROJECT]->(project)
				CREATE (org)-[:SCHEDULE]->(plan)
			`, {
				id: item._id.toString(),
				userId: item.owner,
				projectId: `${item.project}`,
				...new_item
			})

			if(item.owner){
				await tx.run(`
				MATCH (user:HiveUser {id: $userId})
				MATCH (plan:ScheduleItem {id: $planId})
				CREATE (user)-[:CREATED]->(plan)

				`, {
					planId: item._id.toString(),
					userId: `${item.owner}`
				})
			}
			console.log("Made plan")
			
			await Promise.all(item.managers.map(async (subItem: any) => {
				
				await tx.run(`
					MATCH (plan:ScheduleItem {id: $id})
					MATCH (user:HiveUser {id: $personId})
					CREATE (user)-[:MANAGING]->(plan)
				`, {
					id: item._id.toString(),
					personId: `${subItem}`,
				})
			}))

			await Promise.all(item.people.map(async (subItem: any) => {
				
				await tx.run(`
					MATCH (plan:ScheduleItem {id: $id})
					MATCH (person:People {id: $personId})
					CREATE (plan)-[:SCHEDULE_PEOPLE]->(person)
				`, {
					id: item._id.toString(),
					personId: `${subItem}`,
				})
			}))

			await Promise.all(item.equipment.map(async (subItem: any) => {
				await tx.run(`
					MATCH (plan:ScheduleItem {id: $id})
					MATCH (equipment:Equipment {id: $equipmentId})
					CREATE (plan)-[:SCHEDULE_EQUIPMENT]->(equipment)
				`, {
					id: item._id.toString(),
					equipmentId: subItem,
				})
			}))
		}))
	})
}

run()