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
    const [ updatedJob ] = await connection.execute(query, [job.squad, id])
    
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
    const [ updatedPipefyId ] = await connection.execute(query, [job.PipefyId, id])
    
    if (!updatedPipefyId.length) {
      return null;
    }
  }

  return job;
}

async function updateJobDivertity() {
  let job = []
  const jobs = await readJson.getJobData();
  const ids = jobs.map(value => value.id);

  for (const id of ids) {
    job = jobs.find((value) => value.id === +id);
    const query = 'UPDATE processo_seletivo SET diversidade = ? WHERE id=?';
    const [ updatedPipefyId ] = await connection.execute(query, [jod.diversidade, id])
    
    if (!updatedPipefyId.length) {
      return null;
    }
  }

  return job;
}

async function updateTA() {
  let job = []
  const jobs = await readJson.getJobData()
  const ids = jobs.map(value => value.id)

  for (const id of ids) {
    job = jobs.find((value) => value.id === +id)
    const query = 'UPDATE processo_seletivo SET responsavel_vaga = ? WHERE id = ?'
    const [ updateTA ] = await connection.execute(query, [job.responsavel_vaga])
  }
}

// Verificar se a empresa existe no banco atualmente (nm_empresa)
// Se a empresa existir - Atualizar a coluna (classificacao)

module.exports = {
  getJobsBySquad,
  updateSquadNameFromJson,
  updatePipeIdFromJson,
  updateJobDivertity,
  updateTA,
};
