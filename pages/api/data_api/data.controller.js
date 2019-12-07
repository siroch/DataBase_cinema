const writeJson = require('write-json');
const mysql = require('mysql');
const fs = require('fs');
const connection = mysql.createConnection({
  host     : 'ericagallery.cpi3i6d3shqc.us-east-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'databasepbl2!',
  database : 'ericagallery',
  port     : 3306
});

/*
  GET /api/data/movies/?movieCd
*/

exports.moviedata = (req, res) => {
  fs.readFile(__dirname + '/../../../data/api/' + '_1121.json', 'utf8', (err, data) => {
    const movies = JSON.parse(data);
    res.json(movies[req.params.movieCd]);
  })
}

/*
  GET /api/data/sortData
*/

exports.getSortInfo = () => {
  connection.query('SELECT * from movie_info where isPlayed = 1 order by opening_day desc', function(err, rows, fields) {
    if (!err) {
      writeJson('../data/getInfo.json', rows, (err) => {
        console.log('done');
      });
    }
    else
      console.log('Error while performing Query.', err);
  });
};

/*
  GET /api/data/timetable/?theater_id&movie_id&dates
*/

exports.timetable = (req, res) => {
  return new Promise((resolve,reject)=>{
    const {theater_id,movie_id,date_str}=req.query;
    const dates=date_str.split(',');
    console.log(typeof(theater_id),typeof(movie_id),typeof(dates));
    const data=[];
    const sql=`select screen_num,show_time from time_table where theater_id='${theater_id}' and movie_id='${movie_id}' and DATE(show_date)='${dates[0]}-${dates[1]}-${dates[2]}' and show_date>=NOW()`
    connection.query(sql, (err, results, fields)=>{
      if(err)reject(new Error("에러가 발생했습니다."));
      console.log(results);
      results.map((row)=>data.push({"screen_num":row.screen_num,"show_time":row.show_time}));  
      resolve(data);   
    })
  }).then((data)=>{
    console.log(data)
    res.json(data);
  }).catch((err)=>{
    console.log(err.message);
  });
};