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

export const Schedule = new Schema<ScheduleInterface>({
    id: String,
    owner: String,
    job: Job,
    employees: [Employee],
    managers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    plant: [Plant],
    notes: [String],
    date: Number
})

export const QuoteSchedule = new Schema({
    id: String,
    quote: String,
    startDate: Date,
    endDate: Date,
    type: String
  })

export const ScheduleOrder = new Schema({
    ts: Date,
    order: Map
})

export const IQuoteSchedule = model('QuoteSchedule', QuoteSchedule)

export const IScheduleOrder = model('ScheduleOrder', ScheduleOrder)

export const ISchedule = model('Schedule', Schedule)
