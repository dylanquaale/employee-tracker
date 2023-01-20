USE employees_db;

INSERT INTO department (name)
VALUES ('Engineering'),
       ('Sales'),
       ('Finance'),
       ('Service');    

INSERT INTO role (title, salary, department_id)
VALUES ('Lead Engineer', 250000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Sowtware Engineer', 220000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 200000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 230000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Customer Service', 150000, 4);





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