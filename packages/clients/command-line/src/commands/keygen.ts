/*
    RSA key management
*/

import { AppTemplate } from "../templates/app";
import { BackendTemplate } from "../templates/backend";
import { generateKey } from "@hexhive/crypto";
import { Arguments, Argv, CommandBuilder } from 'yargs';

const pkg = require('../../package.json')

type Options = {
    bits: number
};

export const command: string = 'keygen <bits>';
export const desc: string = 'Run keygen';

export const builder = (yargs: any) =>
    yargs
        .positional('bits', {
            type: 'number', 
            required: true
            // name: { type: 'string', required: true }
        })

export const handler = async (argv: Arguments<Options>) => {
    const {
        bits = 1024,
    } = argv;

    console.log(generateKey(bits).exportKey('private'))
    
    return argv;

};
