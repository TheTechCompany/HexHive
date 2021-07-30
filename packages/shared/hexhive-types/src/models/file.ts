import { model, Schema } from "mongoose";


export const File = new Schema<FileInterface>({
    id: String,
    cid: String,
    name: String,
    mimeType: String,
    extension: String,
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    timestamp: Date,
    status: String
})

export interface FileInterface extends Document{
    _id?: string;
    id?: string;
    cid?: string;
    name?: string;
    mimeType?: string;
    extension?: string;
    timestamp?: Date;
    status?: string;
}

export const IFile = model<FileInterface>("File", File)
