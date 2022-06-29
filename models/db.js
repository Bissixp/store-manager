const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: 'db',
  user: 'root',
  port: 3306,
  password: 'password',
  database: 'StoreManager',
});

module.exports = db;