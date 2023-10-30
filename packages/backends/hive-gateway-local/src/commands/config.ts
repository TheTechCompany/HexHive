/*
    Create from templates
        - HexHive app
        - HexHive backend

*/
import { createRequire } from 'module';

import { Arguments, Argv, CommandBuilder } from 'yargs';
// const require = createRequire(import.meta.url);

import inquirer from 'inquirer';

const pkg = require('../../package.json')

type Options = {
    template: string,
};

const defaultURLS = {
    PostgreSQL: 'postgresql://postgres:postgres@localhost:5432/hexhive',
    // MySQL: 'mysql://localhost',
    // MongoDB: 'mongodb://localhost',
    // SQLite: 'sq' 
}

export const command: string = 'config <command> [options]';
export const desc: string = 'Manage HexHive config';

export const builder = (yargs: any) =>
    yargs
        .positional('command', {
            type: 'string', 
            required: true
            // name: { type: 'string', required: true }
        })

export const handler = async (argv: Arguments<Options>) => {
    const {
        command,
    } = argv;

    // console.log("TEMPLATE", { template })

    switch (command) {
        case 'init':
            const args = inquirer.prompt([
                // { name: 'dbType', message: "", choices: [ "PostgreSQL", "MySQL", "MongoDB", "SQLite", "SQL Server" ] }
                { name: "dbUrl", message: "Postgres DB URL", default:  defaultURLS['PostgreSQL'] }
            ])
            
            // await AppTemplate(name);
            break;
        case 'set':
        // case 'backend':
        //     await BackendTemplate(name);
            break;
    }
    
    return argv;

};
