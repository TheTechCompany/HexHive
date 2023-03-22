import { existsSync, readFileSync, renameSync, rmdirSync, writeFile, writeFileSync } from "fs"
import inquirer from 'inquirer';
import simpleGit from 'simple-git'
import path from 'path';
import doT from 'dot';

const APP_TEMPLATE_URL = "https://github.com/TheTechCompany/hexhive-app-template"

export const AppTemplate = async (localPath: string) => {
    
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
        }

    }

    const { orgName, projectName } = await inquirer.prompt(Object.values(inquirerPrompts));

    let secondPrompts = {
        devport: {
            message: 'Development Port',
            name: 'developerPort',

            demandOption: true,
            describe: 'Development Port',

            default: 8080,

            type: 'number'
        },
        slug: {
            message: 'URL Slug',
            name: 'urlSlug',

            demandOption: true,
            describe: 'URL Slug',

            default: projectName?.toLowerCase()?.replace(' ', '-'),

            type: 'string'
        }
    }

    const { urlSlug, developerPort } = await inquirer.prompt(Object.values(secondPrompts));



    console.log('Cloning template repository...');

    await git.clone(APP_TEMPLATE_URL, localPath)
    
    rmdirSync(path.join(localPath, './.git'))

    let lowerOrgName = orgName.toLowerCase()?.replace(' ', '-');
    
    console.log('Formatting package.json and configs...');
    //Format packageJson
    const packageJson = JSON.parse(readFileSync(path.join(localPath, './package.json'), 'utf-8') || '{}')

    packageJson.name = `@${lowerOrgName}/${urlSlug}`;

    packageJson.scripts.start = `webpack serve --port ${developerPort}`;

    //Webpack config

    const webpackConfig = readFileSync(path.join(localPath, './webpack.config.js'), 'utf-8')

    const finishedWebpackConfig = doT.template(webpackConfig)({
        orgName: lowerOrgName,
        projectName: urlSlug,
        PUBLIC_URL: urlSlug
    })

    writeFileSync(path.join(localPath, './webpack.config.js'), finishedWebpackConfig, 'utf-8')


    console.log('Setting up root webpage...');
    //Format rootFile
    let rootFile = `./${lowerOrgName}-${urlSlug}.tsx`;

    renameSync(path.join(localPath, './index.tsx'), path.join(localPath, rootFile))

    console.log(`Done!`);
    console.log(`cd ${localPath}; yarn start`)

}