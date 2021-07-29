var conf = require('../conf');


export function firebase(idToken: string){
  return fetch(conf.baseURL + '/mobile_auth', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      idToken: idToken
    })
  }).then((r) => r.json())
}

export function email(user: string, pass: string){
  return fetch(conf.baseURL + '/authenticate', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: user,
      password: pass
    })
  }).then((r) => r.json())
}
