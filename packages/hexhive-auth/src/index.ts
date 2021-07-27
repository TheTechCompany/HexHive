import { CentralAuthServer } from "@hexhive/cas-server";
import { isValidObjectId } from "mongoose";
import { MongooseAdapter } from "./adapters/mongoose";
import { connect_data, User } from "./types";

connect_data().then(() => {
    console.log("Connected to MongoDB");

const authServer = new CentralAuthServer({
    issuer: 'https://api.hexhive.io',
    adapter: new MongooseAdapter()
},  {
    findUser: async (auth_blob: any) => {
        console.log("AUTH BLOB", auth_blob)
        if(auth_blob.user && isValidObjectId(auth_blob.user)){
            return await User.findById(auth_blob.user);
        }else{
            return await User.findOne({
                username: auth_blob.username,
                password: auth_blob.password
            })
        }
    }
})

    console.log("Launching Auth Service");
authServer.startServer(8090)

authServer.express.get('/test', authServer.oauthServer.authenticate(), (req, res) => {
    console.log("Auth")
    res.send({success: true, data: "RESULT"})
})


})