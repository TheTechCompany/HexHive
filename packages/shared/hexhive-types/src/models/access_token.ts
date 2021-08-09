import { model, Types, Document, Model, Schema } from "mongoose";

//import { ProgramSchema } from './program'

const AccessTokenSchema : Schema = new Schema({
    accessToken: String,
    accessTokenExpiresAt: Date,
    refreshToken: String,
    refreshTokenExpiresAt: Date,
    client: {type: Types.ObjectId, ref: 'ClientApp'},
    user: {type: Types.ObjectId, ref: 'User'}
})


export const AccessToken =  model<any>('AccessToken', AccessTokenSchema)


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
