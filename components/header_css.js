const Header_CSS = () => {
  return (
    <style global jsx>{`
      body{
        margin: 0;
        background-color: #ECE6CC;
      }
      header {
        background-color: black;
        color: white;
        text-align: right;
        position: fixed;
        top: 0;
        width: 100%;
      }
      .small {
        margin-right: 10px;
      }
      nav{
        border: 3px solid black;
        background-color: #333;
        font-size: 20pt;
      }
      nav a{
        margin-right: 6%;
      }
      span {
        color: white;
        margin-left: 5px;
        margin-right: 0;
      }
      nav ul{
        display: flex;
        justify-content: space-between;
        padding-right: 130px;
        padding-left: 180px;
        list-style: none;
        margin: 15px;
      }
      nav li{
        width: 600px;
        text-align: left;
      }
    `}</style>
  )
}

export default Header_CSS
