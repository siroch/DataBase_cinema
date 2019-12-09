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
        .plot h2{
          margin: 5px;
        }
        .plot p{
          margin: 5px;
        }
        input[type=number]{
          font-size: 12pt;
        }
        .movie_info input[type=submit]{
          background-color: black;
          vertical-align: top;
          border-radius: 10px;
          color white;
          height: 24px;
        }
    `}</style>
  )
}

export default Movie_details_CSS
