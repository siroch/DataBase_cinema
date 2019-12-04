const Theater_list_CSS = () => {
  return (
    <style global jsx>{`
      body {
        margin: 0px;
        padding: 0px;
      }
      navi {
        background-color: black;
        width: 25vw;
        height: 100vh;
        position: fixed;
        display: flex;
        flex-direction: row;
      }
      theater {
        text-align: center;
        position: absolute;
        margin-top: 20vh;
        margin-left: 35vw;
        width: 50vw;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        margin-bottom: 10vh;
      }
      .region {
        margin-top: 110px;
        width: 50vw;
        text-align: center;
      }
      .region button {
        text-align: center;
        padding-bottom: 2vh;
        background-color: black;
        color: white;
        width: 90%;
        border: none;
        font-size: 18px;
      }
      .smallcitys {
        margin-top: 140px;
        width: 50vw;
        opacity: .7;
        overflow: scroll;
      }
      .smallcitys button {
        text-align: center;
        padding-bottom: 2vh;
        background-color: black;
        color: white;
        width: 90%;
        border: none;
        font-size: 18px;
      }
      .region button:hover, .smallcitys button:hover {
        cursor: pointer;
        background-color: white;
        color: black;
      }
      .map_img img{
        border: 1px solid black;
        width: 100%;
        height: 25vw;
      }
      .select_day {
        margin-top: 2rem;
        margin-bottom: 1rem;
        border-top: 1px solid black;
      }
      .tmonth {
        background-color: #6a6a6a;
        color: white;
        font-weight: bold;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      .tday {
        background-color: black;
      }
      .tday button {
        border: none;
        background-color: black;
        color: white;
        width: 14.28%;
        height: 3.2vw;
        border-top: 0.5px solid black;
        border-bottom: 1px solid black;
      }
      .tday button:hover {
        background-color: white;
        color: black;
        cursor: pointer;
        border-top: 0.5px solid white;
        border-bottom: 1px solid white;
      }
      .t_1, .t_2 {
        width: 10vw;
      }
      table {
        width: 100%;
        border-top: 1px solid #444444;
        border-collapse: collapse;
      }
      th {
        border-bottom: 1px solid #444444;
        padding: 10px;
        background-color: #444444;
        color: white;
        font-weight: bold;
        text-align: left;
      }
      td {
        border-bottom: 1px solid #444444;
        padding: 10px;
        text-align: left;
      }
      .ttime span {
        width: 3vw;
        margin: 0.2vw;
      }
    `}</style>
  )
}

export default Theater_list_CSS
