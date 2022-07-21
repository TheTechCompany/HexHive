import { HiveFrontendServer } from ".";
import { createServer } from 'http'
import express from 'express';
import { driver, auth } from 'neo4j-driver'
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import fs from 'fs';
import path from 'path';

import crypto from 'crypto'

import bodyParser from 'body-parser'

import { PrismaClient } from '@hexhive/data'

import { Strategy as LocalStrategy } from 'passport-local'

const prisma = new PrismaClient();

var OidcStrategy = require("passport-openidconnect").Strategy;

const { NODE_ENV } = process.env;

const url = process.env.AUTH_SERVER || "auth.hexhive.io";
const config = {
	issuer: `https://${url}`,
	authorizationURL: `https://${url}/auth`,
	tokenURL: `https://${url}/token`,
	userInfoURL: `https://${url}/me`,
	clientID:
		process.env.CLIENT_ID ||
		"test" ||
		`${NODE_ENV != "production" ? "staging-" : ""}hexhive.io`,
	clientSecret:
		process.env.CLIENT_SECRET ||
		`${NODE_ENV != "production" ? "staging-" : ""}hexhive_secret`,
	callbackURL: `${process.env.BASE_URL || "http://localhost:8000"}/callback`,
	scope: process.env.SCOPE || "openid email name groups",
};

(async (port: number = 8000) => {

	const deploymentLevel = process.env.DEPLOYMENT_LEVEL || "dev";

	const app = express()

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded());

	app.set('view engine', 'ejs');
	app.set('views', path.resolve(__dirname, './views'));

	let cookieParams = process.env.NODE_ENV === 'development' ? {} : { cookie: { domain: process.env.BASE_DOMAIN || 'domain.com' } }

	app.use(session({
		secret: process.env.SESSION_KEY || 'MyVoiceIsMyPassportVerifyMe',
		resave: false,
		saveUninitialized: true,
		...cookieParams,
		store: MongoStore.create({
			mongoUrl: process.env.MONGO_URL
		})
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser((user, next) => {
		next(null, user);
	});

	passport.deserializeUser((obj: any, next) => {
		next(null, obj)
	});

	app.post('/login', passport.authenticate('local', { failureRedirect: '/login?error=1', successRedirect: '/dashboard', failureMessage: true, failWithError: false }))

	app.use('/login',
		(req, res, next) => {

			const messages = (req.session as any).messages || [];
			const message = messages?.[0];

			res.render('login', {
				client: '',
				uid: '101',
				details: 'details',
				params: {},
				title: 'Sign-in',
				flash: req.query.errror ? message : undefined,
			});

		}
	);

	app.get("/logout", function (req, res) {
		console.log(req)
		req.logout();
		res.redirect("/");
	});

	passport.use(
		'local',
		new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password'
		}, async (username, password, done) => {

			const pass = crypto.createHash('sha256').update(password).digest("hex");

			const users = await prisma.user.findMany({
				where: {
					email: username,
					password: pass
				},
				include: {
					organisations: {
						include: {
							roles: {
								include: {
									permissions: true,
									applications: true
								}
							},
							issuer: true,
						}
					}
				}
			})

			console.log({
				username,
				password,
				users
			})


			if (users?.[0]) {
				let organisation = users?.[0]?.organisations?.[0];

				console.log({ org: JSON.stringify(organisation) })

				let user = {
					id: users?.[0].id,
					name: users?.[0]?.name,
					organisation: organisation?.issuer?.id,
					applications: [...new Set(organisation?.roles?.map((x) => x.applications)?.reduce((prev, curr) => prev.concat(curr), []))]
				}
				console.log({ user: user })
				return done(null, user)
			}
			if (!users?.[0]) return done(null, null, { message: "No user found with those credentials" })
		})
	)



	const frontendServer = new HiveFrontendServer({
		apiUrl: process.env.API_URL || "http://localhost:7000",
		routes: process.env.NODE_ENV == "development" ? [
			{
				key: 'Hive-Command',
				route: '/hive-command',
				url: 'http://localhost:8504/hivecommand-app-frontend.js',
			},
			{
				key: 'Hive-Signage',
				route: '/hive-signage',
				url: 'http://localhost:8080/greenco-apps-signage-frontend.js',
			},
			{
				key: 'Hive-Flow',
				route: '/hive-flow',
				url: 'http://localhost:8503/hexhive-apps-hive-flow.js',
			},
			{
				key: 'Hive-CRM',
				route: '/hive-connect',
				url: 'http://localhost:8513/hiveconnect-app-frontend.js'
			},
			{
				key: 'Hive-Automate',
				route: '/hive-automate',
				url: 'http://localhost:8080/hiveautomate-app-frontend.js'
			},
			{
				key: "Hive-Files",
				route: '/hive-files',
				url: 'http://localhost:8514/hivefiles-app-frontend.js'
			},
			{
				key: "Hive-Report",
				route: '/hive-report',
				url: 'http://localhost:8193/hivereport-app-frontend.js'
			},
			{
				key: "Hive-Chat",
				route: '/hive-chat',
				url: "http://localhost:8515/hexhive-apps-hive-chat.js"
			}
		] : [],
		getViews: async (req) => {

			// prisma.role.findMany()
			const applications = await prisma.application.findMany({
				where: {
					usedInRoles: {
						some: {
							usedBy: {
								some: {
									trust: {id: req.user.id}
								}
							}
						}
					}
				}
			})

			const views = (applications || []).map((app) => ({
				name: app.name,
				path: app.slug || '/404',
				default: false,
			}))

			const appliances = (applications || []).map((app) => ({
				name: app.name,
				config_url: (deploymentLevel == 'staging' ? app.staging_entrypoint : app.entrypoint) || '/',
			}))


			// const session = neoDriver?.session()

			// const apps = await session?.readTransaction(async (tx) => {
			// 	let apps: any[] = [];

			// 	if (!req || !req.user.id) {
			// 		const result = await tx?.run(`
			// 			MATCH (apps:HiveAppliance)
			// 			WHERE apps.entrypoint IS NOT NULL
			// 			RETURN distinct(apps{.*})
			// 		`);

			// 		apps = result?.records.map((x) => x.get(0)) || [];
			// 	} else {
			// 		const result = await tx?.run(
			// 			`
			// 			MATCH (user:HiveUser {id: $id})-[:HAS_ROLE]->()-->(apps:HiveAppliance)
			// 			WHERE apps.entrypoint IS NOT NULL
			// 			RETURN distinct(apps{.*})
			// 		`,
			// 			{
			// 				id: req.user.id,
			// 			}
			// 		);

			// 		apps = result?.records.map((x) => x.get(0)) || [];
			// 	}
			// 	return apps || [];
			// }) || [];

			// session?.close()

			// const views = (apps || []).map((app) => ({
			// 	name: app.name,
			// 	path: app.slug,
			// 	default: false,
			// }))

			// const appliances = apps?.map((app) => ({
			// 	name: app.name,
			// 	config_url: deploymentLevel == 'staging' ? app.staging_entrypoint : app.entrypoint,
			// }))

			return { views: views, apps: appliances }

		}
	})

	app.use(frontendServer.connect)
	const server = createServer(app)

	if (process.env.NODE_ENV == "production") {
		app.set('trust proxy', true)
		app.use((req, res, next) => {
			req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
		})

		server.listen(port, () => {
			console.log(`🚀 Server ready at :${port}`)
		})

	} else {
		server.listen(port, () => {
			console.log(`🚀 Server ready at :${port}`)
		})
	}
})()