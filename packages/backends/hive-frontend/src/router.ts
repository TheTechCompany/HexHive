import { createServer, Server as HttpServer } from 'http';
import express, {Router} from 'express'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

export const frontendRouter = () => {

	const app = Router()


	app.use(cookieParser())
	// this.app.use(helmet())

	app.use(session({
		secret: process.env.SESSION_KEY || 'MyVoiceIsMyPassportVerifyMe',
		resave: false,
		saveUninitialized: true,
		store: MongoStore.create({ 
			mongoUrl: process.env.MONGO_URL
		 })
	}));


	return app
}