DROP DATABASE IF EXISTS employee_trackerdb;
CREATE DATABASE employee_trackerdb;
USE employee_trackerdb;

CREATE TABLE departments (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR (30) UNIQUE NOT NULL
);

CREATE TABLE roles (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    INDEX dep_ind (department_id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments (id) ON DELETE CASCADE
);

CREATE TABLE employees (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    INDEX role_ind (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles (id) on DELETE CASCADE,
    manager_id INT UNSIGNED,
    INDEX man_ind (manager_id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees (id) on DELETE SET NULL,
    is_manager BOOLEAN
);

-- CREATE TABLE employees (
--     id INT NOT NULL AUTO_INCREMENT,
--     first_name VARCHAR (30) NULL,
--     last_name VARCHAR (30) NULL,
--     role_id INT,
--     is_manager BOOLEAN,
--     FOREIGN KEY (role_id) REFERENCES roles(id),
--     FOREIGN KEY (manager_id) REFERENCES employees(id),
--     PRIMARY KEY (id)
-- );

SELECT * from departments;
SELECT * from roles;
SELECT * from employees;