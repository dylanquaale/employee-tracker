// get the client
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'raindrop',
    database: 'test'
  });