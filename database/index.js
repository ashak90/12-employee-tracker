import connection from "./connection.js";


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

export default new Database(connection);