const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'db_connect',
    password: '',
    port: 3306
});

module.exports = pool;
