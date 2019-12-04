exports.getSortInfo = () => {
  const writeJson = require('write-json');
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host     : 'ericagallery.cpi3i6d3shqc.us-east-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'databasepbl2!',
    database : 'ericagallery',
    port     : 3306
  });

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