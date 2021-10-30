//Dependencies fro mysql2 and dotenv
const mysql = require('mysql2');
require('dotenv').config()
//Established database connection using dotenv, storing configuration data in the environment separate from code
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'staff_db'
    },
    console.log('Connected to the staff_db database.')
);
//staff_db export statement
module.exports = db;