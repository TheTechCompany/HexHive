import { model, Types, Document, Schema } from "mongoose";
import {nanoid} from 'nanoid';
//import { ProgramSchema } from './program'

const DeviceValueSchema: Schema = new Schema({
    device: {type: String},
    deviceId : {type: String},
    value : {type: String},
    valueKey : {type: String}
})


export default model<{device: string, deviceId: string, value: string, valueKey: string}>('DeviceValue', DeviceValueSchema)
