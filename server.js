// get the client
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

// mysql connection query
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
   
    // this will initiate mysql 
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
  // prompt menu
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

function menu(option) {
  switch (option) {
    case 'viewEmployees':
      viewAllEmployees();
      break;
      case 'viewDepartments':
        viewAllDepartments();
        break;
        case 'viewRoles':
        viewAllRoles();
        break;
        case 'addEmployee':
        addEmployee();
        break;
        case 'deleteEmployee':
        deleteEmployee();
        break;
        case 'addDepartment':
        addDepartment();
        break;
        case 'addRole':
        addRole();
        break;
        case 'updateRole':
        updateRole();
        break;
        case 'quit':
        quit();
      }
    };
      // view all employees prompt
    function viewAllEmployees() {
      connection.query(`SELECT employee.id, employee.first_name AS 'First Name', 
      employee.last_name AS 'Last Name', role.title AS Title, department.name AS Department,
      role.salary AS Salary, CONCAT(boss.first_name, ' ', boss.last_name) AS Manager
      FROM employee 
      JOIN role on employee.role_id = role.id
      JOIN department on role.department_id = department.id
      LEFT JOIN employee boss on boss.id = employee.manager_id
      ORDER BY employee.last_name;`, function (error, res) {
        console.table(res);
        endMenu();
      })
    };
      // function to: view all the departments
    function viewAllDepartments() {
      console.log("view all departments")
      connection.query("SELECT * from department", function (error, res) {
        console.table(res);
        endMenu();
      })
    };
      // function to: view all roles
    function viewAllRoles() {
      connection.query("SELECT * from role", function (error, res) {
        console.table(res);
        endMenu();
      })
    };

    function addEmployee() {
      inquirer
        .prompt([
          {
            type: 'input',
            message: 'What is employees first name?',
            name: 'firstName',
          },
          {
            type: 'input',
            message: 'What is employees last name?',
            name: 'lastName',
          },
          {
            type: 'list',
            message:'What is the employees roles?',
            name: 'roles',
            choices: showroles
          },
          {
            type: 'list',
            message: "Who is the employee's manager?",
            name: "manager",
            choices: showemployees,
          },
        ]).then(function (response) {
          addEmployee(response)
        })
    };

    function addEmployee(data) {

      connection.query("INSERT INTO employee SET ?",
        {
          first_name: data.firstName,
          last_name: data.lastName,
          role_id: data.title,
          manager_id: data.manager
        }, function (error, res) {
          if (error) throw error;
        })
      endMenu();
    };

    


    // function endMenu() {
    //   confirm("Would you like to continue?")
    //     .then(function confirmed() {
    //       showmenu();
    //     }, function cancelled() {
    //       end();
    //     });
    // ;}

    // function end() {
    //   console.log("Thank you for using Employee Tracker!");
    //   connection.end();
    //   process.exit();
    // }







