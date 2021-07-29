import axios from 'axios';

import programActionFactory from './program'
import deviceActionFactory from './device'
import stackActionFactory from './stack';

const inst = axios.create({
    baseURL: process.env.REACT_APP_API || 'http://localhost:8080'
})

const programActions = programActionFactory(inst)
const deviceActions = deviceActionFactory(inst)
const stackActions =  stackActionFactory(inst)

export {
    deviceActions,
    programActions,
    stackActions
}

