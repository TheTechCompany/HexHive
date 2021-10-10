import { AxiosInstance } from "axios";
import _ from "lodash";

import { CreateOneProgramInput, Program, ProgramIo, UpdateOneProgramInput } from '@hexhive/client';

import { useMutation, query } from "@hexhive/client";

export default function programActionFactory(axios: AxiosInstance){

    return {

        getPrograms: async () => {
            const result = await axios.get('/programs');
            return result.data
        },
        getProgam: async (id: string) => {
            const result = await axios.get(`/programs/${id}`)
            return result.data;
        },
        // useUpdateProgram: (id: string) => {
        //     return useMutation((mutation, args: {id: string, update: UpdateOneProgramInput}) => {
        //         let obj = _.pick(args.update, ["name", "program", "hmi", "plugins", "io"]) 
               
        //         const result = mutation.ProgramUpdateById({_id: args.id, record: obj})
        //         return {
        //             item: {
        //                 ...result?.record
        //             },
        //             error: result?.error
        //         }
        //     },
        //     {
        //         onCompleted(data) {},
        //         onError(error) {},
        //         refetchQueries: [query.ProgramById({_id: id})],
        //         suspense: false,
        //         awaitRefetchQueries: true,
        //     })
        // },
        // useAddHMI: (program?: string) => {
        //     return useMutation((mutation, args: {program_id: string, parent: string, name?: any, nodes?: any, paths?: any}) => {
        //         //  mutation.Proc
        //           let process = mutation.addHMIFlow({
        //               program: args.program_id, 
        //               parent: args.parent,
        //               name: args.name, 
        //               nodes: args.nodes, 
        //               paths: args.paths
        //           })
  
        //           return {
        //               item: {
        //                   ...process
        //               },
        //               err: null
        //           }
  
        //       },
        //       {
        //           onCompleted(data) {},
        //           onError(error) {},
        //           refetchQueries: [query.FlowShardMany({filter: {parent: program}})],
        //           suspense: false,
        //           awaitRefetchQueries: true,
        //       })
        // },
        // useAddProgramIO: (program?: string) => {
        //     return useMutation((mutation, args: {program_id: string, name?: any, type?: string}) => {
        //         //  mutation.Proc
        //           let process = mutation.addProgramIO({
        //               program: args.program_id, 
        //               name: args.name, 
        //               type: args.type
        //           })
  
        //           return {
        //               item: {
        //                   ...process
        //               },
        //               err: null
        //           }
  
        //           //mutation.ProgramUpdateById({_id: args.program_id, record: {})
        //       },
        //       {
        //           onCompleted(data) {},
        //           onError(error) {},
        //           refetchQueries: [query.FlowShardMany({filter: {parent: program}})],
        //           suspense: false,
        //           awaitRefetchQueries: true,
        //       })
        // },
        // useAddProcess: (program?: string) => {
        //     return useMutation((mutation, args: {program_id: string, parent: string, name?: any, nodes?: any, paths?: any}) => {
        //       //  mutation.Proc
        //         let process = mutation.addProgramFlow({
        //             program: args.program_id, 
        //             parent: args.parent,
        //             name: args.name, 
        //             nodes: args.nodes, 
        //             paths: args.paths
        //         })

        //         return {
        //             item: {
        //                 ...process
        //             },
        //             err: null
        //         }

        //         //mutation.ProgramUpdateById({_id: args.program_id, record: {})
        //     },
        //     {
        //         onCompleted(data) {},
        //         onError(error) {},
        //         refetchQueries: [query.FlowShardMany({filter: {parent: program}})],
        //         suspense: false,
        //         awaitRefetchQueries: true,
        //     })
        // },
        // useUpdateShard: () => {
        //     return useMutation((mutation, args: {id: string, record: any}) => {
        //         let ret = mutation.FlowShardUpdateOne({filter: {_id: args.id}, record: args.record})

        //         return {
        //             item: {
        //                 ...ret?.record
        //             },
        //             err: ret?.error
        //         }
        //     },
        //     {
        //         onCompleted(data) {},
        //         onError(error) {},
        //         refetchQueries: [],
        //         suspense: false,
        //         awaitRefetchQueries: true,
        //     })
        // },
        // updateProgramProcess: async (program: string, process: string, map: any) => {
        //     const result = await axios.put(`/programs/${program}/${process}`, {
        //         map: map
        //     })
        //     return result.data;
        // },
        // addIODevice: async (program: string, io: ProgramIo) => {
        //     const result = await axios.post(`/programs/${program}/io`, {
        //         io: io
        //     })
        //     return result.data;
        // },
        // updateIODevice: async (program: string, io_id: string, io: ProgramIo) => {
        //     const result = await axios.put(`/programs/${program}/io/${io_id}`, {
        //         io: io
        //     })
        //     return result.data;
        // }

    }
}