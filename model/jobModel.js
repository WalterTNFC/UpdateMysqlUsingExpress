const connection = require('./connection');
const readJson = require('../middlewares');

async function getJobsBySquad(squad) {
  console.log(squad);
  const query = 'SELECT id, squad FROM intera_database.processo_seletivo WHERE squad=?'
  const [jobs] = await connection.execute(query, [squad]);
  
  console.log(jobs);
  return jobs;
}

async function updateSquadNameFromJson() {
  let job = [];
  const jobs = await readJson.getJobData();
  const ids = jobs.map(value => value.id);
  console.log(ids);

  for (const id of ids) {
    job = jobs.find((value) => value.id === +id);
    const query = 'UPDATE processo_seletivo SET squad = ? WHERE id=?';
    [ updatedJob ] = await connection.execute(query, [job.squad, id])
    
    console.log(job);

    if (updatedJob.length === 0) {
      return null;
    }
  }

  return job;
}

async function updatePipeIdFromJson() {
  let job = [];
  const jobs = await readJson.getJobData();
  const ids = jobs.map(value => value.id);

  for (const id of ids) {
    job = jobs.find((value) => value.id === +id);
    const query = 'UPDATE processo_seletivo SET pipefyId = ? WHERE id=?';
    [ updatedPipefyId ] = await connection.execute(query, [job.PipefyId, id])
    
    if (!updatedPipefyId.length) {
      return null;
    }
  }

  return job;
}

module.exports = {
  getJobsBySquad,
  updateSquadNameFromJson,
  updatePipeIdFromJson,
};
