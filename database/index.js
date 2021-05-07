import connection from "./connection.js";


class Database {
    constructor(connection){
        this.connection=connection
    }

    showAllRoles(){
        return new Promise((resolve,reject) => {
        connection.query("SELECT * FROM roles",(err,result) => {
            if (err) reject(err);
            resolve(result)

        })
       
        })
    }
}

export default new Database(connection);