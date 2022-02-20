import { HiveFrontendServer } from ".";
import { createServer } from 'http'
import express from 'express';
import { driver, auth } from 'neo4j-driver'
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
const greenlock = require("greenlock-express");
const pkg = require('../package.json');

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

	console.log(pkg.version)

	const app = express()


	const neoDriver = driver(
		process.env.NEO4J_URI || "neo4j://localhost",
		auth.basic(
		  process.env.NEO4J_USER || "neo4j",
		  process.env.NEO4J_PASSWORD || "test"
		)
	  );  

  const getUser = async (profile: {id: string}) => {
	  const session = neoDriver?.session();
	  const data = await session?.run(`
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
	  })
		
	  const user = data.records?.[0].get(0);
	  console.log("deserializeUser", user);
	  session.close()
	  return user; 			
  }

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

	app.use(passport.initialize());
    app.use(passport.session());

	passport.serializeUser((user, next) => {
		console.log("serializeUser", user);
		next(null, user);
	  });
  
	  passport.deserializeUser((obj: any, next) => {
		console.log("deserializeUser", obj);
  
		next(null, obj)
		// 
		// next(null, obj);
	  });
  
	  app.use(
		"/login",
		(req, res, next) => {
		  if (req.query.returnTo) {
			(req as any).session.returnTo = req.query.returnTo;
		  }
		  next();
		},
		passport.authenticate('oidc', (err, user, info) => {
			console.log({err, user, info})
		})
		// (req, res, next) => {
		// 	passport.authenticate("oidc", (err, user, info) => {
				
		// 		console.log("authenticate", {err, user, info});

		// 		if(err){
		// 			console.error(err);
		// 			return next(err);
		// 		}

		// 		if(!user){
		// 			console.log(`User not found: ${info.message}`);
		// 			res.send({success: false, message: 'authentication failed'})
		// 		}

		// 		req.login(user, loginErr => {
		// 			if (loginErr) {
		// 				console.warn(loginErr);
		// 			  return next(loginErr);
		// 			}
		// 			return res.send({ success : true, message : 'authentication succeeded' });
		// 		});    
		// 	})(req, res, next);
		// }
	  );
  
	  app.get("/logout", function (req, res) {
		console.log(req)
		req.logout();
		res.redirect("/");
	  });
  
	  app.use(
		"/callback",
		passport.authenticate("oidc", { failureRedirect: "/error" }),
		(req, res) => {
		  const returnTo = (req as any)?.session?.returnTo;
		  if ((req as any).session) (req as any).session.returnTo = undefined;
		  res.redirect(
			returnTo || process.env.UI_URL || "https://next.hexhive.io/dashboard"
		  );
		}
	  );
  
	  passport.use(
		"oidc",
		new OidcStrategy({
		  ...config,
		  skipUserProfile: false,
		}, async (issuer: any, profile: any, done: any) => {
		  const user = await getUser?.(profile)
		  done(null, user)
		})
	  );

	  
	const frontendServer = new HiveFrontendServer({
		apiUrl: process.env.API_URL || "http://localhost:7000",
		routes: process.env.NODE_ENV == "development" ? [
			{
				key: 'Hive-Command',
				route: '/hive-command',
				url: 'http://localhost:8504/hivecommand-app-frontend.js',
			}
		] : [],
		getViews: async (req) => {

			const session = neoDriver?.session()

			const apps = await session?.readTransaction(async (tx) => {
			  let apps: any[] = [];
		
			  if (!req || !req.user.id) {
				const result = await tx?.run(`
						MATCH (apps:HiveAppliance)
						WHERE apps.entrypoint IS NOT NULL
						RETURN distinct(apps{.*})
					`);
		
				apps = result?.records.map((x) => x.get(0)) || [];
			  } else {
				const result = await tx?.run(
				  `
						MATCH (user:HiveUser {id: $id})-[:HAS_ROLE]->()-->(apps:HiveAppliance)
						WHERE apps.entrypoint IS NOT NULL
						RETURN distinct(apps{.*})
					`,
				  {
					id: req.user.id,
				  }
				);
		
				apps = result?.records.map((x) => x.get(0)) || [];
			  }
			  return apps || [];
			}) || [];
			
			session?.close()

			const views = (apps || []).map((app) => ({
				name: app.name,
				path: app.slug,
				default: false,
			}))

			const appliances = apps?.map((app) => ({
			  name: app.name,
			  config_url: app.entrypoint,
			}))

			return { views: views, apps: appliances }

		
		}
	})

	app.use(frontendServer.connect)
	const server = createServer(app)

	if(process.env.NODE_ENV == "production"){
		const httpsWorker = (glx: any)  => {
			const server = glx.httpsServer()
			
			// const io = new Server(server)
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

		// const io = new Server(this.server)

		// setupWebsockets(io);

		server.listen(port, () => {
			console.log(`🚀 Server ready at :${port}`)
		})
	}
})()