USE employees_db;

INSERT INTO department (id, name)
VALUES (1, 'Engineering'),
       (2, 'Sales'),
       (3, 'Finance'),
       (4, 'Service');    

INSERT INTO role (title, salary, department_id)
VALUES (1, 'Lead Engineer', 250000);
INSERT INTO role (title, salary, department_id)
VALUES (1, 'Sowtware Engineer', 220000);
INSERT INTO role (title, salary, department_id)
VALUES (2, 'Sales Lead', 200000);
INSERT INTO role (title, salary, department_id)
VALUES (3, 'Accountant', 230000);
INSERT INTO role (title, salary, department_id)
VALUES (4, 'Customer Service', 150000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Bob', 'Barker', 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kurt', 'Cobain', 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Malia', 'Brown', 2, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Tom', 'Allen', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mike', 'Chan', 2, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Sarah', 'Steen', 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Steve', 'Cook', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mark', 'Johnson', 2, null);






-- THEN I am presented with a formatted table showing department names and department ids
-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
-- WHEN I choose to add a department
-- THEN I am prompted to enter the name of the department and that department is added to the database
-- WHEN I choose to add a role
-- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
-- WHEN I choose to add an employee
-- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
-- WHEN I choose to update an employee role
-- THEN I am prompted to select an employee to update and their new role and this information is updated in the database 