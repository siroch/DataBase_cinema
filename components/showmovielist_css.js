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
        width: 1050px;
        margin-left: auto;
        margin-right: auto;
        white-space:nowrap;
        overflow-x:scroll;
        margin-top: 20px;
        margin-bottom: 20px;
        scroll-behavior: smooth;
      }
      .list::-webkit-scrollbar {
        display: none;
      }
      .slide{
        margin: 10px;
        margin-top: 0;
        border: 1px solid black;
        display: inline-block;
        width: 240px;
        height: 360px;
        border-radius: 10px;
        overflow: hidden;
      }
      .slide img{
        width: 240px;
        height:300px;
        padding:0;
      }
      .slide img:hover, .leftbutton button:hover, .rightbutton button:hover {
        cursor: pointer;
      }
      .slide p{
        margin: 5px;
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
        height: 5px;
        width: 5px;
        margin: 0 2px;
        border-radius: 50%;
        display: inline-block;
        background-color: white;
        border: 3px solid black;
      }
      .slide span{
        border: thin solid;
        border-radius: 50%;
        color: white;
        font-size: 8pt;
        margin-right: 5px;
      }
      .allage{
        background-color: green;
        padding-right: 3px;
        padding-left: 3px;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      .nineteen{
        background-color: red;
        padding-right: 3px;
        padding-left: 3px;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      .fifteen{
        background-color: orange;
        padding: 5px;
      }
      .twelve{
        background-color: blue;
        padding: 5px;
      }
    `}</style>
  )
}

export default Showmovielist_CSS
