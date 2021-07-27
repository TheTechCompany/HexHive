/*
    HexHive Central Auth Server

*/
import Express from 'express'
import crypto from 'crypto';
import jwt from 'jsonwebtoken'
import cors from 'cors';
import { Routes } from '../routes';
import model, { AuthAdapter } from '../model'
import { Express as OAuthServer } from '@thetechcompany/express-shield'
import bodyParser from 'body-parser';

export interface CentralAuthServerOptions {
    secret?: string;
    issuer?: string;

    adapter: AuthAdapter;
}

export * from '../model'

export class CentralAuthServer {
    private secret?: string;

    private issuer?: string;

    private methods?: any;

    public express : Express.Express;

    private authAdapter: AuthAdapter;

    public oauthServer  : OAuthServer;

    constructor(opts: CentralAuthServerOptions, methods: any){
        this.secret = opts.secret || crypto.randomBytes(48).toString()
        this.issuer = opts.issuer;
        this.methods = methods

        this.authAdapter = opts.adapter;

        this.express = Express()

        this.oauthServer = new OAuthServer({
            oauthOptions: {
              model: this.authAdapter,
              grants: ['authorization_code', 'refresh_token'],
              accessTokenLifetime: 60 * 60 * 24, // 24 hours, or 1 day
              allowEmptyState: true,
              allowExtendedTokenAttributes: true,
              alwaysIssueNewRefreshToken: true,
            },
            continueMiddleware: true,
          })
          
    }

    startServer(port: number = 8080){
        this.express.use(cors())
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(this.getRoutes())
        this.express.listen(port)
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