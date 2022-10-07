const express = require('express');
const jobs = require('./routers/jobRouters');

const app = express();
const PORT = 3000;

const bodyPorser = require('body-parser');
app.use(bodyPorser.json());
app.use('/jobs', jobs);

app.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
