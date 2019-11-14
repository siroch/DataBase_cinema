const Midcontent_CSS = () => {
  return (
    <style global jsx>{`
      body{
        margin: 0;
        background-color: #ECE6CC;
      }
      .review_section {
        display: inline-block;
        width: 45%;
        margin-left: 2%;
      }
      .quick_reservation {
        float: right;
        width: 45%;
        margin-right: 2%;
      }
      .quick_reservation p {
        border: 2px solid blue;
        padding: 2px;
        height: 15%;
      }
      fieldset {
        background-color: #eee6c4;
        border: 2px solid;
        border-radius: 10px;
        margin-bottom: 20px;
      }
      legend {
        text-align: center;
      }
      .scroll {
        background-color: beige;
        padding: 2px;
        border:1px solid;
        width: 100%;
        height: 200px;
        overflow: scroll;
      }
      a{
        margin-right: 5px;
      }
    `}</style>
  )
}

export default Midcontent_CSS
