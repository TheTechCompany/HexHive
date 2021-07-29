import { IProgram, IProgramIO } from './types'
import { model, Schema, Document, Types, mongo } from 'mongoose'


const SubprocessSchema : Schema = new Schema({
    id: String,
    label: {type: String},
    nodes: {type: Map},
    links: {type: Map},
})

const ProcessNode : Schema = new Schema({
    id: { type: String },
    label: { type: String },
    ports: {type: Array},
    type: { type: String},
    x: { type: Number },
    y: { type: Number }
})

const ProcessLinkPoint : Schema = new Schema({
    id: { type: String },
    type: { type: String },
    x: { type: Number },
    y: { type: Number } 
})

const ProcessLink : Schema = new Schema({
    type: String,
    width: Number,
    source: {type: String},
    sourcePort: { type: String },
    target: { type: String },
    targetPort: { type: String },
    points: { type: [ProcessLinkPoint]}
})

const ProgramIO = new Schema({
    name: {type: String},
    type: String,
})

const ProgramHMINode : Schema = new Schema({
    id: 'String',
    type: 'String',
    extras: Map,
    ports: {type: Map},
    x: { type: Number },
    y: { type: Number }
})

const ProgramHMIPoint : Schema = new Schema({
    x: 'Number',
    y: 'Number'
})

const ProgramHMIPath : Schema = new Schema({
    id: 'String',
    type: 'String',
    source: 'String',
    sourceHandle: 'String',
    target: 'String',
    targetHandle: 'string',
    points: { type: Array, of: ProgramHMIPoint }
})


const ProcessSchema : Schema = new Schema({
    id: String,
    name: {type: String},
    nodes: {type: Array, of: ProgramHMINode, default: []},
    paths: {type: Array, of: ProgramHMIPath, default: []},
    processes: [{type: Types.ObjectId, ref: 'Process'}],
    program: {type: Types.ObjectId, ref: 'Program'}
})


const IFlowShard : Schema  =  new Schema({
    name: String,
    parent: {type: Types.ObjectId, ref: 'FlowShard'},
    program: {type: Types.ObjectId, ref: 'Program'},
    nodes: {type: Array, of: ProgramHMINode, default: []},
    paths: {type: Array, of: ProgramHMIPath, default: []},
    items: [{type: Types.ObjectId, ref: 'FlowShard' }]
})

const ProgramSchema : Schema = new Schema ({
    name: { type: String },
    plugins: {type: Array, of: 'Stack'},
    hmi: ['FlowShard'],
    program: ['FlowShard'],
    io: {type: Array, of: ProgramIO},
})

export const FlowShard = model('FlowShard', IFlowShard)

export default model<IProgram>('Program', ProgramSchema)