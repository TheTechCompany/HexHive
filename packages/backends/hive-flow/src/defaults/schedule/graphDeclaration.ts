import { schemaComposer } from "graphql-compose"
import equipment from "../equipment"


const ScheduleItemInputTC = schemaComposer.createInputTC({
    name: 'ScheduleItemInput',
    fields: {
        project: "String",
        people: "[String]",
        equipment: "[String]",
        notes: "[String]",
        managers: "[String]",
        date: "Date"
    }
})

// const CustomerTC = schemaComposer.createObjectTC({
//     name: 'Customer',
//     fields: {
//         id: "ID",
//         name: "String"
//     }
// })

const ScheduleItemTC = schemaComposer.createObjectTC({
    name: 'ScheduleItem',
    fields: {
        id: "ID",
        date: "Date",
        project: {
            type: "Project"
        },
        people: {
            type: "[People]"
        },
        managers: {
            type: "[User]"
        },
        notes: "[String]",
        equipment: {
            type: "[Equipment]"
        }
    }
})

export {
    ScheduleItemInputTC,
    ScheduleItemTC
} 