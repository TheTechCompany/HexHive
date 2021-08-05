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

const TimelineProjectInput = schemaComposer.createInputTC({
    name: 'TimelineProjectInput',
    fields: {
        id: 'ID',
        type: 'String'
    }
})

const TimelineItemInput = schemaComposer.createInputTC({
    name: 'TimelineItemInput',
    fields: {
        timeline: "String",
        startDate: "Date",
        endDate: "Date",
        project: "TimelineProjectInput",
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

const TimelineProject = schemaComposer.createObjectTC({
    name: 'TimelineProject',
    fields: {
        id: 'ID',
        name: 'String',
        type: 'String'
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
            type: "TimelineProject",
            resolve: async (root, args, context, info) => {
                let project;
                if(root.project && root.project.type == "Project"){
                    project = await schemaComposer.Query.getField('ProjectById')?.resolve?.({}, {id: root.project.id}, context, info)
                    if(project) project.type = "Project";
                }else if(root.project && root.project.type == "Estimate"){
                    project = await schemaComposer.Query.getField('QuoteById')?.resolve?.({}, {id: root.project.id}, context, info)
                    if(project) project.type = "Estimate";
                }
                return project
            }
        }
    }
})

export {
    TimelineItemInput,
    TimelineItemTC
} 