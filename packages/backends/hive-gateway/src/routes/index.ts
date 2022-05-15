import { Router } from "express"

import { UserRouter } from "./user"

import bodyParser from "body-parser"
import cors from "cors"
import cookieParser from "cookie-parser"
// import { HiveEvents } from "@hexhive/events-client"
import passport from "passport"
// import { InteractionRouter } from './interaction';

const whitelist = [
	"http://localhost:3001", 
	'http://localhost:7000', 
	'http://localhost:8000', 
	"https://matrix.hexhive.io", 
	"http://localhost:3002", 
	"http://localhost:3000", 
	"https://hexhive.io",
	"https://next.hexhive.io", 
	"https://staging.hexhive.io",
	"https://go.hexhive.io"
]

export const DefaultRouter = () : Router => {
	// const neo_session = neo4j.session()

	// const eventClient = new HiveEvents({
	// 	url: process.env.HIVE_EVENT_URL || "http://localhost:7000",
	// 	keyPair: {
	// 		key: process.env.HIVE_EVENT_KEY || "123456789",
	// 		secret: process.env.HIVE_SECRET_KEY || "secret1"
	// 	}
	// })

	const router = Router()
	let fileManager
	
	// if(process.env.IPFS_URL) fileManager = new FileManager({url: process.env.IPFS_URL || "", gateway: process.env.IPFS_GATEWAY})
    
	const corsOptions = {
		origin: (origin : any, callback: (error: any, result?: any) => void) => {
			if (whitelist.indexOf(origin) !== -1 || !origin) {
				callback(null, true)
			} else {
				callback(new Error("Not allowed by CORS"))
			}
		},
		credentials: true
        
	}
   
	router.use(cookieParser())

	router.use(bodyParser.json({limit: '500mb'}))
	router.use(bodyParser.urlencoded({extended: false, limit: '500mb'}))

	router.use(cors(corsOptions))

	const ensureLoggedIn = (req: any, res: any, next: any) => {
		if(req.isAuthenticated()) {
			return next();
		}

		res.redirect('/login')
	}

	// router.use('/graphql', (req, res, next) => {
	// 	if(req.user){
	// 		console.log(req.user, (req.user as any)._raw)
	// 		req.user = {
	// 			...JSON.parse((req.user as any)._raw)
	// 		}
	// 	}
	// 	next()
	// })

	// if(fileManager) router.use("/api/files", FileRouter(fileManager, neo_session))
	// if(fileManager) router.use("/api/pipelines", PipelineRouter(neo_session, fileManager, taskRegistry))

	// router.use("/api/events", EventRouter(neo_session))

	router.get("/me", ensureLoggedIn, async (req: any, res) => {
		
		try{
			res.send({...req.user})
		}catch(e){
			res.status(400).send({error: e})
		}
	})
	// router.use('/user', UserRouter(cas, methods))
	return router
}