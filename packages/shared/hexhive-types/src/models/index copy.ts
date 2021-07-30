import {connect, disconnect} from 'mongoose';
import { IFile } from './file'
import { IProject } from './project';
import { ISchedule, IQuoteSchedule, IScheduleOrder } from './schedule';
import { IUser } from './user';

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
        `mongodb://${process.env.MONGO_URL || "localhost:27017"}/${process.env.MONGO_DB || "hive-flow"}`, 
        opts, (err) => {
            if(err) return reject(err);
            resolve(true);
        });
    })
}


export const Models = {
   Project: IProject,
   User: IUser,
   File: IFile,
   Schedule: ISchedule,
   QuoteSchedule: IQuoteSchedule,
   ScheduleOrder: IScheduleOrder
}
