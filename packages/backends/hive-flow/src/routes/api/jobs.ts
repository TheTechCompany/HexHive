import { addFileToJob, getFilesForJob } from '../../connector/files';
import { Connector } from '../../connector'
import express from 'express';
import { File, Project } from '@hexhive/types';

import multer from 'multer';

const jobs = express.Router();

const upload = multer();

export default (connector: Connector) => {
  /**
    * Jobs routes
   **/

  /* Jobs collection */
  jobs.get('/', async (req, res) => {
    let c = connector;
    let startDate = req.query.startDate,
      endDate = req.query.endDate,
      date = {
        start: startDate,
        end: endDate
      };
    if (startDate && endDate) {          /* Requesting jobs by date range */
      console.log("Get Jobs By Date ", startDate, endDate);
      const jobs = await c.getJobsByDate(date)
      res.send(jobs);

    } else {                            /* Requesting all jobs */
      const jobs = await c.getJobs()
      res.send(jobs);

    }
  });

  /* Individual jobs */
  jobs.get('/:jobID', async (req, res, next) => {
    let jobID = req.params.jobID;
    let c = connector;

    const job = await c.getJobByID(jobID)
    res.send(job)
  })

  /* Attached files collection*/
  jobs.get('/:jobID/files', async (req, res, next) => {
    let c = connector;

    let { error, result } = await getFilesForJob(req.params.jobID)
    res.send((error) ? { error } : result)

  });
  jobs.post('/:jobID/files', upload.array('files'), async (req, res, next) => {
    let user: any = (req as any).user
    let uploader = {
      id: user.id,
      name: user.name
    };

    let c = connector;

    let files = await c.uploadFiles(req.files as any[])


    const file = await addFileToJob(req.params.jobID, files, uploader)
    res.send({ success: true, file })

  });
  /* Individual files */
  jobs.get('/:jobID/files/:fileID', async (req, res, next) => {
    let jobID = req.params.jobID,
      fileID = req.params.fileID;

    let c = connector;
  
    let extension : RegExpMatchArray | null = fileID.match(/\.[0-9a-z]+$/i)
  
    if(extension){
      fileID = fileID.replace(extension[0], '')
    }
  
    const file = await File.findById(fileID)


    console.log("Download ", jobID, fileID);

    if (file) {

      const file_result = await c.getJobFile(file.cid || file.id)

      res.send(file_result)

      //  (err: any, stream: any) => {
      //   if (err) return res.status(500).send(err);
      //   //    res.setHeader('Content-Type')
      //   stream.pipe(res);
      // });
    } else {
      res.send({ error: `Couldn't find file with id ${fileID}` })
    }
  })

  jobs.put('/:jobID/files/:fileID', function (req, res, next) {
    let job = req.params.jobID,
      file = req.params.fileID,
      details = req.body.file;

    let c = connector;

    c.updateFileForJob(parseInt(job), file, details, (err: any, result: any) => {
      res.send((err || !result) ? { error: err || "No update possible" } : { success: true })
    });
  });

  jobs.delete('/:jobID/files/:fileID', function (req, res, next) {
    let job_id = req.params.jobID,
      file = req.params.fileID;
    let c = connector;

    c.removeFileFromJob(parseInt(job_id), file, (err: any) => {
      res.send((err) ? { error: err } : { success: true });
    });
  })

  return jobs;
}
