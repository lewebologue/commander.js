import { execSync } from 'child_process';
import { getRepositoriesList } from '../utils/cvsParser';
import { mkdir } from 'fs/promises';
import { cwd } from 'node:process';

export const gitHubClone = async ( repositories_list: string ) => {
    const repositories = getRepositoriesList(repositories_list);
    await mkdir(`${cwd()}/github`);
    process.chdir(`${cwd()}/github`);
    for(const element of repositories) {
        const repository = element;
        try {
            execSync(`git clone ${repository.githubUrl} ${repository.name}`)
            console.log(`${repository.name} cloned successfully`)
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const gitlabMirror = async ( repositories_list: string ) => {
    const repositories = getRepositoriesList(repositories_list);
    for(const element of repositories) {
        const repository = element;
        try {
            process.chdir(`${cwd()}/github/${repository.name}`);
            execSync(`git push --mirror ${repository.gitlabUrl}`);
            console.log(`${repository.name} pushed successfully`);
            process.chdir(`../../`);
        } catch (error) {
            console.log(error);
        }
    }
}

