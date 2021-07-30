import { File } from '@hexhive/types'

import { Connector } from '../../connector'

import { Router } from 'express';
import { PassThrough } from 'stream';

const router = Router();

export default (connector: Connector) => {
router.get('/:fileID', async (req, res, next) => {
    let fileID = req.params.fileID;
  
    let extension : RegExpMatchArray | null = fileID.match(/\.[0-9a-z]+$/i)
  
    if(extension){
      fileID = fileID.replace(extension[0], '')
    }
  
    let file = await File.findById(fileID)

    if(file){
      const readStream = new PassThrough();

      const file_result = await connector.getJobFile(file.cid || file.id)

      readStream.end(file_result);
      console.log("Get file ", file_result, file.cid)
      res.setHeader('Content-Type', file.mimeType ||'')
      readStream.pipe(res);
    }else{
      res.send({error: "No file found"})
    }
 
  })

  return router;
}
