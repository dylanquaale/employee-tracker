// get the client
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "raindrop",
  database: "employees_db",
});

let showroles;
let showdepartments;
let showemployees;

connection.connect(function (err) {
  if (err) {
    return;
  }

  connection.query("SELECT * from role", function (error, res) {
    showroles = res.map(role => ({ 
      name: role.title, 
      value: role.id 
    }))
  });

  connection.query("SELECT * from department", function (error, res) {
    showdepartments = res.map(dep => ({ 
      name: dep.name, 
      value: dep.id 
    }))
  });

  connection.query("SELECT * from employee", function (error, res) {
    showemployees = res.map(emp => ({ 
      name: `${emp.first_name} ${emp.last_name}, 
      id: ${emp.id}`, value: emp.id 
    }))
  });

  showprompt();
});

function showprompt() {
  inquirer
    .prompt(
      {
        type: "list",
        message: "Employee Tracker Portal",
        name: "choices",
        choices: [
          {
            name: "View all employees",
            value: "viewEmployees"
          },
          {
            name: "View all departments",
            value: "viewDepartments"
          },
          {
            name: "View all roles",
            value: "viewRoles"
          },
          {
            name: "Add employee",
            value: "addEmployee"
          },
          {
            name: "Delete employee",
            value: "deleteEmployee"
          },
          {
            name: "Add department",
            value: "addDept"
          },
          {
            name: "Add role",
            value: "addRole"
          },
          {
            name: "Update role",
            value: "updateRole"
          },
          {
            name: "Quit",
            value: "quit"
          }
        ]
      }).then(function (res) {
        menu(res.choices)
      })
};






























// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   console.log(`
//   ╔═══╗─────╔╗──────────────╔═╗╔═╗
//   ║╔══╝─────║║──────────────║║╚╝║║
//   ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
//   ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
//   ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
//   ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
//   ───────║║──────╔═╝║─────────────────────╔═╝║
//   ───────╚╝──────╚══╝─────────────────────╚══╝`);
//   // runs the app
//   runPrompt();
// });
// function runPrompt() {
//   inquirer
//     .prompt({
//       type: "list",
//       name: "task",
//       message: "What would you like to do?",
//       choices: [
//         "View All Employees",
//         "Add Employee",
//         "Update Employee Role",
//         "View All Roles",
//         "Add Role",
//         "View All Departments",
//         "Add Department",
//         "Quit",
//       ],
//     })
//     .then(function ({ task }) {
//       switch (task) {
//         case "View All Employees":
//           viewAllEmployees();
//           break;

//         case "Add Employee":
//           addEmployees();
//           break;

//         case "Update Employee Role":
//           updateEmployeeRole();
//           break;

//         case "View all Roles":
//           viewAllRoles();
//           break;

//         case "Add Role":
//           addRole();
//           break;

//         case "View all Departments":
//           viewAllDepartments();
//           break;

//           case "Add Department":
//             addDepartment();
//             break;

//         case "Quit":
//           connection.quit();
//           break;
//       }
//     });
// }

// function viewAllEmployees() {
//   console.log("Viewing All employees");

//   let select =
//     `SELECT e.id, 
//     e.first_name, 
//     e.last_name, 
//     r.title, 
//     d.name AS department, 
//     r.salary, 
//     CONCAT(m.first_name, ' ', m.last_name) 
//     AS manager
//   FROM employee e
//   LEFT JOIN role r
// 	ON e.role_id = r.id
//   LEFT JOIN department d
//   ON d.id = r.department_id
//   LEFT JOIN employee m
// 	ON m.id = e.manager_id`

//   connection.query(select, function (err, res) {
//     if (err) throw err;

//     console.table(res);
//     console.log("All Employees viewed!");
//     runPrompt();
//   });
// };

// function viewAllDepartments() {
//   console.log("Viewing employees by department\n");

//   var query =
//     `SELECT d.id, d.name, r.salary AS budget
//   FROM employee e
//   LEFT JOIN role r
// 	ON e.role_id = r.id
//   LEFT JOIN department d
//   ON d.id = r.department_id
//   GROUP BY d.id, d.name`

//   connection.query(query, function (err, res) {
//     if (err) throw err;

//     const departmentChoices = res.map(data => ({
//       value: data.id, name: data.name
//     }));

//     console.table(res);
//     console.log("Department view succeed!\n");

//     promptDepartment(departmentChoices);
//   });
// }

// function promptDepartment(departmentChoices) {

//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "departmentId",
//         message: "Which department would you choose?",
//         choices: departmentChoices
//       }
//     ])
//     .then(function (answer) {
//       console.log("answer ", answer.departmentId);

//       var query =
//         `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department 
//   FROM employee e
//   JOIN role r
// 	ON e.role_id = r.id
//   JOIN department d
//   ON d.id = r.department_id
//   WHERE d.id = ?`

//       connection.query(query, answer.departmentId, function (err, res) {
//         if (err) throw err;

//         console.table("response ", res);
//         console.log(res.affectedRows + "Employees are viewed!\n");

//         firstPrompt();
//       });
//     });
// }

