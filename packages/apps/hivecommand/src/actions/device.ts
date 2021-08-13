import { AxiosInstance } from "axios";
import { useMutation, query } from "../gqless";

export default function deviceActionFactory(axios: AxiosInstance){

    return {
        generateDeviceName: async () => {
            const result = await axios.get('/devices/name')
            return result.data;
        },
        getDevices: async () => {
            const result = await axios.get('/devices')
            return result.data;
        },
        getDevice: async (id: string) => {
            const result = await axios.get(`/devices/${id}`)
            return result.data;
        },
        useUpdateDevice: () => {
            return useMutation((mutation, args: { id: string, name: string, network_name: string, program: string}) => {
                const result = mutation.DeviceUpdateOne({record: {
                    name: args.name,
                    network_name: args.network_name,
                    program: args.program
                }, filter: { _id: args.id }})

                return {
                    item: {
                        ...result?.record
                    },
                    error: result?.error
                }
            })
        },
        useCreateDevice: () => {
            return useMutation((mutation, args: {name: string, network_name: string, program: string}) => {
                const result = mutation.DeviceCreateOne({record: args})

                return {
                    item: {
                        ...result?.record
                    },
                    error: result?.error
                }
            }, {
                onCompleted(data) {},
                onError(error) {},
                refetchQueries: [query.DeviceMany],
                awaitRefetchQueries: true,
                suspense: false, 
        })
         
        }
    }
}