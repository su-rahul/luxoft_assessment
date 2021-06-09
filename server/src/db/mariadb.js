var mariadb = require('mariadb');

var pool = mariadb.createPool({
     host: '127.0.0.1', 
     port: 3306,
     user:'root', 
     password: 'root',
     database: 'db1',
     connectionLimit: 10
});

module.exports = pool;