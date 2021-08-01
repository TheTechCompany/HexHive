import axios from "axios";
import {fileActions} from './files'

const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN');

const inst = axios.create({
    baseURL: process.env.REACT_APP_API || 'http://localhost:8081',
    headers: {
        'Authorization': 'Bearer ' + token
    }
})

const files = fileActions(inst)

export {
    files
}
