const connection = require("./connection")
const mysql = require("mysql")

class Database {
    constructor(connection){
        this.connection=connection
    }

    showAllRoles(){
        return new Promise((resolve,reject) => {
        connection.query("SELECT * FROM role",(err,results) => {
            if (err) reject(err);
            resolve(results)

        })
       
        })
    }
}

module.exports= new Database;