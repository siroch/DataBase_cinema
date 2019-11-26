const Header_CSS = () => {
  return (
    <style global jsx>{`
      body{
        margin: 0;
      }
      header {
        background-color: black;
        color: white;
        text-align: right;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 2;
      }
      .small {
        margin-right: 10px;
      }
      nav{
        border: 3px solid black;
        background-color: black;
        font-size: 20pt;
      }
      nav a{
        margin-right: 6%;
      }
      nav span {
        color: white;
        margin-left: 5px;
        margin-right: 6%;
      }
      nav span:hover, .small span:hover {
        border-bottom: 2px solid white;
      }
      nav ul{
        display: flex;
        justify-content: space-between;
        padding-right: 100px;
        padding-left: 180px;
        list-style: none;
        margin: 15px;
      }
      nav li{
        width: 450px;
        text-align: left;
      }
    `}</style>
  )
}

export default Header_CSS
