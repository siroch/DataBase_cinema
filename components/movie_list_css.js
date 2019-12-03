const Movie_list_CSS = () => {
  return (
    <style global jsx>{`
      .movie_list {
        margin-top: 10%;
        margin-bottom: 10px;
        text-align:center;
        border-bottom: 2px solid black;
        margin-left: 10%;
        margin-right: 10%;
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
        font-size: 12pt;
      }
      .info_movie h2 {
        padding: 10px;
        white-space:nowrap;
        width: 45px;
      }
      .info_movie img {
        margin-left: 5%;
        margin-right: 5%;
        width: 100px;
        height: 150px;
      }
      .info_movie img:hover {
        cursor: pointer;
      }
      .movie_name {
        width: 400px;
      }
      .movie_name button {
        font-size: 11pt;
        border: 0px;
        color: #4A4040;
        text-decoration: underline;
      }
      .movie_name button:hover {
        cursor: pointer;
      }
      .movie_name span{
        border: thin solid;
        border-radius: 50%;
        color: white;
        font-size: 8pt;
        margin-right: 5px;
        width: 20%;
      }
      .allage{
        background-color: green;
        padding-right: 3px;
        padding-left: 3px;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      .nineteen{
        background-color: red;
        padding: 5px;
      }
      .fifteen{
        background-color: orange;
        padding: 5px;
      }
      .twelve{
        background-color: blue;
        padding: 5px;
      }
      .movie_name a {
        font-size: 14pt;
        color: black;
        text-decoration: none;
      }
    `}</style>
  )
}

export default Movie_list_CSS
