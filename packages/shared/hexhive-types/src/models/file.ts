import { model, Schema } from "mongoose";
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


export const File = model<IFile>("File", FileSchema)
