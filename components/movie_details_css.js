const Movie_details_CSS = () => {
  return (
    <style global jsx>{`
        .details{
          margin: 10%;
        }
        .movie_info{
          display: inline-block;
          height: 360px;
          margin-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          width: 67%;
        }
        .information img{
          float: left;
          width: 30%;
          height: 400px;
        }
        iframe{
          float: left;
          width: 60%;
          height: 400px;
        }
        .details hr{
          height: 5px;
          background-color: black;
          border: black;
        }
        .movie_info hr{
          height: 1px;
        }
        .plot{
          display: inline-block;
          height: 400px;
          margin-left: 20px;
          padding-top: 10px;
          width: 37%;
          text-align: justify;
          font-size: 13pt;
        }
        textarea{
          font-size: 12pt;
          width: 85%;
          font-size: 10pt;
          height: 70px;
          vertical-align: middle;
          resize: none;
          border-radius: 5px;
        }
        .write input[type=submit]{
          border: thin solid white;
          background-color: black;
          color: white;
          border-radius: 10px;
          width: 70px;
          height: 70px;
          margin-left: 10px;
          vertical-align: baseline;
        }
        .score{
          display: inline-block;
          text-align: center;
          margin-top: 5px;
          width: 13%;
          border: 1px solid white;
          border-radius: 10px;
          padding-top: 10px;
          padding-bottom: 10px;
          color: white;
        }
        .write{
          float: right;
          width: 86%;
        }
        .review fieldset{
          padding: 10px;
          border: 1px solid black;
          border-radius: 10px;
          background-color: black;
          margin-bottom: 10px;
        }
        .read{
          text-align: center;
        }
        .read li{
          display: inline-block;
          width: 40%;
          border: 3px outset gray;
          border-radius: 10px;
          padding: 5px;
          margin: 10px;
          margin-right: 30px;
        }
    `}</style>
  )
}

export default Movie_details_CSS
