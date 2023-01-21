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

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  console.log(`
  ╔═══╗─────╔╗──────────────╔═╗╔═╗
  ║╔══╝─────║║──────────────║║╚╝║║
  ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
  ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
  ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
  ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
  ───────║║──────╔═╝║─────────────────────╔═╝║
  ───────╚╝──────╚══╝─────────────────────╚══╝`);
  // runs the app
  runPrompt();
});
function runPrompt() {
  inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
      ],
    })
    .then(function ({ task }) {
      switch (task) {
        case "View All Employees":
          viewAllEmployees();
          break;

        case "Add Employee":
          addEmployees();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "View all Roles":
          viewAllRoles();
          break;

        case "Add Role":
          addRole();
          break;

        case "View all Departments":
          viewAllDepartments();
          break;

          case "Add Department":
            addDepartment();
            break;

        case "Quit":
          connection.quit();
          break;
      }
    });
}

function viewAllEmployees() {
  console.log("Viewing All employees");

  let select =
    `SELECT e.id, 
    e.first_name, 
    e.last_name, 
    r.title, 
    d.name AS department, 
    r.salary, 
    CONCAT(m.first_name, ' ', m.last_name) 
    AS manager
  FROM employee e
  LEFT JOIN role r
	ON e.role_id = r.id
  LEFT JOIN department d
  ON d.id = r.department_id
  LEFT JOIN employee m
	ON m.id = e.manager_id`

  connection.query(select, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("All Employees viewed!");
    runPrompt();
  });
};
