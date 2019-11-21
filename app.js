const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'ericagallery.cpi3i6d3shqc.us-east-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'databasepbl2!',
  port     : 3306,
  database : 'ericagallery'
});

connection.connect();

connection.query('SELECT * from movie_info', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();

app.prepare()
.then(() => {
    const server = express();

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if(err) throw err;
        console.log("Go http://localhost:3000");
    });
})
.catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
});