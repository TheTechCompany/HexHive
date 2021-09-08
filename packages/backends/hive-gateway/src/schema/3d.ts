import { schemaComposer } from "graphql-compose";
import got from 'got';

schemaComposer.createObjectTC({
    name: 'PrinterTemperature',
    fields: {
        time: 'Int',
        toolActual: 'Float',
        toolTarget: 'Float',

        bedActual: 'Float',
        bedTarget: 'Float',
        
    }
})

schemaComposer.createObjectTC({
    name: 'Printer',
    fields: {
        name: 'String',
        accessKey: 'String',
        temperature: 'PrinterTemperature',
        temperatureHistory: '[PrinterTemperature]',
        jobs: "[OctoPrintJob]"
    }
})

schemaComposer.createObjectTC({
    name: 'OctoPrintProgress',
    fields: {
        completion: "Float",
        filepos: "Int",
        printTime: "Int",
        printTimeLeft: "Int"
    }

})

schemaComposer.createObjectTC({
    name: 'OctoPrintFilament',
    fields: {
        length: "Float",
        volume: "Float"
    }

})

schemaComposer.createObjectTC({
    name: 'OctoPrintFile',
    fields: {
        name: "String",
        origin: "String",
        size: "Int",
        date: "Int"
    }

})
schemaComposer.createObjectTC({
    name: 'OctoPrintJob',
    fields: {
        state: "String",
        progress: "OctoPrintProgress",
        estimatedPrintTime: "Float",
        filament: "OctoPrintFilament",
        file: "OctoPrintFile",
        user: "String"
    }

})

schemaComposer.Query.addFields({
    printer: {
        type: 'Printer',
        args: {
            id: "ID"
        },
        resolve: async () => {
           const result = await got<{job: any, progress: any, state: string}>("http://localhost:8090/api/job", {
               responseType: 'json',
                headers: {
                    "authorization": "Bearer 63E52675B1FE4D4FBCBF09578B5E6365"
                }
            })

            const temp = await got<{temperature: {history: any} & any, sd: {ready: boolean}, state: {text: string, flags: any}}>("http://localhost:8090/api/printer?history=true&limit=5", {
                responseType: 'json',
                headers: {
                    "authorization": "Bearer 63E52675B1FE4D4FBCBF09578B5E6365"
                }
            })

            console.log(result.body)
            const body = result.body;
            return {
                name: 'Cake',
                temperature: {
                    bedActual: temp.body.temperature.bed.actual,
                    bedTarget: temp.body.temperature.bed.target,
                    toolTarget: temp.body.temperature.tool0.target,
                    toolActual: temp.body.temperature.tool0.actual
                },

                temperatureHistory: temp.body.temperature.history.map((temp: any) => ({
                    time: temp.time,
                    bedActual: temp.bed.actual,
                    bedTarget: temp.bed.target,
                    toolTarget: temp.tool0.target,
                    toolActual: temp.tool0.actual
                })),
                jobs: [{
                    state: body.state,
                    progress: body.progress,
                    estimatedPrintTime: body.job.estimatedPrintTime,
                    filament: body.job.filament.tool0,
                    file: body.job.file,
                    user: body.job.user
                }]
            };
        }
    }
})

export default schemaComposer.buildSchema()