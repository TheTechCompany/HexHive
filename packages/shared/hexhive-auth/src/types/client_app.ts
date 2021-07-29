import { model, Types, Document, Model, Schema } from "mongoose";
import { AuthClient } from '../auth';
//import { ProgramSchema } from './program'

const ClientApp: Schema = new Schema({
    clientId: String,
    clientSecret: String,
    grants: [String],
    redirectUris: [String]
})


const ClientAppModel =  model<AuthClient>('ClientApp', ClientApp)


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

export default ClientAppModel;
