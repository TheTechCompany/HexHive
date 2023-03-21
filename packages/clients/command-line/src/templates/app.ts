import { existsSync } from "fs"
import inquirer from 'inquirer';

export const AppTemplate = async (name: string) => {
    
    if(existsSync(name)){
        throw new Error("Folder already exists")
    }

    // await inquirer.prompt([{
    //     // inquirer
    //     message: 'What is your name?',
    //     name: 'name',
    //     // yargs
    //     demandOption: true,
    //     describe: 'Your name',
    //     // shared
    //     type: 'string',
    //   }])


}