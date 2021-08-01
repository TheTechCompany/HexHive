import { File } from '@hexhive/types'

import { Connector } from '../../connector'

import { Router } from 'express';
import { PassThrough } from 'stream';

import multer from 'multer'
import { addFileToJob } from '../../connector/files';

const upload = multer();

const router = Router();

export default (connector: Connector) => {

    //Upload file to hexhive store
    router.post('/', upload.array('files'), async (req, res) => {
        let user: any = (req as any).user
      console.log(user)
         let uploader = {
           id: user._id,
           name: user.name
        };
    
        let c = connector;
    
       let files = await c.uploadFiles(req.files as any[])
    
        if(req.query.job){
            //TODO rename this query variable
            console.log("Adding file to project")
            files = await addFileToJob(req.query.job.toString(), files, uploader)
        }
        res.send({ success: true, files})
    })

    router.get('/:fileID', async (req, res, next) => {
        let fileID = req.params.fileID;

        let extension: RegExpMatchArray | null = fileID.match(/\.[0-9a-z]+$/i)

        if (extension) {
            fileID = fileID.replace(extension[0], '')
        }

        let file = await File.findById(fileID)

        if (file) {
            const readStream = new PassThrough();

            const file_result = await connector.getJobFile(file.cid || file.id)

            readStream.end(file_result);
            console.log("Get file ", file_result, file.cid)
            res.setHeader('Content-Type', file.mimeType || '')
            readStream.pipe(res);
        } else {
            res.send({ error: "No file found" })
        }

    })

    return router;
}
