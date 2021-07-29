import {connect, disconnect} from 'mongoose';

import User from './user';
import AccessToken from './access_token'
import AuthorizationCode from './authorization_code'
import ClientApp from './client_app';
import Organisation from './organisation'
import App from './app'

import UserRole from './user_role'
import OrganisationRole from './org_role';

let opts : any = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

if(process.env.MONGO_USER){
    opts.user = process.env.MONGO_USER
}

if(process.env.MONGO_PASS){
    opts.pass = process.env.MONGO_PASS
}

if(process.env.MONGO_AUTH_DB){
    opts.authSource = process.env.MONGO_AUTH_DB
}

export const disconnect_data = async () => {
    return await disconnect()
}

export const connect_data = () => {
    return new Promise((resolve, reject) => {
    connect(
        `mongodb://${process.env.MONGO_URL || "localhost:27017"}/${"hexhive-auth"}`, 
        opts, (err) => {
            if(err) return reject(err);
            resolve(true);
        });
    })
}

export {
    App,
    User,
    UserRole,
    OrganisationRole,
    Organisation,
    AccessToken,
    AuthorizationCode,
    ClientApp
}