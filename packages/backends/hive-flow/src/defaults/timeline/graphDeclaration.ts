import { schemaComposer } from "graphql-compose"
import equipment from "../equipment"


const TimelineItemItemsInput = schemaComposer.createInputTC({
    name: 'TimelineItemItemsInput',
    fields: {
            type: "String",
            location: "String",
            estimate: "Float"
    }
})

const TimelineItemInput = schemaComposer.createInputTC({
    name: 'TimelineItemInput',
    fields: {
        timeline: "String",
        startDate: "Date",
        endDate: "Date",

        project: "String",
        items: "[TimelineItemItemsInput]"
    }
})

// const CustomerTC = schemaComposer.createObjectTC({
//     name: 'Customer',
//     fields: {
//         id: "ID",
//         name: "String"
//     }
// })

const TimelineItemItems = schemaComposer.createObjectTC({
    name: 'TimelineItemItems',
    fields: {
            type: "String",
            location: "String",
            estimate: "Float"
    }
})

const TimelineItemTC = schemaComposer.createObjectTC({
    name: 'TimelineItem',
    fields: {
        id: "ID",
        timeline: "String",
        startDate: "Date",
        endDate: "Date",
        items: "[TimelineItemItems]",
        project: {
            type: "Project",
            resolve: async (root, args, context, info) => {
                return await schemaComposer.Query.getField('ProjectById')?.resolve?.({}, {id: root.project}, context, info)
                console.log(root, args)
            }
        }
    }
})

export {
    TimelineItemInput,
    TimelineItemTC
} 