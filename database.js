let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'hayet',
    password: '++++',
    database: 'first_db'
});

connection.connect();

connection.query('SELECT * FROM small_doggo', function(err, result, fields) {
    if (err) {
        throw err;
    }
    console.log(result);
});