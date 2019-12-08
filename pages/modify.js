import Header from './Header'
import Footer from './footer'
import Modify_CSS from '../components/modify_css'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import axios from 'axios'
import router from 'next/router'

const Modify = () => {
  const [user_id, getUserid] = useState('');
	const [user_name, getUsername] = useState('');
	const [user_birth, getUserBirth] = useState('');
  const [user_phone, getUserPhone] = useState('');
  const [user_pw1, getUserpw1] = useState('');
  const [user_pw2, getUserpw2] = useState('');
  const [birthy, getBirthy] = useState('');
  const [birthm, getBirthm] = useState('');
  const [birthd, getBirthd] = useState('');

  useEffect(() => {
    var url = "/api/auth/samecheck/" + sessionStorage.getItem('userId');
    axios.
    get(url)
    .then(function(res) {
      getUserid(res.data.id);
      getUsername(res.data.name);
      getUserBirth(res.data.birth);
      getUserPhone('0' + res.data.phone);
    })
    .catch(function(res) {
      console.log(res);
    })
  }, [])

  const sending = () => {
    axios.
    post('/api/auth/update', {
      "id" : user_id,
      "pwd" : user_pw1,
      "birth" : (birthy + birthm + birthd),
      "phone" : user_phone,
      "name" : user_name
    })
    .then(function(res) {
      alert("성공적으로 수정되었습니다.");
      router.push('/');
    })
    .catch(function(res) {
      console.log(res);
    })
  }
  return(
    <div>
      <Header />
      <Modify_CSS />
      <h2 className="modify_title"> 회원정보 수정</h2>
      <div className="modify_box">
        <form>
          <div className="modify">
            <center>
              <table>

                <tr>
                  <td> ID </td>
                  <td><input type="text" readonly value={user_id} name="id" required /> </td>
                </tr>

                <tr>
                  <td> 성명 </td>
                  <td><input type="text" defaultValue={user_name} onChange={(e) => getUsername(e.target.value)} name="name" required /> </td>
                </tr>

                <tr>
                  <td> 생년월일 </td>
                  <td><input maxlength="4" defaultValue={String(user_birth).substring(0, 4)} onChange={(e) => getBirthy(e.target.value)} type="text" name="birth_year" size="4" placeholder="년" required/>
                    년<input maxlength="2" defaultValue={String(user_birth).substring(4, 6)} onChange={(e) => getBirthm(e.target.value)} type="text" name="birth_month" size="2" placeholder="월" required/>
                    월<input maxlength="2" defaultValue={String(user_birth).substring(6, 8)} onChange={(e) => getBirthd(e.target.value)} type="text" name="birth_day" size="2" placeholder="일" required/>
                    일</td>
                </tr>

                <tr>
                  <td> 휴대폰 </td>
                  <td>
                    <input type="text" defaultValue={user_phone} onChange={(e) => getUserPhone(e.target.value)}name="Pnum" placeholder=" " required />
                  </td>
                </tr>

                <tr>
                  <td> PW </td>
                  <td>
                    <input type="password" name="pw" onChange={(e) => getUserpw1(e.target.value)} placeholder=" " required />
                  </td>
                </tr>

                <tr>
                  <td> PW확인 </td>
                  <td>
                    <input type="password" name="pw2" onChange={(e) => getUserpw2(e.target.value)}placeholder=" " required />
                    {user_pw1===user_pw2 ? (<div className="possible"></div>) : (<div className="alert">비밀번호가 일치하지 않습니다.</div>)}
                  </td>
                </tr>
              </table>
            </center>
            <hr />
            <input type="button" onClick={sending} value="수정완료" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Modify
