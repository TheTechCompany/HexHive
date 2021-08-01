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
        owner: "String",
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
            type: "Project",
            resolve: async (root, args, context, info) => {
                return await schemaComposer.Query.getField('ProjectById')?.resolve?.({}, {id: root.project}, context, info)
                console.log(root, args)
            }
        },
        people: {
            type: "[String]"
        },
        managers: {
            type: "[String]"
        },
        owner: "User",
        notes: "[String]",
        equipment: {
            type: "[String]"
        }
    }
})

export {
    ScheduleItemInputTC,
    ScheduleItemTC
} 