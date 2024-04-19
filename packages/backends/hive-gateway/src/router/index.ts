import cookieParser from 'cookie-parser';
import express, { Express, Router } from 'express';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';
import cors from 'cors';


export interface HiveRouterOptions {

}

export class HiveRouter {

	private app: Router;
	// private server: HttpServer;

	private options: HiveRouterOptions;

	constructor(options: HiveRouterOptions) {

		this.app = Router()

		this.options = options
	}

	mount(...args: any[]) {
		if(args.length == 1){
			this.app.use(args[0])
		}else if(args.length == 2){
			this.app.use(args[0], args[1])
		}
	}


	get connect(){
		return this.app
	}

	start(){
		
	}
}