#! /ProgramData/nvs/node/18.15.0/x64/node.exe
import { Command } from 'commander';
import figlet from 'figlet';
import { initServiceProject } from './features/initProject';
import { gitHubClone, gitlabMirror } from './features/gitSync';


const program = new Command();
console.log(figlet.textSync('DIGITAL FACTORY', {font: 'Puffy'}));

program
    .version('0.0.1')
    .description('DIGITAL FACTORY')
    .option('-t, --test', 'test option')
    .option('-a, --angular', 'Install Angular CLI and create Angular project')
    .option('-n, --node', 'Initialize Node backend')
    .option('-g, --github', 'Clone Github repositories')
    .option('-m, --gitlab', 'Mirror Github repositories to Gitlab')
    .parse(process.argv);

const options = program.opts();

if(options.test) console.log(figlet.textSync('test option', {font: 'Puffy'}));
if(options.node) initServiceProject('coucou');
if(options.github) gitHubClone('repositories_list.csv');
if(options.gitlab) gitlabMirror('repositories_list.csv');
