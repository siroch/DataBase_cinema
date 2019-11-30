const Mypage_CSS = () => {
  return (
    <style global jsx>{`
      body {
        margin: 0px;
        padding: 0px;
      }
      img {
        margin-top: 4%;
        width: 30%;
        height: 80%;
      }
      .all_display {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      nava {
        text-align: center;
        background-color: black;
        width: 15%;
        height: 100%;
        position: fixed;
      }
      nava span {
        color: white;
        font-size: 20px;
        padding-left: 31.7%;
        padding-right: 31.7%;
        padding-top: 25px;
        padding-bottom: 25px;
        border-top: 1px groove white;
        border-bottom: 1px groove white;
        border-left: 0px;
        border-right: 0px;
      }
      nava span:hover {
        background-color: #333333;
        cursor: pointer;
        text-decoration: underline;
      }
      user_info {
      }
      .main_box{
        margin-top: 113px;
      }
      .t_box {
        margin-top: 51px;
      }
      .head2 { 
        position: absolute;
        margin-top: 10%;
        margin-left: 55%;
      }
      .user_info {
        display: flex;
        justify-content: space-around;
        position: absolute;
        width: 50%;
        height: 39%;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        margin-top: 15%;
        margin-left: 33%;
      }
      table.type05 {
        border-collapse: separate;
        border-spacing: 1px;
        text-align: left;
        line-height: 1.5;
        border-top: 1px solid #ccc;
        margin: 20px 10px;
      }
      table.type05 th {
        width: 150px;
        padding: 10px;
        font-weight: bold;
        vertical-align: top;
        border-bottom: 1px solid #ccc;
        background: #efefef;
      }
      table.type05 td {
        width: 350px;
        padding: 10px;
        vertical-align: top;
        border-bottom: 1px solid #ccc;
      }
      .edit_userinfo{
        display: flex;
        justify-content: row;
        position: absolute;
        width: 105px;
        height: 25px;
        text-align: center;
        margin-top: 40%;
        margin-left: 55%;
      }
      .edit_userinfo span {
        padding: 5px;
        background-color: black;
        font-size: 14px;
        color: white;
      }
      .edit_userinfo span:hover {
        background-color: #333333;
        cursor: pointer; 
      }
      .edit_rs_movie {
        display: flex;
        justify-content: row;
        position: absolute;
        width: 105px;
        height: 25px;
        text-align: center;
        margin-top: 40%;
        margin-left: 56%;
      }
      .edit_rs_movie span {
        padding: 5px;
        background-color: black;
        font-size: 14px;
        color: white;
      }
      .edit_rs_movie span:hover {
        background-color: #333333;
        cursor: pointer; 
      }
    `}</style>
  )
}

export default Mypage_CSS