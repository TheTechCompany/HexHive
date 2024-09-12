import { HiveFrontendServer } from ".";
import { createServer } from 'http'
import express from 'express';
import passport from "passport";
import session from "express-session";
import fs from 'fs';
import path from 'path';

import crypto from 'crypto'

import bodyParser from 'body-parser'

import { Strategy as LocalStrategy } from 'passport-local'

import { createClient } from 'redis';
import RedisStore from 'connect-redis';
import cookieParser from "cookie-parser";
import { HiveDB } from '@hexhive/db-types'
import { HiveDBPG } from '@hexhive/db-postgres'


const { NODE_ENV } = process.env;

const url = process.env.AUTH_SERVER || "auth.hexhive.io";

(async (port: number = 8000) => {

	const db: HiveDB = HiveDBPG();

	const deploymentLevel = process.env.DEPLOYMENT_LEVEL || "dev";

	const app = express()

	const redisClient = createClient({
		url: process.env.REDIS_URL
	})
	await redisClient.connect();

	const redisStore = new RedisStore({
		client: redisClient,
		prefix: "hexhive:"
	})

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded());

	app.set('view engine', 'ejs');
	app.set('views', path.resolve(__dirname, './views'));

	let cookieParams = process.env.NODE_ENV === 'development' ? {} : { cookie: { domain: process.env.BASE_DOMAIN || 'domain.com' } }

	app.use(cookieParser())

	app.use(session({
		secret: process.env.SESSION_KEY || 'MyVoiceIsMyPassportVerifyMe',
		resave: false,
		saveUninitialized: true,
		...cookieParams,
		store: redisStore
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
		req.logOut(() => {
			res.redirect("/");
		});
	});

	app.use('/forgot', (req, res) => {
		res.render('forgot', {
			success: false,
			params: {

			},
			client: {

			}
		})
	})
	app.use('/join/:id', (req, res) => {
		res.render('join', {
			params: {

			},
			client: {

			}
		})
	})
	app.use('/reset', (req, res) => {
		res.render('reset', {
			success: false,
			params: {

			},
			client: {

			}
		})
	})
	app.use('/signup', (req, res) => {
		res.render('signup', {
			params: {

			},
			client: {

			}
		})
	})

	passport.use(
		'local',
		new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password'
		}, async (username, password, done) => {


			try {
				const user = await db.authenticateUser(username, password)


				if (user) {
					let organisation = user?.organisations?.[0];

					const roles = organisation?.roles || [];

					const permissions = (organisation?.permissions || []).concat((roles || []).map((r: any) => r.permissions).reduce((p: any, c: any) => p.concat(c), []) as any[])

					const applications = roles.map((x: any) => x.applications).reduce((prev: any, curr: any) => prev.concat(curr), []).concat(permissions.map(x => x.scope))


					let userObject = {
						id: user?.id,
						name: user?.name,
						organisation: organisation?.issuer?.id,
						organisations: user?.organisations?.map((org) => org.issuer),
						applications: [...new Set(applications)],
						roles,
						permissions
					}
					// console.log({ user: user })
					return done(null, userObject)
				}
				if (!user) return done(null, undefined, { message: "No user found with those credentials" })
			} catch (e) {
				return done(null, undefined, { message: "No user found with those credentials" })
			}

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
			},
			{
				key: "Hive-Settings",
				route: '/hive-settings',
				url: "http://localhost:8888/hexhive-core-settings.js"
			}
		] : [],
		getViews: async (req) => {

			const applications = await db.getUserApplications(req.user.id, req.user.organisation);

			const views = (applications || []).map((app: any) => ({
				name: app.name,
				path: app.slug || '/404',
				default: false,
			}))

			const appliances = (applications || []).map((app: any) => ({
				name: app.name,
				config_url: (deploymentLevel == 'staging' ? app.staging_entrypoint : app.entrypoint) || '/',
			}))

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