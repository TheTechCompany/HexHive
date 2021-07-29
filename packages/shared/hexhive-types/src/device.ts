import { IDevice } from './types'
import { model, Types, Document, Schema } from "mongoose";
import {nanoid} from 'nanoid';
const Moniker = require('moniker');
//import { ProgramSchema } from './program'

const DeviceSchema: Schema = new Schema({
    name: {type: String},
    connected: Boolean,
    lastSeen: Date,
    network_name: {type: String, default: Moniker.choose},
    did: {type: String, default: nanoid}, //Device ID
    program: { type: Types.ObjectId, ref: 'Program' },
    location: {type: String}
})


export default model<IDevice>('Device', DeviceSchema)
