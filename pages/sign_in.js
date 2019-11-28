import Header from './Header'
import Footer from './footer'
import SignIn_CSS from '../components/signin_css'
import {useState, useEffect} from 'react'
import Link from 'next/link'

const SignIn = () => {
  const [id, getId] = useState('');
  const [idinfo, getIdInfo] = useState('');
  const [pwd, pwd1Check] = useState('');
  const [pwd2, pwd2Check] = useState('');
  const [pwdinfo, pwdInfo] = useState('');
  const [pwdcheckinfo, pwdCheckInfo] = useState('');
  const [pwdpossible, pwdPossible] = useState(null);
  const [name, getName] = useState('');
  const [birth_y, getBirthy] = useState('');
  const [birth_m, getBirthm] = useState('');
  const [birth_d, getBirthd] = useState('');
  const [phone, getPhone] = useState('');
  const [nameinfo, nameInfo] = useState('');
  const [birth_y_info, getBirthyInfo] = useState('');
  const [birth_m_info, getBirthmInfo] = useState('');
  const [birth_d_info, getBirthdInfo] = useState('');
  const [phone_info, getPhoneInfo] = useState('');

  function getid(e) {getId(e.target.value);}
  function getpwd1(e) {pwd1Check(e.target.value);}
  function getpwd2(e) {pwd2Check(e.target.value);}
  function getname(e) {getName(e.target.value);}
  function getbirthy(e) {getBirthy(e.target.value);}
  function getbirthm(e) {getBirthm(e.target.value);}
  function getbirthd(e) {getBirthd(e.target.value);}
  function getphone(e) {getPhone(e.target.value);}

  function IdBlur(e) {
    if(!id) {
      getIdInfo("필수 정보입니다.");
    } else {
      
      getIdInfo("");
    }
  }

  function PasswordBlur(e) {
    if(!pwd) {
      pwdInfo("필수 정보입니다");
    } else {
      pwdInfo("");
    }
  }

  function PasswordCheckBlur(e) {
    if(pwd2) {
      if(pwd === pwd2) {
        pwdCheckInfo("비밀번호가 일치합니다.");
        pwdPossible(true);
      }
      else {
        pwdCheckInfo("비밀번호가 일치하지 않습니다.");
        pwdPossible(false);
      }
    } else {
      pwdCheckInfo("필수 정보 입니다.");
      pwdPossible(false);
    }
  } 
  
  function NameBlur(e) {
    if(!name) {
      nameInfo("필수 정보입니다");
    } else {
      nameInfo("");
    }
  }

  function birth_y_Blur(e) {
    if(!birth_y) {
      getBirthyInfo("필수 정보입니다");
    } else {
      getBirthyInfo("");
    }
  }

  function birth_m_Blur(e) {
    if(!birth_m) {
      getBirthmInfo("필수 정보입니다");
    } else {
      getBirthmInfo("");
    }
  }

  function birth_y_Blur(e) {
    if(!birth_d) {
      getBirthdInfo("필수 정보입니다");
    } else {
      getBirthdInfo("");
    }
  }

  return(
    <div>
      <Header />
      <SignIn_CSS />
      <form action="/api/auth/register" method="post">
        <h1> 회원가입</h1>
        <center>
          <table>
           <tr>
            <td text-align="center">아이디</td>
            <td>
            <input type = "text" onChange={getid} onBlur={IdBlur} name="id" required />
            <input type = "button" name="checkid" value = "중복확인" required />
            <div className="alert">{idinfo}</div>
            </td>
           </tr>

           <tr>
            <td> 비밀번호 </td>
            <td> 
              <input type = "password" onChange={getpwd1} onBlur={PasswordBlur} name="pw1" required />
              <div className="alert">{pwdinfo}</div> 
              </td>
           </tr>

           <tr>
            <td> 비밀번호 확인 </td>
            <td> <input type = "password" onChange={getpwd2} name="pw2" onBlur={PasswordCheckBlur} required />
            { pwdpossible ? (<div className="possible">{pwdcheckinfo}</div>) : (<div className="alert">{pwdcheckinfo}</div>) }
            {/* &nbsp; *비밀번호를 다시 입력해주세요.  */}
            </td>
           </tr>

           <tr>
            <td> 성명 </td>
            <td> <input type = "text" name="name" required /> </td>
           </tr>

            <tr>
            <td> 생년월일 </td>
            <td> <input type = "text" name="birth_year" onChange={getBirthy}size = "4" required />년
            <input type = "text" name="birth_month" onChange={getBirthm} size = "1" required />월
            <input type = "text" name="birth_day" onChange={getBirthd} size = "2" required />일 </td>
            {!birth_y || !birth_m || !birth_d ? <div className="alert">필수 정보입니다.</div> : <div className="possible"></div>}
           </tr>

           <tr>
            <td> 휴대폰 </td>
            <td>
             <input type = "text" name = "Pnum" placeholder = "  -없이 입력해주세요" required />
            </td>
           </tr>
         </table>
         <hr/>
         <input type = "submit" value = "가입하기" />
       </center>
      </form>
      <Footer />
    </div>
)}

export default SignIn
