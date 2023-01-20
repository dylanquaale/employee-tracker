// get the client
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");
// const cTable = require('console.table');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "raindrop",
  database: "employees_db",
});
