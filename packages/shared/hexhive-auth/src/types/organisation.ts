import { model, Types, Document, Model, Schema } from "mongoose";

//import { ProgramSchema } from './program'

const OrganisationSchema: Schema = new Schema({
    name: String,
    address: String,
    apps: [{ type: Types.ObjectId, ref: 'App' }],
    users: [{ type: Types.ObjectId, ref: 'User' }]
})


const OrganisationModel =  model<any>('Organisation', OrganisationSchema)


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

export default OrganisationModel;
