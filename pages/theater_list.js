import Header from './Header'
import Footer from './footer'
import Theater_list_CSS from '../components/theater_list_css'

const Theater_list = () => {
  return(
    <div>
      <Theater_list_CSS />
      <Header />
      <theater>
      <div class="theater_list">
        <h2>극장</h2>
        <div class="region">
          <button>서울</button>|<button>경기</button>|<button>인천</button>|<button>대전/세종/충청</button>|
          <button>부산/경상</button>|<button>광주/전라</button>|<button>강원</button>|<button>제주</button>
        </div>
        <div class="possition1">
          <button>강남</button>|<button>강남대로(씨티)</button>|<button>강동</button>|<button>군자</button>|<button>동대문</button>|
          <button>마곡</button>|<button>상봉</button>|
        </div>
        <div class="possition1">
          <button>상암월드컵경기장</button>|<button>성수</button>|<button>센트럴</button>|<button>송파파크하비오</button>|<button>신촌</button>|<button>은평</button>|
        </div>
        <div class="possition1">
          <button>이수</button>|<button>창동</button>|<button>코엑스</button>|<button>홍대</button>|<button>화곡</button>|<button>ARTNINE</button>
        </div>
      </div>

      <div class="theater_info">
        <h2 class="h2line">상영관</h2>
        <div class="theater_img">img</div>
        <div class="info">
          <div class="left_info">
            <ul>
              <li>EGV 강남</li>
              <li>주소 : 박지호 집</li>
            </ul>
          </div>
          <div class="right_info">
            <ul>
              <li>전체 상영관 : 8관</li>
              <li>2D 상영관 : 4관</li>
              <li>3D 상영관 : 3관</li>
              <li>4D 상영관 : 1관</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="reserve">
        <h2 class="h2line">영화 예매</h2>
        <div class="movie_reserve_info">
          <p>12 블랙머니</p>
          <div class="movie_reserve">
            <p>2관</p>
            <div><button>7:30</button><button>9:30</button><button>11:30</button></div>
          </div>
        </div>
      </div>
      </theater>

      <Footer />
    </div>
  )
}

export default Theater_list