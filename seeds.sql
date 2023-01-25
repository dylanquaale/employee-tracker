USE employees_db;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ('Lead Engineer', 250000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 220000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 260000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Salesperson', 200000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Accountant Manager', 230000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 230000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Legal Team Lead', 240000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ('Lawyer', 210000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Bob', 'Barker', 1, 'Mike Chan');
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kurt', 'Cobain', 2, 'Tom Allen');
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Malia', 'Brown', 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Tom', 'Allen', 4, 'Mark Johnson');
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mike', 'Chan', 5, 'Malia Brown');
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Sarah', 'Steen', 6, 'Bob Barker');
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Steve', 'Cook', 7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mark', 'Johnson', 8, null);


