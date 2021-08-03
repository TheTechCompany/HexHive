import { Document } from 'mongoose'

export interface ITimelineItem extends Document{
    timeline: string;
    startDate: Date
    endDate: Date,
    project: {
        id: string,
        name: string
    }
    items: {
        type: string;
        location: string;
        estimate: number;
    }[]
}