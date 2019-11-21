const Index_CSS = () => {
  return (
    <style global jsx>{`
      form{
        margin: 10%;
        margin-right: 25%;
        margin-left: 25%;
        text-align: center;
      }

      td, tr, input, select{
        font-size: 12pt;
        border-radius:5px;
        margin: 8px;
      }

      center{
        padding: 10px;
        border: 1px solid;
        border-spacing:15px;
        border-radius: 10px;
      }

      input[type=submit], input[type=button] {
        padding: 3px;
        background-color:black;
        color: white;
      }
    `}</style>
  )
}

export default Index_CSS
