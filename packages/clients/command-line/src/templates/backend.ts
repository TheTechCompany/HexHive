import { existsSync, readFileSync, rmdirSync } from "fs"
import inquirer from "inquirer";
import path from "path";
import simpleGit from "simple-git";

const BACKEND_TEMPLATE_URL = "https://github.com/TheTechCompany/hexhive-backend-template"

export const BackendTemplate = async (localPath: string) => {

    if(existsSync(localPath)){
        throw new Error("Folder already exists")
    }

    const git = simpleGit();

    let inquirerPrompts = {
        organisation: {
            message: 'Organisation name',
            name: 'orgName',

            demandOption: true,
            describe: 'Organisation name',

            type: 'string'
        },
        name: {
            message: 'Project name',
            name: 'projectName',

            demandOption: true,
            describe: 'Project name',

            type: 'string'
        },
        devport: {
            message: 'Development Port',
            name: 'developerPort',

            demandOption: true,
            describe: 'Development Port',

            default: 9010,

            type: 'number'
        },

    }

    const { orgName, projectName, developerPort } = await inquirer.prompt(Object.values(inquirerPrompts));

   
    console.log('Cloning template repository...');

    await git.clone(BACKEND_TEMPLATE_URL, localPath)
    
    rmdirSync(path.join(localPath, './.git'))

    let lowerOrgName = orgName.toLowerCase()?.replace(' ', '-');
    let lowerProjectName = projectName.toLowerCase()?.replace(' ', '-');
    
    console.log('Formatting package.json and configs...');
    //Format packageJson
    const packageJson = JSON.parse(readFileSync(path.join(localPath, './package.json'), 'utf-8') || '{}')

    packageJson.name = `@${lowerOrgName}/${lowerProjectName}`;

    packageJson.scripts.start = `PORT=${developerPort} ts-node src/index.ts`
    
    console.log('Setting up root webpage...');
    //Format rootFile

    console.log(`Done!`);
    console.log(`cd ${localPath}; yarn start`)

}