module.exports = (server, fs) => {

  server.get('/data/:movieCd', (req, res) => {
    fs.readFile(__dirname + '/../../../data/api/' + '_1121.json', 'utf8', (err, data) => {
      const movies = JSON.parse(data);
      res.json(movies[req.params.movieCd]);
    })
  });

}