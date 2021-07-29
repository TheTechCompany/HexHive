import { model, Types, Document, Model, Schema } from "mongoose";

//import { ProgramSchema } from './program'

const UserSchema: Schema = new Schema({
    username: String,
    password: String,
    organisation: {type: Types.ObjectId, ref: 'Organisation'}
})


const UserModel =  model<any>('User', UserSchema)


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

export default UserModel;
