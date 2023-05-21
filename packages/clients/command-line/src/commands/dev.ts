/*
    Start dev server
        - Gateway
        - Frontend
        - Admin UI
*/

import { LocalGateway, LocalGatewayOptions } from '@hexhive/dev-server';

/*
    Create from templates
        - HexHive app
        - HexHive backend

*/

import { AppTemplate } from "../templates/app";
import { BackendTemplate } from "../templates/backend";

import type { Arguments } from 'yargs';
import { readFileSync } from 'fs';

const pkg = require('../../package.json')

type Options = {
    port?: number;
    applications?: string;
};

export const command: string = 'dev';
export const desc: string = 'Start a HexHive local-gateway';

export const builder = (yargs: any) =>
    yargs
        .options({
            port: { type: 'number' },
            applications: {type: 'string'}
        })

export const handler = async (argv: Arguments<Options>) => {
    const {
        port = 8000,
        applications
    } = argv;


    let applicationFile = {applications: []};

    if(applications){
        applicationFile = JSON.parse(readFileSync(applications, 'utf8') || '{applications: []}')
    }

    const localGateway = new LocalGateway({
        port,
        applications: applicationFile.applications
    });

    await localGateway.init()

    await localGateway.start()

    return localGateway
};
