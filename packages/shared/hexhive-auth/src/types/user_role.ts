import { model, Types, Document, Model, Schema } from "mongoose";

//import { ProgramSchema } from './program'

const UserRoleSchema: Schema = new Schema({
    organisation: {type: Types.ObjectId, ref: 'Organisation'},
    user: { type: Types.ObjectId, ref: "User" },
    roles: [{ type: Types.ObjectId, ref: 'OrganisationRole' }]
})


const UserRoleModel =  model<any>('UserRole', UserRoleSchema)


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

export default UserRoleModel;
