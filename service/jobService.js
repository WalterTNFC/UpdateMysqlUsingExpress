const jobModel = require('../model/jobModel');

async function getJobsBySquad(squad) {
  const jobs = await jobModel.getJobsBySquad(squad);

  if (!jobs) {
    return { error: { code: 404, message: 'Job Not Found' }};
  }

  return { code: 200, data: jobs };
}

async function updateSquadNameFromJson() {
  try {
    const  jobsUpdated  = await jobModel.updateSquadNameFromJson();
    return { code: 200, data: jobsUpdated };
  } catch (e) {
    return { code: 400, error: e };
  }
}

async function updatePipeIdFromJson() {
  try {
    const jobsUpdated = await jobModel.updatePipeIdFromJson();
    return { code: 200, data: jobsUpdated };
  } catch (e) {
    return { code: 400, error: e };
  }
}
module.exports = {
  getJobsBySquad,
  updateSquadNameFromJson,
  updatePipeIdFromJson,
};
