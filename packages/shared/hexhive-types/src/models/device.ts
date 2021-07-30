import { IDevice } from '../interfaces/device'
import mongoose from "mongoose";
import {nanoid} from 'nanoid';
const Moniker = require('moniker');
//import { ProgramSchema } from './program'

const DeviceSchema: mongoose.Schema = new mongoose.Schema({
    name: {type: String},
    connected: Boolean,
    lastSeen: Date,
    network_name: {type: String, default: Moniker.choose},
    did: {type: String, default: nanoid}, //Device ID
    program: { type: mongoose.Types.ObjectId, ref: 'Program' },
    location: {type: String}
})


export const Device = mongoose.models['Device'] ? mongoose.models['Device'] : mongoose.model<IDevice>('Device', DeviceSchema)
