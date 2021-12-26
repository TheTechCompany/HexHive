#!/usr/bin/env node
import { HiveGateway } from '.'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { readFileSync } from 'fs';

const argv = yargs(hideBin(process.argv)).options({
	port: {type: 'number', default: 7000},
	endpoints: {type: 'string'},
});

(async () => {

	const { port, endpoints } = await argv.argv;

	console.log(`=> Starting Gateway on ${port}`)

	let endpointInfo = [];
	if(endpoints){
		const endpointData = JSON.parse(readFileSync(endpoints, 'utf8'))
		endpointInfo = endpointData.endpoints.map(({url, name, version}: any) => ({url, key: name, version}))
	}
	const gateway = new HiveGateway({
		port: port, 
		endpoints: endpointInfo
	})
	
	console.log(`=> Initializing Gateway`)
	await gateway.init()

	console.log(`=> Starting Gateway`)
	await gateway.start()

	console.log(`=> Gateway Online on ${port}`)
})()