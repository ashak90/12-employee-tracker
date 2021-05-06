import inquirer from "inquirer";
import figlet from "figlet"; 



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
                    "View all employees",
                    "View all managers",
                    "View all departments",
                    "View all roles",
                ],
            },
        ])
        // .then(async(response) => {
        //     if (response.viewAction === "View all employees"){

        //     }
        // })
}

welcome();
