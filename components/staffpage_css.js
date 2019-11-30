const Staffpage_CSS = () => {
  return (
    <style global jsx>{`
      body {
        margin: 0px;
        padding: 0px;
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
        justify-content: center;
        position: absolute;
        width: 50%;
        height: 45%;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        margin-top: 15%;
        margin-left: 33%;
        overflow: scroll;
      }
      .user_info1 {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        position: absolute;
        width: 50%;
        height: 45%;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        margin-top: 15%;
        margin-left: 33%;
        overflow: scroll;
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
        background: black;
        color: white;
      }
      table.type05 td {
        width: 350px;
        padding: 10px;
        vertical-align: top;
        background: #efefef;
        border-bottom: 1px solid #ccc;
      }
      .info_sort {
        display: flex;
        justify-content: center;
      }
      .info_sort_button {
        display: flex;
        justify-content: space-around;
      }
      .info_sort_button button {
        height: 100%;
        width: 8%;
        font-size: 14pt;
        background-color: red;
        color: white;
      }
      .info_sort_button button:hover {
        cursor: pointer;
      }
    `}</style>
  )
}

export default Staffpage_CSS