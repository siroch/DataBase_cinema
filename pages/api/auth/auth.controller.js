/*
    POST /api/auth/register
    {
        username,
        password
    }
*/
const jwt = require('jsonwebtoken')
var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'ericagallery',
  port : 3306
});
exports.register = (req, res) => {
  const {id,pw,name} = req.body;
  const ins_sql = `insert into customer (customer_id,customer_pw,customer_name) values ('${id}','${pw}','${name}')`;
  connection.query(ins_sql , (err, results) =>{
    if (err) {
      console.log("error ocurred", err);
      res.send({
        "code" : 400,
        "failed": "error ocurred"
      });
    }
    else {
      res.send({
        "code": 200,
        "success": "user registered sucessfully"});
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
      message: 'logged in successfully',
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
exports.check = (req, res) => {
  res.json({
      success: true,
      info: req.decoded
  });
}
