import { model, Types, Document, Model, Schema } from "mongoose";

//import { ProgramSchema } from './program'

const AppSchema : Schema = new Schema({
    name: String,
    url: String
})


export const App =  model<any>('App', AppSchema)


// const getModel = (model: Model<any>) => {
//     let field_keys = Object.keys(model.schema.paths)
//     let fields = field_keys.map((key) => {
//         return {
//             name: key,
//             type: (model.schema.paths[key] as any)['instance']
//         }
//     })
//     return fields;

// }

// console.log(getModel(DNSModel), DNSModel.name)
