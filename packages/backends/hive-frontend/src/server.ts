import { HiveFrontendServer } from ".";
import { createServer } from 'http'
import express from 'express';
import { driver, auth } from 'neo4j-driver'
const greenlock = require("greenlock-express");

(async (port: number = 8000) => {
	const app = express()


	const neoDriver = driver(
		  process.env.NEO4J_URI || "neo4j://localhost",
		  auth.basic(
			process.env.NEO4J_USER || "neo4j",
			process.env.NEO4J_PASSWORD || "test"
		  )
		);
	const neoSession = neoDriver.session();
	

	  
	const frontendServer = new HiveFrontendServer({
		routes: [],
		getUser: async (profile: { id: string }) => {

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
		},
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

			return { views, apps: appliances }

		
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