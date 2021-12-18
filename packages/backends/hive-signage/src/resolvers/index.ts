import { FileStore } from "../de-file-store"
import { Pool } from 'pg';

export default async (fs: FileStore, pool: Pool) => {

	const client = await pool.connect()

	return {
		Campaign: {
			interactions: async (root: any) => {
				const res=  await client.query(
					`SELECT COUNT(*) as interactions FROM green_screen_telemetry WHERE event=$1 AND source = $2 `, 
					['campaign-interaction', `asset://${root.assetFolder}`])
				return res.rows?.[0]?.interactions || 0
			},
			interactionTimeline: async (root: any) => {
				const res=  await client.query(
					`with data as (
						select 
						coalesce (COUNT(*), 0) as cnt,
						time_bucket_gapfill('30 minutes', "timestamp") as time 
						from green_screen_telemetry 
						where "event"=$1 AND source=$2 and 
						"timestamp" < now() and "timestamp" > now() - interval '3 week'
						group by time
					)
					select time, SUM(cnt) over (order by time) as interactions from data`,
					// `SELECT "timestamp" as time, SUM(COUNT(*)) OVER(ORDER BY "timestamp") as interactions FROM  green_screen_telemetry WHERE event=$1 AND source=$2 group by "timestamp"`, 
					['campaign-interaction', `asset://${root.assetFolder}`])
				return res.rows
			},
			views: async (root: any) => {
				const res=  await client.query(
					`SELECT COUNT(*) as views FROM green_screen_telemetry WHERE event=$1 AND (properties -> 'id')::text = $2 `, 
					['campaign-play', `"${root.assetFolder}"`])

				console.log(res)
				return res.rows?.[0]?.views || 0
			},
			assets: async (root: any, ) => {
				console.log(root)
				try{
					return await fs.lsAsset(root.id)

				}catch(e){
					return []
				}
			}
		}	
	}
}