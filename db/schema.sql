DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INTEGER NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(20,2) NOT NULL,
  department_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employees (
  id INTEGER NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role(id)
);