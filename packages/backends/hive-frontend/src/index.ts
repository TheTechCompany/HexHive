import { config as dotenv } from "dotenv";
dotenv();

import { Router } from "express";
import { HiveMicrofrontendServer } from "@hexhive/microfrontend-server";

export interface HiveFrontendRoute {
  route: string;
  url: string;
  key: string
}

export interface HiveFrontendOptions {
  routes: HiveFrontendRoute[],
  getViews: ((req: any) => Promise<{views: {name: string, path: string, default?: boolean}[], apps: {name: string, config_url: string}[]}>)
  // getUser: (profile: {id: string}) => Promise<{id: string} & any>,
  apiUrl: string;
}

export class HiveFrontendServer {
  private app: Router;

  private redisClient: any;
  private frontendRegistry: HiveMicrofrontendServer;

  private routes: HiveFrontendRoute[]

  private getExternalViews?: (req: any) => Promise<{views: {name: string, path: string, default?: boolean}[], apps: {name: string, config_url: string}[]}>;
  private getUser?: (profile: {id: string}) => Promise<{id: string} & any>

  constructor(opts: HiveFrontendOptions) {
    this.app = Router();

    this.getExternalViews = opts.getViews;

    this.routes = opts.routes;

    this.frontendRegistry = new HiveMicrofrontendServer({
      apiUrl: opts.apiUrl,
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

    const { views: externalViews, apps: externalApps } = await this.getExternalViews?.(req) || {};

    const default_views = ([
      {
        name: "@hexhive-core/dashboard",
        path: "/",
        default: true,
      },
      // {
      //   name: '@hexhive-core/settings',
      //   path: '/settings',
      // }
    ] as any).concat(
      this.routes.map(route => {
        return { name: route.key, path: route.route }
      })
    ).concat(
      externalViews || []
    );

    const default_apps = [

      // {
      //   name: '@hexhive-core/settings',
      //   config_url: `${
      //     process.env.NODE_ENV == "production"  ?
      //       `https://${process.env.DEPLOYMENT || 'apps'}.hexhive.io/settings/`
      //       : "http://localhost:8888/"
      //   }hexhive-core-settings.js`
      // },
      {
        name: "@hexhive-core/dashboard",
        config_url: `${
          process.env.NODE_ENV == "production" ?
            `https://${process.env.DEPLOYMENT || 'apps'}.hexhive.io/dashboard/`
            : process.env.CORE_URL || "http://localhost:8501/"
        }hexhive-core-dashboard.js`,
      },
      {
        name: "@hexhive-core/header",
        config_url: `${
          process.env.NODE_ENV == "production" ?
            `https://${process.env.DEPLOYMENT || 'apps'}.hexhive.io/header/`
            : process.env.CORE_URL || "http://localhost:8502/"
        }hexhive-core-header.js`,
      },
    ].concat(
      this.routes.map((route) => {
        return {
          name: route.key,
          config_url: route.url
        } 
      })
    ).concat(
      externalApps || []
    );

    let views = [];

    return {
      apps: default_apps,
      views: default_views
    };
  }

  private init() {
    // this.setupDBConnection();
    this.initMiddleware();
  }


  initMiddleware() {

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

    this.app.get(['/','/dashboard*'], (req, res, next) => {
      if(req.path.indexOf('/dashboard') < 0 && req.path.indexOf('/me') < 0 && req.path.indexOf('/login') < 0 && req.path.indexOf('/logout') < 0 && req.path.indexOf('/error') < 0) {
        res.redirect('/dashboard')
      }else{
        next()
      }
    })
  }

  mountFrontendServer() {

    this.app.use("/dashboard", this.frontendRegistry.routes());

    // this.app.get('*', (req, res, next) => {
    //   if(req.path.indexOf('/me') < 0 && req.path.indexOf('/login') < 0 && req.path.indexOf('/logout') < 0 && req.path.indexOf('/error') < 0){
    //   res.status(404).send({error: "404 Page not found"})
    //   }else{
    //     next()
    //   }
    // })
  }
}
