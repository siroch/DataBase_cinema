import Header from './Header'
import Footer from './footer'
import Login_Nomember_CSS from '../components/login_nomember_css'
import {useState} from 'react'
import Link from 'next/link'
import Axios from 'axios'
import router from 'next/router'


const Login_Nomember = () => {

  const [bnt, setBnt] = useState(true);
  const [id, getId] = useState('');
  const [pwd, getPwd] = useState('');

  function getid(e) { getId(e.target.value); }
  function getpwd(e) { getPwd(e.target.value);}
  
  function sendinfo() {
    Axios({
      method : "POST",
      url: '/api/auth/login',
      headers: {},
      data: {
        customer_id: id,
        customer_pw: pwd
      }
    })
    .then(function(res) {
      localStorage.setItem('login', JSON.stringify(res.data));
      console.log(localStorage.getItem('login').split(":")[2].split('"')[1]);
      router.push('/index');
    })
  }

  const Login = (
    <div class="login_nomember">
      <div class="menu">
        <ul>
          <li class="on">
            <button>로그인</button>
          </li>
          <li>
            <button onClick={() => setBnt(!bnt)}>비회원 예매확인</button>
          </li>
        </ul>
      </div>
  		<form method="post">
  			<div class="input" >
  				<div>
  					 <div class="id_input">
  						ID <input type="text" name ="id" onChange={getid} placeholder="아이디" required />
  					 </div>
  					 <br/>
  					 <div class="pw_input">
  						PW <input type="password" name ="pw" onChange={getpwd} placeholder="비밀번호" required />
  					 </div>
  					 <br/>
             <input type="button" onClick={sendinfo} value="로그인" />
  				</div>
  				<hr/>
  				<p>
            <Link href="/sign_in">
              <a title="Sign-In">회원가입 </a>
            </Link>
  					|
            <Link href="/find">
    					<a title="find"> ID/PW 찾기 </a>
    				</Link>
  				</p>
  			</div>
  		</form>
  	</div>
  )

  const Nomember = (
    <div class="login_nomember">
      <div class="menu">
        <ul>
          <li>
            <button onClick={() => setBnt(!bnt)}>로그인</button>
          </li>
          <li class="on">
            <button>비회원 예매확인</button>
          </li>
        </ul>
      </div>
      <form action="" method="post">
        <div class="input" >
          <center>
              <table>
                <tr>
                 <td> 성명 </td>
                 <td> <input type = "text"name="name" required /> </td>
                </tr>

                <tr>
                 <td> 생년월일 </td>
                 <td>
                   <input type = "text" name="birth_year" size = "4" required />년
                   <input type = "text" name="birth_month" size = "1" required />월
                   <input type = "text" name="birth_day" size = "2" required />일
                 </td>
                </tr>

                <tr>
                 <td> 휴대폰 </td>
                 <td>
                  <input type = "text" name = "Pnum" placeholder = "  -없이 입력해주세요" required />
                 </td>
                </tr>

                <tr>
                 <td> 비밀번호 </td>
                 <td>
                  <input type="password" name ="pw" placeholder="비밀번호" required />
                 </td>
                </tr>
              </table>
          </center>
          <hr/>
          <input type="submit" value="비회원 예매확인"/>
        </div>
      </form>
    </div>
  )

  return (
    <div>
      <Login_Nomember_CSS />
      <Header />
      { bnt ? Login : Nomember }
      <Footer />
    </div>
  )
}

export default Login_Nomember
