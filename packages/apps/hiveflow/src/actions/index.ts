import axios from "axios";
import {fileActions} from './files'
import scheduleActions from './schedule';
const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN');

const inst = axios.create({
    baseURL: process.env.REACT_APP_API || 'http://localhost:8081',
    headers: {
        'Authorization': 'Bearer ' + token
    },
    withCredentials: true
})

const files = fileActions(inst)
const schedule = scheduleActions(inst)

export {
    files,
    schedule
}
