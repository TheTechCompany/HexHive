import { store } from '../store';
var conf = require('../conf');


export function getAll(){

  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')
  return fetch(conf.baseURL + '/api/quotes', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }).then((res) => {
    return res.json();
  })
}

export async function fetchMonthQuotes(yr: any){
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')

  return fetch(conf.baseURL + `/api/quotes?year=${yr}`, { 
    method : "GET", 
    headers : {
      "Content-Type" : "application/json",
      'Authorization': 'Bearer ' + token
    }
  }).then((res) => {
    console.log('Fetched new quotes for: ' + yr);
    return res.json();
  });
}
