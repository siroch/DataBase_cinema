const Midcontent_CSS = () => {
  return (
    <style global jsx>{`
      body{
        margin: 0;
      }
      .midcontents{
        margin-left: 10%;
        margin-right: 10%;
      }
      .midcontents fieldset{
        border: none;
        border-top: 3px solid black;
        text-align: center;
      }
      legend{
        text-align: center;
      }
      .midcontents img{
        width: 30%;
        height: 300px;
        margin: 0;
        display: inline-block;
        margin: 10px;
      }
      .rank_info{
        margin-bottom: 5%;
        border: 3px solid;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
      }
      .ranks{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }
      .rank_b, .rank_s, .rank_g, .rank_p{
        display: flex;
        align-items: center;
      }
      .ranks h4, .ranks h3, .ranks h2, .ranks h1{
        margin: 0;
        margin-bottom: 20px;
      }
      .ranks ul{
        text-align: left;
        margin: 5px;
        padding: 0;
      }
      .ranks li{
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .rank_b li{
        font-size: 10pt;
      }
      .rank_s li{
        font-size: 11pt;
      }
      .rank_g li{
        font-size: 12pt;
      }
      .rank_p li{
        font-size: 13pt;
      }
      .rank_info p{
        margin: 0;
        margin-top: 20px;
        align-self: flex-end;
        font-size: 10pt;
        color: gray;
      }
      .rank_b img{
        width: 100px;
        height: 100px;
      }
      .rank_s img{
        width: 120px;
        height: 120px;
      }
      .rank_g img{
        width: 150px;
        height: 150px;
      }
      .rank_p img{
        width: 200px;
        height: 200px;
      }
    `}</style>
  )
}

export default Midcontent_CSS
