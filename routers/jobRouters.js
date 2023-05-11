const express = require('express');
const controllerJobs = require('../controller/jobController');

const job = express.Router();

job.get('/:squad', controllerJobs.getJobsBySquad);
job.post('/updateSquads', controllerJobs.updateSquadNameFromJson);
job.post('/updatePipefyId', controllerJobs.updatePipeIdFromJson);
job.post('/updateTa',controllerJobs.updateTA);

module.exports = job;