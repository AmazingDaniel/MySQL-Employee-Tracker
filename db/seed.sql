USE employee_DB;

-- DEPARTMENTS
INSERT INTO department (name)
VALUES 
("Production"), 
("R&D"), 
("Purchasing"), 
("Marketing"), 
("Human Resource"), 
("Accounting");

SELECT * FROM department;


-- ROLES
INSERT INTO role (title, salary, department_id)
VALUES 
("Administrator", 200000.00, 1),
("Manager", 180000.00, 2),
("Accountant", 70000.00, 3),
("HR Manager", 90000.00, 4),
("Director", 900000.00, 5),
("Deputy Director", 700000.00, 6),
("Office Manager", 600000.00, 1),
("CTO", 750000.00, 2),
("Sales", 60000.00, 3);

SELECT * FROM role;


-- EMPLOYEES

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
("Leslie", "Knope", 1),
("Ann", "Perkins", 2),
("Mark", "Brendanawicz", 3),
("Tom", "Haverford", 4),
("Ron", "Swanson", 5),
("Apirl", "Ludgate", 6),
("Andy", "Dwyer", 7),
("Ben", "Wyatt", 8),
("Chris", "Traeger", 9),
("Perry", "Gergich", 1);

SELECT * FROM employee;