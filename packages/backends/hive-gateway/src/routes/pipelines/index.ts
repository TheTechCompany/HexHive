import { File } from '@hexhive/types'

import { Router } from 'express';
import { PassThrough } from 'stream';

import multer from 'multer'
import { addFileToJob } from './util';
import jwt from 'jsonwebtoken'
import { FileManager } from './util';
import { requiresAuth } from 'express-openid-connect';
import { Driver, Result, Session } from 'neo4j-driver';
import { result } from 'lodash';
import { nanoid } from 'nanoid';

const upload = multer();

const router = Router();

export default (neo: Session) => {

    //Add new pipeline / get all pipelines
    router.route('/')
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
        .post((req, res) => {

        })

            
    router.route('/jobs')
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
router.route('/jobs/:id')
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
    .post(upload.single('file'), async (req, res) => {
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
            let regex = new RegExp(port.name)
            text = text.replace(regex, port.id.split('-')[0])
        })
        return text;
    }
    const escapeRegExp = (regex: string) => {
        return regex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
      }
    router.route('/jobs/:id/task')
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

        let result = results[0]
        console.log(result)

        let task = `version: '3'
env: 
${[...new Set(result?.ports || [])].map((x: any) => `    ${x.id.split('-')[0]}: "File"`).join(`\n`)}
    OUTPUT: "test"

tasks:
${result?.task.split('\n').map((x: any) => `   ${swapPorts(x, result?.ports)}`).join('\n')}`
        res.send(task)
    })

    router.route('/tasks')
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
    router.route('/tasks/:id')
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


    return router;
}
