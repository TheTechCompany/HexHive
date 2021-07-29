import {connect, disconnect} from 'mongoose';

import Device from './device';
import Program, {FlowShard} from './program';
import Stack from './stack'
import DNSRecord from './dns'

let opts : any = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

if(process.env.MONGO_USER){
    opts.user = process.env.MONGO_USER
}

if(process.env.MONGO_PASS){
    opts.pass = process.env.MONGO_PASS
}

if(process.env.MONGO_AUTH_DB){
    opts.authSource = process.env.MONGO_AUTH_DB
}

export const disconnect_data = async () => {
    return await disconnect()
}

export const connect_data = () => {
    return new Promise((resolve, reject) => {
    connect(
        `mongodb://${process.env.MONGO_URL || "localhost:27017"}/${process.env.MONGO_DB || "sudbuster-test"}`, 
        opts, (err) => {
            if(err) return reject(err);
            resolve(true);
        });
    })
}


export const Models = {
    Device,
    FlowShard,
    Program,
    Stack,
    DNSRecord
}


export * as Types from './types'