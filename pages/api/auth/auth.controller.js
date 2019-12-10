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
      const login_sql=`select customer_id, customer_pw, customer_name, customer_id, customer_phone, customer_birth + 0 as customer_birth, monthly_spend, c_rank from customer where customer_id='${curr_id}'`;
      connection.query(login_sql ,(err, results) =>{
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
          console.log("this", results[0]);
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
  const sel_sql = `select customer_id, customer_name, customer_birth, customer_phone, customer_birth + 0 as customer_birth, monthly_spend, c_rank from customer where customer_id = '${req.params.id}'`;
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
        "exist" : true,
        "name" : results[0].customer_name,
        "id" : results[0].customer_id,
        "birthy" : String(results[0].customer_birth).substring(0, 4),
        "birthm" : String(results[0].customer_birth).substring(4, 6),
        "birthd" : String(results[0].customer_birth).substring(6, 8),
        "phone" : results[0].customer_phone,
        "spend": results[0].monthly_spend,
        "rank" : results[0].c_rank
      });
    }
  });
}

exports.updateUserInfo = (req, res) => {
  console.log(req);
  const sql = `update customer set customer_pw = ${req.body.pwd}, customer_name = '${req.body.name}', customer_birth = ${req.body.birth}, customer_phone = ${req.body.phone} where customer_id = '${req.body.id}'`
  connection.query(sql, (err, results) => {
    if(err) {
      console.log(err);
    } else {
      res.send(200);
      console.log(results);
    }
  })
}

exports.updateUserPurchase = (req, res) => {
  const sql = `insert into purchase values ('${req.body.id}', '${req.body.list}', '${req.body.bill}', now())`;
  const sql1 = `update customer set monthly_spend = (monthly_spend + ${req.body.bill}) where customer_id = '${req.body.id}'`
  connection.query(sql, (err, results) => {
    if(err) {
      console.log(err);
    } else {
      connection.query(sql1, (err1, results1) => {
        if(err1) {
          console.log(err1);
        } else {
          res.send(200);
        }
      })
    }
  })
}

exports.getUserPurchase = (req, res) => {
  const sql = `select pur_list, bill, ts + 0 as ts from purchase where user_id='${req.params.id}' order by ts DESC limit 1`;
  connection.query(sql, (err, results) => {
    if(err) {
      console.log(err);
    } else {
      console.log(results);
      res.send({
        "list" : results[0].pur_list,
        "bill" : results[0].bill,
        "ts" : results[0].ts
      })
    }
  })
}

exports.getUserMovie = (req, res) => {
  const sql = `select reserve_id, people_num, seat_info, theater_id, movie_id, screen_num, show_date + 0 as show_date from reserve_info where customer_id='${req.params.id}' order by reserve_id DESC limit 1`;
  connection.query(sql, (err, results) => {
    if(err) {
      console.log(err);
      res.send(400);
    } else {
      console.log(results[0]);
      res.send({
        "reserve_id" : results[0].reserve_id,
        "people_num" : results[0].people_num,
        "seat_info" : results[0].seat_info,
        "theater_id" : results[0].theater_id,
        "movie_id" : results[0].movie_id,
        "screen_num" : results[0].screen_num,
        "show_date" : results[0].show_date
      })
    }
  })
}