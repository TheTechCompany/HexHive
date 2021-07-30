import { AppRequest } from "..";

import express from 'express'
import async from 'async'
import moment from 'moment'
import { Connector } from "../../connector";
const planner = express.Router();


export default (connector: Connector) => {

planner.get('/', function (req : AppRequest, res: any, next: any) {
  let startDate = new Date(parseInt(req.query.startDate?.toString() || ''))
  let endDate   = new Date(parseInt(req.query.endDate?.toString() || ''))

  async.parallel([async (cb) => {
    const quotes = await connector.getQuoteSchedule(startDate, endDate)
    cb(null, quotes.map((x: any) => ({...x, displayId: x.quote.id, displayName: x.quote.name, start: x.startDate, end: x.endDate })))
  
  }, async (cb) => {
    const jobs = await getFmtJobs({start: startDate, end: endDate})
    let fmtted = fmtJobs(jobs);
    cb(null, fmtted);
  }], (err, results) => {
    res.send((err) ? {error: err} : {quotes: results?.[0], jobs: results?.[1]})
  })
});


planner.post('/', async (req, res, next) => {
  let quote = req.body.quote
  let startDate = req.body.start
  let endDate   = req.body.end;
  let calendar = req.body.type;

  switch(calendar){
    case 'jobs':
      if(quote.type == "job"){
        connector.planSchedule((req as any).user.id, quote, startDate, endDate, (err: any, item: any) => {
          res.send((err) ? {error: err} : item)
        })
      }else{
        res.send({error: "Cannot add quotes to schedule"})
      }
      break;
    case 'quotes': 
        const quote_schedule = await connector.scheduleQuote(quote, startDate, endDate, calendar)
        res.send({id: quote_schedule.id});
      break;
    case 'designs':
        const design_schedule = await connector.scheduleQuote(quote, startDate, endDate, calendar)
        res.send({id: design_schedule.id});
      break;
    default:
      return null;
  }
});

planner.get('/vehicles', (req, res) => {
  // let startDate = new Date(req.query.start);
  // let endDate = new Date(req.query.end);

  // connector.getVehicleExpiries(startDate, endDate, (err, expiry) => {
  //   res.send((err) ? {error: err} : expiry)
  // })
})

var fmtJobs = (jobs: any[]) => {
  let resultJobs = [];
  console.log("Jobs", jobs);
  for(var i = 0; i < jobs.length; i++){
    let schedule = jobs[i].schedule.sort();
    let range = {
      start: schedule[0],
      end: schedule[0]
    }
    for(var index = 0; index < schedule.length; index++){
      let diff = (schedule[index] - range.end) / 1000 / 60 / 60 / 24;
      console.log(diff);
      if(Math.abs(diff) > 1){
        resultJobs.push(Object.assign({
          id: jobs[i].id + range.start + range.end,
          displayId: jobs[i].id,
          displayName: jobs[i].name,
        }, range))
        range.start = schedule[index]
        range.end = schedule[index]
      }else{
        range.end = moment(new Date(schedule[index])).add(12, 'hours').valueOf()
      }
    }
    resultJobs.push(Object.assign({
      id: jobs[i].id + range.start + range.end,
      displayId: jobs[i].id,
      displayName: jobs[i].name
    }, range))
  }
  return resultJobs;
}

var getFmtJobs = async (date: {start: Date, end: Date}) => {
  const items = await connector.getScheduleItemsByDate(date)
    let jobs : any = {}
    let ids: any[] = []
    let results: any[] = [];

    console.log("Schedule items", items)

    //Group schedules for job into one job
    items.forEach((item: any) => {
      let id = item.job.id;
      if (!jobs[id]) {
        jobs[id] = {              /* Initialise the object */
          name: item.job.name,
          schedule: []
        };
        ids.push(id);
      }
      jobs[id].schedule.push(item.date);
    });

    ids.forEach((id) => {
      results.push({
        id: id,
        name: jobs[id].name,
        schedule: jobs[id].schedule.sort()
      });
    });
    return results;
}
planner.get('/scheduled', async (req, res, next) => {
  let startDate = new Date(req.query.startDate?.toString() || '')
  let endDate   = new Date(req.query.endDate?.toString() || '')

  let date = {
        start: startDate,
        end:   endDate
      };
  const results = await getFmtJobs(date)
  res.send(results)
});

planner.put('/:quoteID', async (req, res, next) => {
  let quoteID = req.params.quoteID,
      quote   = req.body.quote,
      startDate = req.body.start,
      endDate   = req.body.end;

  const result = await connector.updateQuoteSchedule(quoteID, quote, startDate, endDate)
                                  
  res.send(result)
                                  
});

planner.delete('/:quoteID', async (req, res, next) => {
  let quoteID = req.params.quoteID;
  const result = await connector.deleteQuoteSchedule(quoteID)
  res.send(result)
});

  return planner;
}