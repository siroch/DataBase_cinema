const Showmovielist_CSS = () => {
  return (
    <style global jsx>{`
      .movielist{
        margin-top: 100px;
        border-bottom: 2px solid gray;
        padding: 10px;
        text-align: center;
        margin-bottom: 50px;
      }
      .movielist button {
        margin-top: 10px;
        margin-right: 5px;
        margin-bottom: 5px;
      }
      .list{
        width: 1080px;
        margin-left: auto;
        margin-right: auto;
        white-space:nowrap;
        overflow-x:scroll;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .slide{
        margin: 10px;
        margin-top: 0;
        padding: 5px;
        border: 1px solid black;
        display: inline-block;
        width: 240px;
        height: 360px;
      }
      .rightbutton button{
        float: right;
        font-size: 50pt;
        border: none;
        margin-top: 150px;
      }
      .leftbutton button{
        float: left;
        font-size: 50pt;
        border: none;
        margin-top: 150px;
      }
      .circle{
        height: 10px;
        width: 10px;
        margin: 0 2px;
        background-color: black;
        border-radius: 50%;
        display: inline-block;
      }
      .active{
        height: 9px;
        width: 9px;
        margin: 0 2px;
        border-radius: 50%;
        display: inline-block;
        background-color: white;
        border: 1px solid black;
      }
    `}</style>
  )
}

export default Showmovielist_CSS
