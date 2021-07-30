import { GraphQLError } from 'graphql';
import { schemaComposer } from 'graphql-compose';
import { Models } from '@hive-command/data-types';
const { FlowShard, Program } = Models;

export const setupProgramGraph = () => {

    schemaComposer.Query.addFields({
        ProgramShard: {
            type: 'Program',
            args: {
                id: 'String'
            },
            resolve: async (root, args) => {
                if(!args.id) return new GraphQLError("No ID supplied");
                return await Program.findById(args.id).populate('program').populate('hmi')
            }
        },
        ProgramShards: {
          
            type: '[Program]',
            resolve: async () => {
                return await Program.find().populate('program').populate('hmi')
            }
            
        }
    })

    schemaComposer.Mutation.addFields({
        'addProgramIO': {
            'type': "ProgramIo",
            args: {
                program: 'String',
                name: "String",
                type: "String"
            },
            resolve: async (rooot, args) => {
                let program = await Program.findById(args.program)
                if(!program) return new GraphQLError("No program")
                if(!program?.io) program.io = [];

                program.io.push({name: args.name, type: args.type})
                await program.save();
                return program.io[program.io.length - 1]
            }
        },
        'addHMIFlow': {
            type: 'FlowShard',
            args: {
                program: 'String',
                parent: 'String',
                name: 'String',
                nodes: "JSON",
                paths: "JSON"
            },
            resolve: async (root, args) => {
                const shard = new FlowShard({
                    name: args.name,
                    program: args.program,
                    parent: args.parent,
                    nodes: args.nodes || [],
                    paths: args.paths || []
                })
                await shard.save()

                await Program.updateOne({_id: args.program}, {$push: {hmi: [shard._id]}})
                return shard;
            }
        },
        'updateHMIFlow': {
            type: 'FlowShard',
            args: {
                id: 'String',
                name: 'String',
                nodes: 'JSON',
                paths: 'JSON'
            },
            resolve: async (root, args) => {
                return await FlowShard.updateOne({_id: args.id}, {$set: {name: args.name, nodes: args.nodes, paths: args.paths}})
            }
        },
        'addProgramFlow': {
            type: 'FlowShard',
            args: {
                program: 'String',
                parent: 'String',
                name: 'String',
                nodes: 'JSON',
                paths: 'JSON'
            },
            resolve: async (root, args) => {
                const shard = new FlowShard({
                    name: args.name,
                    program: args.program,
                    parent: args.parent,
                    nodes: args.nodes || [],
                    paths: args.paths || []
                })
                
                await shard.save()

                 await Program.updateOne({_id: args.program}, {$push: {program: [shard._id]}})
                 return shard;
            }
        },
        'updateProgramFlow': {
            type: 'FlowShard',
            args: {
                id: 'String',
                name: 'String',
                nodes: 'JSON',
                paths: 'JSON'
            },
            resolve: async (root, args) => {
                return await FlowShard.updateOne({_id: args.id}, {$set: {name: args.name, nodes: args.nodes, paths: args.paths}})
            }
        },
        'removeProgramFlow': {
            type: 'Program',
            args: {
                id: 'String',
                shard: 'String'
            },
            resolve: async (root, args) => {    
                return await Program.findByIdAndUpdate(args.id, 
                    { $pull: { program: args.shard } }, 
                    { new: true });
            }
        }
    })
}