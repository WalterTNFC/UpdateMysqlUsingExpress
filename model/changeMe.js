const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  user: 'meuUser',
  password: 'minhaSenha',
  host: 'meuHost',
  database: 'meuDatabase'
});

module.exports = connection;