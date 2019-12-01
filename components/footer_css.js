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
        padding: 10px;
        background-color: black;
        color: white;
      }
    `}</style>
  )
}

export default Footer_CSS
