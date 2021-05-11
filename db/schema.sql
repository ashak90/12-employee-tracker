DROP DATABASE IF EXISTS employee_trackerdb;
CREATE DATABASE employee_trackerdb;
USE employee_trackerdb;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30),
    salary DECIMAL (8, 2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id),
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    INDEX role_ind (role_id)
    manager_id INT UNSIGNED,
    INDEX manager_ind (manager_id)
    is_manager BOOLEAN,
);

SELECT * from departments;
SELECT * from roles;
SELECT * from employees;