const Showmovielist_CSS = () => {
  return (
    <style global jsx>{`
      .movielist{
        margin-top: 100px;
        border: 1px solid black;
        padding: 10px;
        text-align: center;
      }
      .movielist button {
        margin-right: 5px;
        margin-bottom: 5px;
      }
      .list{
        width: 800px;
        margin-left: auto;
        margin-right: auto;
        white-space:nowrap;
        overflow-x:scroll;
      }
      .slide{
        margin: 5px;
        padding: 5px;
        border: 1px solid black;
        display: inline-block;
      }
      .rightbutton button{
        float: right;
        font-size: 40pt;
        border: none;
        margin-top: 3%;
        margin-bottom: 3%;
        background-color: #ECE6CC;
      }
      .leftbutton button{
        float: left;
        font-size: 40pt;
        border: none;
        margin-top: 3%;
        margin-bottom: 3%;
        background-color: #ECE6CC;
      }
    `}</style>
  )
}

export default Showmovielist_CSS
