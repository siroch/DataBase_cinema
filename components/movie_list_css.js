const Movie_list_CSS = () => {
  return (
    <style global jsx>{`
      .movie_list {
        margin-top: 100px;
        margin-bottom: 10px;
        text-align:center;
        border-bottom: 2px solid black;
        margin-left: 20%;
        margin-right: 20%;
      }
      .sort_movie_info {
        margin-left: 25%;
        margin-right: 25%;
      }
      .information {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .info_movie {
        display: flex;
        flex-direction: row;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid black;
      }
      .info_movie h2 {
        padding: 10px;
        white-space:nowrap;
      }
      .info_movie img {
        margin-left: 5%;
        margin-right: 5%;
        width: 80px;
        height: 120px;
      }
      .info_movie img:hover {
        cursor: pointer;
      }
      .movie_name {
        width: 400px;
      }
      .movie_name button {
        font-size: 10pt;
        border: 0px;
        color: #4A4040;
        text-decoration: underline;
      }
      .movie_name button:hover {
        cursor: pointer;
      }
      .movie_name span{
        border: thin solid;
        border-radius: 100%;
        background-color: green;
        color: white;
        padding: 5px;
        font-size: 8pt;
        margin-right: 5px;
        width: 20%;
      }
      .movie_name a {
        font-size: 12pt;
        color: black;
        text-decoration: none;
      }
      .reserve_button {
        padding-top: 10%;
        display: flex;
        justify-content: space-around;
      }
      .reserve_button button {
        border: 1px solid black;
        background-color: red;
        color: white;
        opacity: .7;
        height: 50px;
        font-size: 10pt;
        margin: 2px;
      }
      .reserve_button button:hover {
        cursor: pointer;
      }
    `}</style>
  )
}

export default Movie_list_CSS