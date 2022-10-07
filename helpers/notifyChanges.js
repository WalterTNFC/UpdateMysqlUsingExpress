const { request } = require('@by-intera/helpers');
const { AWS_API_KEYS, AWS_CONFIG, SERVICE_URL_DEV, SERVICE_URL_PROD } = require('./config');
const AWS = require('aws-sdk');

AWS.config.update(AWS_CONFIG);

async function sleep(ms) {
  return new Promise(res => {
    setTimeout(() => res(null), ms);
  });
}

async function notifyChanges(jobIds) {
  for (const jobId of jobIds) {
    await sleep(4000);

    await request(`${SERVICE_URL_PROD}/jobs/notifyChanges`, {
      method: 'POST',
      body: { jobId },
      headers: { 'x-api-key': AWS_API_KEYS.prod },
    });
    console.log('updated', jobId)
  }
  console.log(jobIds);
};

module.exports = {
  notifyChanges,
};
