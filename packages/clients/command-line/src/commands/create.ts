/*
    Create from templates
        - HexHive app
        - HexHive backend

*/

import { AppTemplate } from "../templates/app";
import { BackendTemplate } from "../templates/backend";

import { Arguments, Argv, CommandBuilder } from 'yargs';

const pkg = require('../../package.json')

type Options = {
    template: string,
    name: string
};

export const command: string = 'create <template> [name]';
export const desc: string = 'Create from a HexHive starter-template';

export const builder = (yargs: any) =>
    yargs
        .positional('template', {
            type: 'string', 
            required: true
            // name: { type: 'string', required: true }
        })
        .positional('name', {
            type: 'string'
        })

export const handler = async (argv: Arguments<Options>) => {
    const {
        template,
        name
    } = argv;

    console.log("TEMPLATE", { template })

    switch (template) {
        case 'app':
            await AppTemplate(name);
            break;
        case 'backend':
            await BackendTemplate(name);
            break;
    }
    
    return argv;

};
