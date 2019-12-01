import Header from './Header'
import Footer from './footer'
import Modify_CSS from '../components/modify_css'
import Link from 'next/link'


const Modify = () => {
  return(
    <div>
      <Header />
      <Modify_CSS />
      <h2 class="modify_title"> 회원정보 수정</h2>
      <div class="modify_box">
        <form action="" method="post">
          <div class="modify">
            <center>
              <table>

                <tr>
                  <td> ID </td>
                  <td><input type="text" value="기존 ID" name="id" required /> </td>
                </tr>

                <tr>
                  <td> 성명 </td>
                  <td><input type="text" value="기존이름" name="name" required /> </td>
                </tr>

                <tr>
                  <td> 생년월일 </td>
                  <td><input maxlength="4" value="기존" type="text" name="birth_year" size="4" placeholder="비밀번호" required/>
                    년<input maxlength="2" value="월" type="text" name="birth_month" size="2" placeholder="비밀번호" required/>
                    월<input maxlength="2" value="일" type="text" name="birth_day" size="2" placeholder="비밀번호" required/>
                    일</td>
                </tr>

                <tr>
                  <td> 휴대폰 </td>
                  <td>
                    <input type="text" value="기존 번호" name="Pnum" placeholder=" " required />
                  </td>
                </tr>

                <tr>
                  <td> PW </td>
                  <td>
                    <input type="text" name="pw" placeholder=" " required />
                  </td>
                </tr>

                <tr>
                  <td> PW확인 </td>
                  <td>
                    <input type="text" name="pw2" placeholder=" " required />
                  </td>
                </tr>
              </table>
            </center>
            <hr />
            <input type="submit" value="수정완료" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Modify
