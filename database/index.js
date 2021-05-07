const connection = require("./connection")
const mysql = require("mysql")

class Database {
    constructor(connection){
        this.connection=connection
    }

    viewAllRoles(){
        connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;",
        function(err, res){
            if (err) throw err
            console.table(res)
            showMainMenu()
        })
    }
}

module.exports= new Database(connection);