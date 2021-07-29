import { store } from '../store';

var conf = require('../conf');

export function getAll(){
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + '/api/staff', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token 
    }
  }).then((res) => {
    return res.json();
  });
}


export function getContact(id: string){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/staff/${id}/contact`, {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + token, 
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then((r) => {
    return r.json();
  })
}

export function updateContact(id: string, name: string, contact: any){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + '/api/staff/' + id + '/contact', {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token 
    },
    body: JSON.stringify({
      name: name,
      contact: contact
    }),
    credentials: 'include'
  }).then((r) => r.json())
}

