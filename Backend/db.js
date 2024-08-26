const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'derecho.tech.com',
    user: 'root',
    database: 'db_connect',
    password: 'techinDynamic',
    port: 3306
});

module.exports = pool;
