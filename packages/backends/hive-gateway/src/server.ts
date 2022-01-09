#!/usr/bin/env node
import { HiveGateway } from '.'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { readFileSync } from 'fs';
import { createServer, Server as HttpServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';

const greenlock = require("greenlock-express")

const argv = yargs(hideBin(process.argv)).options({
	port: {type: 'number', default: 7000},
	dev: {type: 'boolean', default: false},
	endpoints: {type: 'string'},
});

(async () => {

	const app = express()
	const server = createServer(app)
	
	const { port, endpoints, dev } = await argv.argv;

	console.log(`=> Starting Gateway on ${port}`)

	let endpointInfo = [];
	if(endpoints){
		const endpointData = JSON.parse(readFileSync(endpoints, 'utf8'))
		endpointInfo = endpointData.endpoints.map(({url, name, version}: any) => ({url, key: name, version}))
	}

	const gateway = new HiveGateway({
		dev: dev,
		endpoints: endpointInfo
	})
	
	console.log(`=> Initializing Gateway`)
	await gateway.init()

	console.log(`=> Starting Gateway`)

	app.use(gateway.connect)

	if(process.env.NODE_ENV == "production"){
			const httpsWorker = (glx: any)  => {
				const server = glx.httpsServer()
				
				const io = new Server(server)
				// var ws = new WebSocketServer({ server: server, perMessageDeflate: false});
				// ws.on("connection", function(ws: WebSocket, req: any) {
				//     // inspect req.headers.authorization (or cookies) for session info
				//     collaborationServer.handleConnection(ws)
				// });
			
				// servers a node app that proxies requests to a localhost
				glx.serveApp(app)
			}
	
			if(!process.env.MAINTAINER_EMAIL) throw new Error("Provide a maintainer email through MAINTAINER_EMAIL environment variable")
			greenlock.init({
				packageRoot: __dirname + "/../",
				configDir: "./greenlock.d",
		 
				// contact for security and critical bug notices
				maintainerEmail: process.env.MAINTAINER_EMAIL,
		 
				// whether or not to run at cloudscale
				cluster: false
			}).ready(httpsWorker)
		}else{
	
			const io = new Server(server)
	
			// setupWebsockets(io);
	
			server.listen(port, () => {
				console.log(`🚀 Server ready at :${port}`)
			})
		}
})()