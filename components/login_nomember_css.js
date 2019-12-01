const Login_Nomember_CSS = () => {
  return (
    <style global jsx>{`
      .login_nomember{
        margin: 15%;
        margin-right: 25%;
        margin-left: 25%;
      }
      .menu{
        display: inline-block;
        margin-left: 10px;
      }
      .menu ul{
        margin: 0;
        padding: 0;
      }
      .menu li{
        borde: 1px solid;
        display: inline-block;
        background-color: grey;
        margin-right: 2px;
      }
      .menu li button{
        border: none;
        background-color: grey;
        font-size: 12pt;
        padding: 15px;
        padding-bottom: 2px;
        outline: none;
      }
      .menu .on button{
        background-color: red;
        outline: none;
      }
      .input{
        border: 1px solid black;
        padding: 20px;
        text-align: center;
        border-radius: 10px;
      }
      .input p{
        color:grey;
        text-align: center;
      }

      form{
        border:0px solid;
      }
      .id_input, .pw_input{
        display: inline-block;
        margin-bottom: 8px;
      }
      .id_input{
        margin-top: 8px;
        margin-left: 7px;
      }
      .login, input[type=submit]{
        background-color:black;
        color: white;
        text-align: center;
        font-size: 13pt;
        border-radius: 10px;
      }
      input[type=text], input[type=password]{
        font-size: 13pt;
        border-radius:5px;
        margin: 5px;
      }
      a:-webkit-any-link {
        text-decoration: none;
      }
      center{
        border-spacing:15px;
      }
    `}</style>
  )
}

export default Login_Nomember_CSS
