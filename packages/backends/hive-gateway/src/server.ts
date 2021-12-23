#!/usr/bin/env node
import { HiveGateway } from '.'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).options({
	port: {type: 'number', default: 7000},
	endpoints: {type: 'array', default: []},
});

(async () => {

	const { port, endpoints } = await argv.argv;

	console.log(`=> Starting Gateway on ${port}`)

	const gateway = new HiveGateway({
		port: port, 
		endpoints: endpoints?.map((endpoint, ix) => ({key: `${ix}`, url: endpoint}))
	})
	
	console.log(`=> Initializing Gateway`)
	await gateway.init()

	console.log(`=> Starting Gateway`)
	await gateway.start()

	console.log(`=> Gateway Online on ${port}`)
})()