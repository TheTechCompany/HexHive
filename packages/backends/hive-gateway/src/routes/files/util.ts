import { File, User, Project } from "@hexhive/types"
import axios from "axios"
import { IPFS } from "ipfs-core-types"
import {create} from "ipfs-http-client"

export class FileManager {
	private ipfs : IPFS;

	private opts: {gateway?: string, url: string}
	constructor(opts: {gateway?: string, url: string}){
		this.ipfs = create({url: opts.url})    
		this.opts = opts
		console.log(`Connecting to IPFS : ${opts.url}`)
	}

	async get(cid: string){
		console.log("Get CID", cid)

		const response = await axios({
			url: `${this.opts.gateway}/ipfs/${cid}`,
			method: "GET",
			responseType: "arraybuffer" //arraybuffer | document | blob
		})

		return response.data
		// let chunks : Uint8Array = Uint8Array.from([]);
		// for await (const chunk of this.ipfs.cat(cid)){
		//     console.log("Chunked...")
		//     chunks = Uint8Array.from([...chunks, ...chunk]) 
		// }
		// console.log("Get CID Done", cid)

		// return chunks
	}

	async add(file: Buffer){
		console.log("Adding file to IPFS")
		const result = await this.ipfs.add(file)
		console.log("Add file to IPFS", result.cid.toString())
		return result
	}

	async remove(cid: string){
		return await this.ipfs.pin.rm(cid)
	}
}

export const getFilesForJob = async (job: string) => {
  
	const project = await Project.findOne({id: job}).populate("files")

	if(!project || !project.files || project.files.length < 1) return {error: "No files found for job, try again"}

	return {result: project.files.map((x) => ({
		...x,
		jobId: job
	}))}

}

export const addFileToJob = async (
	job_id: string, 
	files: {
		cid: string, 
		name: string, 
		mimetype: string, 
		extension: string
	}[], uploader: {id: string, organisation: string}) => {

	console.log(uploader.id)
	const user = await User.findById(uploader.id) //{id: uploader.id})

	const results  : any[] = await Promise.all(files.map(async (file) => {
		const new_file = new File({
			cid: file.cid,
			name: file.name,
			extension: file.extension,
			mimeType: file.mimetype,
			owner: uploader.id, //Fix issue of IDP being on a different db user._id,
			organisation: uploader.organisation,
			timetstamp: new Date()
		})

		await new_file.save()
		return new_file
	}))

	await Project.updateOne({id: job_id}, {$push: {files: results.map((x) => x._id)}}, {upsert: true})
	
	return results
 
}