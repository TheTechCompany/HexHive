import { File } from '@hexhive/types'

import { Router } from 'express';
import { PassThrough } from 'stream';

import multer from 'multer'
import { addFileToJob } from './util';
import jwt from 'jsonwebtoken'
import { AuthServer } from '@hexhive/auth';
import { FileManager } from './util';
import { requiresAuth } from 'express-openid-connect';

const upload = multer();

const router = Router();

export default (fileManager: FileManager) => {

    const uploadFiles = async (files: any[]) => {
        return Promise.all(files.map(async (file) => {
            //   let id = v4();  
               let name = file.originalname;
               let mimetype = file.mimetype;
         
               let extensions = name.match(/\.[0-9a-z]+$/i)
         
               let _file : any = {
                 name: name,
                 mimetype: mimetype
               }
         
               if(extensions){
                 _file["extension"] = extensions[0]
               }
         
               const upload_result = await fileManager.add(file.buffer)
         
               _file['cid'] = upload_result?.cid.toString();
               return _file;
        }))
    }

    //Upload file to hexhive store
    router.post('/', requiresAuth(), upload.array('files'), async (req, res) => {
        let user: any = (req as any).user
      console.log(user)
         let uploader = {
           id: user._id,
           organisation: user.organisation,
           name: user.name
        };
    
    
       let files = await uploadFiles(req.files as any[])
    
        if(req.query.job){
            //TODO rename this query variable
            console.log("Adding file to project")
            files = await addFileToJob(req.query.job.toString(), files, uploader)
        }
        res.send({ success: true, files})
    })


router.get('/:fileID',  async (req, res, next) => {
    let token = req.query.token
    // if(!token) return res.status(401).send({error: "No token provided"});
    let decoded : any;
    // try{
    //     decoded = jwt.verify(token.toString(), conf.jwt_secret)
    // }catch(e){
    //     return res.status(401).send({error: "Invalid token provided"});
    // }

    let fileID = req.params.fileID;

    let extension: RegExpMatchArray | null = fileID.match(/\.[0-9a-z]+$/i)

    if (extension) {
        fileID = fileID.replace(extension[0], '')
    }

    if(decoded.file != fileID || decoded.type != "FILE_ACCESS") return res.status(400).send({error: "Wrong token provided"});


    let file = await File.findOne({_id: fileID, organisation: decoded.organisation})

    if (file) {
        const readStream = new PassThrough();

        const file_result = await fileManager.get(file.cid || file.id)

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
