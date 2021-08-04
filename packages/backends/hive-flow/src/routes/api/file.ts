import { Router } from 'express';
import { PassThrough } from 'stream';
import { Connector } from '../../connector';
import { File } from '@hexhive/types'
import jwt from 'jsonwebtoken'
import conf from '../../conf'

const router = Router();

export default (connector: Connector) => {

router.get('/:fileID',  async (req, res, next) => {
    let token = req.query.token
    if(!token) return res.status(401).send({error: "No token provided"});
    let decoded : any;
    try{
        decoded = jwt.verify(token.toString(), conf.jwt_secret)
    }catch(e){
        return res.status(401).send({error: "Invalid token provided"});
    }

    let fileID = req.params.fileID;

    let extension: RegExpMatchArray | null = fileID.match(/\.[0-9a-z]+$/i)

    if (extension) {
        fileID = fileID.replace(extension[0], '')
    }

    if(decoded.file != fileID || decoded.type != "FILE_ACCESS") return res.status(400).send({error: "Wrong token provided"});


    let file = await File.findOne({_id: fileID, organisation: decoded.organisation})

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