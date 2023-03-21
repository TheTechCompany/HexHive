#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { LocalGateway } from '.';
import { readFileSync } from 'fs';

const argv = yargs(process.argv.slice(2)).options({
  config: { type: 'string'},
}).argv;

(async () => {
	const { config } = await argv;

	let serverConfig: any = {applications: []};
	if(config) serverConfig = JSON.parse(readFileSync(config, 'utf8') || '{applications: []}');
	
	const localGateway = new LocalGateway(serverConfig);

	await localGateway.init()

	await localGateway.start()
})()