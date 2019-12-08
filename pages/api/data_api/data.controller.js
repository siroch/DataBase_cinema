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
    const data=[];
    const sql=`select screen_num,show_time,show_date from time_table where theater_id=? and movie_id=? and DATE(show_date)=? and show_date>=NOW()`
    connection.query(sql,[theater_id,movie_id,dates[0]+"-"+dates[1]+"-"+dates[2]] ,(err, results, fields) => {
      if(err)reject(new Error("에러가 발생했습니다."));
      results.map((row) => data.push({
        "screen_num":row.screen_num,
        "show_time":row.show_time,
        "show_date":[row.show_date.getHours()<9?"0"+(row.show_date.getHours()+1):row.show_date.getHours()+1,
        row.show_date.getMinutes()<10?"0"+row.show_date.getMinutes():row.show_date.getMinutes()]
      }));  
      resolve(data);   
    })
  }).then((data) => {
    res.json(data)
  }).catch((err) => {
    console.log(err.message)
  });
};

/*
GET /api/data/seats
*/

exports.seats = (req,res) => {
  fs.readFile(__dirname + '/../../../data/api/' + 'seats.json', 'utf8', (err, data) => {
    const seats = JSON.parse(data);
    return new Promise((resolve,reject) => {
      const {movie_id,theater_id,screen_num,dates} = req.query;
      const sql=`select seat_info from reserve_info where theater_id=? and movie_id=? and show_date=? and screen_num=?`
      connection.query(sql,[theater_id,movie_id,dates,screen_num], (err, results, fields) => {
        if(err)reject(new Error("에러가 발생했습니다."));
        results.map((reserve) => {
          const seats = reserve.seat_info.split('|');
          seats.map((loc) => {
            const row=loc[0],col=loc.substring(1);
            seats[row-'A'][col-1].seatType=1;
          })
        })
        resolve(seats);
      })
    }).then((data) => {
      res.json(data)
    }).catch((err) => {
      console.log(err.message)
    });
  })
}