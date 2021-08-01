import { model, Schema } from "mongoose"

export interface ScheduleInterface {
    id?: string;
    owner: {
        id: string;
        name: string
    };
    job: {
        id?: string;
        name?: string
    }
    employees: {
        id?: string;
        Name?: string;
    }[]
    managers: string[]
    plant: string[]
    notes: string[]
    date: number;
}

const Job = new Schema({
    id: String,
    name: String
})

const Employee = new Schema({
    ID: String,
    Name: String
})

const Plant = new Schema({
    ID: String,
    Name: String,
    Registration: String
})

export const ScheduleItemSchema = new Schema<ScheduleInterface>({
    project: String,
    people: [String],
    managers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    equipment: [String],
    notes: [String],
    date: Date
})

export const QuoteScheduleSchema = new Schema({
    id: String,
    quote: String,
    startDate: Date,
    endDate: Date,
    type: String
  })

export const ScheduleOrderSchema = new Schema({
    ts: Date,
    order: Map
})

export const QuoteSchedule = model('QuoteSchedule', QuoteScheduleSchema)

export const ScheduleOrder = model('ScheduleOrder', ScheduleOrderSchema)

export const ScheduleItem = model('ScheduleItem', ScheduleItemSchema)
