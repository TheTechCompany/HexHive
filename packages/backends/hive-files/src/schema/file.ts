import { schemaComposer } from "graphql-compose";
import { FileConversion, FileConversionPipeline } from '@hexhive/types';
import { GraphQLError } from "graphql";
import { addTaskToQueue, createTaskDefinition } from "../task-launcher";

const ConversionPipeline = schemaComposer.createObjectTC({
    name: 'ConversionPipeline',
    fields: {
        id: "ID",
        name: "String",
        task: "String",
        sourceFormat: "[String]",
        targetFormat: "[String]"
    }
})

const Conversion = schemaComposer.createObjectTC({
    name: 'Conversion',
    fields: {
        id: "ID",
        file: "String",
        pipeline: "ConversionPipeline",
        targetFormat: "String",
        job: "String",
        status: "String",
        completed: "Boolean",
        startedAt: "Date",
        completedAt: "Date"
    }
})

export const Queries = {
    ConversionPipelines: {
        type: '[ConversionPipeline]',
        args: {
        },
        resolve: async () => {
            return await FileConversionPipeline.find()
        }
    },
    ConversionPipeline: {
        type: 'ConversionPipeline',
        args: {
            id: "ID"
        },
        resolve: async (root:any, args: any) => {
            return await FileConversionPipeline.findById(args.id)
        }
    },
    Conversions: {
        type: '[Conversion]',
        args: { 
            
        },  
        resolve: async () => {
            return await FileConversion.find();
        }
    },
    Conversion: {
        type: 'Conversion',
        args: {
            id: "ID"
        },
        resolve: async (root: any, args: any) => {
            return await FileConversion.findById(args.id);
        }
    }
}

export const Mutations = {
    createConversionPipeline: {
        type: "ConversionPipeline",
        args: {
            name: "String",
            image: "String"  
        },
        resolve: async (root: any, args: any) => {
            const result = await createTaskDefinition(args.name, args.image)
            if(!result.id) return new GraphQLError("Failed to create task definition")
            const pipeline = new FileConversionPipeline({
                name: args.name,
                task: result.id
            })

            await pipeline.save();
            return pipeline
        }
    },
    convertFile: {
        type: 'Conversion',
        args: {
            file: "ID",
            targetFormat: "String"
        },
        resolve: async (root: any, args: {file: string, targetFormat: string}, context: any) => {

            const pipeline = await FileConversionPipeline.findOne({targetFormats: {$in: args.targetFormat}})
            if(!pipeline) return new GraphQLError("No pipeline available for this conversion")

            //startDate : set on task pickup
            //endDate : set on task completion/error 

            const conversion = new FileConversion({
                file: args.file,
                pipeline: pipeline.id,
                targetFormat: args.targetFormat,
                completed: false,
                status: "Waiting in Queue"
            })

            await conversion.save();

            const data = await addTaskToQueue({task: pipeline.task})
            console.log("NEW TASK", data)
            return conversion;
        }
    },
    cancelConversion: {
        type: "Boolean",
        args: {
            id: "ID"
        },
        resolve: async (root: any, args: any) => {
            return await FileConversion.updateOne({_id: args.id}, {$set: {completedAt: new Date()}})
        }
    }
}