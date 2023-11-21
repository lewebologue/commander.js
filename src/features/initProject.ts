import { cwd } from 'process';
import { mkdir } from 'fs/promises';
import { execSync } from 'child_process';

export const initServiceProject = async (name: string) => {
    await mkdir(`${cwd()}/${name}`);
    process.chdir(`${cwd()}/${name}`);
    execSync(`npm init -y`)
    execSync('npm install express mongoose sequelize')
    execSync('npm install --save-dev nodemon')
    console.log('Backend project initialized sucessfully')
}