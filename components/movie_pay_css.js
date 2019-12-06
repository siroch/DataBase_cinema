const Movie_pay_CSS = () => {
  return (
    <style global jsx>{`
      .pay_title{
        text-align: center;
        margin-top: 10%;
      }
      .pay_box {
        border: 3px solid black;
        border-radius: 10px;
        display: flex;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 10%;
        padding: 30px;
        justify-content: center;
      }
      div.info_box {
        width: 65%;
        display: flex;
      }
      .movie_img {
        display: flex;
        justify-content: center;
        width: 30%;
        margin-right: 20px;
      }
      .movie_img img {
        width: 200px;
        height: 300px;
      }
      .reserve_movie_info{
        width: 50%;
        padding-right: 50px;
        border-right: 1px solid gray;
      }
      .reserve_movie_info hr {
        border: thin solid black;
      }
      .reserve_movie_info h3, .card_box h3{
        margin: 0px;
        margin-top: 5px;
        margin-bottom: 5px;
      }
      ul.movie_content {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      li.movie_content {
        padding: 5px;
      }
      .card_box{
        display: flex;
        flex-flow: column;
      }
      .card_box td,.card_box tr,.card_box input,.card_box select {
        font-size: 12pt;
        border-radius: 5px;
        margin: 8px;
      }
      .card_box input[type=button] {
        padding: 3px;
        background-color: black;
        color: white;
      }
      .card_box p{
        margin-top: auto;
        text-align: center;
        font-weight: bold;
      }
    `}</style>
  )
}

export default Movie_pay_CSS
