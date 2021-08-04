import mongoose, { model, Schema } from "mongoose"
import { ITimelineItem } from "../interfaces/timeline"


export const TimelineItemElement = new Schema({
    type: String,
    location: String,
    estimate: Number
})

export const TimelineItemSchema = new Schema<ITimelineItem>({
    timeline: String,
    startDate: Date,
    endDate: Date,
    project: String,
    organisation: {type: Schema.Types.ObjectId, ref: "Organisation"},
    items: [TimelineItemElement]
})

export const TimelineItem = model('TimelineItem', TimelineItemSchema)
