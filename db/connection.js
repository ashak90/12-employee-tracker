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
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
         
  });

  

  connection.query = util.promisify(connection.query);

export default connection;