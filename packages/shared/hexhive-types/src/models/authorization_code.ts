import { model, Types, Document, Model, Schema } from "mongoose";

//import { ProgramSchema } from './program'

const AuthorizationCodeSchema : Schema = new Schema({
    authorizationCode: String,
    expiresAt: Date,
    client: {type: Types.ObjectId, ref: 'ClientApp'},
    user: String,
    redirectUri: String
})


export const AuthorizationCode =  model<any>('AuthorizationCode', AuthorizationCodeSchema)


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
