import { model, Types, Document, Model, Schema } from "mongoose";

//import { ProgramSchema } from './program'

const OrgRoleSchema: Schema = new Schema({
    organisation: {type: Types.ObjectId, ref: 'Organisation'},
    name: String,
    extends: {type: Types.ObjectId, ref: 'OrganisationRole'},
    permissions: [String]
})


const OrgRoleModel =  model<any>('OrganisationRole', OrgRoleSchema)


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

export default OrgRoleModel;
