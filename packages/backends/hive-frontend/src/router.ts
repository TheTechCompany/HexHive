import { createServer, Server as HttpServer } from 'http';
import express, {Router} from 'express'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

export const frontendRouter = () => {
	const app = Router()

	app.use(cookieParser())
	
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

	return app
	
}