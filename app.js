const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '1234',
//   database : 'ericagallery',
//   port : 3306
// });
//
// connection.connect();

app.prepare().then(() => {
    const server = express();
    const bodyParser = require('body-parser');
    const morgan = require('morgan');

    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());
    server.use(morgan('dev'));
    server.set('jwt-secret','SeCrEtKeYfOrHaShInG');
    server.use('/api',require('./pages/api/index'));
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    server.listen(3000, (err) => {
        if(err) throw err;
        console.log('Go http://localhost:3000');
    });
})
.catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
});