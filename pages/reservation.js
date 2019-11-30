import Header from './Header'
import Footer from './footer'
import Reservation_CSS from '../components/reservation_css'
import {useState, useEffect} from 'react'
import Link from 'next/link'

const Reservation = () => {
  const [next, setNext] = useState(false)
  const [movies, setMovies] = useState(0)
  const [theater, setTheater] = useState(0)
  const [dates, setDates] = useState(0)
  const [seatNum, setSeatNum] = useState(0)

  function reloadHandler(){
    if(next === false){
      setMovies(0)
      setTheater(0)
      setDates(0)
    }
  }

  useEffect(() => {
    var next_bnt = document.getElementsByClassName("go_seat")
    if(next===false){
      if(movies!=0 && theater!=0 && dates!=0) next_bnt[0].disabled=false
      else next_bnt[0].disabled=true
    }
  })

  const Reserve = (
    <div class="bigbox">
      <button onClick={()=>reloadHandler()} class="reload">
        <img src="reload_arrow.png" alt="reload_arrow" />
        <span>예매 다시하기</span>
      </button>
      <div class="box_all">
        <div class="selections">
          <div class="movie_name">
            <h3>영화</h3>
            <button onClick={()=>setMovies("전체 겨울왕국")}><span>전체</span>겨울왕국2</button>
            <button><span>12</span>블랙머니</button>
            <button><span>15</span>터미네이터-타크페이트</button>
            <button><span>15</span>신의한수-귀수편</button>
            <button><span>15</span>나를찾아줘</button>
          </div>
          <div class="theater">
            <h3>극장</h3>
            <div class="city">
              <div class="bigcity">
                <button>서울</button>
                <button>경기</button>
                <button>인천</button>
                <button>대전/세종/충청</button>
                <button>부산/경상</button>
                <button>광주/전라</button>
                <button>강원</button>
                <button>제주</button>
              </div>
              <div class="smallcity">
                <button onClick={()=>setTheater(1372)}>강남</button>
                <button>강남대로(씨티)</button>
                <button>강동</button>
                <button>군자</button>
                <button>동대문</button>
                <button>마곡</button>
                <button>목동</button>
                <button>상봉</button>
                <button>상암월드컵경기장</button>
                <button>성수</button>
                <button>센트럴</button>
                <button>송파파크하비오</button>
                <button>신촌</button>
                <button>은평</button>
                <button>이수</button>
                <button>창동</button>
                <button>코엑스</button>
                <button>홍대</button>
              </div>
            </div>
          </div>
          <div class="date">
            <h3>날짜</h3>
            <div class="data_select">
              <h4>2019</h4>
              <h1>12</h1>
              <button onClick={()=>setDates("2019/12/01 (일)")} class="sun">일 <strong>1</strong></button>
              <button>월 <strong>2</strong></button>
              <button>화 <strong>3</strong></button>
              <button>수 <strong>4</strong></button>
              <button>목 <strong>5</strong></button>
              <button>금 <strong>6</strong></button>
              <button class="sat">토 <strong>7</strong></button>
              <button class="sun">일 <strong>8</strong></button>
              <button>월 <strong>9</strong></button>
              <button>화 <strong>10</strong></button>
              <button>수 <strong>11</strong></button>
              <button>목 <strong>12</strong></button>
              <button>금 <strong>13</strong></button>
              <button class="sat">토 <strong>14</strong></button>
              <button class="sun">일 <strong>15</strong></button>
              <button>월 <strong>16</strong></button>
              <button>화 <strong>17</strong></button>
              <button>목 <strong>18</strong></button>
              <button>금 <strong>19</strong></button>
              <button class="sat">토 <strong>20</strong></button>
              <button class="sun">일 <strong>21</strong></button>
              <button>월 <strong>22</strong></button>
              <button>화 <strong>23</strong></button>
              <button>수 <strong>24</strong></button>
              <button>목 <strong>25</strong></button>
              <button>금 <strong>26</strong></button>
              <button class="sat">토 <strong>27</strong></button>
              <button class="sun">일 <strong>28</strong></button>
              <button>월 <strong>29</strong></button>
              <button>화 <strong>30</strong></button>
              <button>수 <strong>31</strong></button>
            </div>
          </div>
          <div class="timetable">
            <h3>시간</h3>
            <div class="table">
            </div>
          </div>
        </div>
        <div class="summary">
          <div class="movie_select">
            <img src="movie/blackmoney.jpg" alt="select_poster" />
            <div class="movie_info">
              <br />
              <p>{movies===0 ? "" : movies.substr(3)}</p>
              <p>{movies===0 ? "" : "2D"}</p>
              <p>{movies===0 ? "" : movies.substr(0,2)+" 관람가"}</p>
            </div>
          </div>
          <div class="another_selects">
            <p>극장: {theater===0 ? "" : theater}</p>
            <p>일시: {dates===0 ? "" : dates}</p>
            <p>상영관: </p>
            <p>인원: </p>
          </div>
          <div class="seat_select">
            &#x203a;
            <span>좌석선택</span>
          </div>
          <div class="pay">
            &#x203a;
            <span>결제</span>
          </div>
          <button onClick={()=>setNext(true)} class="go_seat">
            &#8594;
            <span>좌석선택</span>
          </button>
        </div>
      </div>
    </div>
  )
  const Seat = (
    <div class="bigbox">
      <Link href="/reservation">
        <button class="reload">
          <img src="reload_arrow.png" alt="reload_arrow" />
          <span>예매 다시하기</span>
        </button>
      </Link>
      <div class="box_all">
        <div class="seat_and_peoples">
          <h3>인원 / 좌석</h3>
          <div class="peoples">
            <div class="norm">
              <strong>일반</strong>
              <select name="normal">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
            <div class="teenager">
              <strong>청소년</strong>
              <select name="teen">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
            <p>인원 선택은 최대 8명까지 가능합니다.</p>
          </div>
          <div class="seats">
            <div class="show">
              <h3>screen</h3>
              <div class="seat_lines">
                <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
                <p>E</p>
                <p>F</p>
                <p>G</p>
                <p>H</p>
                <p>I</p>
                <p>J</p>
                <p>K</p>
                <p>L</p>
                <p>M</p>
                <p>N</p>
              </div>
            </div>
            <div class="information">
              <h4>좌석 안내</h4>
              <ul>
                <li>선택 완료</li>
                <li>예약 완료</li>
                <li>선택 불가</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="summary">
          <button onClick={()=>setNext(false)} class="go_reserve">
            &#8592;
            <span>영화선택</span>
          </button>
          <div class="movie_select">
            <img src="movie/blackmoney.jpg" alt="select_poster" />
            <div class="movie_info">
              <br />
              <p>{movies===0 ? "" : movies.substr(3)}</p>
              <p>{movies===0 ? "" : "2D"}</p>
              <p>{movies===0 ? "" : movies.substr(0,2)+" 관람가"}</p>
            </div>
          </div>
          <div class="another_selects">
            <p>극장: {theater===0 ? "" : theater}</p>
            <p>일시: {dates===0 ? "" : dates}</p>
            <p>상영관: </p>
            <p>인원: </p>
          </div>
          <div class="seat_selected">
            <p>좌석: </p>
          </div>
          <div class="payment">
            <p>일반: </p>
            <p>청소년: </p>
            <br />
            <p>총금액  0</p>
          </div>
          <button class="go_pay" disabled="true">
            &#8594;
            <span>결제</span>
          </button>
        </div>
      </div>
    </div>
  )

  return(
    <div>
      <Header />
      <Reservation_CSS />
      {!next ? Reserve : Seat}
      <Footer />
    </div>
  )
}

export default Reservation
