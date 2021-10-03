#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import * as inquirer from 'inquirer';
import chalk from 'chalk';
import { render } from './utils/template';
import shell from 'shelljs'
import * as yargs from 'yargs';

export interface CliOptions {
    projectName: string
    templateName: string
    templatePath: string
    tartgetPath: string
}
const CURR_DIR = process.cwd();

const CHOICES = fs.readdirSync(path.join(__dirname, 'templates'));

const QUESTIONS = [
{
    name: 'template',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES,
    when: () => !(yargs.argv as any)['template']
},
{
    name: 'name',
    type: 'input',
    message: 'Project name:',
    when: () => !(yargs.argv as any)['name']
}];

function createProject(projectPath: string) {
    if (fs.existsSync(projectPath)) {
        console.log(chalk.red(`Folder ${projectPath} exists. Delete or use another name.`));
        return false;
    }
    fs.mkdirSync(projectPath);
    
    return true;
}

const SKIP_FILES = ['node_modules', '.template.json'];
function createDirectoryContents(templatePath: string, projectName: string) {
    // read all files/folders (1 level) from template folder
    const filesToCreate = fs.readdirSync(templatePath);
    // loop each file/folder
    filesToCreate.forEach(file => {
        const origFilePath = path.join(templatePath, file);
        
        // get stats about the current file
        const stats = fs.statSync(origFilePath);
    
        // skip files that should not be copied
        if (SKIP_FILES.indexOf(file) > -1) return;
        
        if (stats.isFile()) {
            // read file content and transform it using template engine
            let contents = fs.readFileSync(origFilePath, 'utf8');
            // write file to destination folder
            contents = render(contents, { projectName });

            const writePath = path.join(CURR_DIR, projectName, file);
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
            // create folder in destination folder
            fs.mkdirSync(path.join(CURR_DIR, projectName, file));
            // copy files/folder inside current folder recursively
            createDirectoryContents(path.join(templatePath, file), path.join(projectName, file));
        }
    });
}

function postProcess(options: CliOptions) {
    const isNode = fs.existsSync(path.join(options.templatePath, 'package.json'));
    if (isNode) {
        shell.cd(options.tartgetPath);
        const result = shell.exec('yarn install');
        if (result.code !== 0) {
            return false;
        }
    }
    
    return true;
}

inquirer.prompt(QUESTIONS)
.then(answers => {
    answers = Object.assign({}, answers, yargs.argv);

    const projectChoice = answers['template'];
    const projectName = answers['name'];
    const templatePath = path.join(__dirname, 'templates', projectChoice);
    
    const tartgetPath = path.join(CURR_DIR, projectName);
    const options: CliOptions = {
        projectName,
        templateName: projectChoice,
        templatePath,
        tartgetPath
    }
    console.log(options);

    if (!createProject(tartgetPath)) {
        return;
    }
    createDirectoryContents(templatePath, projectName);

    postProcess(options)
});
