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
    `}</style>
  )
}

export default Midcontent_CSS
