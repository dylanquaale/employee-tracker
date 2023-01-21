USE employees_db;

INSERT INTO department (id, name)
VALUES (1, 'Engineering'),
       (2, 'Sales'),
       (3, 'Finance'),
       (4, 'Legal');    

INSERT INTO role (title, salary, department_id)
VALUES (1, 'Lead Engineer', 250000);
INSERT INTO role (title, salary, department_id)
VALUES (1, 'Software Engineer', 220000);
INSERT INTO role (title, salary, department_id)
VALUES (2, 'Salesperson', 200000);
INSERT INTO role (title, salary, department_id)
VALUES (3, 'Accountant Manager', 230000);
INSERT INTO role (title, salary, department_id)
VALUES (3, 'Accountant', 230000);
INSERT INTO role (title, salary, department_id)
VALUES (4, 'Legal Team Lead', 240000);
INSERT INTO role (title, salary, department_id)
VALUES (4, 'Lawyer', 210000);

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
VALUES ('Steve', 'Cook', 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mark', 'Johnson', 2, null);


