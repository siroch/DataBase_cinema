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
      }
      li button{
        border: none;
        background-color: grey;
        font-size: 12pt;
        padding: 15px;
        padding-bottom: 2px;
        outline: none;
      }
      .on button{
        background-color: red;
        outline: none;
      }
      .input{
        border: 1px solid grey;
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
        margin-left: 8px;
      }
      input[type=submit]{
        background-color: #FBCEB1;
        text-align: center;
        font-size: 13pt;
        border-radius: 10px;
      }
      input[type=text], input[type=password]{
        font-size: 13pt;
      }
      a:-webkit-any-link {
        text-decoration: none;
      }
    `}</style>
  )
}

export default Login_Nomember_CSS
