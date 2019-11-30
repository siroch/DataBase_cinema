const Reservation_CSS = () => {
  return (
    <style global jsx>{`
      body{
        background-color: #f1f1f2;
      }
      .bigbox{
        display: flex;
        flex-flow: column;
        margin: 7%;
        background-color: #f1f1f2;
        margin-top: 120px;
      }
      .reload{
        align-self: flex-end;
        background-color: black;
        border-radius: 5px;
        color: #f1f1f2;
        margin: 0;
        margin-bottom: 5px;
      }
      .reload img{
        width: 20px;
        height: 20px;
        margin-right: 5px;
        vertical-align:middle;
      }
      .reload span{
        vertical-align:middle;
      }
      .box_all{
        display: flex;
        flex-flow: column;
        background-color: #f1f1f2;
      }
      .bigbox h3{
        margin: 0;
        text-align: center;
        background-color: black;
        color: #f1f1f2;
        padding: 5px;
      }
      .selections{
        display: flex;
        justify-content: space-between;
      }
      .movie_name{
        display: flex;
        flex-flow: column;
        border: thin solid black;
        overflow: scroll;
        height: 600px;
      }
      .movie_name button{
        text-align: left;
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
      .theater{
        display: flex;
        flex-flow: column;
        border: thin solid black;
        width: 30%;
      }
      .city{
        display: flex;
        justify-content: space-around;
        height: 100%;
      }
      .smallcity{
        display: flex;
        flex-flow: column;
        overflow: scroll;
        height: 470px;
        margin-top: 20px;
        width: 50%;
      }
      .smallcity button{
        border: none;
        margin: 1px;
        font-weight: bold;
      }
      .bigcity{
        display: flex;
        flex-flow: column;
        border-right: 1px solid black;
        height: 100%;
        width: 50%;
        padding-top: 5px;
      }
      .date{
        display: flex;
        flex-flow: column;
        border: thin solid black;
        width: 10%;
      }
      .data_select{
        display: flex;
        flex-flow: column;
        overflow-y: scroll;
        height: 550px;
      }
      .timetable{
        border: thin solid black;
        width: 40%;
      }
      .date button{
        font-size: 11pt;
        border: none;
      }
      h1{
        text-align: center;
        font-size: 25pt;
        margin: 1px;
      }
      h4{
        text-align: center;
        margin: 0;
        margin-top: 10px;
      }
      .summary{
        display: flex;
        align-items: center;
        background-color: black;
        color: #f1f1f2;
      }
      .movie_select img{
        width: 100px;
        height: 150px;
        margin: 10px;
      }
      button{
        font-size: 12pt;
        padding: 10px;
        margin: 5px;
        border-bottom: 1px solid;
        background-color: #f1f1f2;
      }
      .sat{
        color: blue;
      }
      .sun{
        color: red;
      }
      .movie_select{
        width: 18%;
        display: flex;
        margin: 5px;
        height: 180px;
        margin-left: 20px;
      }
      .another_selects{
        width: 18%;
        display: flex;
        justify-content: center;
        flex-flow: column;
        border-left: 2px solid gray;
        border-right: 2px solid gray;
      }
      .another_selects p{
        margin: 3px;
        margin-left: 20px;
      }
      .seat_select, .pay{
        display: flex;
        align-items: center;
        font-size: 80pt;
        margin-left: 50px;
        color: gray;
      }
      .seat_select span, .pay span{
        margin-top: 12px;
        font-size: 20pt;
        margin-left: 20px;
      }
      .go_seat, .go_pay, .go_reserve{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        border-radius: 10px;
        height: 120px;
        width: 120px;
        font-weight: bold;
        font-size: 50pt;
        color: #f1f1f2;
        background-color: #a51b0b;
        border: 1px red solid;
        margin-right: 20px;
      }
      .go_reserve{
        margin-right: auto;
        margin-left: 20px;
      }
      .go_seat span, .go_pay span, .go_reserve span{
        font-size: 15pt;
      }
      button:disabled{
        border: 1px solid gray;
        background-color: #333;
        color: #f1f1f2;
      }

      /* 좌석페이지 */
      .seat_and_peoples{
        display: flex;
        flex-flow: column;
        border: thin solid black;
      }
      .peoples{
        border: 1px solid black;
        border-bottom: none;
        padding: 20px;
        display: flex;
      }
      .norm{
        margin-left: 50px;
      }
      .teenager{
        margin-left: 10px;
      }
      .norm select, .teenager select{
        margin-left: 5px;
        width: 50px;
        font-size: 11pt;
      }
      .peoples p{
        margin: 0;
        margin-left: auto;
        color: #333;
        margin-right: 30px;
      }
      .seats{
        display: flex;
        border: 1px solid black;
      }
      .show{
        width: 90%;
        padding: 20px;
      }
      .show h3{
        background-color: lightgray;
        color: black;
        margin-bottom: 40px;
      }
      .seat_lines{
        padding: 10px;
      }
      .information{
        width: 10%;
        border: 1px solid black;
        padding: 20px;
        margin: 50px;
        margin-left: 30px;
      }
      .information ul{
        list-style: none;
        padding-left: 10px;
      }
      .seat_selected{
        width: 15%;
        display: flex;
        justify-content: center;
        flex-flow: column;
      }
      .payment{
        width: 15%;
        display: flex;
        justify-content: center;
        flex-flow: column;
        border-left: 2px solid gray;
      }
      .payment p, .seat_selected p{
        margin: 3px;
        margin-left: 20px;
      }
    `}</style>
  )
}

export default Reservation_CSS
