import { Client } from 'minio'
import moment from 'moment'
import { Models } from '@hive-flow/data-types'
const config = require('../conf')

const { File } = Models;

let minio : any = {
        endPoint: 'minio',
        port: 9000,
        secure: false,
        accessKey: 'MinioACCESS',
        secretKey: 'MinioSecretKeyss!'
}

let minioClient = new Client(minio)

const objects = minioClient.listObjects('pencilin', 'job-files/')

objects.on('data', async (item) => {
let name = item.name.replace('job-files/', '')

    let startBoundary = moment(item.lastModified).subtract(10, 'seconds').valueOf()
    let endBoundary = moment(item.lastModified).add(10, 'seconds').valueOf()

   const file = await File.findOne({
       timestamp: {$gte: new Date(startBoundary), $lte: new Date(endBoundary)}, 
       cid: {$exists: false}})

        if(file && !file.cid){
                console.log(file)
                 file.cid = name;
              await file.save();
        }else if(file && file.cid){
            console.log("Found alreaady")
        }
   console.log(name)
})