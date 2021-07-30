import { schemaComposer } from "graphql-compose"
import { File, Project, User } from '@hexhive/types'

const UserTC = schemaComposer.createObjectTC({
    name: "User",
    fields: {
        id: "ID",
        name: "String"
    }
})

UserTC.addResolver({
    type: 'query',
    name: "findById",
    args: {
        id: "String"
    },
    resolve: async ({root, args, context} : any) => {
        console.log(args)
        let user = await User.findById(args.id)
        return user;
    }
})

const FileTC = schemaComposer.createObjectTC({
    name: "File",
    fields: {
        _id: "ID",
        id: "String",
        cid: "String",
        name: "String",
        extension: "String",
        mimeType: "String",
        timestamp: "Date",
        status: "String",
        owner: {
            type: "User",
            resolve: (root, args, context) => {
                console.log(root, args)
                return UserTC.getResolver('findById').resolve({args: {id: root.owner}})
            }
        }
    }
})

const FileInputTC = schemaComposer.createInputTC({
    name: "FileInput",
    fields: {
        id: "ID",
        name: "String",
        extension: "String",
        mimeType: "String"
    }
})

FileTC.addResolver({
    type: 'query',
    name: 'findByProject',
    resolve: async ({root, args, context}: any) => {
        let project = await Project.findOne({id: root.id}).populate('files')
        if(project) return project.files?.map((x: any) => { 
            return x;
        }) || [];
        return [];
       // console.log("FIND BY PROJECT", root, args)
    }
})

const ProjectInputTC = schemaComposer.createInputTC({
    name: 'ProjectInput',
    fields: {
        _id: "ID",
        id: "String",
        name: "String",
        files: {
            type: "[FileInput]",
        },
        status: "String",
        startDate: "Date",
        endDate: "Date",
    }
})

const ProjectTC = schemaComposer.createObjectTC({
    name: 'Project',
    fields: {
        id: "ID",
        name: "String",
        files: {
            type: "[File]",
            resolve: (root, args, context, other) => {
                return FileTC.getResolver("findByProject").resolve({root: root, context: context, args})
            }
        },
        status: "String",
        startDate: "Date",
        endDate: "Date",
    }
})

export {
    FileTC,
    ProjectTC,
    ProjectInputTC
} 