const Store_CSS = () => {
  return (
    <style global jsx>{`
      div.all{
        border-top: 3px solid black;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 10%;
      }
      div.gallery {
        margin: 10px;
        border: 1px solid #ccc;
        width: 180px;
        display: inline-block;
      }
      div.gallery:hover {
        border: 1px solid #777;
      }
      div.gallery img {
        width: 100%;
        height: 160px;
      }
      div.desc {
        padding: 8px 15px;
        text-align: center;
      }
      span.price {
        padding-left: 10px;
        text-align: right;
      }
      .category{
        margin-top: 100px;
        text-align:center;
        margin-bottom: 10px;
      }
      .category a{
        padding: 5px;
      }
      .category a:hover{
        font-size: 15pt;
      }
      div.fixed {
        position: absolute;
        top: 460px;
        right: 210px;
        width: 150px;
        height: 150px;
      }
      .fixed img{
        width: 150px;
        height: 150px;
      }
    `}</style>
  )
}

export default Store_CSS
