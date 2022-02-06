#!/usr/bin/env node
import { config } from 'dotenv'
config()
import { HiveGateway } from '@hexhive/gateway'
import { HiveFrontendServer } from '@hexhive/frontend-server'
import { readFileSync } from 'fs';
import express, {Express} from 'express';
import { Routes } from './routes'

export interface LocalGatewayApp {
	name: string;
	graph?: string;
	route?: string;
	app?: string;
}

export interface LocalGatewayOptions {
	applications: LocalGatewayApp[];
	port: number
}

export class LocalGateway {
	private app: Express;

	private gateway: HiveGateway;
	private frontendServer: HiveFrontendServer;

	private port = 7000;

	constructor(options: LocalGatewayOptions){
		this.app = express()

		this.port = options.port || 7000;

		const endpointInfo = (options.applications || []).filter((a) => a.graph).map((app) => {
			return {
				url: app.graph || '',
				key: app.name || '',
				version: app.route,
			}
		})

		const routeInfo = (options.applications || []).filter((a) => a.app && a.route).map((app) => {
			return {
				url: app.app || '',
				key: app.name || '',
				route: app.route || ''
			}
		})

		this.gateway = new HiveGateway({
			dev: true,
			endpoints: endpointInfo
		})

		this.frontendServer = new HiveFrontendServer({
			routes: routeInfo
		})


	}

	async init(){

		this.app.use(Routes(this.gateway, this.frontendServer))

		console.log(`=> Mounting dev server`)
		this.app.get('/', (req, res) => {
			res.sendFile(__dirname + '/dev-view/dist/index.html')
		})
		this.app.use('/', express.static(__dirname + `/dev-view/dist`))
		
		console.log(`=> Initializing Gateway`)
		await this.gateway.init()
	
		console.log(`=> Start Frontend`)
		this.app.use(this.frontendServer.connect)
	
		console.log(`=> Starting Gateway`)
		if(this.gateway.connect) this.app.use(`/`, this.gateway.connect)
	
	}
	
	start(){
		this.app.listen(this.port)
		console.log(`=> Gateway Online on ${this.port}`)
	}
}

// (async () => {
// 	const app = express()

// 	const { port, endpoints, dev } = await argv.argv;

// 	console.log(`=> Starting Gateway on ${port}`)

// 	let endpointInfo = [];
// 	if(endpoints){
// 		const endpointData = JSON.parse(readFileSync(endpoints, 'utf8'))
// 		endpointInfo = endpointData.endpoints.map(({url, name, version}: any) => ({url, key: name, version}))
// 	}

// 	const frontend = new HiveFrontendServer()

// 	const gateway = new HiveGateway({
// 		dev: true,
// 		endpoints: endpointInfo
// 	})
	
// 	app.use(Routes(gateway, frontend))

// 	console.log(`=> Mounting dev server`)
// 	app.get('/', (req, res) => {
// 		res.sendFile(__dirname + '/dev-view/dist/index.html')
// 	})
// 	app.use('/', express.static(__dirname + `/dev-view/dist`))
	
// 	console.log(`=> Initializing Gateway`)
// 	await gateway.init()

// 	console.log(`=> Start Frontend`)
// 	app.use(frontend.connect)

// 	console.log(`=> Starting Gateway`)
// 	if(gateway.connect) app.use(`/`, gateway.connect)




// 	console.log(`=> Gateway Online on ${port}`)

// 	app.listen(port)
// })()