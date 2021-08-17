import {connect, disconnect, Schema} from 'mongoose';

export * from './device';
import Program, {FlowShard} from './program';
import Stack from './stack'
import {DNS} from './dns'
import { IProject } from './project';
import { User, Organisation } from './user';
import {TimelineItem} from './timeline'
import { File } from './file';
import { QuoteSchedule, ScheduleItem, ScheduleOrder } from './schedule';
import { ClientApp } from './client_app'
import { AuthorizationCode } from './authorization_code';
import { AccessToken } from './access_token';
import { App } from './app';
import { HiveDoc } from './document';

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


export {
    FlowShard,
    Program,
    AuthorizationCode,
    AccessToken,
    App,
    HiveDoc,
    Stack,
    DNS as DNSRecord,
    IProject as Project,
    ClientApp,
    User,
    Organisation,
    File,
    ScheduleItem,
    QuoteSchedule,
    TimelineItem,
    ScheduleOrder
}

