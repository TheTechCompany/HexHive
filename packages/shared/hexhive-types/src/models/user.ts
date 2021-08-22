
import { Schema, model, Types, Document } from 'mongoose';
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const UserSchema = new Schema({
    name : "String",
    readonly : "Boolean", 
    type: "String",
    username: String,
    password: String,
    organisation: {type: Types.ObjectId, ref: 'Organisation'}
})

UserSchema.plugin(mongoose_fuzzy_searching, { fields: ['name', 'username', 'organisation'] });

// UserSchema.index({name: 'text', username: 'text'})

const OrganisationSchema = new Schema({
    name: String,
    address: String,
    apps: [{ type: Types.ObjectId, ref: 'App' }],
    users: [{ type: Types.ObjectId, ref: 'User' }]
})

export const Organisation = model("Organisation", OrganisationSchema)
export const User = model("User", UserSchema)
