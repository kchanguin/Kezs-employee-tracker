CREATE DATABASE myEmployeeTracker_db;
USE myEmployeeTracker_db;

CREATE TABLE departments (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(255) NOT NULL
);

CREATE TABLE employeeRoles (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(225)
salary DECIMAL(0.0)
department_id INT,
FOREIGN KEY (department_id)
REFERENCES departments(id)
ON DELETE SET NULL
);

CREATE TABLE myEmployees (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(40) NOT NULL,
last_name VARCHAR(40) NOT NULL,

CREATE DATABASE myEmployeeTracker_db;
USE myEmployeeTracker_db;

/*create table departments
Create employee roles
create table myemployees */