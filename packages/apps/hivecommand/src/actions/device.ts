import { AxiosInstance } from "axios";
import { useMutation, query } from "@hexhive/client";

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
      
    }
}