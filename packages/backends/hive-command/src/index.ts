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
import { connect_data, Device, DNSRecord, Program, FlowShard, Stack  } from '@hexhive/types'


import { setupProgramGraph, setupStackGraph, buildSchema, convertMongoose } from './graph';
import { SSLManager } from './ssl';

import AutomergeSever from '@hexhive/collaboration-server'

import { AuthServer } from '@hexhive/auth'

const PORT = process.env.NODE_ENV == 'production' ? 80 : 7002

//Initialization
const app = express();

connect_data();

const mergeServer = new AutomergeSever()

const M: any = {
  Device,
  DNSRecord,
  Program,
  FlowShard,
  Stack
};

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
  
// if(process.env.NODE_ENV == 'production'){
//   app.use('/graphql',     AuthServer.oauthServer.authenticate())
// }

app.use('/graphql',
    graphqlHTTP({
        schema: GeneratedSchema,
        graphiql: true
    }))

    const server = http.createServer(app)

    const wss = new Server({server: server})

    wss.on('connection', (socket) => {
        mergeServer.handleWebsocket(socket)
    })

    server.listen(PORT, () => {
      console.log(`LISTENING ON ${PORT}`)

    })
