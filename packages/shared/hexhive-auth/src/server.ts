import { CentralAuthServer } from "./auth";
import { isValidObjectId } from "mongoose";
import { MongooseAdapter } from "./adapters/mongoose";
import { User, connect_data } from "@hexhive/types";
import crypto from 'crypto';

declare global {
    namespace Express {
     interface Request {
       user?: {
           _id: string;
           username: string;
           name: string;
       }
    }
 }
}

console.log("Starting Auth Service")

connect_data().then(() => {
    console.log("Connected to MongoDB");

    const authServer = new CentralAuthServer({
        issuer: process.env.NODE_ENV != 'production' ? 'localhost' : 'hexhive.io',
        adapter: new MongooseAdapter()
    }, {
        findUser: async (auth_blob: any) => {
            console.log("AUTH BLOB", auth_blob)
            if (auth_blob.user && isValidObjectId(auth_blob.user)) {
                return await User.findById(auth_blob.user).populate('organisation');
            } else {
                const pass_hash = crypto.createHash('sha256').update(auth_blob.password).digest('hex')

                return await User.findOne({
                    username: auth_blob.username,
                    password: pass_hash
                }).populate('organisation')
            }
        }
    })

    console.log("Launching Auth Service");
    authServer.startServer(8090)


}).catch((error) => {
    console.error("Error", error)
})