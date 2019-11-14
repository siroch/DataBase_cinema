import Header from './Header'
import Footer from './footer'
import Find_CSS from '../components/find_css'


const Find = () => (
  <div>
    <Header />
    <Find_CSS />
    <form action="/" method="post">
      <center>
        <div class="leftbox">
          <h2>아이디 찾기</h2>
          <div class="id_find">
            <table border="0">
              <tr>
               <td> 성명 </td>
               <td> <input type = "text"name="name" /> </td>
              </tr>

              <tr>
               <td> 생년월일 </td>
               <td> <input type = "text" name="birth_year" size = "6"/>년
               <input type = "text" name="birth_month" size = "3"/>월
               <input type = "text" name="birth_day" size = "3"/>일 </td>
              </tr>

              <tr>
               <td> 휴대폰 </td>
               <td>
                <input type = "text" name = "Pnum" size = "20" placeholder = "  -없이 입력해주세요"/>
               </td>
              </tr>
            </table>
            <hr/>
            <input type = "submit" value ="확인"/>
          </div>
        </div>

        <div class="rightbox">
          <h2>비밀번호 찾기</h2>
          <div class="pw_find">
           <table border="0">
             <tr>
              <td> 아이디 </td>
              <td> <input type = "text"name="name" /> </td>
             </tr>

             <tr>
              <td> 성명 </td>
              <td> <input type = "text"name="name" /> </td>
             </tr>

             <tr>
              <td> 휴대폰 </td>
              <td>
               <input type = "text" name = "Pnum" size = "20" placeholder = "  -없이 입력해주세요"/>
              </td>
             </tr>
            </table>
            <hr/>
            <input type = "submit"  value = "확인"/>
          </div>
        </div>
      </center>
    </form>
    <Footer />
  </div>
)

export default Find
