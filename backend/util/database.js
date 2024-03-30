const mysql = require('mysql');

const config = require('../config/config.json');

var connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
});

connection.connect();