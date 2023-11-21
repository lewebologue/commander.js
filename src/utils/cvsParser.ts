import { parse } from 'csv-parse/sync';
import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import { Repository } from '../model/repository.model';

export const getRepositoriesList = (file: string): Repository[] => {
  const repositoriesListCSV = readFileSync(`${cwd()}/data/${file}`, {
    encoding: 'utf-8',
  });
  const repositoriesListJSON = parse(repositoriesListCSV, {
    columns: true,
    delimiter: ',',
  });

  const repositoriesList: Repository[] = repositoriesListJSON.map(
    (repo: Repository) => ({
      ...repo,
      name: repo.name.toLowerCase(),
      githubUrl: repo.githubUrl,
      gitlabUrl: repo.gitlabUrl,
    })
  );
  return repositoriesList;
};