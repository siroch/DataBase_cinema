const Mypage_CSS = () => {
  return (
    <style global jsx>{`
      body {
        margin: 0px;
        padding: 0px;
      }
      img {
        margin-top: 87px;
    	  height: 450px;
    	  width: 100%;
    	  opacity: .8;
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
      .ad {
        height:2000px;
        background-color: black;
      }
    `}</style>
  )
}

export default Mypage_CSS