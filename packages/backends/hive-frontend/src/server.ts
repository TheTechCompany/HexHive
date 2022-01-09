import { HiveFrontendServer } from ".";
import { createServer } from 'http'
import express from 'express';

const greenlock = require("greenlock-express");

(async (port: number = 8000) => {
	const app = express()

	const frontendServer = new HiveFrontendServer()

	app.use(frontendServer.connect)
	const server = createServer(app)

	if(process.env.NODE_ENV == "production"){
		const httpsWorker = (glx: any)  => {
			const server = glx.httpsServer()
			
			// const io = new Server(server)
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

		// const io = new Server(this.server)

		// setupWebsockets(io);

		server.listen(port, () => {
			console.log(`🚀 Server ready at :${port}`)
		})
	}
})()