import { File, User, Project } from "@hexhive/types"

import { IPFS } from 'ipfs-core-types';
import {create} from 'ipfs-http-client'

export class FileManager {
    private ipfs : IPFS;

    constructor(opts: {url: string}){
        this.ipfs = create({url: opts.url})    
        console.log(`Connecting to IPFS : ${opts.url}`)
    }

    async get(cid: string){
        console.log("Get CID", cid)
        let chunks : Uint8Array = Uint8Array.from([]);
        for await (const chunk of this.ipfs.cat(cid)){
            chunks = Uint8Array.from([...chunks, ...chunk]) 
        }
        console.log("Get CID Done", cid)

        return chunks
    }

    async add(file: Buffer){
        console.log("Adding file to IPFS")
        const result = await this.ipfs.add(file)
        console.log("Add file to IPFS", result.cid.toString());
        return result;
    }

    async remove(cid: string){
        return await this.ipfs.pin.rm(cid)
    }
}

export const getFilesForJob = async (job: string) => {
  
    const project = await Project.findOne({id: job}).populate('files')

    if(!project || !project.files || project.files.length < 1) return {error: "No files found for job, try again"}

    return {result: project.files.map((x) => ({
      ...x,
      jobId: job
    }))}

}

export const addFileToJob = async (
    job_id: string, 
    files: {
        id: string, 
        name: string, 
        mimetype: string, 
        extension: string
    }[], uploader: {id: string}) => {

    const user = await User.findOne({id: uploader.id})

    const results  : any[] = await Promise.all(files.map(async (file) => {
        let new_file = new File({
            cid: file.id,
            name: file.name,
            extension: file.extension,
            mimeType: file.mimetype,
            owner: user._id,
            timetstamp: new Date()
        })

        return await new_file.save()
    }))

    await Project.updateOne({id: job_id}, {$push: {files: results.map((x) => x._id)}}, {upsert: true})
    
    return results;
 
}