//Core imports
import path from 'path';

//Express
import express from 'express';
import { graphqlHTTP } from 'express-graphql'

//Express plugins
import cors from 'cors'
import http from 'http';

import { Server } from 'ws';

//Alternate transports
//import { Server } from 'socket.io'

//Datatypes
import { connect_data } from '@hexhive/types'
import * as Models from '@hexhive/types/dist/models'
import { setupProgramGraph, setupStackGraph, buildSchema, convertMongoose } from './graph';
import { SSLManager } from './ssl';

import AutomergeSever from '@hexhive/collaboration-server'

import { AuthServer } from '@hexhive/auth'
import { connect_data as auth_connect } from '@hexhive/auth/dist/types'



//Initialization
const app = express();

connect_data();
auth_connect();

const mergeServer = new AutomergeSever()

const M: any = Models;

setupProgramGraph()
setupStackGraph()

let models = Object.keys(M).map((x) => M[x])

Object.keys(M).forEach((model) => {
    convertMongoose(model, M[model])
})

mergeServer.loadMongoose(models)

const GeneratedSchema = buildSchema()


const whitelist = [process.env.BASE_URL, "https://command.hexhive.io", "https://hexhive.io", "http://localhost:3000", "https://view.officeapps.live.com"]

app.set('trust proxy', 1)

app.use(cors({
  origin: (origin, callback) => {
      if(whitelist.indexOf(origin) !== -1 || !origin){
        callback(null, true)
      }else{
        callback(new Error('Not allowed by CORS'))
      }
  }, credentials: true}));
  
app.use('/graphql',
    /*AuthServer.oauthServer.authenticate(),*/
    graphqlHTTP({
        schema: GeneratedSchema,
        graphiql: true
    }))

// if(process.env.NODE_ENV == "dev"){
    const server = http.createServer(app)

    const wss = new Server({server: server})

    wss.on('connection', (socket) => {
        mergeServer.handleWebsocket(socket)
    })

    server.listen(80)
// }else{

// //Instantiate new SSL Manager - Takes care of initial config and wraps the serve function of greenlock
// const sslManager = new SSLManager({
//     packageRoot: path.join(__dirname, '../'),
//     configDir: "./greenlock.d",
//     domain: process.env.DOMAIN || 'api.hexhive.io',
//     altName: 'api.hexhive.io',
//     maintainer: "professional.balbatross@gmail.com"
// })

// sslManager.on('https:init', (https) => {

//     new Server({ server: https })
    
//     // const io = new Server(https, {
//     //     cors: {
//     //         origin: "http://localhost:3000",
//     //         methods: ["GET", "POST"]
//     //     }
//     // })




//     // io.on('connection', (socket) => {
//     //     console.log("new connection to ws:// endpoint")

//     //     socket.on('state:update', (msg) => {
//     //         //deviceRoom.emit('state:update', msg)
//     //         console.log("State update", msg)
//     //     })

//     //     socket.on('device-state:update', (msg) => {
//     //         // deviceRoom.emit('device-state:update', msg)
//     //     })

//     //     socket.on('disconnect', (reason) => {
//     //         console.log(`User disconnected. Reason: ${reason}`)
//     //     })
//     // })
// })

// sslManager.serve(app)
// }