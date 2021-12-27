import { createServer, Server as HttpServer } from 'http';
import express from 'express'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
const greenlock = require("greenlock-express")

export const frontendRouter = (port: number = 8000) => {

	const app = express()

	const server = createServer(app)

	app.use(cookieParser())
	// this.app.use(helmet())

	app.use(session({
		secret: process.env.SESSION_KEY || 'MyVoiceIsMyPassportVerifyMe',
		resave: false,
		saveUninitialized: true,
		store: MongoStore.create({ 
			mongoUrl: process.env.MONGO_URL
		 })
	}));


	return {
		app,
		start: () => {
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
		}
	}
}