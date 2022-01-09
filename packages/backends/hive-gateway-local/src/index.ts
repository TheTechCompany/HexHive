#!/usr/bin/env node
import { config } from 'dotenv'
config()
import { HiveGateway } from '@hexhive/gateway'
import { HiveFrontendServer } from '@hexhive/frontend-server'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { readFileSync } from 'fs';
import express from 'express';
import { Routes } from './routes'

const argv = yargs(hideBin(process.argv)).options({
	port: {type: 'number', default: 7000},
	dev: {type: 'boolean', default: false},
	endpoints: {type: 'string'},
});

(async () => {
	const app = express()

	const { port, endpoints, dev } = await argv.argv;

	console.log(`=> Starting Gateway on ${port}`)

	let endpointInfo = [];
	if(endpoints){
		const endpointData = JSON.parse(readFileSync(endpoints, 'utf8'))
		endpointInfo = endpointData.endpoints.map(({url, name, version}: any) => ({url, key: name, version}))
	}

	const frontend = new HiveFrontendServer()

	const gateway = new HiveGateway({
		dev: true,
		endpoints: endpointInfo
	})
	
	app.use(Routes(gateway, frontend))

	console.log(`=> Mounting dev server`)
	app.get('/', (req, res) => {
		res.sendFile(__dirname + '/dev-view/dist/index.html')
	})
	app.use('/', express.static(__dirname + `/dev-view/dist`))
	
	console.log(`=> Initializing Gateway`)
	await gateway.init()

	console.log(`=> Start Frontend`)
	app.use(frontend.connect)

	console.log(`=> Starting Gateway`)
	app.use(`/`, gateway.connect)




	console.log(`=> Gateway Online on ${port}`)

	app.listen(port)
})()