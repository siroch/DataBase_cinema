const Login_Nomember_CSS = () => {
  return (
    <style global jsx>{`
      h2.modify_title{
        text-align: center;
        margin-top: 10%;
      }
      div.modify_box {
        margin-right: 25%;
        margin-left: 25%;
        margin-bottom: 10%;
      }

      div.modify {
        border: 1px solid black;
        padding: 20px;
        text-align: center;
        border-radius: 10px;
      }

      div.modify p {
        color: grey;
        text-align: center;
      }

      .modify form {
        border: 0px solid;
      }

      .modify input[type=button] {
        background-color: black;
        color: white;
        text-align: center;
        font-size: 13pt;
        border-radius: 10px;
      }

      .modify input[type=text],
      .modify input[type=password] {
        font-size: 13pt;
        border-radius: 5px;
        margin: 5px;
      }

      .modify center {
        border-spacing: 15px;
      }
    `}</style>
  )
}

export default Login_Nomember_CSS
