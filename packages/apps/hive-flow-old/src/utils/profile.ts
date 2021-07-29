import { store } from '../store';
var conf = require('../conf');

export function updatePassword(password: string){
  
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/profile/password`, {
    method : 'PUT',
    credentials: 'include',
    headers : {
      'Authorization': 'Bearer ' + token,
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      password: password
    })
  }).then(r => {
    return r.json();
  })
}

export function getUploads(){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/profile/uploads`, {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  }).then((r) => r.json())
}
