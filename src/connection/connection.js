const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'devUser',
    password: 'Waksjenk101',
    host: 'localhost',
    database: 'remedialbackend',
    port: '3306'
})

module.exports = conn