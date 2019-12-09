import Header from './Header'
import Footer from './footer'
import {useState, useEffect} from 'react'
import router from 'next/router'
import Movie_pay_CSS from '../components/movie_pay_css'
import th_data from '../data/api/_1121.json'
import location from '../data/location.json'
import Axios from 'axios'
const Movie_pay = ({people_num,seat_info,screen_num,pay,theater_id,movie_id,show_date}) => {
  const [reserveNumber,setReserveNum]=useState(0);
  const reserveMovie = ()=>{
    let seats="";
    seat_info.map(seat=>(seats+=(seat==""?"":(seat[1]=='0')?seat[0]+""+seat[2]+"|":seat[0]+""+seat[1]+seat[2]+"|")));
    console.log(sessionStorage.getItem('userId'),people_num,seat_info,screen_num,pay,theater_id,movie_id,show_date[0]+"-"+show_date[1]+"-"+show_date[2]+" "+show_date[3]+":"+show_date[4]+":00");
    Axios({
      method : "POST",
      url: '/api/data/reserveMovie',
      headers: {'x-access-token':localStorage.getItem('login').split(":")[2].split('"')[1]},
      data: {
        customer_id:sessionStorage.getItem('userId'),
        people_num:people_num,
        seat_info:seats,
        screen_num:screen_num,
        pay:pay,
        theater_id:theater_id,
        movie_id:movie_id,
        show_date:show_date[0]+"-"+show_date[1]+"-"+show_date[2]+" "+show_date[3]+":"+show_date[4]+":00"
      }
    }).then(function(res) {
      alert("결제가 완료되었습니다.");
      router.push('/index');
    })
    .catch(function(res) {
      alert("예매에 실패하셨습니다.");
    })
  }
  useEffect(() => {
    Axios.get('/api/data/reserveNum').then((res)=>setReserveNum(res.data)).catch((err)=>console.log(err.message));

    console.log(reserveNumber);
  })
  return(
    <div>
      <Header />
      <Movie_pay_CSS />
      <h2 class="pay_title">영화 결제</h2>
      <div class="pay_box">
        <div class="info_box">
          <div class="movie_img">
            <img src={th_data[movie_id].picture} alt="movie" />
          </div>
          <div class="reserve_movie_info">
            <h3>{th_data[movie_id].movieNm}</h3>
            <span>예매율: 5% |</span>
            <span>평점: 5.0 |</span>
            <span>개봉일: {th_data[movie_id].openDt}</span>
            <hr />
            <ul class="movie_content">
              <li class="movie_content">예매번호: {reserveNumber+1}</li>
              <li class="movie_content">극장: EGV {location[theater_id][0]} </li>
              <li class="movie_content">상영관: {screen_num}관 </li>
              <li class="movie_content">일시: {show_date[0]}/{show_date[1]}/{show_date[2]} {show_date[3]+":"+show_date[4]+":00"}</li>
              <li class="movie_content">인원: {people_num}명</li>
              <li class="movie_content">좌석: {seat_info.map(seat=>(seat+" "))}</li>
            </ul>
          </div>
        </div>
        <div class="card_box">
          <h3>카드결제</h3>
          <table>
            <tr>
              <td>카드종류 </td>
              <td colspan="3">
                <select name="card_name">
                  <option value="신한" selected>신한</option>
                  <option value="하나">하나</option>
                  <option value="기업">기업</option>
                  <option value="농협">농협</option>
                  <option value="우리">우리</option>
                  <option value="카카오">카카오</option>
                  <option value="토스">토스</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>카드번호</td>
              <td colspan="3">
                <input type="text" size="4" required/>
                -<input type="text" size="4" required/>
                -<input type="text" size="4" required/>
                -<input type="text" size="4" required/>
              </td>
            </tr>
            <tr>
              <td>유효기간</td>
              <td>
                <input type="text" size="3" required/>월
                <input type="text" size="3" required/>년
              </td>
              <td>
                CVC 번호
              </td>
              <td>
                <input type="text" size="3" required/>
              </td>
            </tr>
          </table>
          <p>총금액: {pay}원</p>
          <input type="button" value="결제완료" onClick={reserveMovie}/>
        </div>
      </div>
      <Footer />
    </div>

  )
}
Movie_pay.getInitialProps=(res)=>{
  const {people_num,seat_info,screen_num,pay,theater_id,movie_id,show_date}=res.query;
  return{
    people_num:people_num,
    seat_info:seat_info,
    screen_num:screen_num,
    pay:pay,
    theater_id:theater_id,
    movie_id:movie_id,
    show_date:show_date
  }
}
export default Movie_pay