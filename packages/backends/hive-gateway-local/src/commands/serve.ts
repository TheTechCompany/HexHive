
/*
    Create from templates
        - HexHive app
        - HexHive backend

*/

import { LocalGateway } from '..';
import { readFileSync } from 'fs';
import { Arguments, Argv, CommandBuilder } from 'yargs';

const pkg = require('../../package.json')

type Options = {
    config: string,
};

export const command: string = 'serve [options]';
export const desc: string = 'Start HexHive gateway';

export const builder = (yargs: any) =>
    yargs
    .string('config')
    .string('env')
  

export const handler = async (argv: Arguments<Options>) => {

    const { config } = await argv;

	let serverConfig: any = {applications: []};
	if(config) serverConfig = JSON.parse(readFileSync(config, 'utf8') || '{applications: []}');
	
	const localGateway = new LocalGateway(serverConfig);

	await localGateway.init()

	await localGateway.start()

    return argv;
};
