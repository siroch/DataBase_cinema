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
        text-align: center;
        font-size: 20pt;
        padding: 15px;
      }
      span {
        margin-left: 5%;
        margin-right: 8%;
      }
      nav a{
        margin-right: 5%;
      }
      span {
        color: white;
        margin-left: 5px;
        margin-right: 0;
      }
    `}</style>
  )
}

export default Header_CSS
