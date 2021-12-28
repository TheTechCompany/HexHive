import cookieParser from 'cookie-parser';
import express, { Express, Router } from 'express';
import session from 'express-session';
import helmet from 'helmet';
import { createServer, Server as HttpServer } from 'http';
import passport from 'passport';
import { Server } from 'socket.io';
import cors from 'cors';
import MongoStore from 'connect-mongo'

const {NODE_ENV} = process.env

const greenlock = require("greenlock-express")

var OidcStrategy = require('passport-openidconnect').Strategy;
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

	const url = process.env.AUTH_SERVER || "auth.hexhive.io"
	const config = {
		issuer: `https://${url}`,
		authorizationURL: `https://${url}/auth`,
		tokenURL: `https://${url}/token`,
		userInfoURL: `https://${url}/me`,
		 clientID: process.env.CLIENT_ID || "test" || `${NODE_ENV != "production" ? "staging-" : ""}hexhive.io`,
		 clientSecret: process.env.CLIENT_SECRET || `${NODE_ENV != "production" ? "staging-" : ""}hexhive_secret`,
		callbackURL: `${process.env.BASE_URL || "http://localhost:7000"}/callback`,
		scope: process.env.SCOPE || "openid email name groups"
	};

export interface HiveRouterOptions {
	port?: number;

}

export class HiveRouter {
	private port: number;

	private app: Express;
	private server: HttpServer;


	constructor(options: HiveRouterOptions) {
		this.port = options.port || 8080;

		this.app = express()

		this.server = createServer(this.app)

		this.initMiddleware()
		this.initPassport()

	}

	mount(...args: any[]) {
		console.log(args)
		if(args.length == 1){
			this.app.use(args[0])
		}else if(args.length == 2){
			this.app.use(args[0], args[1])
		}
	}


	initPassport(){
		passport.serializeUser((user, next) => {
			next(null, user);
		});
		  
		passport.deserializeUser((obj: any, next) => {
			next(null, obj);
		});

		this.app.use('/login', (req, res, next) => {
			if(req.query.returnTo){
				(req.session as any).returnTo = req.query.returnTo
			}
			next();
		}, passport.authenticate('oidc'))
	
		this.app.get('/logout', function(req, res){
			req.logout();
			res.redirect('/');
		});

		this.app.use('/callback',
			passport.authenticate('oidc', { failureRedirect: '/error' }),
				(req, res) => {
	
					const returnTo = (req.session as any).returnTo;
					(req.session as any).returnTo = undefined;
					console.log(req)
					res.redirect(returnTo || process.env.UI_URL || "https://next.hexhive.io/dashboard");
				}
			);
	
			
		passport.use('oidc', new OidcStrategy(config, (issuer: any, sub: any, profile: any, accessToken: any, refreshToken: any, done: any) => {
			return done(null, profile)
		}))
			//JWT Auth for CI Jobs
	// passport.use('jwt', new JwtStrategy(opts,  (jwt_payload: any, done: any) => {
	// 	neoSession.readTransaction(async (tx) => {
	// 		const result = await tx.run(`
	// 			MATCH (run:HivePipelineRun {id: $id})
	// 			RETURN run
	// 		`, {
	// 			id: jwt_payload.sub
	// 		})
	// 		return result.records?.[0]?.get(0).properties;
	// 	}).then((user) => {
	// 		if(user){
	// 			return done(null, {
	// 				...user,
	// 				organisation: jwt_payload.organisation
	// 			})
	// 		}else{
	// 			return done("Couldn't validate accessToken", false)
	// 		}
	// 		return done(null, false)
	// 	})
	// }));
	}

	initMiddleware() {
		this.app.set("trust proxy", true)

		// this.app.use(cors())
		this.app.use(cookieParser())
		this.app.use(helmet())

		this.app.use(session({
			secret: process.env.SESSION_KEY || 'MyVoiceIsMyPassportVerifyMe',
			resave: false,
			saveUninitialized: true,
			store: MongoStore.create({
				mongoUrl: process.env.MONGO_URL
			})
		}));

		// app.use(auth(config))

		this.app.use(passport.initialize())
		this.app.use(passport.session())

	}

	start(){
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
				glx.serveApp(this.app)
			}
	
			if(!process.env.MAINTAINER_EMAIL) throw new Error("Provide a maintainer email through MAINTAINER_EMAIL environment variable")
			greenlock.init({
				packageRoot: __dirname + "/../../",
				configDir: "./greenlock.d",
		 
				// contact for security and critical bug notices
				maintainerEmail: process.env.MAINTAINER_EMAIL,
		 
				// whether or not to run at cloudscale
				cluster: false
			}).ready(httpsWorker)
		}else{
	
			const io = new Server(this.server)
	
			// setupWebsockets(io);
	
			this.server.listen(this.port, () => {
				console.log(`🚀 Server ready at :${this.port}`)
			})
		}
	}
}