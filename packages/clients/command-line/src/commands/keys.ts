/*
    RSA key management
*/

import { AppTemplate } from "../templates/app";
import { BackendTemplate } from "../templates/backend";
import { generateKey } from "@hexhive/crypto";
import { Arguments, Argv, CommandBuilder } from 'yargs';

const pkg = require('../../package.json')

type Options = {
    action: string
};

export const command: string = 'keys <action>';
export const desc: string = 'Run key actions';

export const builder = (yargs: any) =>
    yargs
        .positional('action', {
            type: 'string', 
            required: true
            // name: { type: 'string', required: true }
        })

export const handler = async (argv: Arguments<Options>) => {
    const {
        action,
    } = argv;

    switch(action){
        case 'generate':
            return generateKey(1024)
    }
    
    return argv;

};
