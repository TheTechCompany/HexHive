import moment from 'moment'
import { store } from '../store';
var conf = require('../conf');


export function getStatus(details: any){
    let status = 'VALID';
    if(details){
    let check = details.cof == "Yes" ? details.cofExpiry : details.wofExpiry;
    let reg = details.regoExpiry;
    
    let timeTillCheckExpiry = moment(new Date(check)).diff(moment(), 'weeks');
    let timeTillRegoExpiry = moment(new Date(reg)).diff(moment(), 'weeks');
    if(timeTillCheckExpiry != NaN || timeTillRegoExpiry != NaN){
      if(timeTillCheckExpiry <= 0 || timeTillRegoExpiry <= 0) status = 'EXPIRED';
        if((timeTillCheckExpiry < 2 && timeTillCheckExpiry > 0) || (timeTillRegoExpiry < 2 && timeTillRegoExpiry > 0)){
          status = 'EXPIRING';
        }
    }
      if(details.ruc == "Yes"){
        if(details.odometerReading && details.odometerReading > details.rucExpiry) status = 'EXPIRED';
      }
    }
    return status;
}

export function getHistory(plate: any){

  let token = store.getState().auth.token ;
  return fetch(conf.baseURL + "/api/plant/" + plate + "/history", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }).then((r) => r.json())
}

export function updateDetails(plate: any, type: any, details: any){

  let token = store.getState().auth.token ;
  return fetch(conf.baseURL + '/api/plant/' + plate + "/details", {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ token
    },
    body: JSON.stringify({
      updateType: type,
      details: details
    })
  }).then((r) => r.json())
}

export function getDetails(plate: any){

  let token = store.getState().auth.token ;
  return fetch(conf.baseURL + '/api/plant/' + plate + "/details", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }).then((r) => r.json())
}

export function finishRequest(plate: any, id: any, state: any){

  let token = store.getState().auth.token ;
  let url = `${conf.baseURL}/api/plant/${plate}/service-requests/${id}`
  let method = (state) ? 'PUT' : 'DELETE';
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }).then((r) => r.json());
}

export function getRequests(plate: any){

  let token = store.getState().auth.token ;
  return fetch(conf.baseURL + "/api/plant/" + plate + "/service-requests", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token 
    }
  }).then((r) => r.json())
}

export function getAll(){
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')

  return fetch(conf.baseURL + '/api/plant', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token 
    }
  }).then((res) => {
    return res.json();
  })
}

