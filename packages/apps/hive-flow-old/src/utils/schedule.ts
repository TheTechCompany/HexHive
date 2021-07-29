import moment from 'moment';
import MockData from './mockData.js';
import { store }  from '../store';

var conf = require('../conf');

const serverUrl = conf.baseUrl;

export function join(itemId: string){
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + '/api/schedule/' + itemId + '/join', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token 
    }
  }).then((r) => r.json())
}

export function leave(itemId: string){
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + '/api/schedule/' + itemId + '/leave', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token 
    }
  }).then((r) => r.json())
}

export function remove(itemId: string){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + "/api/schedule/" + itemId, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token 
    }
  }).then((r) => r.json())
}

export function update(schedule: any){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + '/api/schedule/' + schedule.id, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token 
    },
    body: JSON.stringify(schedule)
  }).then((resp) => {  
    return resp.json();
  });
}

export function create(scheduleEntry: any){
  //Now setup the post & add specified id if editing

  if(scheduleEntry.job.id){
    scheduleEntry.job.id = parseInt(scheduleEntry.job.id)
  }
  const endpoint = `${conf.baseURL}/api/schedule`; 

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  var postContent = {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer ' + token 
    },
    body : JSON.stringify(scheduleEntry)
  } 
  return fetch(endpoint, postContent).then((res)=>{
    return res.json();
  })
}
export function getForStaff(staffId: string, start: number, end: number){
  
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')

  return fetch(`${conf.baseURL}/api/schedule?staffId=${staffId}&startDate=${start}&endDate=${end}`, {
    method: "GET",
    headers: {
      "Content-Type": 'application/json',
      'Authorization': "Bearer " + token
    } 
  }).then((r) => {
    return r.json();
  });
}

export function getForToday(time: Date){
  let startDate = moment(time).startOf('isoWeek').valueOf()
  let endDate = moment(time).endOf('isoWeek').valueOf()

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/schedule?startDate=${startDate}&endDate=${endDate}`, {
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer ' + token 
    },
  }).then((res) => {
    return res.json();
  });
}

export function getScheduleByDate(params: moment.Moment[]){ 
  let startDate = params[0].valueOf();
  let endDate = params[1].valueOf();
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')

  var req = {
    method : 'GET',
    headers : {
      "Content-Type" : "application/json",
      'Authorization': "Bearer " + token 
    }
  };
  return fetch(`${conf.baseURL}/api/schedule?startDate=${startDate}&endDate=${endDate}`, req).then((res) => {
    return res.json();
  });
};

export function getScheduleByMonth(m: any){
  var req = {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      startDate: m.startOf('month').valueOf(),
      endDate: m.endOf('month').valueOf()
    })
  } 
  return fetch(conf.baseURL + "/schedule/bymonth", req).then((res) => {
    return res.json();
  });

}
