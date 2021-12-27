import { config as dotenv } from 'dotenv'
dotenv()

import neo4j, { Driver, Session } from 'neo4j-driver'
import express, {Express} from 'express'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import { HiveMicrofrontendServer } from '@hexhive/microfrontend-server'
import {frontendRouter} from './router'
var OidcStrategy = require('passport-openidconnect').Strategy;

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


export class HiveFrontendServer {

	private app : Express;

	private start_app: () => void;

	private neoDriver?: Driver
	private neoSession?: Session;
	private redisClient: any;
	private frontendRegistry: HiveMicrofrontendServer;


	constructor(){
	
		const {app, start} = frontendRouter()
		this.app = app;
		this.start_app = start;

		this.frontendRegistry = new HiveMicrofrontendServer({
			get_views: async (req) => {

				if(!req.user.id) return [] as any;

				const result = await this.neoSession?.run(`
					MATCH (user:HiveUser {id: $id})-[:HAS_ROLE]->()-->(apps:HiveAppliance)
					WHERE apps.entrypoint IS NOT NULL
					RETURN distinct(apps{.*})
				`, {
					id: req.user.id
				})

				const apps = result?.records.map((x) => x.get(0)) || []

				return {
					apps: apps?.map((app) => ({
						name: app.name,
						config_url: app.entrypoint
					})).concat([
						{
							name: "@hexhive-core/dashboard",
							config_url: `https://staging-apps.hexhive.io/dashboard/hexhive-core-dashboard.tsx`
						}
					]),
				// 	 [{
				// 	name: '@hexhive/hive-flow',
				// 	config_url: '//localhost:8500/hexhive-apps-hive-flow.js'
				// }, {
				// 	name: '@hexhive-core/dashboard',
				// 	config_url: '//localhost:8501/hexhive-core-dashboard.js'
				// }, {
				// 	name: '@greenco/signage-frontend',
				// 	config_url: '//localhost:8081/greenco-apps-signage-frontend.js'
				// }],
				views: [{
					name: '@hexhive-core/dashboard',
					path: '/',
					default: true
				}].concat(
					(apps || []).map((app) => ({
						name: app.name,
						path: app.slug,
						default: false
					})))
				}
			}
		})

		this.init()

		this.mountFrontendServer()
	}

	init(){
		this.setupDBConnection()
		this.initMiddleware()
		this.initPassport()
	}

	setupDBConnection(){
		this.neoDriver = neo4j.driver(process.env.NEO4J_URI || 'neo4j://localhost', neo4j.auth.basic(process.env.NEO4J_USER || 'neo4j', process.env.NEO4J_PASSWORD || 'test'))
		this.neoSession = this.neoDriver.session()
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
				(req as any).session.returnTo = req.query.returnTo
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
	
					const returnTo = (req as any)?.session?.returnTo;
					if((req as any).session) (req as any).session.returnTo = undefined;
					console.log(req)
					res.redirect(returnTo || process.env.UI_URL || "https://next.hexhive.io/dashboard");
				}
			);
	
			
		passport.use('oidc', new OidcStrategy(config, (issuer: any, profile: any, done: any) => {
			console.log('OIDC', profile)
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

		// app.use(auth(config))

		this.app.use(passport.initialize())
		this.app.use(passport.session())

		this.protectRoutes()

	}

	protectRoutes(){
		this.app.use('/dashboard*', (req, res, next) => {
			if(req.isAuthenticated()){
				next()
			}else{
				res.redirect('/login')
			}
		})
	}

	mountFrontendServer(){
		this.app.use('*', (req, res, next) => {
			console.log({user: req.user})
			console.log({session: req.session})
			next()
		})
		this.app.use('/dashboard', this.frontendRegistry.routes());
	}

	start(){
		this.start_app()
		// this.app.listen(8000)
	}
}