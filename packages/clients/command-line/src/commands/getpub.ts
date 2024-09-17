/*
    RSA key management
*/

import { readFileSync } from "fs";
import { AppTemplate } from "../templates/app";
import { BackendTemplate } from "../templates/backend";
import { fromKey, generateKey } from "@hexhive/crypto";
import { Arguments, Argv, CommandBuilder } from 'yargs';

const pkg = require('../../package.json')

type Options = {
    file: string
};

export const command: string = 'getpub <file>';
export const desc: string = 'Get pubkey from privkey';

export const builder = (yargs: any) =>
    yargs
        .positional('file', {
            type: 'string', 
            required: true
            // name: { type: 'string', required: true }
        })

export const handler = async (argv: Arguments<Options>) => {
    const {
        file,
    } = argv;

    const key = fromKey(readFileSync(file, 'utf8'))

    console.log(key.exportKey('public'))
    
    return argv;

};
