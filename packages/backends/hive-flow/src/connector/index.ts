import sql, { ConnectionPool } from 'mssql'
import EventEmitter from 'events';
import async from 'async';
import moment from 'moment';
import { v4 } from 'uuid';

import { connect_data, Schedule, ScheduleOrder, QuoteSchedule, Project, User } from '@hexhive/types'

import { FileManager } from './files';


function normaliseUsername(uname: string) {
  return uname.toLowerCase().trim();
}

/**
 * API for accessing data from the model of the gfs_scheduler 
 * */
export class Connector extends EventEmitter{

  public pool? : ConnectionPool

 // private minioClient: any;
  private sign: any;
  private BASE_URL: any;

  private fileManager?: FileManager;

  constructor(config: any, jwt: any, BASE_URL: any){
    super();
    let jobs : any[] = [];


    if(config.sql) {
      this.pool = new ConnectionPool(config.sql)
      jobs.push((cb: any) => {
        if(config.sql.server){
          this.pool?.connect((err) => {
            cb(err);  
          });
        }else{
          cb(null, {})
        }
      })
    }
    
    if(config.ipfs) this.fileManager = new FileManager({url: config.ipfs})



    async.parallel(jobs.concat([
      (cb: any) => {
        connect_data().then(() => {
          cb(null)
        })
      }
    ]), (err, cons) => {
      this.emit('ready');
      if(!err){


     //   this.cleanVehicleDates();
        //this.emit('ready');
      }else{
     //   this.emit('error', err);
      }
    });
    
    this.sign = function (payload: any, extra: any) {
      return jwt.sign(payload, jwt.secret, extra);
    };
    this.BASE_URL = BASE_URL;
  }

  // cleanVehicleDates(){
  //   this._db.collection('plant_info').find({$or: [{regoExpiry: {$exists: true}}, {cofExpiry: {$exists: true}}, {wofExpiry: {$exists: true}}]}).toArray((err: any, items: async.IterableCollection<unknown>) => {
  //     console.log("Cleaning up", items)
  //     async.each(items, (vehicle, cb) => {
  //       console.log("Cleaning", vehicle)
  //       let regoExpiry = vehicle.regoExpiry;
  //       let cofExpiry = vehicle.cofExpiry;
  //       let wofExpiry = vehicle.wofExpiry;
  
  //       let update = {}
  //       if(regoExpiry) update['regoExpiry'] = new Date(regoExpiry)
  //       if(cofExpiry) update['cofExpiry'] = new Date(cofExpiry)
  //       if(wofExpiry) update['wofExpiry'] = new Date(wofExpiry)
        
  //       this._db.collection('plant_info').updateOne({plate: vehicle.plate}, {$set: update}, cb)

  //     }, (err) => {
  //       console.log("CLeaned")
  //     })
  //   })
  // }


  // getVehicleExpiries(start_date: string | number | Date, end_date: string | number | Date, cb: any){
  //   //cofExpiry, wofExpiry, regoExpiry
  //   let start = new Date(start_date)
  //   let end = new Date(end_date)
  //   this._db.collection('plant_info').find({$or: [{wofExpiry: {$gte: start, $lte: end}},{regoExpiry: {$gte: start, $lte: end}}, {cofExpiry: {$gte: start, $lte: end}} ]}).toArray(cb)
  // }

  /**
   * SQL records
   **/
  /*Return all plant information from vw_Sched_Machinery*/
  getPlant(cb: (arg0: Error | null | undefined, arg1: unknown[] | undefined) => void){
    var request = new sql.Request(this.pool);
    request.query('SELECT * FROM dbo.vw_Sched_Machinery').then((result) => {

      async.map(result.recordsets[0], (p, cb) => {
        cb(null, p)
        // if(p.Registration){
        //   this.getPlateDetails(p.Registration, (err: any, details: any) => {
        //     if(!err && details) p.details = details;
        //     cb(null, p);
        //   })
        // }else{
        //   cb(null, p)
        // }
      }, (err, results) => {
        cb(err, results);
      })
    });
  }

  // getPlateHistory(plate: any, cb: (arg0: any, arg1: any) => void){
  //   this._db.collection('plant_history').find({plate: plate}).toArray((err: any, history: any) => {
  //     cb(err, history)
  //   })
  // }

  // getPlateRequests(plate: any, cb: (arg0: any, arg1: any) => void){
  //   this._db.collection('plant_requests').find({state: 'UNFINISHED', plate: plate}).toArray((err: any, requests: any) => {
  //     cb(err, requests);
  //   })
  // }

  // removeService(plate: any, id: any, cb: any){
  //   this._db.collection('plant_requests').update({id: id, plate: plate}, {$set: {state: 'COMPLETE'}}, cb)
  // }

  // completeService(plate: any, id: any, cb: any){
  //   this._db.collection('plant_requests').update({id: id, plate: plate}, {$set: {state: 'REMOVED'}}, cb)
  // }

  // updatePlateDetails(updateType: any, plate: any, details: { expiry: string | number | Date; reading: any; subject: any; description: any; }, cb: any){
  //   let plateDetails = {
  //   }

  //   switch(updateType){
  //     case 'rego-renewal':
  //       plateDetails['regoExpiry'] = new Date(details.expiry)
  //       break;
  //     case 'wof-renewal':
  //       plateDetails['wofExpiry'] = new Date(details.expiry);
  //       break;
  //     case 'cof-renewal':
  //       plateDetails['cofExpiry'] = new Date(details.expiry);
  //       break;
  //     case 'ruc-renewal':
  //       plateDetails['rucExpiry'] = details.expiry;
  //       break;
  //     case 'odometer-reading':
  //       plateDetails['odometerReading'] = details.reading;
  //       break;
  //     case 'service-request':
  //       let ts = new Date();
  //       this._db.collection('plant_requests').insertOne({
  //         id: uuid.v4(),
  //         plate: plate,
  //         state: 'UNFINISHED',
  //         subject: details.subject,
  //         description: details.description,
  //         ts: ts.getTime()
  //       }, cb)
  //       break;
  //     default:
  //       break;
  //   }

  //   if(Object.keys(plateDetails).length > 0){
  //     this._db.collection('plant_info').update({plate: plate}, {$set: plateDetails}, cb)
  //   }
  //   this._db.collection('plant_history').insertOne({
  //     plate: plate,
  //     serviceType: updateType,
  //     ts: new Date()
  //   }, (err: any, d: any) => {
      
  //   })
  // }

  // getPlateDetails(plate: any, cb: { (err: any, details: any): void; (arg0: any, arg1: any): void; }){
  //   this._db.collection('plant_info').findOne({plate: plate}, (err: any, info: any) => {
  //     cb(err, info);
  //   })
  // }

  async getQuotesYearAhead(year: number){
    return await new Promise((resolve, reject) => {

      var date = new Date(year, 0).toISOString();
      var request = new sql.Request(this.pool);
      request.input('year', sql.VarChar, date);
      request.query('SELECT CompanyName AS Name, QuoteID, Status, StartDate, SUM(LinePrice) AS TotalLinePrice FROM dbo.vw_Sched_Quotes WHERE CONVERT(date, StartDate, 127) >= CONVERT(date, @year, 127) GROUP By QuoteID, StartDate, CompanyName, Status').then((result) => {
        resolve(result.recordset);
      });    
    })
  }

  /*Gets all quotes by year from vw_Sched_Quotes, this takes in a single year parameter and returns
   * a JSON object containing a grouping of all quotes for each month and the total line price for each month*/
  async getQuotesByYear(year: number) {

    return await new Promise((resolve, reject) => {

    var date = new Date(year, 0).toISOString();
    var endYear = (year + 1)
    var dateEnd = new Date(endYear, 0).toISOString();
    var request = new sql.Request(this.pool);
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var quotesByYear : any[] = [];
    //Initialize the quotesByYear Array
    for(var i = 0; i < monthNames.length; i++){
      quotesByYear[i] = {
        "TotalLinePriceForMonth" : 0,
        "Month" : monthNames[i],
        "QuoteIDs" : []
      };
    }

    request.input('year', sql.VarChar, date);
    request.input('yearEnd', sql.VarChar, dateEnd);
    request.query('select QuoteID, StartDate, Status, SUM(LinePrice) AS TotalLinePrice from dbo.vw_Sched_Quotes WHERE CONVERT(date, StartDate, 127) >= CONVERT(date, @year, 127) AND CONVERT(date, StartDate, 127) <= CONVERT(date, @yearEnd, 127) GROUP BY QuoteID, StartDate, Status').then((result) => {

      result.recordsets[0].forEach((element) => {
        var recordDate = new Date(element['StartDate']); 
        var price = element['TotalLinePrice'];
        var index = recordDate.getMonth();
        var quoteID = element['QuoteID'];   
        quotesByYear[index]['TotalLinePriceForMonth'] += price;    
        quotesByYear[index]['QuoteIDs'].push(quoteID);
      });
      resolve(quotesByYear);
    });
    })
  }

  /*Returns all quoutes from vw_Sched_Quotes*/
  getQuotes(cb: any) {
    var date = new Date(2017, 0).toISOString();
    var request = new sql.Request(this.pool);
    request.input('currentDate', sql.VarChar, date);
    request.query('select QuoteID, Status, StartDate, SUM(LinePrice) AS TotalLinePrice from dbo.vw_Sched_Quotes WHERE CONVERT(date, StartDate, 127) >= CONVERT(date, @currentDate, 127) GROUP BY QuoteID, StartDate, Status').then((result) => {
      cb(null, result.recordsets[0]);
    });
  }

  async joinScheduleItem(schedule_item_id: string, user: string){
    const item = await Schedule.findOne({id: schedule_item_id})

      let managers = item.managers || [];
      if(managers.indexOf(user) > -1){
        return new Error("Already joined")
      }else{
        managers.push(user);
        return await Schedule.updateOne({id: schedule_item_id}, {$set: {managers}})

      }
  
  }

  async leaveScheduleItem(schedule_item_id: string, user: string){
    const item = await Schedule.findOne({id: schedule_item_id})

    let managers = item.managers || [];
      if(managers.indexOf(user) > -1){
        managers.splice(managers.indexOf(user), 1) 
        return await Schedule.updateOne({id: schedule_item_id}, {$set: {managers}})

      }else{
        return new Error("User not in managers")
      }
  
  }

  async updateQuoteSchedule(id: string, quote: any, start: any, end: any){
    var schedule = {
      quote: quote,
      startDate: start,
      endDate: end
    }

    return await QuoteSchedule.updateOne({id}, {$set: schedule}, {upsert: true})
  }

  async deleteQuoteSchedule(id: string){
    return await QuoteSchedule.remove({id})
  }

  planSchedule(owner: string, job: any, start: any, end: any, cb: any){
    start = moment(new Date(start))
    end = moment(new Date(end))
    let days : any[] = []
    console.log(`Planning: ${start.format("DD/MM/YYYY")}->${end.format("DD/MM/YYYY")}`)
    console.log(`Days: ${end.diff(start, 'days')}`)

    let dayNum = Math.abs(end.diff(start, 'days'));
    for(var i = 0; i <= dayNum; i++){
      let cur = start.clone().add(i, 'days')
      days.push(cur.set(12, 'hours').valueOf())
    }
    console.log(days);
    async.each(days, (item, cb) => {
      this.insertScheduleItem(owner, job.id, [], [], [], item)
    }, (err) => {
      cb(err, days)
    })
  }

  async scheduleQuote(quote: any, start: Date, end: Date, calendar: any){
    var schedule = new QuoteSchedule({
      id: v4(),
      quote: quote,
      startDate: start,
      endDate: end,
      type: calendar
    })

    return await schedule.save();
  }

  async getQuoteSchedule(start: any, end: any){
    var query = {
      'startDate': {$lte: end},
      'endDate': {$gte: start}
    }

    return await QuoteSchedule.find(query)
  }

  async updateOrder(order: any, ts: any){
    return await ScheduleOrder.updateOne({
      ts: ts
    }, {ts: ts, order: order}, {upsert: true})
  }

  async findOrder(ts: any){
    const order = await ScheduleOrder.findOne({ts: ts})
    return order || {ts: ts, order: {}}
  }

  /*Gets all the scheduled items from the database*/
  async getScheduleItems(){
    return await Schedule.find({})
  }

  async getScheduleItemsforStaff(emp: any, date: any){
    var query = {
      'date': {$gte: date.start, $lte: date.end}
    }

    const result = await Schedule.find(query)

      var res = [];
      for(var i = 0; i < result.length; i++){
        for(var o = 0; o < result[i].employees.length; o++){
          if(result[i].employees[o].ID == emp){
            res.push(result[i]);
            break;
          }
        }
      }
    return res;
  }

  /*Gets all schedule items between two dates*/
  async getScheduleItemsByDate(date: { start: any; end: any; }){
    var query = {
      'date' : {$gte : new Date(date.start), $lte : new Date(date.end)}
    };     

    return await Schedule.find(query)
  }

  async getScheduleItemsByJob(jobId: any){
    var query = {
      'job' : jobId
    };
    return await Schedule.find(query)
  }


  /*Gets all schedule items with matching job id's*/
  async getScheduleItemsById(id: string){
    return await Schedule.find({'job.id' : parseInt(id)})
  }

  /*Inserts a schedule item in the database*/
  async insertScheduleItem(owner: string, jobID: string, employees: never[], plant: never[], notes: never[], dateTS: any){	

    const newSchedule = new Schedule({
      owner,
      id: v4(),
      job: jobID,
      employees,
      managers: [],
      plant,
      notes,
      date: dateTS
    })

    return await newSchedule.save()

  }


  /*Updates an already existing schedule item in the MongoDB instance*/
  async updateScheduleItem(owner: any, id: any, jobID: any, employees: any, plant: any, notes: any, dateTS: any){
    const item = await Schedule.findOne({id: id}) 

      if(item && (item.owner == owner || (item.managers || []).indexOf(owner) > -1)){
        var replacement = {
          date : dateTS,
          employees : employees,
          plant : plant,
          notes : notes,
          job : jobID,
          id : id
        };
        console.log(replacement); 
        
        return await Schedule.updateOne({id : id}, {$set: replacement}) 
      }else{
        return new Error("You lack the permissions to update this item")
      }
    
  }

  /*Removes the scheduled item from the database*/
  async removeScheduleItem(id: any, user: any){
    const item = await Schedule.findOne({id: id})

    if(item && (item.owner == user || item.managers.indexOf(user) > -1)){
      return await Schedule.remove({id : id})
      }else{
        return new Error("You lack the permissions to remove this item")
      }
  
  }

  // attachStaffPhoto(staff_id: string, photo_id: string, cb: any){
  //   this._db.collection('staff_info').update({id: staff_id}, {$set: {
  //     photo: photo_id
  //   }}, {upsert: true}, cb)
  // }

  // fetchStaffContact(employee: { ID: any; }, cb: { (err: any, dets: any): void; (err: any, dets: any): void; }){
  //   this._db.collection('staff_info').findOne({id: employee.ID}, cb)
  // }


  // updateStaffContact(org_id: any, employee: { ID: any; }, contact_info: any, name: any, cb: any){
  //   this._db.collection('staff_info').update({id: employee.ID}, {$set: {organisation: org_id, name: name, contact: contact_info}}, {upsert: true}, cb)
  // }

  /*Returns all staff from the database vw_Sched_Staff*/
  async getStaff(){
    const request = new sql.Request(this.pool);
    const result = await request.query('select * from dbo.vw_Sched_Staff')
    return result.recordset
  }

  /*Returns all jobs from vw_Sched_Jobs*/
  async getJobs(){
    const request = new sql.Request(this.pool)
    const result = await request.query("select * from dbo.vw_Sched_Jobs WHERE status='Job Open' OR status='Handover'")
    return result.recordset
  }

  async getJobByID(id: any){
    var request = new sql.Request(this.pool);
    request.input('jobID', sql.Int, id);
    const result = await request.query("SELECT * FROM dbo.vw_Sched_Jobs WHERE (status='Job Open' OR status='Handover') AND JobID=@jobID")
    return result.recordset;
  }

  /* Requests all jobs between a calculated endpoint, endpoint is calculated from checking the DurationType
   * and adding the Duration to it from the start date*/
  async getJobsByDate(date: { start: any; end: any; }){
    var request = new sql.Request(this.pool);
    request.input('startTime', sql.VarChar, date.start);
    /* The following conversion for months assumes a 30 day month */
    request.input('endTime', sql.VarChar, date.end);
    const result = await request.query(`
    select * from dbo.vw_Sched_Jobs WHERE (status='Handover' OR status='Job Open') AND 
            CONVERT(date, StartDate, 103) <= CONVERT(date, @endTime, 103) AND 
            CASE 
                WHEN DurationType = 'Weeks'    THEN DATEADD(DAY, CONVERT(int, CEILING(CAST(Duration AS FLOAT) * 7)), CONVERT(date, StartDate, 103)) 
                WHEN DurationType = 'Man Days' THEN DATEADD(HOUR, CONVERT(int, CEILING(CAST(Duration AS FLOAT) * 24)), CONVERT(datetime, StartDate, 103)) 
                WHEN DurationType = 'Months'   THEN DATEADD(DAY, CONVERT(int, CEILING(CAST(Duration AS FLOAT) * 30)), CONVERT(date, StartDate, 103)) 
            END >= CONVERT(date, @startTime, 103)`)
    return result.recordset;
  }

  /**
   * MongoDB records
   **/
  /*a couple mongo things for storing jobs in the mongo instance & elaborating on their structure
  instead of keeping inside sql */
  async getJob(job_id: any, cb: (arg0: any, arg1: any) => void){
    console.log("Get job", job_id);
    return await Project.findOne({id: job_id})
  }

  async updateFileForJob(job_id: any, file_id: any, file_details: { name: any; status: any; }, cb: any){
    let update : any = {}
    if(file_details.name){
      update["files.$.name"] = file_details.name
    }
    if(file_details.status){
      update["files.$.status"] = file_details.status
    }

    return await Project.updateOne({
      id: job_id,
      "files.id": file_id
    }, {
      $set: update
    })
  }

  async removeFileFromJob(job: any, file: string, cb: (arg0: any) => void){
    const result =  await Project.updateOne({id: job},  {$pull: {files: {id: file}}})
 
    const file_remove = await this.fileManager?.remove(file)

    return result;
  }


  async addFileToJob(job: string, file: { id: any; name: any; extension: any; mimetype: any; uploader?: any; uploaderName?: any; uploadedAt?: number; }, uploader: { id: any; name: any; }){
    let uploadDate = new Date();
    var _file : any = {
      id: file.id, 
      name: file.name, 
      extension: file.extension,
      mimetype: file.mimetype,
      uploader: uploader.id, 
      uploaderName: uploader.name, 
      uploadedAt: uploadDate.getTime()
    };

    return await Project.updateOne({id: job}, {$push: {files: _file}}, {upsert: true});
  }



  // async commentJob(org: any, name: any, job: any, comment: any, cb: (arg0: any) => void){
  //   const _job = await Project.findOne({id: job}) 
  //     if(_job){

  //       var comments = (_job.discussion) ? _job.discussion : [];
  //       console.log("Comments", comments);
  //       comments.push({commenter: name, message: comment, ts: Date.now()});
  //       console.log(comments);
  //       var update = {$set: {discussion: comments}};
  //       console.log(update);
  //       return await Project.updateOne({id: _job.id}, update, {upsert: true}); 
  //     }else{
  //       return new Error(err);

  //     }
  // }

  async updateJob(id: any, job: any){
    return await Project.updateOne({id : id}, {$set: job}, {upsert:true})
  }

  /* ###### Organizations and associated employees ###### */
  // getOrgUsers(cb: (arg0: any, arg1: any) => void) {
  //   this._db.collection('org_users').find({}).toArray((err: any, emps: any) => {
  //     cb(err, emps);
  //   });
  // }

  getOrganizations(cb: (arg0: any, arg1: any) => void) {
  
    // this._db.collection('orgs').find({}).toArray((err: any, orgs: any) => {
    //   cb(err, orgs);
    // });
  }

  
  createOrganization(org: { name: any; address: any; contact: any; email: any; emp_size: any; pass_hash: any; }, cb: (arg0: any, arg1: any) => void){
    // var newUser = {
    //   org_id : uuid(),
    //   org_ref_id : uuid(),
    //   org_name : org.name,
    //   org_address : org.address,
    //   org_contact : org.contact,
    //   org_email : org.email,
    //   org_emp_size : org.emp_size,
    //   org_auth_emp : [],
    //   org_emp : [],
    //   org_ref_links : [],
    //   org_pass_hash : org.pass_hash,
    //   org_token : ''
    // }
    // this._db.collection('orgs').insertOne(newUser, (err: any, res: any) => {
    //   cb(err, res);
    // });
  }

  async getUser(email : string){
    return await User.findOne({email})
  }

  async getUsers(organisation: string){
    return await User.find({organisation: organisation})
  }

  async updateUser(id: string, user: any){
    return await User.updateOne({id: id}, {$set: user});
  }   

  async resendUserInvite(id: any, inviter: { name: any; }){
    const user = await User.findOne({id: id})
      if(user){

        let token = this.sign({id: id}, {expiresIn: '12h'});
        let action_url = `${this.BASE_URL}/invite/${id}?token=${token}`;

        // let mailRecord = {
        //   from: '"WorkHub" <support@workhub.services>',
        //   to: user.email,
        //   subject: "Welcome to Pencil In",
        //   text: `Hi ${user.name}, \n\n${inviter.name} has invited you to join Pencil In, sign up at the link below; it will expire in 12 hours \n\n ${action_url}`,
        //   html: this.mail.templates.invite(user.name, inviter.name, action_url)
        // }

        return await new Promise((resolve, reject) => {
          // this.mail.send(mailRecord, (err: any, info: any) => {
          //   console.log("SMTP", err, info);
          //   if(err) return reject(err);
          //   resolve(id)
          // });
        })
      }else{
        return new Error("No such user found")
      }
    
  }

  async inviteUser(org: any, invitee: { name: string; email: string; readonly: any; type: any; }, inviter: { name: any; }){
    console.log(org, invitee);
    let name = invitee.name.split(' ')[0],
      id = v4(),
      userRecord = {
        id: id,
        name: invitee.name,
        email: normaliseUsername(invitee.email),
        active: false,
        organisation: org,
        readonly: invitee.readonly,
        type: invitee.type || "user"
      },
      token = this.sign({id: id}, {expiresIn: '12h'}),
      action_url = `${this.BASE_URL}/invite/${id}?token=${token}`;
    // let mailRecord = {
    //   from: '"WorkHub" <support@workhub.services>',
    //   to: invitee.email,
    //   subject: 'Welcome to WorkHub',
    //   text: `Hi ${name}, \n\n${inviter.name} has invited you to join WorkHub, sign up at the link below; it will expire in 12 hours \n\n ${action_url}`,
    //   html: this.mail.templates.invite(name, inviter, action_url)
    // };

    const newUser = new User(userRecord)

    await newUser.save()

    return await new Promise((resolve, reject) => {

        // this.mail.send(mailRecord, (err: any, info: any) => {
        //   console.log("SMTP", err, info);
        //   if(err) return reject(err);
        //   resolve(id)
        // });
    })
   
    
  }

  async deleteUser(id: string, user: string){
    return await User.remove({id: user, organisation: id})
  }

  //Authenticate a phone number supplied by firebase auth with the phone
  //numbers registered for staff in mongodb
  async authenticatePhone(number: string, cb: any){
   // this._db.collection('staff_info').findOne({"contact.number": number}, cb)
  }

  async authenticateUser(login: {username: string, pass_hash: string}){
    var username = normaliseUsername(login.username);
    var pass_hash = login.pass_hash;

    return await User.findOne({
      active: true,
      email: username,
      password: pass_hash
    })

  }


  async getUploadsByUserID(userID: string) {
    const results = await Project.find({'files.uploader': userID})
    
    if (!results) return new Error( "No results");
      let filesEntries = results.map((x: any) => x.files.map((file: any) => Object.assign({jobId: x.id}, file) ))
      let flatFiles: any[] = [];
      filesEntries.forEach((filesEntry: any) => {
        flatFiles = flatFiles.concat(filesEntry);
      });
      let filteredFiles = flatFiles.filter((file) => (file.uploader === userID));
      return filteredFiles;
  }

  addAnalyticsRecord(record: any, cb: any) {
   // this._db.collection('analytics').insertOne(record, cb);
  }

  /**
   * Minio requests
   **/

  uploadFiles(files: any[]){
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

      const upload_result = await this.fileManager?.add(file.buffer)

      _file['id'] = upload_result?.cid.toString();
      return _file;
    }))
  }


  async getJobFile(cid: string) {
    return await this.fileManager?.get(cid)
  }

  getStaffPhoto(staffID: string, cb: any) {
    // this.fetchStaffContact({ID: staffID}, (err: any, dets: any) => {
    //   if (dets && dets.photo) {
    //     this.minioClient.getObject('pencilin',
    //       'staff-photos/' + dets.photo,
    //       (err: any, stream: any) => {
    //         if (err || !stream) {
    //           console.log(err || "WARN: [getStaffPhoto] minio failed to return a stream");
    //           return cb(err || {error: "No stream"});
    //         }
    //         cb(err, stream);
    //       });
    //   } else {
    //     cb({error: "No such photo"});
    //   }
    // });
  }


  // putStaffPhoto(staffID: string, buffer: any, cb: any) {
  //   let id = v4();
  //   this.minioClient.putObject('pencilin',
  //     'staff-photos/' + id,
  //     buffer,
  //     (err: any, etag: any) => {
  //       if (err) return cb(err);
  //       this.fetchStaffContact({ID: staffID}, (err: any, dets: any) => {
  //         if (dets && dets.photo) {
  //           this.minioClient.removeObject('pencilin', 'staff-photos/' + dets.photo, (err: any) => {
  //             this.attachStaffPhoto(staffID, id, cb);
  //           });
  //         } else {
  //           this.attachStaffPhoto(staffID, id, cb);
  //         }
  //       });
  //     });
  // }
}
