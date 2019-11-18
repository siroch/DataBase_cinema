import Header from './Header';
import Footer from './footer';
import SignIn_CSS from '../components/signin_css'
import Link from 'next/link'

const SignIn = () => (
    <div>
      <Header />
      <SignIn_CSS />
      <form action="" method="post">
        <h1> 회원가입</h1>
        <center>
          <table>
           <tr>
            <td text-align="center">아이디</td>
            <td>
            <input type = "text" name="id" required />
            <input type = "button" name="checkid" value = "중복확인" required />
            </td>
           </tr>

           <tr>
            <td> 비밀번호 </td>
            <td> <input type = "password" name="pw1" required /> </td>
           </tr>

           <tr>
            <td> 비밀번호 확인 </td>
            <td> <input type = "password" name="pw2" required />&nbsp; *비밀번호를 다시 입력해주세요. </td>
           </tr>

           <tr>
            <td> 성명 </td>
            <td> <input type = "text" name="name" required /> </td>
           </tr>

            <tr>
            <td> 생년월일 </td>
            <td> <input type = "text" name="birth_year" size = "4" required />년
            <input type = "text" name="birth_month" size = "1" required />월
            <input type = "text" name="birth_day" size = "2" required />일 </td>
           </tr>

           <tr>
            <td> 휴대폰 </td>
            <td>
             <input type = "text" name = "Pnum" placeholder = "  -없이 입력해주세요" required />
            </td>
           </tr>
         </table>
         <hr/>
         <input type = "submit" value = "가입하기" required />
       </center>
      </form>
      <Footer />
    </div>
)

export default SignIn
