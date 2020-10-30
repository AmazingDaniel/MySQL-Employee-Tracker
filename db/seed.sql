USE employee_DB;

INSERT INTO department (name)
VALUES 
("Production"), 
("R&D"), 
("Purchasing"), 
("Marketing"), 
("Human Resource"), 
("Accounting");

SELECT * FROM department;


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

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
("Oliver", "John", 1),
("Brian", "Braddock", 4),
("Sean", "Cassidy", 2),
("Bruce", "Wayne", 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
("Leslie", "Knope", 6),
("Ann", "Perkins", 1),
("Mark", "Brendanawicz", 3),
("Tom", "Haverford", 1),
("Ron", "Swanson", 5),
("Apirl", "Ludgate", 6),
("Andy", "Dwyer", 9),
("Ben", "Wyatt", 3),
("Chris", "Traeger", 3),
("Perry", "Gergich", 1);

SELECT * FROM employee;