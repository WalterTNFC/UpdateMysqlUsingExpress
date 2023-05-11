const jobService = require('../service/jobService');

async function getJobsBySquad(req, res) {
  const { squad } = req.params;
  console.log(squad);
  const { error, code, data } = await jobService.getJobsBySquad(squad);

  if (error) {
    return res.status(error.code).json({ message: error.message });
  }
  return res.status(code).json(data);
}

async function updateSquadNameFromJson(_req, res) {
  const { error, code, data } = await jobService.updateSquadNameFromJson();

  if (error) {
    return res.status(error.code).json({ message: error.message });
  }
  return res.status(code).json(data);
}

async function updatePipeIdFromJson(_req, res) {
  const { error, code, data } = await jobService.updatePipeIdFromJson();

  if (error) {
    return res.status(error.code).json({ message: error.message });
  }
  return res.status(code).json(data);
}


async function updateJobDivertity(_req, res) {
  const { error, code, data } = await jobService.updateJobDivertity();

  if (error) {
    return res.status(error.code).json({ message: error.message });
  }
  return res.status(code).json(data);
}

async function updateTA(_req, res) {
  const { erro, code, data } = await jobService.updateTA();

  if (error) {
    return res.status(error.code).json({ message: error.message });
  }
  return res.status(code).json(data);
}

module.exports = {
  getJobsBySquad,
  updateSquadNameFromJson,
  updatePipeIdFromJson,
  updateJobDivertity,
  updateTA,
};
