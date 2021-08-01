import { Document } from 'mongoose'

export interface IFile {
    id?: string;
    cid?: string;
    name?: string;
    mimeType?: string;
    extension?: string;
    timestamp?: Date;
    status?: string;
    owner?: {
        name: string
    }
}