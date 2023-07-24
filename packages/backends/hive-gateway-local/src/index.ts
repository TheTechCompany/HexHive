#!/usr/bin/env node
import { config } from 'dotenv'
config()
import { HiveGateway } from '@hexhive/gateway'
import { HiveFrontendServer } from '@hexhive/frontend-server'
import { readFileSync } from 'fs';
import express, {Express} from 'express';
import { Routes } from './routes'
import session from 'express-session';
import passport from 'passport';
var OidcStrategy = require('passport-openidconnect').Strategy;

// const {NODE_ENV} = process.env

// console.log(process.env.CLIENT_ID, process.env.CLIENT_SECRET)

// const url = process.env.AUTH_SERVER || "auth.hexhive.io"
// const openIdConfig = {
// 	issuer: `https://${url}`,
// 	authorizationURL: `https://${url}/auth`,
// 	tokenURL: `https://${url}/token`,
// 	userInfoURL: `https://${url}/me`,
// 	clientID: process.env.CLIENT_ID || "test" || `${NODE_ENV != "production" ? "staging-" : ""}hexhive.io`,
// 	clientSecret: process.env.CLIENT_SECRET || `${NODE_ENV != "production" ? "staging-" : ""}hexhive_secret`,
// 	callbackURL: `${process.env.BASE_URL || "http://localhost:7000"}/callback`,
// 	scope: process.env.SCOPE || "openid email name groups"
// };

export interface LocalGatewayApp {
	id: string;
	name: string;
	graph?: string;
	route?: string;
	app?: string;
}

export interface LocalGatewayOptions {
	applications: LocalGatewayApp[];
	port: number
}

export class LocalGateway {
	private app: Express;

	private gateway: HiveGateway;
	private frontendServer: HiveFrontendServer;

	private port = 7000;

	private applications : LocalGatewayApp[]

	constructor(options: LocalGatewayOptions){
		this.app = express()

		this.port = options.port || 7000;

		this.applications = options.applications

		const endpointInfo = (options.applications || []).filter((a) => a.graph).map((app) => {
			return {
				id: app.id,
				url: app.graph || '',
				key: app.name || '',
				version: app.route,
			}
		})

		const routeInfo = (options.applications || []).filter((a) => a.app && a.route).map((app) => {
			return {
				url: app.app || '',
				key: app.name || '',
				route: app.route || ''
			}
		})

		this.gateway = new HiveGateway({
			dev: true,
			endpoints: endpointInfo as any
		})

		this.frontendServer = new HiveFrontendServer({
			apiUrl: `http://localhost:${this.port}`,
			routes: routeInfo,
			getViews: async (req) => {
				return {
					views: [],
					apps: []
				}
			}
		})


	}

	initPassport(){

		let cookieParams = process.env.NODE_ENV === 'development' ? {} : {cookie: { domain: process.env.BASE_DOMAIN || 'domain.com' }}

		this.app.use(session({
			secret: process.env.SESSION_KEY || 'MyVoiceIsMyPassportVerifyMe',
			resave: false,
			saveUninitialized: true,
			...cookieParams
		}));
		
		this.app.use((req, res, next) => {
			if(!req.isAuthenticated) req.isAuthenticated = () => true;
			if(!req.user){
				req.user = {
					id: '0v9EW7tP8Ys35JY4sypqw',
					name: 'Developer',
					organisation: 'BvU0TJhV1v23u1DR9d-S0',
					applications: this.applications.map((app) => ({
									...app,
									dev: true
								}))
				}
			}
			next()
		})

		// this.app.use(passport.initialize())
		// this.app.use(passport.session())

		// passport.serializeUser((user, next) => {
		// 	console.log("serializeUser", user)
		// 	next(null, user);
		// });
		
		// passport.deserializeUser((obj: any, next) => {
		// 	console.log("deserializeUser", obj);
			
		// 	next(null, obj)
		// 	// next(null, {...obj, name: "Test"});
		// });

		// this.app.use('/login', (req, res, next) => {
		// 	if(req.query.returnTo){
		// 		(req as any).session.returnTo = req.query.returnTo
		// 	}
		// 	next();
		// }, passport.authenticate('oidc'))

		// this.app.get('/logout', function(req, res){
		// 	req.logout();
		// 	res.redirect('/');
		// });

		// this.app.use('/callback',
		// 	passport.authenticate('oidc', { failureRedirect: '/error' }),
		// 		(req, res) => {
		// 			console.log("callback", req)
		// 			const returnTo = (req as any).session.returnTo;
		// 			(req as any).session.returnTo = undefined;
		// 			console.log(req)
		// 			res.redirect(returnTo || process.env.UI_URL || "https://next.hexhive.io/dashboard");
		// 		}
		// );

		
		// passport.use('oidc', new OidcStrategy({
		// 	...openIdConfig,
		// 	skipUserProfile: true
		// }, (issuer: any, profile: any, done: any) => {

		// 	console.log("profile", profile)

		// 	done(null, {
		// 		id: profile.id,
		// 		name: "Dev Account",
		// 		organisation: "Developers",
		// 		applications: this.applications.map((app) => ({
		// 			...app,
		// 			dev: true
		// 		}))
		// 	})
		// 	// console.log({profile})
		// 	// const session = neoDriver?.session();
		// 	// session?.run(`
		// 	// MATCH (org:HiveOrganisation)-[:TRUSTS]->(user:HiveUser {id: $id})
		// 	// CALL {
		// 	// 	WITH user
		// 	// 	MATCH (user)-[:HAS_ROLE]->()-->(apps:HiveAppliance)
		// 	// 	RETURN distinct(apps{.*}) as apps
		// 	// }
		// 	// RETURN user{
		// 	// 	id: user.id,
		// 	// 	name: user.name,
		// 	// 	organisation: org.id,
		// 	// 	applications: collect(apps{.*})
		// 	// }
		// 	// `, {
			
		// 	// 	id: profile.id,
			
		// 	// }).then((data) => {
			
		// 	// const user = data.records?.[0].get(0);
		// 	// console.log("deserializeUser", user);
		// 	// session.close()
		// 	// done(null, user);
		// 	// })
		// }))
	}

	async init(){
		this.initPassport()

		this.app.use(Routes(this.gateway, this.frontendServer))

		console.log(`=> Mounting dev server`)
		this.app.get('/', (req, res) => {
			res.sendFile(__dirname + '/dev-view/dist/index.html')
		})
		this.app.use('/', express.static(__dirname + `/dev-view/dist`))
		
		console.log(`=> Initializing Gateway`)
		await this.gateway.init()
	
		console.log(`=> Start Frontend`)
		this.app.use(this.frontendServer.connect)
	
		console.log(`=> Starting Gateway`)
		if(this.gateway.connect) this.app.use(`/`, this.gateway.connect)
	
	}
	
	start(){
		this.app.listen(this.port)
		console.log(`=> Gateway Online on ${this.port}`)
		console.log(`=> View at http://localhost:${this.port}`)
	}
}

// (async () => {
// 	const app = express()

// 	const { port, endpoints, dev } = await argv.argv;

// 	console.log(`=> Starting Gateway on ${port}`)

// 	let endpointInfo = [];
// 	if(endpoints){
// 		const endpointData = JSON.parse(readFileSync(endpoints, 'utf8'))
// 		endpointInfo = endpointData.endpoints.map(({url, name, version}: any) => ({url, key: name, version}))
// 	}

// 	const frontend = new HiveFrontendServer()

// 	const gateway = new HiveGateway({
// 		dev: true,
// 		endpoints: endpointInfo
// 	})
	
// 	app.use(Routes(gateway, frontend))

// 	console.log(`=> Mounting dev server`)
// 	app.get('/', (req, res) => {
// 		res.sendFile(__dirname + '/dev-view/dist/index.html')
// 	})
// 	app.use('/', express.static(__dirname + `/dev-view/dist`))
	
// 	console.log(`=> Initializing Gateway`)
// 	await gateway.init()

// 	console.log(`=> Start Frontend`)
// 	app.use(frontend.connect)

// 	console.log(`=> Starting Gateway`)
// 	if(gateway.connect) app.use(`/`, gateway.connect)




// 	console.log(`=> Gateway Online on ${port}`)

// 	app.listen(port)
// })()