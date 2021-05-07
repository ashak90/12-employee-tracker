import mysql from "mysql";
const path = require("path"),
const util = require("util"),
//.env 

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ilovecode',
    database: 'employee_trackerdb',
         
  });

  connection.query = util.promisify(connection.query);

  export default connection