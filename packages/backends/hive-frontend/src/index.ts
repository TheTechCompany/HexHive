import { config as dotenv } from "dotenv";
dotenv();

import neo4j, { Driver, int, Session } from "neo4j-driver";
import express, { Express, Router } from "express";
import MongoStore from "connect-mongo";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import { HiveMicrofrontendServer } from "@hexhive/microfrontend-server";
import { frontendRouter } from "./router";
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

export interface HiveFrontendRoute {
  route: string;
  url: string;
  key: string
}

export interface HiveFrontendOptions {
  routes: HiveFrontendRoute[]
}

export class HiveFrontendServer {
  private app: Router;

  private neoDriver?: Driver;
  private neoSession?: Session;
  private redisClient: any;
  private frontendRegistry: HiveMicrofrontendServer;

  private routes: HiveFrontendRoute[]

  constructor(opts: HiveFrontendOptions) {
    this.app = Router();

    this.routes = opts.routes;

    this.app.use(frontendRouter());

    this.frontendRegistry = new HiveMicrofrontendServer({
      name: "HexHive | Connected Data",
      get_views: this.getViews.bind(this),
    });

    this.init();

  }

  get connect() {
    return this.app;
  }

  async publicSites() {
    return await this.getViews();
  }

  async getViews(req?: any) {
    const default_views = [
      {
        name: "@hexhive-core/dashboard",
        path: "/",
        default: true,
      },
      {
        name: "Hive-Flow",
        path: "/hive-flow",
      },
      {
        name: "Hive-Command",
        path: "/hive-command",
      },
      {
        name: "Hive-Signage",
        path: "/hive-signage",
      },
      {
        name: '@hexhive-core/settings',
        path: '/settings',
      }
    ].concat(
      this.routes.map(route => {
        return { name: route.key, path: route.route }
      })
    );

    const default_apps = [
      {
        name: "Hive-Flow",
        config_url: "http://localhost:8503/hexhive-apps-hive-flow.js",
      },
      {
        name: "Hive-Command",
        config_url: "http://localhost:8504/hivecommand-app-frontend.js",
      },
      {
        name: "Hive-Signage",
        config_url: "http://localhost:8081/greenco-apps-signage-frontend.js",
      },
      {
        name: '@hexhive-core/settings',
        config_url: `${
          process.env.NODE_ENV == "production" 
            ? "https://apps.hexhive.io/settings/"
            : "http://localhost:8888/"
        }hexhive-core-settings.js`
      },
      {
        name: "@hexhive-core/dashboard",
        config_url: `${
          // process.env.NODE_ENV == "production"
            "https://apps.hexhive.io/dashboard/"
            // : "http://localhost:8501/"
        }hexhive-core-dashboard.js`,
      },
      {
        name: "@hexhive-core/header",
        config_url: `${
          // process.env.NODE_ENV == "production"
            "https://apps.hexhive.io/header/"
            // : "http://localhost:8502/"
        }hexhive-core-header.js`,
      },
    ].concat(
      this.routes.map((route) => {
        return {
          name: route.key,
          config_url: route.url
        } 
      })
    );

    let views = [];

    const session = this.neoDriver?.session()

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

    return {
      apps: apps
        ?.map((app) => ({
          name: app.name,
          config_url: app.entrypoint,
        }))
        .concat(default_apps),

      views: default_views.concat(
        (apps || []).map((app) => ({
          name: app.name,
          path: app.slug,
          default: false,
        }))
      ),
    };
  }

  private init() {
    this.setupDBConnection();
    this.initPassport();
    this.initMiddleware();
  }

  setupDBConnection() {
    this.neoDriver = neo4j.driver(
      process.env.NEO4J_URI || "neo4j://localhost",
      neo4j.auth.basic(
        process.env.NEO4J_USER || "neo4j",
        process.env.NEO4J_PASSWORD || "test"
      )
    );
    this.neoSession = this.neoDriver.session();
  }

  initPassport() {
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

    this.app.use(
      "/login",
      (req, res, next) => {
        if (req.query.returnTo) {
          (req as any).session.returnTo = req.query.returnTo;
        }
        next();
      },
      passport.authenticate("oidc")
    );

    this.app.get("/logout", function (req, res) {
      req.logout();
      res.redirect("/");
    });

    this.app.use(
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
      }, (issuer: any, profile: any, done: any) => {
        console.log({profile})
        const session = this.neoDriver?.session();
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
      })
    );
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

    // app.use(auth(config))

    this.app.use(passport.initialize());
    this.app.use(passport.session());

    this.protectRoutes();

    this.mountFrontendServer();

  }

  protectRoutes() {
    this.app.use("/dashboard*", (req, res, next) => {
      if (req.isAuthenticated()) {
        next();
      } else {
        res.redirect("/login");
      }
    });

    this.app.get('/*', (req, res, next) => {
      console.log(req.path)
      if(req.path.indexOf('/dashboard') < 0) {
        res.redirect('/dashboard')
      }else{
        next()
      }
    })
  }

  mountFrontendServer() {

    this.app.use("/dashboard", this.frontendRegistry.routes());

    this.app.get('*', (req, res) => {
      res.status(404).send({error: "404 Page not found"})
    })
  }
}
