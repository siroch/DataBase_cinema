import Header from './Header'
import Footer from './footer'
import Login_Nomember_CSS from '../components/login_nomember_css'
import {useState} from 'react';
import Link from 'next/link'


const Login_Nomember = () => {

  const [bnt, setBnt] = useState(true)

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
  		<form action="" method="post">
  			<div class="input" >
  				<div>
  					 <div class="id_input">
  						ID : <input type="text" name ="id" placeholder="아이디" required />
  					 </div>
  					 <br/>
  					 <div class="pw_input">
  						PW : <input type="password" name ="pw" placeholder="비밀번호" required />
  					 </div>
  					 <br/>
  					 <input type="submit" name="로그인" />
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
          <div>
             이름 : <input type="text" name ="name" size = "15" required maxlength="12" />
             <br/>
             생년월일(6자리) : <input maxlength="6" type="text" name ="birth date" size = "15" required />
             <br/>
             휴대폰 번호 : <input type = "text" name="number" size = "20" placeholder = "  -없이 입력해주세요" required />
             <br/>
             비밀번호 : <input type="password" name ="pw" size = "15" placeholder="비밀번호" required maxlength="4" />
          </div>
          <hr/>
          <input type="submit" name="비회원 예매확인" />
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
