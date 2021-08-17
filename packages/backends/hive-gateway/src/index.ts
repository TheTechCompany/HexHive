import express from 'express'
import crypto from 'crypto';

import { graphqlHTTP } from 'express-graphql'; // ES6

import { AuthServer, CentralAuthServer } from '@hexhive/auth';
import { connect_data, User } from '@hexhive/types'

import { stitchSchemas } from '@graphql-tools/stitch';
import SubSchema from './schema'
import { REMOTE_SCHEMA } from './remotes';
import { DefaultRouter } from './routes';
import { isValidObjectId } from 'mongoose';

import { createServer } from 'http';
import WebSocket, { Server as WebSocketServer } from 'ws';
import { CollaborationServer } from './collaboration';

const greenlock = require('greenlock-express')

const app = express();

const server = createServer(app);
const wss = new WebSocketServer({ server, perMessageDeflate: false });


const PORT = process.env.NODE_ENV == 'production' ? 80 : 7000;



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

    app.use(DefaultRouter(AuthServer, {
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
    }))

    if (process.env.NODE_ENV == 'production') {
        app.use('/graphql', AuthServer.oauthServer.authenticate())
    }

    app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
    }))

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