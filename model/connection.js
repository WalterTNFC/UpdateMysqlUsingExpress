const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  // user: 'meuUser',
  // password: 'minhaSenha',
  // host: 'meuHost',
  // database: 'meuDatabase'
  user: 'walter.frazao',
  password: 'gTfr#4r5t',
  host: 'backoffice-dev.cavx7zegjg23.us-east-1.rds.amazonaws.com',
  database: 'intera_database'
});

module.exports = connection;