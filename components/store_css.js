const Store_CSS = () => {
  return (
    <style global jsx>{`
      div.all{
        display: flex;
        flex-wrap: wrap;
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
      .gallery button{
        background-color:black;
        color: white;
        border-radius: 5px;
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
        margin-top: 10%;
        text-align:center;
        margin-bottom: 10px;
      }
      .category a{
        padding: 5px;
      }
      .category a:hover{
        cursor: pointer;
        font-size: 15pt;
      }
      div.fixed {
        display: inline-block;
        align-self: flex-end;
        margin-left: auto;
        width: 100px;
        height: 100px;
      }
      .fixed img{
        width: 100px;
        height: 100px;
      }
    `}</style>
  )
}

export default Store_CSS
