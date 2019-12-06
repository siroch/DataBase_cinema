var alert = require('alert-node');
const axios = require('axios');
const jwt = require('jsonwebtoken')
var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : 'ericagallery.cpi3i6d3shqc.us-east-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'databasepbl2!',
  database : 'ericagallery',
  port : 3306
});

/*
    POST /api/auth/register
    {
        username,
        password
    }
*/

// exports.register = (req, res) => {
//   const {id,pw,name} = req.body;
//   const ins_sql = `insert into customer (customer_id,customer_pw,customer_name) values ('${id}','${pw}','${name}')`;
//   connection.query(ins_sql , (err, results) =>{
//     if (err) {
//       console.log("error ocurred", err);
//       res.send({
//         "code" : 400,
//         "failed": "error ocurred"
//       });
//     }
//     else {
//       res.send({
//         "code": 200,
//         "success": "user registered sucessfully"});
//     }
//   });
// }

exports.register = (req, res) => {
  let body = req.body;
  const birth_year = body.birth_year;
  const birth_month = body.birth_month;
  const birth_day = body.birth_day;
  const birth = birth_year + birth_month + birth_day;
  const ins_sql = `insert into customer (customer_id,customer_pw,customer_name, customer_birth, customer_phone, monthly_spend, c_rank) values ('${body.id}','${body.pwd}','${body.name}', '${birth}', '${body.Pnum}', 0, 0)`;
  connection.query(ins_sql , (err, results) => {
    if (err) {
      console.log("error ocurred", err);
      res.send({
        "code" : 400
      });
    }
    else {
      res.send({
        "code" : 200
      })
    }
    
  });
}

/*
    POST /api/auth/login
    {
        username,
        password
    }
*/

exports.login = (req, res) => {
  const {customer_id, customer_pw} = req.body;
  console.log(customer_id,customer_pw);
  const secret = req.app.get('jwt-secret');
  const chk = (curr_id,curr_pw)=>{
    return new Promise((resolve,reject)=>{
      const login_sql=`select * from customer where customer_id='${curr_id}'`;
      connection.query(login_sql , (err, results) =>{
        if (err) {
          reject(new Error('login failed'));
        }
        else if(results.length===0){
          reject(new Error('ID is not exist'));
        }
        else if(results[0].customer_pw!==curr_pw){
          reject(new Error('Password is wrong'));
        }
        else {
          console.log(results[0]);
          axios.
          post('http://localhost:3001/memo', {
            "id" : curr_id,
            "name" : results[0].customer_name,
            "birth" : results[0].customer_birth,
            "phone" : results[0].customer_phone,
            "spend" : results[0].monthly_spend,
            "rank" : results[0].c_rank
          })
          .then(function(res) {
            res.send(200);
          })
          .catch(function(res) {
            reject(new Error(400));
          });
          resolve(results[0]);
        }
      });
    });
  }
  const p = (user)=>{
    return new Promise((resolve,reject) => {
      jwt.sign(
        {
          customer_id:user.customer_id,
          customer_name:user.customer_name
        },
        secret,
        {
          expiresIn: '7d',
          issuer: 'ericagallery.com',
          subject: 'userInfo'
        },(err,token)=>{
          if(err)reject(err);
          resolve(token);
        }
      )
    });
  }
  const respond=(token)=>{
    res.json({
      "code" : 200,
      token
    });
  }
  const onError = (error) => {
    res.status(403).json({
        message: error.message
    });
  }
  chk(customer_id,customer_pw)
    .then(user=>p(user))
    .then(token=>respond(token))
    .catch(error=>onError(error));
}

/*
    GET /api/auth/check
*/

exports.check = (req, res) => {
  res.json({
      success: true,
      info: req.decoded
  });
}

exports.samecheck = (req, res) => {
  const sel_sql = `select customer_id from customer where customer_id = '${req.params.id}'`;
  connection.query(sel_sql , (err, results) => {
    if (err) {
      console.log(err);
    }
    else if(results.length===0) {
      res.send({
        "exist" : false
      });
    } 
    else {
      res.send({
        "exist" : true
      });
    }
  });
}