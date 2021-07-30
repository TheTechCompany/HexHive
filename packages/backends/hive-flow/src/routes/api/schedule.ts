import express from 'express';
import moment from 'moment';
import async from 'async'
import { Connector } from '../../connector';

const schedule = express.Router();

let log = function (msg: any) {
  console.log(msg);
};

export default (connector: Connector) => {

schedule.get('/', async (req, res, next) => {
  let c = connector;
  let jobID = req.query.jobId
  let staffID = req.query.staffId
  let startDate = req.query.startDate
  let endDate = req.query.endDate;

  let date = {
        start: startDate && new Date(parseInt(startDate?.toString())),
        end: endDate && new Date(parseInt(endDate?.toString()))
  };
  if (staffID) {                      /* Scheduled items by staff member */
    const result = await c.getScheduleItemsforStaff(staffID, date);

                                 log(`Branch: staffID, Result: ${result}`);
                                 let weekDays : Array<Array<any>> = [
                                   [], [], [], [],
                                   [], [], []
                                 ];
                                 result.forEach((x: any) => {
                                   let day = moment(x.date).isoWeekday() - 1
                                   weekDays[day].push(x);
                                 });
                                 res.send(weekDays);
    
  } else if (jobID) {                 /* Scheduled items by job */
    const items = await c.getScheduleItemsById(jobID.toString())

    log(`Branch: jobID, Result: ${items}`);
    res.send(items);
                  
  } else if (startDate && endDate) {  /* Just a date range */
    const result = await c.getScheduleItemsByDate(date);

    log(`Branch: dateRange, typeof: ${typeof(date.start)}, Result: ${result}`);
      let weekDays : Array<Array<any>> = [
        [], [], [], [],
        [], [], []
      ];
      let orders = weekDays.map((x, ix) => moment(date.start).add(ix, 'days').add(12, 'hours').valueOf());
      
      result.forEach((x: any, ix: number) => {
        let day = moment(x.date).isoWeekday() - 1;
        weekDays[day].push(x);
      });

      async.map(orders, (item, cb) => {
        c.findOrder(item).then((order) => {
          cb(null, order.order)
        })
        
      }, (err, orderMap : any) => {
        console.log(orderMap);
        res.send(weekDays.map((x, idx) => x.sort((a: any, b: any) => {
          return orderMap[idx][a.id] - orderMap[idx][b.id];
        })))
      })
    
  
  } else {                            /* No relevant query params */
    const schedule = await c.getScheduleItems()
      log(`Branch: default, Result: ${schedule}`);
      res.send(schedule);
    
  }
})

schedule.post('/', async (req, res) => {
  let job       = req.body.job
  let employees = req.body.employees
  let plant     = req.body.plant
  let notes     = req.body.notes
  let dateTS    = req.body.dateTS
  let owner     = (req as any).user.id;

  const item = await connector.insertScheduleItem(owner, job, employees, plant, notes, dateTS)
  res.send(item)
});

schedule.post('/order', async (req, res) => {
  let day = req.body.ts;
  let order = req.body.order;

  await connector.updateOrder(order, day)
  res.send({success: true})
 
})

schedule.get('/:id', async (req, res, next) => {
  let id = req.params.id;
  const items = await connector.getScheduleItemsById(id)
    /* returns only dates */
    let dates: any[] = [];
    items.forEach((x: any) => {
      dates.push(x.date);
    });
    res.send(dates);
  
});
schedule.put('/:id', async (req, res, next) => {
  let id        = req.params.id
  let job       = req.body.job
  let employees = req.body.employees
  let plant     = req.body.plant
  let notes     = req.body.notes
  let dateTS    = req.body.dateTS
  let owner     = (req as any).user.id;

  const schedule = await connector.updateScheduleItem(owner, id, job, employees, plant, notes, dateTS)
  res.send(schedule)
})

schedule.delete('/:id', async (req, res, next) => {
  let id = req.params.id;
  await connector.removeScheduleItem(id, (req as any).user.id)
  
  res.send(1);

});

schedule.post('/:id/join', async (req, res) => {
  let id = req.params.id;
  let user = (req as any).user.id;
  const result = await connector.joinScheduleItem(id, user)
 
    res.send({success: true})
  
})

schedule.post('/:id/leave', async (req, res) => {
  let id = req.params.id;
  let user = (req as any).user.id;
  const result = await connector.leaveScheduleItem(id, user)
    res.send({success: true})

})

return schedule
}

