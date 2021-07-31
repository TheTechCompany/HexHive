import { model, Schema } from "mongoose"

export interface ScheduleInterface {
    id?: string;
    owner: string;
    job: {
        id?: string;
        name?: string
    }
    employees: {
        ID?: string;
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
    id: String,
    owner: String,
    project: String,
    people: [String],
    managers: [{type: Schema.Types.ObjectId, ref: 'User'}],
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
