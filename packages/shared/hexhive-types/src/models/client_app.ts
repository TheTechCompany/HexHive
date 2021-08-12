import { model, Types, Document, Model, Schema } from "mongoose";

const ClientAppSchema: Schema = new Schema({
    clientId: String,
    clientSecret: String,
    grants: [String],
    redirectUris: [String]
})


export const ClientApp =  model('ClientApp', ClientAppSchema)