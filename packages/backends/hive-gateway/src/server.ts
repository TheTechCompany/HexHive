#!/usr/bin/env node
import { HiveGateway } from '.'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { readFileSync } from 'fs';
import { createServer, Server as HttpServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';
import passport from 'passport';
import neo4j from 'neo4j-driver'
import session from 'express-session';
import MongoStore from 'connect-mongo';

const OidcStrategy = require('passport-openidconnect').Strategy;
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')
const greenlock = require("greenlock-express")


const {NODE_ENV} = process.env



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

const jwtConfig = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET || "test",
	// issuer: url,
	// audience: url
};

const argv = yargs(hideBin(process.argv)).options({
	port: {type: 'number', default: 7000},
	dev: {type: 'boolean', default: false},
	endpoints: {type: 'string'},
});

(async () => {

	const app = express()
	const server = createServer(app)

	const neoDriver = neo4j.driver(
		process.env.NEO4J_URI || "localhost",
		neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "test")
	)
	
	let cookieParams = process.env.NODE_ENV === 'development' ? {} : {cookie: { domain: process.env.BASE_DOMAIN || 'domain.com' }}

	app.use(session({
		secret: process.env.SESSION_KEY || 'MyVoiceIsMyPassportVerifyMe',
		resave: false,
		saveUninitialized: true,
		...cookieParams,
		store: MongoStore.create({
			mongoUrl: process.env.MONGO_URL
		})
	}));

	app.use(passport.initialize())
	app.use(passport.session())

	passport.serializeUser((user, next) => {
		console.log("serializeUser", user)
		next(null, user);
	});
	  
	passport.deserializeUser((obj: any, next) => {
		console.log("deserializeUser", obj);
		
		next(null, obj)
		// next(null, {...obj, name: "Test"});
	});

	app.use('/login', (req, res, next) => {
		if(req.query.returnTo){
			(req.session as any).returnTo = req.query.returnTo
		}
		next();
	}, passport.authenticate('oidc'))

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	app.use('/callback',
		passport.authenticate('oidc', { failureRedirect: '/error' }),
			(req, res) => {

				const returnTo = (req.session as any).returnTo;
				(req.session as any).returnTo = undefined;
				console.log(req)
				res.redirect(returnTo || process.env.UI_URL || "https://next.hexhive.io/dashboard");
			}
		);

	passport.use( new JwtStrategy(jwtConfig, (payload: any, done: (err: any, user: any) => void) => {
		console.log({payload})
		const session = neoDriver?.session();
		session?.run(`
			MATCH (org:HiveOrganisation)-[:HAS_KEY]->(:HiveKey {key: $key})-[:HAS_PERMISSION]->(apps:HiveAppliance)

			RETURN {
				organisation: org.id,
				applications: collect(apps{.*})
			}
		`, {
			key: payload.key
		}).then((data) => {
			const user = data?.records?.[0]?.get(0);

			session.close()
			done(null, {type: 'api-key', ...user})
		})


	}))
		
	passport.use('oidc', new OidcStrategy({
		...config,
		skipUserProfile: false
	}, (issuer: any, profile: any, done: any) => {
		console.log({profile})
		const session = neoDriver?.session();
		session?.run(`
		  MATCH (org:HiveOrganisation)-[:TRUSTS]->(user:HiveUser {id: $id})
		  CALL {
			  WITH user
			MATCH (user)-[:HAS_ROLE]->()-->(apps:HiveAppliance)
			RETURN distinct(apps{.*}) as apps
		  }
		  RETURN user{
			id: user.id,
			name: user.name,
			organisation: org.id,
			applications: collect(apps{.*})
		  }
		`, {
		  
			id: profile.id,
		  
		}).then((data) => {
		  
		  const user = data.records?.[0].get(0);
		  console.log("deserializeUser", user);
		  session.close()
		  done(null, user);
		})
	}))

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

	if(gateway.connect) app.use(gateway.connect)

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