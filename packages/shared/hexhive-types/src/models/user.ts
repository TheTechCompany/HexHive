
import { Schema, model, Types, Document } from 'mongoose';

const UserSchema = new Schema({
    name : "String",
    readonly : "Boolean", 
    type: "String",
    username: String,
    password: String,
    organisation: {type: Types.ObjectId, ref: 'Organisation'}
})

UserSchema.index({name: 1, username: 1})

const OrganisationSchema = new Schema({
    name: String,
    address: String,
    apps: [{ type: Types.ObjectId, ref: 'App' }],
    users: [{ type: Types.ObjectId, ref: 'User' }]
})

export const Organisation = model("Organisation", OrganisationSchema)
export const User = model("User", UserSchema)
