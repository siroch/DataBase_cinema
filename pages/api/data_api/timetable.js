const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'ericagallery.cpi3i6d3shqc.us-east-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'databasepbl2!',
  database : 'ericagallery',
  port     : 3306
});
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