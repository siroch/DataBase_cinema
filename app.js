const express = require('express');
const next = require('next');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());
    server.use(morgan('dev'));
    server.set('jwt-secret','SeCrEtKeYfOrHaShInG');
    server.use('/api',require('./pages/api/index'));
    
    server.get('/theaters/:areaNum/:theaterNum', (req, res) => {
      console.log(req.params);
      app.render(req, res,`/theater_list`,{ areaNum:req.params.areaNum,theaterNum: req.params.theaterNum});
    });
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