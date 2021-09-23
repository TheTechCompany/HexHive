
import { Router } from "express"
import { PassThrough } from "stream"

import multer from "multer"
import { addFileToJob } from "./util"
import jwt from "jsonwebtoken"
import { FileManager } from "../files/util"
import { requiresAuth } from "express-openid-connect"
import { Driver, Result, Session } from "neo4j-driver"
import { result } from "lodash"
import { nanoid } from "nanoid"
import { TaskRegistry } from "../../task-registry"
import { createWriteStream, mkdirSync, rmdirSync, rmSync, writeFileSync } from "fs"
import glob from "glob"

const upload = multer()

const router = Router()

export default (neo: Session, fileManager: FileManager, taskRegistry: TaskRegistry) => {

	router.route("/run")
		.post(async (req, res) => {
			const {pipeline, params} = req.body
			await neo.writeTransaction(async (tx) => {
				const param_query = await tx.run(`
                    MATCH (:HivePipeline {id: $id})-[:CAN_USE]->(resources:HivePipelineResource)
                    RETURN resources
                `, {
					id: pipeline
				})

				const input_params = param_query.records.map((x) => x.get(0).properties)

				//Param = {type, key, urn?}

				const parameters = input_params.map((x) => ({key: x.key, urn: `ipfs://${params[x.key]}`}))

				const run_id = nanoid()

				const run = await tx.run(`
                    MATCH (pipeline:HivePipeline {id: $id})
                    CREATE (run:HivePipelineRun {id: $run_id})
                    CREATE (run)-[:ACTIVE_PIPELINE]->(pipeline)
                    RETURN run
                `, {
					id: pipeline,
					run_id
				})
				//TODO make params not just files - CID only for now
				const resources = await Promise.all(parameters.map(async (param) => {
					const res = await tx.run(`
                        MATCH (pipeline:HivePipelineRun {id: $id})
                        CREATE (resource:HivePipelineResource {key: $key, urn: $urn})
                        CREATE (pipeline)-[:USES]->(resource)
                    `, {
						id: run_id,
						key: param.key,
						urn: param.urn
					})
					return res.records.map((x) => x.get(0).properties)
				}))

				res.send({resources, run})
                

			})
		})
	router.route("/:run_id/:step_id/next")
		.get(async (req, res) => {

			const result = await neo.readTransaction(async (tx) => {
           
				const connections = await tx.run(`
                    MATCH (:HivePipelineRun {id: $run_id})-[:ACTIVE_PIPELINE]->(pipeline:HivePipeline)
                    MATCH (pipeline)-[:HAS_NODE]->(current:HivePipelineNode {id: $step_id})
                    MATCH (current)-[rel:RUN_NEXT]->(next:HivePipelineNode)
                    RETURN next
                `, {
					run_id: req.params.run_id,
					step_id: req.params.step_id
				})
				return connections.records.map((x) => x.get(0).properties)

			})
			res.send({result})
		})
	//TODO add HivePipelineRun
	//Tarball resources for step in pipeline
	/*
    Resources:
        mapped outputs from past step ()-[rel:RUN_NEXT]->(current)
        rel.target, source, sourceHandle
    */
	router.route("/:run_id/:step_id")
		.post(upload.array("files"), async (req, res) => {
			console.log("Files", req.files)

			const files : Express.Multer.File[] = (req.files instanceof Array ) ? req.files : []
            
			const uploaded_files = await Promise.all(files.map(async (file) => {
				// const buff = readFileSync(file)
				const result = await fileManager.add(file.buffer)
				return {
					cid: result.path,
					name: file.originalname
				}
			}))

			console.log(uploaded_files)
			const result = await neo.writeTransaction(async (tx) => {
				const id = nanoid()
				const r = await tx.run(`
                    MATCH (run:HivePipelineRun {id: $run_id})
                    CREATE (result:HivePipelineStepResult {id: $new_id, step: $new_step})
                    CREATE (result)-[:ACTIVE_RUN]->(run)
                    RETURN result
                `, {
					run_id: req.params.run_id,
					new_id: id,
					new_step: req.params.step_id
				})

				const files_fn = (uploaded_files || []).map(async (file) => {
					const r = await tx.run(`
                        MATCH (result:HivePipelineStepResult {id: $id})
                        CREATE (resource:HivePipelineResource {key: $filename, urn: $urn})
                        CREATE (result)-[:PROVIDED]->(resource)
                    `, {
						id,
						filename: file.name,
						urn: `ipfs://${file.cid}`
					})
				})


				const files_response = await Promise.all(files_fn)
        

				return r.records.map((x) => x.get(0).properties)
			})
			res.send({result})
            
		})
		.get(async (req, res) => {
			/*
                Get resources for step in workflow

                HivePipelineRun->ACTIVE_PIPELINE->(HivePipeline)
                (HivePipeline)->HAS_NODE->(HivePipelineNode)
                (HivePipelineNode)->RUN_NEXT->(HivePipelineNode)
                (HivePipelineNode)->USES_TASK->(HiveProcess)->HAS_PORT->(HiveProcessPort)

                Options
                1. Node is a trigger, no previous nodes all data is direct from job uses
                2. Node ia stage, previous nodes artifacts are made available based on mapping
                    If a connection hasn't been made don't download the file
            */
			const pipelines = await neo.readTransaction(async (tx) => {
				const pipeline_result =  await tx.run(`
                MATCH (:HivePipelineRun {id: $run_id})-[:ACTIVE_PIPELINE]->(pipeline:HivePipeline)
                RETURN pipeline
            ` , {run_id: req.params.run_id, step_id: req.params.step_id})
				const pipeline = pipeline_result.records?.[0]?.get(0).properties


				const start = await tx.run(`
                    MATCH (:HivePipeline {id: $id})-[:HAS_NODE]->(node:HivePipelineNode {id: $node_id})
                    WHERE NOT ()-[:RUN_NEXT]->(node)
                    RETURN node
                `, {
					id: pipeline.id,
					node_id: req.params.step_id
				})

				const start_node = start.records.length > 0

				let files : any[] = []

				if(start_node){

					const file_result = await tx.run(`
                    MATCH (:HivePipelineRun {id: $run_id})-[:USES]->(resources:HivePipelineResource)
                    RETURN resources
                    `, {
						run_id: req.params.run_id
					})
					files = file_result.records.map((x) => x.get(0).properties)
				}else{
					const file_result = await tx.run(`
                    MATCH (:HivePipelineRun {id: $run_id})-[:ACTIVE_PIPELINE]->(pipeline:HivePipeline)
                    MATCH (pipeline)-[:HAS_NODE]->(current:HivePipelineNode {id: $step_id})
                    MATCH (current)<-[rel:RUN_NEXT]-(previous:HivePipelineNode)

                    MATCH (results:HivePipelineStepResult {step: previous.id})-[:ACTIVE_RUN]->(:HivePipelineRun {id: $run_id})
                    MATCH (results)-[:PROVIDED]->(files:HivePipelineResource)
                    RETURN files
                `, {
						step_id: req.params.step_id,
						run_id: req.params.run_id
					})

					files = file_result.records.map((x) => x.get(0).properties)


					const connection_result = await tx.run(`
                    MATCH (:HivePipeline {id: $pipeline})-[:HAS_NODE]->(current:HivePipelineNode {id: $step_id})
                    MATCH (current)<-[rel:RUN_NEXT]-(previous:HivePipelineNode)
                    RETURN rel
                `, {
						pipeline: pipeline.id,
						step_id: req.params.step_id
					})

					const ports = await tx.run(`
                    MATCH (:HivePipeline {id: $pipeline})-[:HAS_NODE]->(current:HivePipelineNode {id: $step_id})
                    MATCH (current)<-[:RUN_NEXT]-(previous:HivePipelineNode)
                    MATCH (previous)-[:USES_TASK]->()-[:HAS_PORT]->(port:HiveProcessPort {direction: "output"})
                    WITH port
                    RETURN port
                `, {
						pipeline: pipeline.id,
						step_id: req.params.step_id
					})



					// const current_inputs = await tx.run(`
					//     MATCH (:HivePipeline {id: $pipeline})-[:HAS_NODE]->(current:HivePipelineNode {id: $step_id})
					//     MATCH (current)-[:USES_TASK]->()-[:HAS_PORT]->(port:HiveProcessPort {direction: "input"})
					//     WITH port
					//     RETURN port
					// `, {
					//     pipeline: pipeline.id,
					//     step_id: req.params.step_id
					// })



				}
            


                

				// map((x) => x.get(0))
				// const current_ports = results.records?.[0]?.get('current_ports') // map((x) => x.get(0))
				// const previous_ports = results.records?.[0]?.get('previous_ports') // map((x) => x.get(0))
				return {
					// data,
					// current_ports,
					// previous_ports,
					files: files
                
				}
			})

			if(pipelines.files.length > 0){
            
				const now = Date.now()
				const bundle_location = `/tmp/bundle-${now}`
                
				mkdirSync(bundle_location)


				await Promise.all(pipelines.files.map(async (file) => {
					console.log(file.key)
					const file_result = await fileManager.get(file.urn.replace("ipfs://", ""))
                    
					writeFileSync(`${bundle_location}/${file.key}`, file_result)
				}))

				// const file_result = await fileManager.get(file.cid || file.id)

				// readStream.end(file_result);
				// console.log("Get file ", file_result, file.cid)
				// res.setHeader('Content-Type', file.mimeType || 'application/octet-stream')
				// readStream.pipe(res);

				glob(`${bundle_location}/*`, async (err, matches) => {
					const paths = matches.map((x) => x.replace(`${bundle_location}/`, "./"))

					const id = nanoid()

					const bundle_path = `/tmp/task-bundle-${id}.tgz`

					// await taskRegistry.transformBundle()

					await taskRegistry.bundleRequirements(paths, bundle_path, bundle_location)

					// const conns = pipelines.connections.map((conn) => {
					//     let prev_port = pipelines.prev.find((a) => a.id == conn.source)
					//     let next_port = pipelines.ports.find((a) => a.id == conn.target)
        
					//     return `${prev_port.name}-${prev_port.type}:${next_port.name}-${next_port.type}`
					// })
        
					res.download(bundle_path)

					rmSync(bundle_location, {recursive: true})
				})
			}else{
				res.send({message: "No files supplied"})
			}

          
		})
	//Add new pipeline / get all pipelines
	router.route("/")
		.get(async (req, res) => {
			const pipelines = await neo.readTransaction(async (tx) => {
				const results =  await tx.run(`
                    MATCH (pipelines:HivePipeline)
                    RETURN pipelines
                `)
				return results.records.map((x) => x.get(0))
			})
			res.send({pipelines: pipelines.map((x) => x.properties)})
		})

            
	router.route("/jobs")
		.get(async (req, res) => {
			const result = await neo.readTransaction(async (tx) => {
				const result = await  tx.run(`
                MATCH (process:HiveFileProcess)
                RETURN process
            `)
				return result.records.map((x) => x.get(0))
			})
			res.send({result: result.map((x) => x.properties)})
		})

	//Jobs
	router.route("/jobs/:id")
		.get(async (req, res) => {
			const result = await neo.readTransaction(async(tx) => {
				const result = await tx.run(`
                MATCH (process:HiveFileProcess {id: $id})-[:CONVERTING]->(files:HiveFile)
        
                RETURN process{
                    .*,
                    files: collect(files{.*})
                }
            `, {
					id: req.params.id
				})

				const pipelineInfo = await tx.run(`
                MATCH (process:HiveFileProcess {id: $id})-[:ACTIVE_PIPELINE]->(pipeline:HivePipeline)
                OPTIONAL MATCH (pipeline)-[:HAS_NODE]->(nodes:HivePipelineNode)
                OPTIONAL MATCH node_path = (nodes)-[:USES_TASK]->(task:HiveProcess)
                RETURN pipeline{
                    .*,
                    nodes: node_path
                }
            `, {
					id: req.params.id
				})

				return {
					...result.records?.[0]?.get(0),
					pipeline: pipelineInfo.records?.[0].get(0)
				}
				// return result.records.slice(0, 1).map((x) => ({properties: {
				//     pipeline: x.has('pipeline') ?  x.get('pipeline')?.properties : {},
				//     nodes: x.has('nodes') ? x.get(3)?.properties : {},
				//     files: x.get('files').properties, 
				//     ...x.get('process').properties
				// }}))
			})
			res.send({result: result})
		})
		.post(upload.single("file"), async (req, res) => {
			console.log(req.file, req.body.results)
			const result = await neo.writeTransaction(async (tx) => {
				const result = await tx.run(`
                MATCH (process:HiveFileProcess {id: $id})
                CREATE (result:HiveProcessResult {id: $new_id, results: $results, completedAt: $completedAt})
                CREATE (result)-[rel:RESULT_OF]->(process)
                RETURN result
            `, {
					id: req.params.id,
					new_id: nanoid(),
					results: req.body.results,
					completedAt: new Date().toISOString()
				})
				return result.records.map((x) => x.get((0)))
			})
			res.send({result: result.map((x) => x.properties)})
		})
    
	const swapPorts = (text: string, ports: any[]) => {
		console.log("SWAP", ports, text)
		ports.forEach((port) => {
			const regex = new RegExp(port.name)
			text = text.replace(regex, port.id.split("-")[0])
		})
		return text
	}
	const escapeRegExp = (regex: string) => {
		return regex.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // $& means the whole matched string
	}
	router.route("/jobs/:id/task")
		.get(async (req, res) => {
			const results : any = await neo.readTransaction(async(tx) => {
            
				const tasks = await tx.run(`
                MATCH (process:HiveFileProcess {id: $id})-[:ACTIVE_PIPELINE]->(pipeline:HivePipeline)
                MATCH (pipeline)-[:HAS_NODE]->(nodes:HivePipelineNode)-[:USES_TASK]->(tasks:HiveProcess)
                RETURN tasks
            `, {
					id: req.params.id
				})

				const result =  await Promise.all([...new Set(tasks?.records?.map((x) => x.get(0)).map((x: any) => x.properties))].map(async (task: any) => {
					const results = await tx.run(`
                    MATCH (task:HiveProcess {id: $id})-[:HAS_PORT]->(ports:HiveProcessPort)
                    RETURN ports
                `, {
						id: task.id
					})
					return results.records.map((x) => x.get(0).properties)
				}))

            

				return tasks.records?.map((x, ix) => ({
					...x.get(0).properties,
					ports: result[ix].map((x) => ({...x, id: nanoid()})),
				}))

				// return result.records.slice(0, 1).map((x) => ({properties: {
				//     pipeline: x.has('pipeline') ?  x.get('pipeline')?.properties : {},
				//     nodes: x.has('nodes') ? x.get(3)?.properties : {},
				//     files: x.get('files').properties, 
				//     ...x.get('process').properties
				// }}))
			})

			const result = results[0]
			console.log(result)

			const task = `version: '3'
env: 
${[...new Set(result?.ports || [])].map((x: any) => `    ${x.id.split("-")[0]}: "File"`).join("\n")}
    OUTPUT: "test"

tasks:
${result?.task.split("\n").map((x: any) => `   ${swapPorts(x, result?.ports)}`).join("\n")}`
			res.send(task)
		})

	router.route("/tasks")
		.get(async (req, res) => {
			const result = await neo.readTransaction(async (tx) => {
				const result = await  tx.run(`
                    MATCH (process:HiveProcess)
                    RETURN process
                `)
				return result.records.map((x) => x.get(0))
			})
			res.send({result: result.map((x) => x.properties)})
		})

	//Jobs
	router.route("/tasks/:id")
		.get(async (req, res) => {
			const result = await neo.readTransaction((tx) => {
				return tx.run(`
                    MATCH (process:HiveProcess {id: $id})
                    RETURN process
                `, {
					id: req.params.id
				})
			})
			res.send({result})
		})
		.post(async (req, res) => {
			const result = await neo.writeTransaction((tx) => {
				return tx.run(`
                    MATCH (process:HiveProcess {id: $id})
                    CREATE (result:HiveProcessResult {id: $new_id, results: $results, completedAt: $completedAt})
                    CREATE (result)-[rel:RESULT_OF]->(process)
                    RETURN rel, result
                `, {
					id: req.params.id,
					new_id: nanoid(),
					results: req.body.results,
					completedAt: new Date().toISOString()
				})
			})
			res.send({result})
		})
	// const uploadFiles = async (files: any[]) => {
	//     return Promise.all(files.map(async (file) => {
	//         //   let id = v4();  
	//            let name = file.originalname;
	//            let mimetype = file.mimetype;
         
	//            let extensions = name.match(/\.[0-9a-z]+$/i)
         
	//            let _file : any = {
	//              name: name,
	//              mimetype: mimetype
	//            }
         
	//            if(extensions){
	//              _file["extension"] = extensions[0]
	//            }
         
	//            const upload_result = await fileManager.add(file.buffer)
         
	//            _file['cid'] = upload_result?.cid.toString();
	//            return _file;
	//     }))
	// }

	// router.post('/file-graph', upload.array('files'), async (req, res) => {
	//     let files = await uploadFiles(req.files as any[])

	//     let cwd = req.body.cwd;
	//     console.log("CWD", cwd, files)
	//     let resp : any;

	//         resp = await neo.writeTransaction(async (tx) => {
	//             return await Promise.all(files.map(async (file) => {
                
	//                 let query = ``;
	//                 query += cwd ? 'MATCH (parent:HiveFile {id: $id})' : 'MATCH (fs:FileSystem {name: $fs})'
	//                 query += `
	//                     CREATE (file:HiveFile {id: $newId, name: $name, cid: $cid})
	//                     CREATE (${cwd ? 'parent' : 'fs'})-[rel:CONTAINS]->(file)
	//                     RETURN file
	//                 `
	//                 const result = await tx.run(query, {
	//                     fs: "Shared FS",
	//                     newId: nanoid(),
	//                     name: file.name,
	//                     cid: file.cid,
	//                     id: cwd
	//                 })
	//                 return result.records.map((x) => x.get(0))
	//             }))
	//         })
       
            
	//     console.log(resp)
	//     res.send({files})
	// })

	//     //Upload file to hexhive store
	//     router.post('/', requiresAuth(), upload.array('files'), async (req, res) => {
	//         let user: any = (req as any).user
	//       console.log(user)
	//          let uploader = {
	//            id: user._id,
	//            organisation: user.organisation,
	//            name: user.name
	//         };
    
    
	//        let files = await uploadFiles(req.files as any[])
    
	//         if(req.query.job){
	//             //TODO rename this query variable
	//             console.log("Adding file to project")
	//             files = await addFileToJob(req.query.job.toString(), files, uploader)
	//         }
	//         res.send({ success: true, files})
	//     })


	// router.get('/:fileID',  async (req, res, next) => {
	//     let token = req.query.token
	//     // if(!token) return res.status(401).send({error: "No token provided"});
	//     let decoded : any;
	//     // try{
	//     //     decoded = jwt.verify(token.toString(), conf.jwt_secret)
	//     // }catch(e){
	//     //     return res.status(401).send({error: "Invalid token provided"});
	//     // }

	//     let fileID = req.params.fileID;

	//     let extension: RegExpMatchArray | null = fileID.match(/\.[0-9a-z]+$/i)

	//     if (extension) {
	//         fileID = fileID.replace(extension[0], '')
	//     }

	//     if(decoded.file != fileID || decoded.type != "FILE_ACCESS") return res.status(400).send({error: "Wrong token provided"});


	//     let file = await File.findOne({_id: fileID, organisation: decoded.organisation})

	//     if (file) {
	//         const readStream = new PassThrough();

	//         const file_result = await fileManager.get(file.cid || file.id)

	//         readStream.end(file_result);
	//         console.log("Get file ", file_result, file.cid)
	//         res.setHeader('Content-Type', file.mimeType || '')
	//         readStream.pipe(res);
	//     } else {
	//         res.send({ error: "No file found" })
	//     }

	// })


	return router
}
