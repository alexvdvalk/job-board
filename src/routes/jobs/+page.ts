import type { PageLoad } from "./$types";

import { getJobs } from "$lib/DirectusCommands";

export const load: PageLoad = async () => {
  const jobs = await getJobs();
  return { jobs };
};
