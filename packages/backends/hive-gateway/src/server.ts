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

	// app.post('/auth', (req, res, next) => {
	// 	console.log('Auth');
	// 	next()
	// }, (req, res, next) => {
	// 	const resp = passport.authenticate('headerapikey')(req, res, next)
	// }, (req, res) => {
	// 	console.log("AUTH")
	// 	res.send({user: req.user})
	// })

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
	}, false, (apiKey: string, done: (err: any, user: any) => void) => {
		console.log("API Key", {apiKey})

		prisma.applicationServiceAccount?.findFirst({
			where: {
				apiKey: apiKey
			},
			include: {
				application: true
			}
		}).then((serviceAccount) => {
			if(serviceAccount){
				done(null, {
					type: 'appServiceAccount',
					id: serviceAccount.id,
					application: serviceAccount?.application?.id
				})
			}else{
				done("No ServiceAccount found for API-Key", null)
			}
		})

		// done(null, {apiKey})
	}))

	passport.use(new JwtStrategy(jwtConfig, (payload: any, done: (err: any, user: any) => void) => {
		console.log("JWT", {payload})
		
		if(payload.key){
			// const session = neoDriver?.session();
			// session?.run(`
			// 	MATCH (org:HiveOrganisation)-[:HAS_KEY]->(:HiveKey {key: $key})-[:HAS_PERMISSION]->(apps:HiveAppliance)

			// 	RETURN {
			// 		organisation: org.id,
			// 		applications: collect(apps{.*})
			// 	}
			// `, {
			// 	key: payload.key
			// }).then((data) => {
			// 	const user = data?.records?.[0]?.get(0);

			// 	session.close()
			// 	done(null, {type: 'api-key', ...user})
			// })
		}else{
			done(null, {type: 'app-2-app', ...payload})
		}

	}))
		
	// passport.use('oidc', new OidcStrategy({
	// 	...config,
	// 	skipUserProfile: false
	// }, (issuer: any, profile: any, done: any) => {
	// 	console.log({profile})
	// 	const session = neoDriver?.session();
	// 	session?.run(`
	// 	  MATCH (org:HiveOrganisation)-[:TRUSTS]->(user:HiveUser {id: $id})
	// 	  CALL {
	// 		  WITH user
	// 		MATCH (user)-[:HAS_ROLE]->()-->(apps:HiveAppliance)
	// 		RETURN distinct(apps{.*}) as apps
	// 	  }
	// 	  RETURN user{
	// 		id: user.id,
	// 		name: user.name,
	// 		organisation: org.id,
	// 		applications: collect(apps{.*})
	// 	  }
	// 	`, {
		  
	// 		id: profile.id,
		  
	// 	}).then((data) => {
		  
	// 	  const user = data.records?.[0].get(0);
		  
	// 	  session.close()
	// 	  done(null, user);
	// 	})
	// }))


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