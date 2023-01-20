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
