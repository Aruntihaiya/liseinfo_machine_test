const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
 host:process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Connect to MySQL
connection.connect((err) => {

  if (err) {
    console.error('Error connecting to MySQL:--------', err.message);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = connection;