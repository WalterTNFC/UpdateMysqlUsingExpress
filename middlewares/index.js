const fs = require('fs').promises;

// const jsonJobsToChange = 'jobsToUpdate_test.json';
const jsonJobsToChange = 'TAUpadate.json';

async function readJson(fileContent) {
  const result = JSON.parse(await fs.readFile(fileContent));
  return result;
}

async function getJobData() {
  const jobs = await readJson(jsonJobsToChange);
  return jobs;
}

module.exports = {
  getJobData,
};
