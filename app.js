import inquirer from "inquirer";
import figlet from "figlet";
import database from './db/index.js';
import connection from './db/connection.js';


function welcome(){
    console.log(
        figlet.textSync("EMS")
    );
    console.log("Welcome to the Employee Management System")
    showMainMenu();
}

function showMainMenu(){
    inquirer
        .prompt([
            {
                type:"list",
                name:"viewAction",
                message:"Choose a view action:",
                choices:[
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add new department",
                    "Add new role",
                    "Add new employee",
                    "Update Employee Role",
                ],
            },
        ])
        .then(function(response) {
            switch (response.viewAction){
                case "View all employees":
                    viewAllEmployees();
                break;

                case "View all roles":
                    viewAllRoles();
                break;

                case "View all departments":
                    viewAllDepartments();
                break;
            }
        })

        async function viewAllEmployees(){
            const employee = await database.showAllEmployees();
            console.table(employee);
            showMainMenu();
        }

        async function viewAllRoles(){
            const roles = await database.showAllRoles();
            console.table(roles);
            showMainMenu();
        }

        async function viewAllDepartments(){
            const roles = await database.showAllDepartments();
            console.table(roles);
            showMainMenu();
        }
}

welcome();
