import { IDNSRecord } from '../interfaces/dns'
import { model, Types, Document, Model, Schema } from "mongoose";
import { IHiveDoc } from '../interfaces/document';

const Moniker = require('moniker');
//import { ProgramSchema } from './program'

const HiveDocSchema : Schema = new Schema({
    title: String,
    content: String,
    children: []
})


export const HiveDoc =  model<IHiveDoc>('HiveDoc', HiveDocSchema)




// console.log(getModel(DNSModel), DNSModel.name)
