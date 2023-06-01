const mysql = require("mysql2");

const pool = mysql.createConnection({
  host: "localhost",
  user: "root", // mysql
  password: "password",
  database: "test",
});

module.exports = pool;
