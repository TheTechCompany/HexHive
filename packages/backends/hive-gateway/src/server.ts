#!/usr/bin/env node
import { HiveGateway } from '.'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { readFileSync } from 'fs';
import { createServer, Server as HttpServer } from 'http';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import { PrismaClient } from '@hexhive/data'

import ApiKeyStrategy from 'passport-headerapikey'
// const { Strategy: ApiKeyStrategy } = require('passport-headerapikey')

const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

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

	const prisma = new PrismaClient();

	const app = express()
	const server = createServer(app)

	// const neoDriver = neo4j.driver(
	// 	process.env.NEO4J_URI || "localhost",
	// 	neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "test")
	// )
	
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

	if(gateway.jwtSecret) jwtConfig.secretOrKey = gateway.jwtSecret

	passport.use(new ApiKeyStrategy({
		header: 'Authorization',
		prefix: 'API-Key '
	}, false, async (apiKey: string, done: (err: any, user: any) => void) => {
		console.log("API Key", {apiKey})

		const [serviceAccount, organisation] = await Promise.all([
			prisma.applicationServiceAccount.findFirst({where: {apiKey: apiKey}, include: {application: true}}),
			prisma.organisation.findFirst({where: {apiKeys: {some: {apiKey: apiKey}}}})
		]);

	
			if(serviceAccount){
				done(null, {
					type: 'appServiceAccount',
					id: serviceAccount.id,
					application: serviceAccount?.application?.id
				})
			}else if(organisation){
				done(null, {
					type: 'org-key',
					organisation: organisation?.id,
					id: organisation?.id
				})
			}else{
				done("No valid claim found for API-Key", null)
			}
	}))

	passport.use(new JwtStrategy(jwtConfig, async (payload: any, done: (err: any, user: any) => void) => {
		console.log("JWT", {payload})
		
		if(payload.key){

			const organisation = await prisma.organisation.findFirst({
				where: {
					apiKeys: {
						some: {
							apiKey: payload.key
						}
					}
				}
			});

			if(!organisation) done("No Org found for API-Key", null);

			done(null, {type: 'org-key', organisation: organisation?.id})
		
		}else{
			done(null, {type: 'app-2-app', ...payload})
		}

	}))
		

	console.log(`=> Starting Gateway`)

	if(gateway.connect) app.use(gateway.connect)

	if(process.env.NODE_ENV == "production"){

		app.set('trust proxy', true) // trust first proxy
		
			app.use((req, res, next) => {
				req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
			})

			server.listen(port, () => {
				console.log(`🚀 Server ready at :${port}`)
			})
			
		
		}else{
	
			server.listen(port, () => {
				console.log(`🚀 Server ready at :${port}`)
			})
		}
})()