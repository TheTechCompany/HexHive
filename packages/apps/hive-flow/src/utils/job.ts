import { store } from '../store';
var conf = require('../conf');
var moment = require('moment');



export function updateFile(jobId: string, fileId: string, details: any){
  let file = {
    ...details
  }
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + "/api/jobs/" + jobId + "/files/" + fileId, {
    method: "PUT",
    headers: {
      'Authorization': "Bearer " + token, 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      file: file
    })
  }).then((r) => r.json())
}
export function getFile(jobId: string, id: string){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/jobs/${jobId}/files/${id}`,{
    method: "GET",
    headers: {
      'Authorization': "Bearer " + token 
    }
  }).then((r) => r.blob())
}

export function uploadFiles(jobId: string, files: File[]){
  let fd = new FormData();
  for(var i = 0; i < files.length; i++){
    fd.append('files', files[i])
  }

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + "/api/jobs/" + jobId + "/files", {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token 
    },
    body: fd
  }).then((r) => r.json())    
}

export function getFiles(jobId: string){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/jobs/${jobId}/files`, {
    method: "GET",
    headers: {
      'Authorization': "Bearer " + token, 
    }
  }).then((r) => r.json());
}

export function removeFile(jobId: string, id: string){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + "/api/jobs/" + jobId + "/files/" + id, {
    method: "DELETE",
    headers: {
      'Authorization': "Bearer " + token
    }
  }).then((r) => r.json())
}

export function getAll(){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + '/api/jobs', {
    method: "GET",
    headers: {
      'Authorization': "Bearer " + token,
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    return res.json();
  })
}

export function getDetails(jobId: string){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/jobs/${jobId}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then((r) => {
    return r.json();
  })
}


export function fetchJobs(start: Date, range: number){
  let startDate = moment(start).format("DD/MM/YYYY");
  let endDate = moment(start).add(7, 'day').format("DD/MM/YYYY")

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/jobs?startDate=${startDate}&endDate=${endDate}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
  }).then((resp) => {
    return resp.json();
  });   
}

export function getDates(id: string){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/schedule?jobId=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token 
    },
  }).then((res) => {
    return res.json();
  }).then((r) => {
    return r.map((x: any) => x.date)
  });
}
