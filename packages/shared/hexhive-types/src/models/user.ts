
import { Schema, model, Document } from 'mongoose';

const User = new Schema({
    id : "String", 
    name : "String",
    email : "String", 
    active : "Boolean", 
    organisation : String, //{ type: Schema.Types.ObjectId, ref: 'Organisation'}, 
    readonly : "Boolean", 
    type: "String" 
})

const Organisation = new Schema({
    "org_id" : "String", 
    "org_ref_id" : "String", 
    "name" : "String", 
    "address" : "String",
    "contact" : "String", 
    "email" : "String", 
    "headcount" : "Number", 
    "employees" : [{type: Schema.Types.ObjectId, ref: 'User'}], 
    "org_pass_hash" : "String", 
    "org_token" : "String"
})
export const IUser = model("User", User)
