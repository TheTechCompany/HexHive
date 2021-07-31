import { schemaComposer } from "graphql-compose"


// const ProjectInputTC = schemaComposer.createInputTC({
//     name: 'ProjectInput',
//     fields: {
//         _id: "ID",
//         id: "String",
//         name: "String",
//         files: {
//             type: "[FileInput]",
//         },
//         status: "String",
//         startDate: "Date",
//         endDate: "Date",
//     }
// })

// const CustomerTC = schemaComposer.createObjectTC({
//     name: 'Customer',
//     fields: {
//         id: "ID",
//         name: "String"
//     }
// })

const PeopleTC = schemaComposer.createObjectTC({
    name: 'People',
    fields: {
        id: "ID",
        name: "String"
    }
})

export {
    PeopleTC
} 