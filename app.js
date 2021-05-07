import inquirer from "inquirer";
import figlet from "figlet";
import database from "./database/index.js";

  
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
                case "View all departments":
                    viewAllEmployees();
                break;

                case "View all roles":
                    viewAllRoles();
                break;
            }
        })

        async function viewAllRoles(){
            const role = await database.showAllRoles();
            console.table(role);
            showMainMenu();
        }
}

welcome();
