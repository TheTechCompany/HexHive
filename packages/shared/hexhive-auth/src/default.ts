import { isValidObjectId } from "mongoose";
import { MongooseAdapter } from "./adapters/mongoose";
import { CentralAuthServer } from "./auth";
import { User } from "./types";

export const AuthServer = new CentralAuthServer({
    issuer: process.env.NODE_ENV == 'dev' ? 'localhost' : 'hexhive.io',
    adapter: new MongooseAdapter()
}, {
    findUser: async (auth_blob: any) => {
        console.log("AUTH BLOB", auth_blob)
        if (auth_blob.user && isValidObjectId(auth_blob.user)) {
            return await User.findById(auth_blob.user).populate('organisation');
        } else {
            return await User.findOne({
                username: auth_blob.username,
                password: auth_blob.password
            }).populate('organisation')
        }
    }
})