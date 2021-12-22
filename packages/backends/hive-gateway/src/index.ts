require("dotenv").config()

import express from "express"
import crypto from "crypto"

import neo4j from "neo4j-driver"
import pg, {Client, Pool} from 'pg'

import { GraphQLServer } from "@hexhive/express-graphql" // ES6

import { connect_data, User } from "@hexhive/types"
import session from 'express-session'

import { stitchSchemas } from "@graphql-tools/stitch"
import { mergeSchemas } from "@graphql-tools/merge"

import SubSchema from "./schema"
import { REMOTE_SCHEMA } from "./remotes"
import { DefaultRouter } from "./routes"

import { createServer } from "http"
// import WebSocket, { Server as WebSocketServer } from 'ws';
// import { CollaborationServer } from './collaboration';
import { Account } from "./Account"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import hiveSchema from "./schema/hive"
import printerSchema from "./schema/3d"

import { auth, ConfigParams, requiresAuth} from "express-openid-connect"
import { TaskRegistry } from "./task-registry"

import {Server} from 'socket.io'

import amqp from 'amqplib'

import jwt from 'jsonwebtoken'
import passport from 'passport'

var OidcStrategy = require('passport-openidconnect').Strategy;
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;


const greenlock = require("greenlock-express")

const app = express()

const server = createServer(app)
// const wss = new WebSocketServer({ server, perMessageDeflate: false });

const {NODE_ENV} = process.env

const { PORT = (NODE_ENV == "production" ? 80 : 7000), AUTH_SITE = "https://next.hexhive.io", ISSUER = `http://localhost:${PORT}` } = process.env

// const jwks = require('./jwks/jwks.json');
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


var opts : any = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = url;


opts.audience = new URL(process.env.UI_URL || "https://next.hexhive.io/dashboard").host;

const setupWebsockets = (io: Server) => {
	
	io.on('connection', (socket)=> {

		io.in('device:id').emit('device:values', )

		socket.on('disconnect', () => {

		})
	})
}

(async () => {
	console.log(`Setting up data connections...`)


	const taskRegistry = new TaskRegistry()

	const pgClient = new Pool({
		host: process.env.TIMESERIES_HOST || 'localhost',
		user: process.env.TIMESERIES_USER || 'postgres',
		password: process.env.TIMESERIES_PASSWORD || 'quest',
		port: 5432,
		connectionTimeoutMillis: 60 * 1000
	})
	console.log(`PG Connection Pool`)

	const driver = neo4j.driver(
		process.env.NEO4J_URI || "localhost",
		neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "test")
	)
	console.log(`Neo4j...`)

	const mqConnection = await amqp.connect(
		process.env.RABBIT_URL || 'amqp://localhost'
	)

	console.log("RabbitMQ")

	const mqChannel = await mqConnection.createChannel()

	await mqChannel.assertQueue(`COMMAND:DEVICE:CONTROL`)
	await mqChannel.assertQueue(`COMMAND:DEVICE:MODE`);
	await mqChannel.assertQueue(`COMMAND:FLOW:PRIORITIZE`);

	// const collaborationServer = new CollaborationServer();
         

	await connect_data()

	console.log(`Data connections setup`)

	let subschemas = await SubSchema(REMOTE_SCHEMA)
	let schema = stitchSchemas({
		subschemas: subschemas
	})


	app.set("trust proxy", true)
    
	app.use(cookieParser())
	app.use(helmet())

	app.use(session({
		secret: 'MyVoiceIsMyPassportVerifyMe',
		resave: false,
		saveUninitialized: true
	}));

	// app.use(auth(config))

	app.use(passport.initialize())
	app.use(passport.session())

	passport.use('oidc', new OidcStrategy(config, (issuer: any, sub: any, profile: any, accessToken: any, refreshToken: any, done: any) => {
		return done(null, profile)
	}))

	const neoSession = driver.session()

	//JWT Auth for CI Jobs
	passport.use('jwt', new JwtStrategy(opts,  (jwt_payload: any, done: any) => {
		neoSession.readTransaction(async (tx) => {
			const result = await tx.run(`
				MATCH (run:HivePipelineRun {id: $id})
				RETURN run
			`, {
				id: jwt_payload.sub
			})
			return result.records?.[0]?.get(0).properties;
		}).then((user) => {
			if(user){
				return done(null, {
					...user,
					organisation: jwt_payload.organisation
				})
			}else{
				return done("Couldn't validate accessToken", false)
			}
			return done(null, false)
		})
	}));

	passport.serializeUser((user, next) => {
		next(null, user);
	});
	  
	passport.deserializeUser((obj: any, next) => {
		next(null, obj);
	});

	app.use(DefaultRouter(driver, taskRegistry)) 


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

	if (process.env.NODE_ENV == "production" || process.env.NODE_ENV == "local-auth") {

		app.use("/graphql", async (req, res, next) => {

			try {

				console.log(req.user);
					(req as any).jwt = {
						iat: 1516239022,
						roles: ["admin"],
						...req.user
					}

				next()
			}catch(e){
				next("No user info found")
			}
		})
	}

	const graphqlServer = new GraphQLServer({})

	const reloadSchema = async () => {
		console.log("Loading Schema")
		subschemas = await SubSchema(REMOTE_SCHEMA)
		schema = stitchSchemas({
			subschemas: subschemas
		})
		hiveSchema(driver, mqChannel, pgClient,  taskRegistry).then((hive) => {
			// app.stack.find((a) => a.ro)
			graphqlServer.setSchema( mergeSchemas({schemas: [printerSchema, hive, schema]}))
			// app.use("/graphql", graphqlHTTP({
			// 	graphiql: true,
			// }))
		})
	 
	}
	
	const middleware = graphqlServer.http({})
	await reloadSchema()

	if(middleware) app.use('/graphql', middleware)

	//Reload remote schema every 5 minutes
	setInterval(async () => {
		await reloadSchema()
	}, 5 * 60 * 1000)


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

		setupWebsockets(io);

		server.listen(PORT, () => {
			console.log(`🚀 Server ready at :${PORT}`)
		})
	}
})()