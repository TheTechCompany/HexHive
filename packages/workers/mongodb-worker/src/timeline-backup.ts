import { config } from 'dotenv'

config();
import { connect_data } from '@hexhive/types'
import neo4j from 'neo4j-driver'
import { MongoClient } from 'mongodb'
import { nanoid } from 'nanoid';
import { TimelineItem } from '@hexhive/types/src/models/timeline';

const driver = neo4j.driver(
    process.env.NEO4J_URI || 'localhost',
    neo4j.auth.basic(process.env.NEO4J_USER || 'neo4j', process.env.NEO4J_PASSWORD || 'test')
);

const session = driver.session()


async function run () {
	await connect_data()

	const items  = await TimelineItem.find()
	console.log(items)
	// const items = await db.collection('timelineitems').find({timeline: "Projects"}).toArray()

	await session.writeTransaction(async (tx) => {
		await Promise.all(items.map(async (item: any) => {
			let new_item: any = {
				timeline: item.timeline,
				startDate: item.startDate.toISOString(),
				endDate: item.endDate.toISOString(),
				notes: item.notes
			}

			let new_item_text = Object.keys(new_item).filter((a: string) => new_item[a]).map((x) => `${x}: $${x}`).join(', ')
			if(!item.project.id) return console.error(item)
			await tx.run(`
				MATCH (project:Project {id: $projectId})
				CREATE (plan:TimelineItem {id: $id, ${new_item_text}})
				CREATE (plan)-[:PLANNING]->(project)
			`, {
				projectId: item.project.id,
				id: item._id.toString(),
				...new_item
			})

			await Promise.all(item.items.map(async (subItem: any) => {
				let plan : any = {
					type: subItem.type,
					location: subItem.location,
					estimate: subItem.estimate 
				}
				let plan_text = Object.keys(plan).filter((a: string) => plan[a]).map((x) => `${x}: $${x}`).join(', ')

				await tx.run(`
					MATCH (plan:TimelineItem {id: $id})
					CREATE (item:TimelineItemItems {id: $itemId ${plan_text ? `, ${plan_text}` : ''}})
					CREATE (plan)-[:PROJECTED]->(item)
				`, {
					id: item._id.toString(),
					itemId: nanoid(),
					...plan
				})
			}))
		}))
	})
	console.log(items)
}

run()