import { OGM } from '@neo4j/graphql-ogm'
import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import { FileStore } from '../de-file-store'

const upload = multer()

export default (ogm: OGM, fs: FileStore) => {
	const router = Router()
	
	const Campaign = ogm.model("Campaign")
	const CampaignAsset = ogm.model("CampaignAsset")

	router.get(`/:id/data`, async (req, res) => {
		const items = await fs.pull('QmTCresRk3i7t7WDETwNPwr7ZXbnLKBgLwRuAzVfsZgWNT')
		let results = [];

		if(!items) return res.send({error: "No node found"});

		for await (const item of items) {
			results.push(item)
		}
		console.log(items)
		res.send(Buffer.concat(results))
	})
	router.use('/:id/preview*', function (req, res, next) {
		// res.header("Content-Type",'text/html');
		next();
	});

	router.get('/:id/preview*', async (req, res) => {
		let campaignId = req.params.id

		let filePath = (req.params as any)?.['0'].length > 0 ? (req.params as any)?.['0'] : '/index.html'
		console.log(filePath)
		try{
			const result = await fs.readFile(campaignId, filePath)
			if(!result) res.send({error: "no file"})
			res.contentType(path.basename(filePath))
			res.send(result)
		}catch(e){
			res.send({error: e})
		}
	})


	router.route('/:id/assets')
		.post(upload.array('files'), async (req, res) => {
			//Add assets to campaign

			let files = (req as any).files as any[] || [];

			let paths = req.body.file_paths.split(', ')

			let directories = [...new Set(paths.map((x: string) => x.split('/').slice(0, -1)).reduce((a: string[], b: string[]) => a.concat(b), []))]
			directories = directories.slice(2, directories.length)

			paths = paths.map((path: string) => {
				let parts = path.split('/')
				parts.splice(0, 2)
				return `/${parts.join('/')}`
			})



			console.log(files)
			// await Promise.all(files.map(async (file) => {

			// const campaign = await Campaign.find({
			// 	where: {id: req.params.id},
			// 	selectionSet: `
			// 		{
			// 			id
			// 			name
			// 			assets {
			// 				id
			// 				path
			// 			}
			// 		}
			// 	`
			// })

			// const pathIndex = campaign?.[0]?.assets.map((x: any) => ({id: x.id, path: x.path}));

				await Promise.all(files.map(async (file, ix) => {
					await fs.writeFile(req.params.id, `${paths[ix]}`, file.buffer)

				}))

			const folderInfo = await fs.getFolderInfo(req.params.id)
				await Campaign.update({
					where: {id: req.params.id},
					update: {
						assetFolder: folderInfo?.cid?.toString()
					},
					selectionSet: `
					{
						campaigns {
							id
							assetFolder
						}
					}
					`
				})
			res.send({files})
				// await Campaign.update({
				// 	where: {id: req.params.id},
				// 	update: {
				// 		assets: [...files.filter((a) => pathIndex.map((x: any) => x.path).indexOf(a.path) > -1).map((file: any, ix) => ({
				// 			update: {
				// 				where: {node: {id: pathIndex.find((a: any) => a.path == file.path).id}},
				// 				node: {
				// 					name: file.originalname,
				// 					type: file.mimetype,
				// 					path: paths[ix],
				// 				}
				// 			}
				// 			})), {
				// 				create: files.filter((a) => pathIndex.find((b: any) => a.path == b.path) === undefined).map((file: any, ix) => ({
				// 					node: {
				// 						name: file.originalname,
				// 						type: file.mimetype,
				// 						path: paths[ix],
				// 					}
				// 				}))
				// 			}]
						
				// 	},
				
				// })
				// console.log(file)
			// }))
		})
		.get((req, res) => {
			//Get assets for campaign and zip them up
		})
	return router
}