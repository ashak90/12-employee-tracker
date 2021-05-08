import mysql from "mysql";
import path from "path";

import util from "util";
// const path = require("path"),
// const util = require("util"),
const __dirname = path.resolve();
import dotenv from 'dotenv';
dotenv.config({path: path.resolve(__dirname,'../.env')});

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ilovecode',
    database: 'employee_trackerdb'
         
  });

  

  connection.query = util.promisify(connection.query);

export default connection;