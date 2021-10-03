import { model, Schema } from "mongoose"

export interface ScheduleInterface {
    id?: string;
    owner: {
        id: string;
        name: string
    };
    organisation: any;
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
    managers: [String],
    owner: String,
    equipment: [String],
    notes: [String],
    organisation: Schema.Types.ObjectId,
    date: Date
})

export const QuoteScheduleSchema = new Schema({
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
