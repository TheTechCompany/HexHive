import { IDNSRecord } from './types'
import { model, Types, Document, Model, Schema } from "mongoose";

const Moniker = require('moniker');
//import { ProgramSchema } from './program'

const DNSRecordSchema: Schema = new Schema({
    subdomain: String,
    domain: String,
    address: String
})


const DNSModel =  model<IDNSRecord>('DNSRecord', DNSRecordSchema)


const getModel = (model: Model<any>) => {
    let field_keys = Object.keys(model.schema.paths)
    let fields = field_keys.map((key) => {
        return {
            name: key,
            type: (model.schema.paths[key] as any)['instance']
        }
    })
    return fields;

}

console.log(getModel(DNSModel), DNSModel.name)

export default DNSModel
