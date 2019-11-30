import Header from './Header'
import Footer from './footer'
import Reservation_CSS from '../components/reservation_css'
import {useState, useEffect} from 'react'
import Link from 'next/link'

const Reservation = () => {
  const [city, setCity] = useState(0)
  const [next, setNext] = useState(false)
  const [movies, setMovies] = useState(0)
  const [theater, setTheater] = useState(0)
  const [dates, setDates] = useState(0)

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

  const Su = (
    <div class="smallcity">
      <button onClick={()=>setTheater(1372)}>강남</button>
      <button onClick={()=>setTheater(1359)}>강남대로(씨티)</button>
      <button onClick={()=>setTheater(1341)}>강동</button>
      <button onClick={()=>setTheater(1431)}>군자</button>
      <button onClick={()=>setTheater(1003)}>동대문</button>
      <button onClick={()=>setTheater(1572)}>마곡</button>
      <button onClick={()=>setTheater(1581)}>목동</button>
      <button onClick={()=>setTheater(1311)}>상봉</button>
      <button onClick={()=>setTheater(1211)}>상암월드컵경기장</button>
      <button onClick={()=>setTheater(1331)}>성수</button>
      <button onClick={()=>setTheater(1371)}>센트럴</button>
      <button onClick={()=>setTheater(1381)}>송파파크하비오</button>
      <button onClick={()=>setTheater(1202)}>신촌</button>
      <button onClick={()=>setTheater(1221)}>은평</button>
      <button onClick={()=>setTheater(1561)}>이수</button>
      <button onClick={()=>setTheater(1321)}>창동</button>
      <button onClick={()=>setTheater(1351)}>코엑스</button>
      <button onClick={()=>setTheater(1212)}>홍대</button>
      <button onClick={()=>setTheater(1571)}>화곡</button>
      <button onClick={()=>setTheater(1562)}>ARTNINE</button>
    </div>
  )
  const Gg = (
    <div class="smallcity">
      <button onClick={()=>setTheater(4121)}>고양스타필드</button>
      <button onClick={()=>setTheater(4152)}>김포한강신도시</button>
      <button onClick={()=>setTheater(4721)}>남양주</button>
      <button onClick={()=>setTheater(4451)}>동탄</button>
      <button onClick={()=>setTheater(4652)}>미사강변</button>
      <button onClick={()=>setTheater(4113)}>백석</button>
      <button onClick={()=>setTheater(4722)}>별내</button>
      <button onClick={()=>setTheater(4221)}>부천스타필드시티</button>
      <button onClick={()=>setTheater(4631)}>분당</button>
      <button onClick={()=>setTheater(4411)}>수원</button>
      <button onClick={()=>setTheater(4421)}>수원남문</button>
      <button onClick={()=>setTheater(4291)}>시흥배곧</button>
      <button onClick={()=>setTheater(4253)}>안산중앙</button>
      <button onClick={()=>setTheater(4821)}>양주</button>
      <button onClick={()=>setTheater(4431)}>영통</button>
      <button onClick={()=>setTheater(4471)}>오산</button>
      <button onClick={()=>setTheater(4462)}>용인테크노밸리</button>
      <button onClick={()=>setTheater(4804)}>의정부 민락</button>
      <button onClick={()=>setTheater(4111)}>일산</button>
      <button onClick={()=>setTheater(4104)}>일산일산벨라시타</button>
      <button onClick={()=>setTheater(4112)}>킨텍스</button>
      <button onClick={()=>setTheater(4132)}>파주금촌</button>
      <button onClick={()=>setTheater(4115)}>파주운정</button>
      <button onClick={()=>setTheater(4131)}>파주출판도시</button>
      <button onClick={()=>setTheater(4501)}>평택</button>
      <button onClick={()=>setTheater(4651)}>하남스타필드</button>
    </div>
  )
  const Ic = (
    <div class="smallcity">
      <button onClick={()=>setTheater(4041)}>검단</button>
      <button onClick={()=>setTheater(4062)}>송도</button>
      <button onClick={()=>setTheater(4001)}>영종</button>
      <button onClick={()=>setTheater(4051)}>인천논현</button>
      <button onClick={()=>setTheater(4042)}>청라</button>
      <button onClick={()=>setTheater(4043)}>청라지젤</button>
    </div>
  )
  const Dsc = (
    <div class="smallcity">
      <button onClick={()=>setTheater(3141)}>공주</button>
      <button onClick={()=>setTheater(3021)}>대전</button>
      <button onClick={()=>setTheater(3011)}>대전중앙로</button>
      <button onClick={()=>setTheater(3391)}>세종</button>
      <button onClick={()=>setTheater(3631)}>오창</button>
      <button onClick={()=>setTheater(3901)}>제천</button>
      <button onClick={()=>setTheater(3651)}>진천</button>
      <button onClick={()=>setTheater(3301)}>천안</button>
      <button onClick={()=>setTheater(3611)}>청주충북대</button>
      <button onClick={()=>setTheater(3801)}>충주</button>
      <button onClick={()=>setTheater(3501)}>홍성내포</button>
    </div>
  )
  const Bg = (
    <div class="smallcity">
      <button onClick={()=>setTheater(6701)}>거창</button>
      <button onClick={()=>setTheater(7602)}>경북도청</button>
      <button onClick={()=>setTheater(7122)}>경산하양</button>
      <button onClick={()=>setTheater(7801)}>경주</button>
      <button onClick={()=>setTheater(7303)}>구미강동</button>
      <button onClick={()=>setTheater(7401)}>김천</button>
      <button onClick={()=>setTheater(7901)}>남포항</button>
      <button onClick={()=>setTheater(7022)}>대구(칠성로)</button>
      <button onClick={()=>setTheater(7011)}>대구 신세계</button>
      <button onClick={()=>setTheater(7012)}>대구 이시아</button>
      <button onClick={()=>setTheater(6161)}>덕천</button>
      <button onClick={()=>setTheater(6312)}>마산</button>
      <button onClick={()=>setTheater(7451)}>문경</button>
      <button onClick={()=>setTheater(6001)}>부산극장</button>
      <button onClick={()=>setTheater(6906)}>부산대</button>
      <button onClick={()=>setTheater(7021)}>북대구(칠곡)</button>
      <button onClick={()=>setTheater(6641)}>사천</button>
      <button onClick={()=>setTheater(6642)}>삼천포</button>
      <button onClick={()=>setTheater(6261)}>양산</button>
      <button onClick={()=>setTheater(6262)}>양산라피에스타</button>
      <button onClick={()=>setTheater(6811)}>울산</button>
      <button onClick={()=>setTheater(6191)}>정관</button>
      <button onClick={()=>setTheater(6421)}>창원</button>
      <button onClick={()=>setTheater(6121)}>해운대(장산)</button>
    </div>
  )
  const Gj = (
    <div class="smallcity">
      <button onClick={()=>setTheater(5021)}>광주상무</button>
      <button onClick={()=>setTheater(5061)}>광주하남</button>
      <button onClick={()=>setTheater(5901)}>남원</button>
      <button onClick={()=>setTheater(5301)}>목포</button>
      <button onClick={()=>setTheater(5302)}>목포하당(포르모)</button>
      <button onClick={()=>setTheater(5612)}>송천</button>
      <button onClick={()=>setTheater(5401)}>순천</button>
      <button onClick={()=>setTheater(5551)}>여수</button>
      <button onClick={()=>setTheater(5552)}>여수용천</button>
      <button onClick={()=>setTheater(5001)}>전대(광주)</button>
      <button onClick={()=>setTheater(5063)}>전주(객사)</button>
      <button onClick={()=>setTheater(5064)}>첨단(광주)</button>
    </div>
  )
  const Gw = (
    <div class="smallcity">
      <button onClick={()=>setTheater(2001)}>남춘천</button>
      <button onClick={()=>setTheater(2171)}>속초</button>
      <button onClick={()=>setTheater(2201)}>원주</button>
      <button onClick={()=>setTheater(2202)}>원주센트럴</button>
    </div>
  )
  const Jj = (
    <div class="smallcity">
      <button onClick={()=>setTheater(6901)}>제주</button>
    </div>
  )
  const city_lists=[Su, Gg, Ic, Dsc, Bg, Gj, Gw, Jj]

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
                <button onClick={()=>setCity(0)}>서울</button>
                <button onClick={()=>setCity(1)}>경기</button>
                <button onClick={()=>setCity(2)}>인천</button>
                <button onClick={()=>setCity(3)}>대전/세종/충청</button>
                <button onClick={()=>setCity(4)}>부산/경상</button>
                <button onClick={()=>setCity(5)}>광주/전라</button>
                <button onClick={()=>setCity(6)}>강원</button>
                <button onClick={()=>setCity(7)}>제주</button>
              </div>
              {city_lists[city]}
            </div>
          </div>
          <div class="date">
            <h3>날짜</h3>
            <div class="data_select">
              <h4>2019</h4>
              <h1>12</h1>
              <button onClick={()=>setDates("2019/12/01 (일)")} class="sun">일 <strong>1</strong></button>
              <button onClick={()=>setDates("2019/12/02 (월)")}>월 <strong>2</strong></button>
              <button onClick={()=>setDates("2019/12/03 (화)")}>화 <strong>3</strong></button>
              <button onClick={()=>setDates("2019/12/04 (수)")}>수 <strong>4</strong></button>
              <button onClick={()=>setDates("2019/12/05 (목)")}>목 <strong>5</strong></button>
              <button onClick={()=>setDates("2019/12/06 (금)")}>금 <strong>6</strong></button>
              <button onClick={()=>setDates("2019/12/07 (토)")} class="sat">토 <strong>7</strong></button>
              <button onClick={()=>setDates("2019/12/08 (일)")} class="sun">일 <strong>8</strong></button>
              <button onClick={()=>setDates("2019/12/09 (월)")}>월 <strong>9</strong></button>
              <button onClick={()=>setDates("2019/12/10 (화)")}>화 <strong>10</strong></button>
              <button onClick={()=>setDates("2019/12/11 (수)")}>수 <strong>11</strong></button>
              <button onClick={()=>setDates("2019/12/12 (목)")}>목 <strong>12</strong></button>
              <button onClick={()=>setDates("2019/12/13 (금)")}>금 <strong>13</strong></button>
              <button onClick={()=>setDates("2019/12/14 (토)")} class="sat">토 <strong>14</strong></button>
              <button onClick={()=>setDates("2019/12/15 (일)")} class="sun">일 <strong>15</strong></button>
              <button onClick={()=>setDates("2019/12/16 (월)")}>월 <strong>16</strong></button>
              <button onClick={()=>setDates("2019/12/17 (화)")}>화 <strong>17</strong></button>
              <button onClick={()=>setDates("2019/12/18 (수)")}>수 <strong>18</strong></button>
              <button onClick={()=>setDates("2019/12/19 (목)")}>목 <strong>19</strong></button>
              <button onClick={()=>setDates("2019/12/20 (금)")}>금 <strong>20</strong></button>
              <button onClick={()=>setDates("2019/12/21 (토)")} class="sat">토 <strong>21</strong></button>
              <button onClick={()=>setDates("2019/12/22 (일)")} class="sun">일 <strong>22</strong></button>
              <button onClick={()=>setDates("2019/12/23 (월)")}>월 <strong>23</strong></button>
              <button onClick={()=>setDates("2019/12/24 (화)")}>화 <strong>24</strong></button>
              <button onClick={()=>setDates("2019/12/25 (수)")}>수 <strong>25</strong></button>
              <button onClick={()=>setDates("2019/12/26 (목)")}>목 <strong>26</strong></button>
              <button onClick={()=>setDates("2019/12/27 (금)")}>금 <strong>27</strong></button>
              <button onClick={()=>setDates("2019/12/28 (토)")} class="sat">토 <strong>28</strong></button>
              <button onClick={()=>setDates("2019/12/29 (일)")} class="sun">일 <strong>29</strong></button>
              <button onClick={()=>setDates("2019/12/30 (월)")}>월 <strong>30</strong></button>
              <button onClick={()=>setDates("2019/12/31 (화)")}>수 <strong>31</strong></button>
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
