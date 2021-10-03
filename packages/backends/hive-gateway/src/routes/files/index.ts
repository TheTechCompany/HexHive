import { File } from "@hexhive/types"

import { Router } from "express"
import { PassThrough } from "stream"

import multer, { Multer } from "multer"
import { addFileToJob } from "./util"
import jwt from "jsonwebtoken"
import { FileManager } from "./util"
import { requiresAuth } from "express-openid-connect"
import { Driver, Result, Session } from "neo4j-driver"
import { result } from "lodash"
import { nanoid } from "nanoid"
import { HiveEvents } from "@hexhive/events-client"
import { createFile } from "../../queries/file"

const upload = multer()

const router = Router()

export default (fileManager: FileManager, eventClient: HiveEvents, neo: Session) => {

	const uploadFiles = async (files: Express.Multer.File[]) => {
		return Promise.all(files.map(async (file) => {
			//   let id = v4();  
			const name = file.originalname
			const mimetype = file.mimetype
         
			const extensions = name.match(/\.[0-9a-z]+$/i)
         
			const _file : any = {
				name: name,
				mimetype: mimetype,
				size: file.size
			}
         
			if(extensions){
				_file["extension"] = extensions[0]
			}
         
			const upload_result = await fileManager.add(file.buffer)
         
			_file["cid"] = upload_result?.cid.toString()
			return _file
		}))
	}

	router.get('/ipfs', (req, res) => {
		res.send({user: (req as any).user})
	})

	router.get("/ipfs/:cid", async (req, res) => {
		const readStream = new PassThrough()
        
		const file_result = await fileManager.get(req.params.cid)

		readStream.end(file_result)
		console.log("Get file ", file_result, req.params.cid)
		res.setHeader("Content-Type", "application/octet-stream")
		readStream.pipe(res)
	})
    
	router.get("/graph/:fileID",  async (req, res, next) => {
		const token = req.query.token
		// if(!token) return res.status(401).send({error: "No token provided"});
		let decoded : any
		// try{
		//     decoded = jwt.verify(token.toString(), conf.jwt_secret)
		// }catch(e){
		//     return res.status(401).send({error: "Invalid token provided"});
		// }

		let fileID = req.params.fileID

		const extension: RegExpMatchArray | null = fileID.match(/\.[0-9a-z]+$/i)

		if (extension) {
			fileID = fileID.replace(extension[0], "")
		}

		// if(decoded.file != fileID || decoded.type != "FILE_ACCESS") return res.status(400).send({error: "Wrong token provided"});


		const file = await neo.readTransaction(async (tx) => {
			const result = await tx.run(`
            MATCH (file:HiveFile {id: $id, owner: $owner})
            RETURN file
        `, {
				id: fileID,
				owner: (req as any).user.organisation
			})
			return result.records?.[0]?.get(0).properties
		})
   
		if (file) {
			console.log(file)
			const readStream = new PassThrough()

			const file_result = await fileManager.get(file.cid || file.id)

			readStream.end(file_result)
			console.log("Get file ", file_result, file.cid)
			// res.setHeader('Content-Type', file.mimeType || 'application/octet-stream')
			readStream.pipe(res)
		} else {
			res.send({ error: "No file found" })
		}

	})

	router.post('/graph/:fileID/attach', upload.array('files'), async (req, res) => {
		const files = await uploadFiles(req.files as any[])

		const result = await neo.writeTransaction(async (tx) => {
			return await Promise.all(files.map(async (file) => {

				const conversion = await createFile(tx, (req as any).user.organisation, file, req.params.fileID)

				const res = await tx.run(`
					MATCH (file:HiveFile {id: $id})
					MATCH (conversion:HiveFile {id: $conversionId})
					CREATE (file)-[:HAS_VIEW]->(conversion)
				`, {
					id: req.params.fileID,
					conversionId: conversion.properties.id
				})
				return res.records?.[0]?.get(0).properties;
			}))
		})

		res.send({result})
	})

	router.post("/file-graph", upload.array("files"), async (req, res) => {
		console.log("USER", (req as any).user)

		const files = await uploadFiles(req.files as any[])

		const cwd = req.body.cwd
		console.log("CWD", cwd, files)

		const resp = await neo.writeTransaction(async (tx) => {
			return await Promise.all(files.map(async (file) => {
                
				const item = await createFile(tx, (req as any).user.organisation, file, cwd)
				if(!item) return;
				return {
					type: item.labels,
					properties: item.properties
				}
			}))
		})
		if(!resp) res.send({error: "No response"}) 

		eventClient.eventRequest("UPLOAD_FILE", {"Uploaded File": resp})
	
	
		// mq.post('UPLOAD_FILE')
       
		// eventRequest({
		//     key: '123456789',
		//     secret: 'secret1'
		// }, 'UPLOAD_FILE', {
		//     eventInfo: 'stuff'
		// }).then((resp) => {
		//     console.log(resp)
		// })

		console.log(resp)
		res.send({files})
	})

	//Upload file to hexhive store
	router.post("/", requiresAuth(), upload.array("files"), async (req, res) => {
		const user: any = (req as any).user
		console.log(user)
		const uploader = {
			id: user._id,
			organisation: user.organisation,
			name: user.name
		}
    
    
		let files = await uploadFiles(req.files as any[])
    
		if(req.query.job){
			//TODO rename this query variable
			console.log("Adding file to project")
			files = await addFileToJob(req.query.job.toString(), files, uploader)
		}
		res.send({ success: true, files})
	})


	router.get("/:fileID",  async (req, res, next) => {
		const token = req.query.token
		// if(!token) return res.status(401).send({error: "No token provided"});
		let decoded : any
		// try{
		//     decoded = jwt.verify(token.toString(), conf.jwt_secret)
		// }catch(e){
		//     return res.status(401).send({error: "Invalid token provided"});
		// }

		let fileID = req.params.fileID

		const extension: RegExpMatchArray | null = fileID.match(/\.[0-9a-z]+$/i)

		if (extension) {
			fileID = fileID.replace(extension[0], "")
		}

		if(decoded.file != fileID || decoded.type != "FILE_ACCESS") return res.status(400).send({error: "Wrong token provided"})


		const file = await File.findOne({_id: fileID, organisation: decoded.organisation})

		if (file) {
			const readStream = new PassThrough()

			const file_result = await fileManager.get(file.cid || file.id)

			readStream.end(file_result)
			console.log("Get file ", file_result, file.cid)
			res.setHeader("Content-Type", file.mimeType || "")
			readStream.pipe(res)
		} else {
			res.send({ error: "No file found" })
		}

	})


	return router
}
