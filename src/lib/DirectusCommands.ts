import { Directus } from "@directus/sdk";

const directus = new Directus("https://1jyhskwu.directus.app/");

const jobs = directus.items("jobs");

export const getJobs = async (): Promise<any[]> => {
  const jobsList = await jobs.readByQuery({
    limit: -1,
  });
  return jobsList.data as any[];
};
