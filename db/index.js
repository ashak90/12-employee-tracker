import connection from "./connection.js";

class Database {
  constructor(connection) {
    this.connection = connection;
  }

  showAllRoles() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM roles", (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  showAllEmployees() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM employees", (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  showAllDepartments() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM departments", (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
  addNewDepartment(departmentName) {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO departments (department_name) VALUES (?)",
        [departmentName]
      ),
        function (err, data) {
          if (err) reject(err);
          resolve(data);
        };
    });
  }

  addNewEmployee(firstName, lastName, roleID, managerID, isManager) {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO employees (first_name, last_name,role_id, manager_id, is_manager) VALUES (?,?,?,?,?)",
        [firstName, lastName, roleID, managerID, isManager]
      ),
        function (err, data) {
          if (err) reject(err);
          resolve(data);
        };
    });
  }
}

export default new Database(connection);
