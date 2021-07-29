import { IStack } from "./types";
import { model, Document, Schema } from "mongoose";
//import { ProgramSchema } from './program'

const StackPort : Schema = new Schema({
    name: {type: String},
    x: {type: Number},
    y: {type: Number},
    rotation: {type: Number},
    type: { type : String} 
})

const IOMap = new Schema({
    name: String,
    type: String,
    typeData: Schema.Types.Mixed
})

const StackDimension = new Schema({
    width: Number,
    height: Number
})

const StackItem : Schema = new Schema({
    key: {type: String},
    name: {type: String},
    type: String,
    dimensions: { type: StackDimension },
    inputs: {type: Array, of: IOMap},
    outputs: {type: Array, of: IOMap},
    actions: {type: String},
    ui: {type: String},
    ports: {type: Array, of: StackPort}
    
})

const StackSchema: Schema = new Schema({
    name: {type: String},
    items: {type: Array, of: StackItem},
    program: { type: String },
    location: {type: String}
})

export default model<IStack>('Stack', StackSchema)
