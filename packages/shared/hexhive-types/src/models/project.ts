import { Schema, model, Document } from 'mongoose';
import { IFile } from '../interfaces/file';


export interface ProjectInterface  {
    _id?: string;
    id?: string;
    name?: string;
    files?: IFile[]
    startDate?: Date;
    endDate?: Date;
}

export const Project = new Schema<ProjectInterface>({
    id: String,
    name: String,
    files: [{ type: Schema.Types.ObjectId, ref: 'File' }],
    startDate: Date,
    endDate: Date
})

const LegacyProject = new Schema({
    id: String,
    name: String,
    files: [{
        id: String,
        name: String,
        extension: String,
        mimetype: String,
        uploader: String,
        uploaderName: String,
        uploadedAt: Date,
        status: String
    }]
})

export const ILProject = model('Job', LegacyProject)

export const IProject = model<ProjectInterface>('Project', Project)