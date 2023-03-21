import cookieParser from 'cookie-parser';
import express, { Express, Router } from 'express';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';
import cors from 'cors';
import MongoStore from 'connect-mongo'


export interface HiveRouterOptions {

}

export class HiveRouter {

	private app: Router;
	// private server: HttpServer;

	private options: HiveRouterOptions;

	constructor(options: HiveRouterOptions) {

		this.app = Router()

		this.options = options

		// this.server = createServer(this.app)

		this.initMiddleware()
	}

	mount(...args: any[]) {
		if(args.length == 1){
			this.app.use(args[0])
		}else if(args.length == 2){
			this.app.use(args[0], args[1])
		}
	}


	initMiddleware() {
		// this.app.set("trust proxy", true)

		// this.app.use(cors())
		this.app.use(cookieParser())
		// this.app.use(helxmet())

		let cookieParams = process.env.NODE_ENV === 'development' ? {} : {cookie: { domain: process.env.BASE_DOMAIN || 'domain.com' }}

		this.app.use(session({
			secret: process.env.SESSION_KEY || 'MyVoiceIsMyPassportVerifyMe',
			resave: false,
			saveUninitialized: true,
			...cookieParams,
			store: MongoStore.create({
				mongoUrl: process.env.MONGO_URL || 'mongodb://localhost'
			})
		}));

		// app.use(auth(config))

	
	}

	get connect(){
		return this.app
	}

	start(){
		
	}
}