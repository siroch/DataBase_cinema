const Index_CSS = () => {
  return (
    <style global jsx>{`
      .id_find, .pw_find {
  			border: 1px solid black;
  			width: 35%;
  			border-radius: 10px;
  		}

  		td, tr, input{
       font-size:12pt;
       border-radius:5px;
       margin: 8px;
      }

  		form,table{
  			border:0px solid;
        margin-top: 10%;
        margin-bottom: 5%;
  		}
      input[type=submit]{
        padding: 3px;
        background-color:black;
        color: white;
      }
    `}</style>
  )
}

export default Index_CSS
