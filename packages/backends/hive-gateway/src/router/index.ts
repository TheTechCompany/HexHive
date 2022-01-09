import cookieParser from 'cookie-parser';
import express, { Express, Router } from 'express';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';
import { Server } from 'socket.io';
import cors from 'cors';
import MongoStore from 'connect-mongo'

const {NODE_ENV} = process.env


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

}

export class HiveRouter {

	private app: Router;
	// private server: HttpServer;


	constructor(options: HiveRouterOptions) {

		this.app = Router()

		// this.server = createServer(this.app)

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
			console.log({profile})
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
		// this.app.set("trust proxy", true)

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

	get connect(){
		return this.app
	}

	start(){
		
	}
}