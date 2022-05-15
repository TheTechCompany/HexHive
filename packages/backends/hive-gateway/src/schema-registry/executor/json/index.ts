export const handleJSON = async (query: any, variables: any) => {
    return JSON.stringify({
        query,
        variables
    })
}