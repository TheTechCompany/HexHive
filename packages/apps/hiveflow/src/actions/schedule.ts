import { AxiosInstance } from "axios"

export default (axios: AxiosInstance) => {

    const getScheduleItems = async (horizon: {start: Date, end: Date}, token: string) => {
        const result = await axios.post(`/graphql`, {
            query: `
                query getScheduleItemsInHorizon($start: Date, $end: Date){
                    ScheduleMany(startDate: $start, endDate: $end){
                        id
                        project {
                            id
                            name
                        }
                        people
                        date
                        equipment
                        notes
                        managers
                        owner {
                            id
                            name
                        }
                    }
                }
            `,
            variables: {   
                start: horizon.start,
                end: horizon.end
            }  
        }, {headers: {'Authorization': 'Bearer ' + token}})
        return result.data?.data?.ScheduleMany
    }

    return {
        getScheduleItems
    }
}