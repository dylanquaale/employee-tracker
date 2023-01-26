// get the client
const mysql = require("mysql2");
const inquirer = require("inquirer");
const confirm = require("inquirer-confirm");
require("console.table");

// mysql connection query
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "raindrop",
  database: "employees_db",
});

// this will initiate mysql
connection.connect(function (err) {
  if (err) {
    return;
  }

  connection.query("SELECT * from role", function (error, res) {
    showroles = res.map((role) => ({
      name: role.title,
      value: role.id,
    }));
  });

  connection.query("SELECT * from department", function (error, res) {
    showdepartments = res.map((dep) => ({
      name: dep.name,
      value: dep.id,
    }));
  });

  connection.query("SELECT * from employee", function (error, res) {
    showemployees = res.map((emp) => ({
      name: `${emp.first_name} ${emp.last_name}, 
      id: ${emp.id}`,
      value: emp.id,
    }));
  });

  showprompt();
});

// prompt menu
function showprompt() {
  inquirer
    .prompt({
      type: "list",
      message: "Employee Tracker Portal",
      name: "choices",
      choices: [
        {
          name: "View all departments",
          value: "viewDepartments",
        },

        {
          name: "View all employees",
          value: "viewEmployees",
        },

        {
          name: "View all roles",
          value: "viewRoles",
        },

        {
          name: "Add role",
          value: "addRole",
        },

        {
          name: "Add employee",
          value: "addEmployee",
        },

        {
          name: "Add department",
          value: "addDept",
        },

        {
          name: "Update role",
          value: "updateRole",
        },
        
        {
          name: "Delete employee",
          value: "deleteEmployee",
        },

        {
          name: "Quit",
          value: "quit",
        },
      ],
    })
    .then(function (res) {
      menu(res.choices);
    });
}

function menu(option) {
  switch (option) {
    case "viewEmployees":
      viewAllEmployees();
      break;
    case "viewDepartments":
      viewAllDepartments();
      break;
    case "viewRoles":
      viewAllRoles();
      break;
    case "addEmployee":
      addEmployee();
      break;
    case "deleteEmployee":
      deleteEmployee();
      break;
    case "addDept":
      addDepartment();
      break;
    case "addRole":
      addRole();
      break;
    case "updateRole":
      updateRole();
      break;
    case "quit":
      quit();
  }
}

// view all employees prompt
function viewAllEmployees() {
  connection.query(
    `SELECT employee.id, employee.first_name AS 'First Name', 
      employee.last_name AS 'Last Name', role.title AS Title, department.name AS Department,
      role.salary AS Salary, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager
      FROM employee 
      JOIN role on employee.role_id = role.id
      JOIN department on role.department_id = department.id
      LEFT JOIN employee manager on manager.id = employee.manager_id
      ORDER BY employee.last_name;`,
    function (error, res) {
      console.table(res);
      endMenu();
    }
  );
}

// function to: view all the departments
function viewAllDepartments() {
  console.log("view all departments");
  connection.query("SELECT * from department", function (error, res) {
    console.table(res);
    endMenu();
  });
}
// function to: view all roles
function viewAllRoles() {
  connection.query("SELECT * from role", function (error, res) {
    console.table(res);
    endMenu();
  });
}

// add employee prompt
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is employees first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is employees last name?",
        name: "lastName",
      },
      {
        type: "list",
        message: "What is the employees roles?",
        name: "roles",
        choices: showroles,
      },
      {
        type: "list",
        message: "Who is the employee's manager?",
        name: "manager",
        choices: showemployees,
      },
    ])
    .then(function (response) {
      connection.query("SELECT * from employee", function (error, res) {
        console.table(res);
        endMenu();
      });
    });
}

// add role prompt
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employees name for this role?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the salary of this role?",
        name: "salary",
      },
      {
        type: "list",
        message: "What department does this role belong to?",
        name: "id",
        choices: showdepartments,
      },
    ])
    .then(function (response) {
      connection.query(
        "SELECT * from employee for role",
        function (error, res) {
          console.table(res);
          endMenu();
        }
      );
    });
}

// update the role prompt
function updateRole() {
  inquirer
    .prompt([
      {
        type: "list",
        message: " Which employee would you like to update the role?",
        name: "empID",
        choices: showemployees,
      },
      {
        type: "list",
        message: "What is the employee's new role?",
        name: "titleID",
        choices: showroles,
      },
    ])
    .then(function (response) {
      connection.query(
        "SELECT * from employee for update role",
        function (error, res) {
          console.table(res);
          endMenu();
        }
      );
    });
}

// add a new department to the db
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What would you like to name the new department?",
        name: "name",
      },
    ])
    .then(function (response) {
      connection.query("INSERT * to new department", function (error, res) {
        console.table(res);
        endMenu();
      });
    });
}

// allows you to delete a employee
function deleteEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Delete which employee?",
        name: "detId",
        choices: showemployees,
      },
    ])
    .then(function (response) {
      console.log("Employee id: " + response.detId + " deleted.");
      connection.query(
        `DELETE from employee WHERE id = ${response.detId}`,
        function (err, res) {
          if (err) throw err;
        }
      );
      endMenu();
    });
}

// prompt that asks if you would like to continue running through the other prompts
function endMenu() {
  confirm("Would you like to continue?").then(
    function confirmed() {
      showprompt();
    },
    function cancelled() {
      end();
    }
  );
}

// allows you to quit the application
function quit() {
  console.log("Thank you for using the Employee Tracker!");
  connection.end();
  process.exit();
}
