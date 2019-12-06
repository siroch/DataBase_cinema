import Header from './Header'
import Footer from './footer'
import Movie_pay_CSS from '../components/movie_pay_css'

const Movie_pay = () => {

  return(
    <div>
      <Header />
      <Movie_pay_CSS />
      <h2 class="pay_title">영화 결제</h2>
      <div class="pay_box">
        <div class="info_box">
          <div class="movie_img">
            <img src="movie/blackmoney.jpg" alt="movie" />
          </div>
          <div class="reserve_movie_info">
            <h3>블랙 머니</h3>
            <span>예매율: 5% |</span>
            <span>평점: 5.0 |</span>
            <span>개봉일: 2019.11.11</span>
            <hr />
            <ul class="movie_content">
              <li class="movie_content">예매번호: 2018044202</li>
              <li class="movie_content">극장: EGV 강남 </li>
              <li class="movie_content">상영관: 2관 </li>
              <li class="movie_content">일시: 2019/12/10 (화) 7:50~9:55</li>
              <li class="movie_content">일반: 2석</li>
              <li class="movie_content">청소년: 2석</li>
              <li class="movie_content">좌석: L13, L14, L15, L16</li>
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
          <p>총금액: 36000원</p>
          <input type="button" value="결제완료" />
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Movie_pay
