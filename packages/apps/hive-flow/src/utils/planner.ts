import moment from 'moment';
import { store } from '../store';
const conf = require('../conf');

export function getSchedule(m: moment.Moment){
  let start = m.startOf('month').valueOf()
  let end = m.endOf('month').valueOf();

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')

  var req = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
  }

  return fetch(`${conf.baseURL}/api/planner/scheduled?startDate=${start}&endDate=${end}`, req).then((res) => {
    return res.json();
  });

}

export function getPlanned(startDate: number, endDate: number){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')

  return fetch(`${conf.baseURL}/api/planner?startDate=${startDate}&endDate=${endDate}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token
    },
  }).then((r) => {
    return r.json();
  });    
}

export function remove(id: string){
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')

  return fetch(`${conf.baseURL}/api/planner/${id}`, {
    method: "DELETE",
    headers: {
      'Authorization': 'Bearer ' + token,
      "Content-Type": "application/json"
    },
  }).then((r) =>{
    return r.json();
  });
}

export function update(id: string, quote: any){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/planner/${id}`, {
    method: "PUT",
    headers: {
      'Authorization': 'Bearer ' + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(quote)
  }).then((r) => {
    return r.json();
  });

}

export function create(quote: any){
  
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/planner`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(quote)
  }).then((r) => {
    return r.json();
  });
}
