import Header from './Header'
import Footer from './footer'
import Reservation_CSS from '../components/reservation_css'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import data from '../data/movie_info'

import th_data from '../data/theater'

const Reservation = () => {
  const [city, setCity] = useState(0)
  const [next, setNext] = useState(false)
  const [movie, setMovies] = useState(0)
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
      if(movie!=0 && theater!=0 && dates!=0) next_bnt[0].disabled=false
      else next_bnt[0].disabled=true
    }
  })

  const Su = (
    <div class="smallcity">
      {th_data.Seoul.map(info => (
        <button onClick={()=>setTheater(`${info.split('|')[0]}`)}>{info.split('|')[1]}</button>
      ))}
    </div>
  )
  const Gg = (
    <div class="smallcity">
      {th_data.Gyeonggi.map(info => (
        <button onClick={()=>setTheater(`${info.split('|')[0]}`)}>{info.split('|')[1]}</button>
      ))}
    </div>
  )
  const Ic = (
    <div class="smallcity">
      {th_data.Incheon.map(info => (
        <button onClick={()=>setTheater(`${info.split('|')[0]}`)}>{info.split('|')[1]}</button>
      ))}
    </div>
  )
  const Dsc = (
    <div class="smallcity">
      {th_data.Daejeon_Sejong_Chungcheong.map(info => (
        <button onClick={()=>setTheater(`${info.split('|')[0]}`)}>{info.split('|')[1]}</button>
      ))}
    </div>
  )
  const Bg = (
    <div class="smallcity">
      {th_data.Busan_Gyeongsangdo.map(info => (
        <button onClick={()=>setTheater(`${info.split('|')[0]}`)}>{info.split('|')[1]}</button>
      ))}
    </div>
  )
  const Gj = (
    <div class="smallcity">
      {th_data.Gwangju_Jeolla.map(info => (
        <button onClick={()=>setTheater(`${info.split('|')[0]}`)}>{info.split('|')[1]}</button>
      ))}
    </div>
  )
  const Gw = (
    <div class="smallcity">
      {th_data.Gangwon.map(info => (
        <button onClick={()=>setTheater(`${info.split('|')[0]}`)}>{info.split('|')[1]}</button>
      ))}
    </div>
  )
  const Jj = (
    <div class="smallcity">
      {th_data.Jeju.map(info => (
        <button onClick={()=>setTheater(`${info.split('|')[0]}`)}>{info.split('|')[1]}</button>
      ))}
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
            {data.map(movies => (
              <button onClick={()=>setMovies([movies.movie_info.ageRestriction, movies.movie_info.movieNm,
                movies.movie_info.picture, movies.movie_info.showTypes])}>
                <span>{movies.movie_info.ageRestriction}</span>
                {movies.movie_info.movieNm}
              </button>
            ))}
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
            <img src={movie[2]} alt="select_poster" />
            <div class="movie_info">
              <br />
              <p>{movie===0 ? "" : movie[1]}</p>
              <p>{movie===0 ? "" : movie[3].map(info => ( info.showTypeGroupNm )) + " "}</p>
              <p>{movie===0 ? "" : movie[0]+" 관람가"}</p>
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
            <img src={movie[2]} alt="select_poster" />
            <div class="movie_info">
              <br />
              <p>{movie===0 ? "" : movie[1]}</p>
              <p>{movie===0 ? "" : movie[3].map(info => ( info.showTypeGroupNm )) + " "}</p>
              <p>{movie===0 ? "" : movie[0]+" 관람가"}</p>
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
