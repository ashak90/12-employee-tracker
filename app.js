import inquirer from "inquirer";
import figlet from "figlet";
import database from "./db/index.js";
import connection from "./db/connection.js";
// import db from "./db/index.js";
import cTable from "console.table";



function welcome() {
  console.log(figlet.textSync("EMS"));
  console.log("Welcome to the Employee Management System");
  showMainMenu();
}

function showMainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "viewAction",
        message: "Choose a view action:",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add new department",
          "Add new role",
          "Add new employee",
          "Update Employee Role",
          "Exit",
        ],
      },
    ])
    .then(function (response) {
      switch (response.viewAction) {
        case "View all employees":
          viewAllEmployees();
          break;

        case "View all roles":
          viewAllRoles();
          break;

        case "View all departments":
          viewAllDepartments();
          break;

        case "Add new employee":
          addNewEmployee();
          break;

        case "Add new role":
          addNewRole();
          break;

        case "Add new department":
          addNewDepartment();
          break;

        case "Exit":
          connection.end();
          break;
      }
    });

  async function viewAllEmployees() {
    const employee = await database.showAllEmployees();
    console.table(employee);
    showMainMenu();
  }

  async function viewAllRoles() {
    const roles = await database.showAllRoles();
    console.table(roles);
    showMainMenu();
  }

  async function viewAllDepartments() {
    const departments = await database.showAllDepartments();
    console.table(departments);
    showMainMenu();
  }
  function addNewDepartment() {
    console.log("Add a new department");
    inquirer
      .prompt([
        {
          type: "input",
          name: "departmentName",
          message: "Enter the name of the new department:",
        }
      ]).then (function (response) {
        const addDepartment = database.addNewDepartment(response.departmentName);
        // console.log("New Employee Added")
        console.table(addDepartment);
        showMainMenu();

      });
  }
  function addNewEmployee() {
    console.log("Add a new employee");
    inquirer
      .prompt([
        {
          type: "input",
          name: "firstName",
          message: "Enter the employee's first name:",
        },
        {
          type: "input",
          name: "lastName",
          message: "Enter the employee's last name:",
        },
        {
          type: "number",
          name: "roleID",
          message: "Enter the employee's role ID:",
        },
        {
          type: "confirm",
          name: "isManager",
          message: "Is the employee a manager?",
        },
        {
          type: "number",
          name: "managerID",
          message: "Enter the Employee's Manger ID, if the employee doesn't have a manager enter 0:",
          when: (response) => response.isManager === false,
        },
      ]).then(function (response) {
        const addEmployee = database.addNewEmployee(response.firstName, response.lastName, response.roleID, response.managerID, response.isManager);
        // console.log("New Employee Added")
        console.table(addEmployee);
        showMainMenu();

      });
  }
}


welcome();
