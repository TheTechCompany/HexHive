/*
    HexHive Central Auth Server

*/
import crypto from 'crypto';
import jwt from 'jsonwebtoken'
import { Routes } from './routes';

export interface CentralAuthServerOptions {
    secret?: string;

    issuer?: string;
}


export class CentralAuthServer {
    private secret?: string;

    private issuer?: string;

    private methods?: any;

    constructor(opts: CentralAuthServerOptions, methods: any){
        this.secret = opts.secret || crypto.randomBytes(48).toString()
        this.issuer = opts.issuer;
        this.methods = methods
    }

    signToken(user: string, payload: any){
        if(!this.secret) return new Error("No Secret Provided")
        return jwt.sign({
            iss: this.issuer,
            sub: user,
            ...payload
        }, this.secret)
    }

    decodeToken(token: string){
        if(!this.secret) return new Error("No secret");
        return jwt.verify(token, this.secret)
    }


    getRoutes(){
        return Routes(this, this.methods)
    }

}