const Footer_CSS = () => {
  return (
    <style global jsx>{`
      footer {
        background-color: #333;
        color: white;
      }
      footer li {
        list-style: none;
        margin-bottom: 8px;
        font-size: 11pt;
      }
      footer button{
        border: none;
        background-color: #333;
        color: white;
        opacity: .7;
        font-size: 9pt;
        margin: 2px;
      }
      footer button:hover {
        text-decoration: underline;
        cursor: pointer;
      }
      .top{
        padding: 5px;
        padding-left: 6%;
        display: flex;
        flex-flow: column;
      }
      .top li{
        display: flex;
        width: 95%;
      }
      .top li .bigc{
        width: 15%;
      }
      .top li .smallc{
        display: flex;
        flex-wrap: wrap;
        width: 80%;
      }
      .bottom {
        padding: 5px;
        background-color: black;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: gray;
      }
      .bottom p{
        margin: 0px;
        margin-left: 100px;
        margin-right: 100px;
      }
      .bottom p:first-child{
        color: black;
        font-weight: bold;
        font-size: 15pt;
      }
      .bottom p:first-child span{
        background-color:#545454;
        margin-left:5px;
        margin-right: 3px;
        padding: 3px;
        padding-top: 0;
        padding-bottom:0;
      }
      .bottom p:nth-child(2){
        font-size: 10pt;
      }
    `}</style>
  )
}

export default Footer_CSS
