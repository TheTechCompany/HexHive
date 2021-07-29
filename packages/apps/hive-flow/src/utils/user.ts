import { store } from '../store';
var conf = require('../conf');


export function getAll(){
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + '/api/users', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token, 
      'Content-Type': 'application/json'
    }   
  }).then((r) => r.json())
}

export function activate(password: string, token: string){
  return fetch(`${conf.baseURL}/api/profile/activate`, {
    method : 'POST',
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

export function resendInvite(id: string){
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(`${conf.baseURL}/api/users/resend-invite`, {
    method: "POST", 
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
    })
  }).then((r) => r.json())
}

export function invite(invite: {name: string, email: string, readonly?: boolean, type: string}){
  const { name, email, readonly, type } = invite;
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + "/api/users/invite", {
    method: "POST",
    headers: {
      'Authorization': 'Bearer ' + token, 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        name: name,
        email: email,
        readonly: readonly,
        type: type
      }
    })
  }).then((r) => {
    return r.json();
  });
}


export function update(userId: string, user :any){
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + "/api/users/" + userId, {
    method: "PUT",
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: user
    })
  }).then((r) => {
    return r.json();
  })
}



export function remove(id: string){
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + "/api/users/" + id, {
    method: "DELETE",
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  }).then((r) => r.json());
}
