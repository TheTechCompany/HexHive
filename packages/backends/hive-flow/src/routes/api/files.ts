import { File } from '@hexhive/types'

import { Connector } from '../../connector'

import { Router } from 'express';
import { PassThrough } from 'stream';

import multer from 'multer'
import { addFileToJob } from '../../connector/files';
import conf from '../../conf'
import jwt from 'jsonwebtoken'
import { AuthServer } from '@hexhive/auth';

const upload = multer();

const router = Router();

export default (connector: Connector) => {

    //Upload file to hexhive store
    router.post('/', AuthServer.oauthServer.authenticate(), upload.array('files'), async (req, res) => {
        let user: any = (req as any).user
      console.log(user)
         let uploader = {
           id: user._id,
           organisation: user.organisation,
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


    return router;
}
