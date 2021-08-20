import { model, Types, Schema } from "mongoose";
import { IFile } from "../interfaces/file";


export const FileSchema = new Schema<IFile>({
    cid: String,
    name: String,
    mimeType: String,
    extension: String,
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    organisation: Schema.Types.ObjectId,
    timestamp: {type: Date, default: Date.now},
    status: String
})

/*
    File Conversion Job/Result
    Tracks information about a specifc conversion request
*/
export const FileConversionSchema = new Schema({
    file: {type: Types.ObjectId, ref: 'File'},
    pipeline: {type: Types.ObjectId, ref: 'FileConversion'},
    startedAt: "Date",
    completedAt: "Date",
    targetFormat: "String",
    completed: "Boolean",
    status: "String"
})

/*
    File Conversion Pipeline
    Wrapper around information needed to run a file conversion

    Currently AWS ECS + Fargate run jobs so information is related to Tasks/Services
*/
export const FileConversionPipelineSchema = new Schema({
    name: "String",
    task: "String",
    sourceFormats: {type: Array, of: "String"},
    targetFormats: {type: Array, of: "String"}
})

export const File = model<IFile>("File", FileSchema)

export const FileConversion = model("FileConversion", FileConversionSchema)
export const FileConversionPipeline = model("FileConversionPipeline", FileConversionPipelineSchema)
