import express from 'express'
import crypto from 'crypto';

import {Provider} from 'oidc-provider';


import { graphqlHTTP } from 'express-graphql'; // ES6

import { connect_data, User } from '@hexhive/types'

import { stitchSchemas } from '@graphql-tools/stitch';
import SubSchema from './schema'
import { REMOTE_SCHEMA } from './remotes';
import { DefaultRouter } from './routes';
import { isValidObjectId } from 'mongoose';

import { createServer } from 'http';
import WebSocket, { Server as WebSocketServer } from 'ws';
import { CollaborationServer } from './collaboration';
import { Account } from './Account';
import helmet from 'helmet';

const greenlock = require('greenlock-express')

const app = express();

const server = createServer(app);
const wss = new WebSocketServer({ server, perMessageDeflate: false });

const {NODE_ENV} = process.env
const { PORT = (NODE_ENV == 'production' ? 80 : 7000), AUTH_SITE = 'https://next.hexhive.io/login', ISSUER = `http://localhost:${PORT}` } = process.env;


(async () => {

    const collaborationServer = new CollaborationServer();
         
    await connect_data()

    const subschemas = await SubSchema(REMOTE_SCHEMA)
    const schema = stitchSchemas({
        subschemas: subschemas
    })

    wss.on('connection', (socket) => {
        collaborationServer.handleConnection(socket)
    })
    // server.on('upgrade', (request, socket, head) => {
    //     wss.handleUpgrade(request, socket , head, (ws) => {
    //         wss.emit('connection', ws, request, {})
    //     })
    // })

    const oidc = new Provider(ISSUER, {
        clients: [
            {
            client_id: 'foo',
            client_secret: 'bar',
            redirect_uris: ['https://jwt.io'], // using jwt.io as redirect_uri to show the ID Token contents
            response_types: ['id_token'],
            grant_types: ['implicit'],
            token_endpoint_auth_method: 'none',
            },
            {
                client_id: 'matrix',
                client_secret: 'matrix_secret',
                redirect_uris: ['https://matrix.hexhive.io/_synapse/client/oidc/callback'],
                response_types: ['id_token', 'code'],
                grant_types: ['implicit', 'authorization_code'],
                token_endpoint_auth_method: 'none'
            }
        ],
        findAccount: Account.findAccount,
        claims: {
            openid: ['sub'],
            email: ['email', 'email_verified'],
        },
        interactions: {
            url(ctx, interaction) {
              return `${AUTH_SITE}/interaction/${interaction.uid}`;
            },
        },
        features: {
            // disable the packaged interactions
            devInteractions: { enabled: false },
        },
        cookies: {
            keys: ['testkey'],
        },
    });

    app.use(helmet())


    app.use(DefaultRouter(oidc)) 
    /*AuthServer, {
        findUser: async (auth_blob: any) => {
            console.log("AUTH BLOB", auth_blob)
            if(!auth_blob) return;
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
    }))*/
    const { constructor: { errors: { SessionNotFound } } } = oidc as any;


    if (process.env.NODE_ENV == 'production') {
        app.use('/graphql', (err: any, req: any, res: any, next: any) => {
            if(err instanceof SessionNotFound){
                return res.send({error: "No authentication found"})
            }
            next(err);
        }) //AuthServer.oauthServer.authenticate())
    }

    app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
    }))

    app.use(oidc.callback())

    if(process.env.NODE_ENV == 'production'){
        const httpsWorker = (glx: any)  => {
            var server = glx.httpsServer();
            var ws = new WebSocketServer({ server: server, perMessageDeflate: false});
            ws.on("connection", function(ws: WebSocket, req: any) {
                // inspect req.headers.authorization (or cookies) for session info
                collaborationServer.handleConnection(ws)
            });
        
            // servers a node app that proxies requests to a localhost
            glx.serveApp(app);
        }

        if(!process.env.MAINTAINER_EMAIL) throw new Error("Provide a maintainer email through MAINTAINER_EMAIL environment variable")
        greenlock.init({
            packageRoot: __dirname + '/../',
            configDir: "./greenlock.d",
     
            // contact for security and critical bug notices
            maintainerEmail: process.env.MAINTAINER_EMAIL,
     
            // whether or not to run at cloudscale
            cluster: false
        }).ready(httpsWorker)
    }else{
        server.listen(PORT, () => {
            console.log(`🚀 Server ready at :${PORT}`);
        })
    }
})()