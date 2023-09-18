const mysql = require('mysql2');
const genParam = require('./Gen-Params');
//------------------------------------------------
let HOST = genParam.HOST;
let USER = genParam.USER;
let PASSWORD = genParam.PASSWORD;
let DATABASE = genParam.DATABASE;
console.log("database.HOST	=", HOST);
console.log("database.USER	=", USER);
console.log("database.PASSWORD=", PASSWORD);
console.log("database.DATABASE=", DATABASE);
//------------------------------------------------
const pool = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});
//------------------------------------------------
module.exports = {
    pool: pool
};
//------------------------------------------------