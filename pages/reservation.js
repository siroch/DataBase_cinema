import Header from './Header'
import Footer from './footer'
import Reservation_CSS from '../components/reservation_css'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import data from '../data/movie_info'

import th_data from '../data/theater'
import Axios from 'axios'

const Reservation = () => {
  const [city, setCity] = useState(0)
  const [next, setNext] = useState(false)
  const [movie, setMovies] = useState(0)
  const [theater, setTheater] = useState(0)
  const [dates, setDates] = useState(0)
  const [seat, setSeat] = useState(0)
  const [showtime,settime] = useState(0)

  function reloadHandler(){
    if(next === false){
      setMovies(0)
      setTheater(0)
      setDates(0)
    }
    else{
      setSeat(0)
    }
  }

  useEffect(() => {
    var next_bnt = document.getElementsByClassName("go_seat")
    var inner_bnt = document.getElementsByClassName("inner")
    if(next===false){
      if(movie!=0 && theater!=0 && dates!=0){
        if(showtime!=0){
          next_bnt[0].disabled=false
          inner_bnt[0].disabled=false
        }
        else{
          //Axios.get("http://localhost:3000/data/table")
        }
      }
      else{
        next_bnt[0].disabled=true
        inner_bnt[0].disabled=true
      }
    }
    var prev_bnt = document.getElementsByClassName("go_reserve")
    if(next===true){
      if(seat===0){
        prev_bnt[0].disabled=false
        inner_bnt[0].disabled=false
      }
      else{
        prev_bnt[0].disabled=true
        inner_bnt[0].disabled=true
      }
    }
    var age = document.getElementsByTagName("span")
    for(var i=0; i<age.length; i++){
      if(age[i].textContent === "19"){
        age[i].classList.add('nineteen')
        age[i].textContent = "청불"
      }
      else if(age[i].textContent === "15"){ age[i].classList.add('fifteen') }
      else if(age[i].textContent === "12"){ age[i].classList.add('twelve') }
      else if(age[i].textContent === "전체"){ age[i].classList.add('allage')}
    }
    var theas = document.getElementsByClassName('thea')
    for(var i=0; i<theas.length; i++){
      if(theas[i].textContent===theater[1]) theas[i].classList.add('focus')
      else theas[i].classList.remove('focus')
    }
    var movs = document.getElementsByClassName('mov')
    for(var j=0; j<movs.length; j++){
      if(movs[j].textContent.substr(2)===movie[1]) movs[j].classList.add('focus')
      else movs[j].classList.remove('focus')
    }
    var days = document.getElementsByClassName('days')
    for(var t=0; t<days.length; t++){
      if(days[t].textContent.substr(2)===dates[2]) days[t].classList.add('focus')
      else days[t].classList.remove('focus')

      if(days[t].textContent.substr(0,1) === "일"){
        days[t].classList.add('sun')
      } else if(days[t].textContent.substr(0,1) === "토"){
        days[t].classList.add('sat')
      }
    }
  })

  const Su = (
    <div className="smallcity">
      {th_data.Seoul.map(info => (
        <button className="thea" onClick={()=>setTheater([info.split('|')[1], info.split('|')[2]])}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Gg = (
    <div className="smallcity">
      {th_data.Gyeonggi.map(info => (
        <button className="thea" onClick={()=>setTheater([info.split('|')[1], info.split('|')[2]])}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Ic = (
    <div className="smallcity">
      {th_data.Incheon.map(info => (
        <button className="thea" onClick={()=>setTheater([info.split('|')[1], info.split('|')[2]])}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Dsc = (
    <div className="smallcity">
      {th_data.Daejeon_Sejong_Chungcheong.map(info => (
        <button className="thea" onClick={()=>setTheater([info.split('|')[1], info.split('|')[2]])}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Bg = (
    <div className="smallcity">
      {th_data.Busan_Gyeongsangdo.map(info => (
        <button className="thea" onClick={()=>setTheater([info.split('|')[1], info.split('|')[2]])}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Gj = (
    <div className="smallcity">
      {th_data.Gwangju_Jeolla.map(info => (
        <button className="thea" onClick={()=>setTheater([info.split('|')[1], info.split('|')[2]])}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Gw = (
    <div className="smallcity">
      {th_data.Gangwon.map(info => (
        <button className="thea" onClick={()=>setTheater([info.split('|')[1], info.split('|')[2]])}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Jj = (
    <div className="smallcity">
      {th_data.Jeju.map(info => (
        <button className="thea" onClick={()=>setTheater([info.split('|')[1], info.split('|')[2]])}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const city_lists=[Su, Gg, Ic, Dsc, Bg, Gj, Gw, Jj]

  const Reserve = (
    <div className="bigbox">
      <button onClick={()=>reloadHandler()} className="reload">
        <img src="reload_arrow.png" alt="reload_arrow" />
        <span>예매 다시하기</span>
      </button>
      <div className="box_all">
        <div className="selections">
          <div className="movie_name">
            <h3>영화</h3>
            {data.map(movies => (
              <button className="mov" onClick={()=>setMovies([movies.movie_info.ageRestriction, movies.movie_info.movieNm,
                movies.movie_info.picture, movies.movie_info.showTypes,movies.movie_info.movieCd])}>
                <span>{movies.movie_info.ageRestriction}</span>
                {movies.movie_info.movieNm}
              </button>
            ))}
          </div>
          <div className="theater">
            <h3>극장</h3>
            <div className="city">
              <div className="bigcity">
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
          <div className="date">
            <h3>날짜</h3>
            <div className="data_select">
              <h4>2019</h4>
              <h1>12</h1>
              <button className="days" onClick={()=>setDates(["2019", "12", "10", "(화)"])}>화 <strong>10</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "11", "(수)"])}>수 <strong>11</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "12", "(목)"])}>목 <strong>12</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "13", "(금)"])}>금 <strong>13</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "14", "(토)"])}>토 <strong>14</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "15", "(일)"])}>일 <strong>15</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "16", "(월)"])}>월 <strong>16</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "17", "(화)"])}>화 <strong>17</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "18", "(수)"])}>수 <strong>18</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "19", "(목)"])}>목 <strong>19</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "20", "(금)"])}>금 <strong>20</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "21", "(토)"])}>토 <strong>21</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "22", "(일)"])}>일 <strong>22</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "23", "(월)"])}>월 <strong>23</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "24", "(화)"])}>화 <strong>24</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "25", "(수)"])}>수 <strong>25</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "26", "(목)"])}>목 <strong>26</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "27", "(금)"])}>금 <strong>27</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "28", "(토)"])}>토 <strong>28</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "29", "(일)"])}>일 <strong>29</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "30", "(월)"])}>월 <strong>30</strong></button>
              <button className="days" onClick={()=>setDates(["2019", "12", "31", "(화)"])}>화 <strong>31</strong></button>
              <h4>2020</h4>
              <h1>1</h1>
              <button className="days" onClick={()=>setDates(["2020", "01", "01", "(수)"])}>수 <strong>01</strong></button>
              <button className="days" onClick={()=>setDates(["2020", "01", "02", "(목)"])}>목 <strong>02</strong></button>
              <button className="days" onClick={()=>setDates(["2020", "01", "03", "(금)"])}>금 <strong>03</strong></button>
              <button className="days" onClick={()=>setDates(["2020", "01", "04", "(토)"])}>토 <strong>04</strong></button>
              <button className="days" onClick={()=>setDates(["2020", "01", "05", "(일)"])}>일 <strong>05</strong></button>
              <button className="days" onClick={()=>setDates(["2020", "01", "06", "(월)"])}>월 <strong>06</strong></button>
              <button className="days" onClick={()=>setDates(["2020", "01", "07", "(화)"])}>화 <strong>07</strong></button>
              <button className="days" onClick={()=>setDates(["2020", "01", "08", "(수)"])}>수 <strong>08</strong></button>
              <button className="days" onClick={()=>setDates(["2020", "01", "09", "(목)"])}>목 <strong>09</strong></button>
            </div>
          </div>
          <div className="timetable">
            <h3>시간</h3>
            <div className="table">
              2D 4관 (총 300석)
              <div className="times">
                <div className="time">
                  <button>10:00</button> 270석
                </div>
                <div className="time">
                  <button>12:00</button> 250석
                </div>
                <div className="time">
                  <button>14:00</button> 230석
                </div>
                <div className="time">
                  <button>16:00</button> 230석
                </div>
                <div className="time">
                  <button>18:00</button> 230석
                </div>
                <div className="time">
                  <button>20:00</button> 230석
                </div>
              </div>
            </div>
            <div className="table">
              3D 8관 (총 280석)
              <div className="times">
                <div className="time">
                  <button>10:00</button> 270석
                </div>
                <div className="time">
                  <button>12:00</button> 250석
                </div>
                <div className="time">
                  <button>14:00</button> 230석
                </div>
                <div className="time">
                  <button>16:00</button> 220석
                </div>
                <div className="time">
                  <button>18:00</button> 230석
                </div>
                <div className="time">
                  <button>20:00</button> 230석
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="summary">
          <div className="movie_select">
            {movie===0 ? "" : <img src={movie[2]} alt="select_poster" />}
            <div className="movie_info">
              <br />
              <p>{movie===0 ? "" : movie[1]}</p>
              <p>{movie===0 ? "" : movie[3].map(info => ( info.showTypeGroupNm )) + " "}</p>
              <p>{movie===0 ? "" : movie[0]+" 관람가"}</p>
            </div>
          </div>
          <div className="another_selects">
            <p>극장: {theater===0 ? "" : theater[1]}</p>
            <p>일시: {dates===0 ? "" : dates[0] + "/" + dates[1] + "/" + dates[2] + " " + dates[3]}</p>
            <p>상영관: </p>
            <p>인원: </p>
          </div>
          <div className="seat_select">
            &#x203a;
            <span>좌석선택</span>
          </div>
          <div className="pay">
            &#x203a;
            <span>결제</span>
          </div>
          <button onClick={()=>setNext(true)} className="go_seat">
            &#8594;
            <button className="inner">좌석선택</button>
          </button>
        </div>
      </div>
    </div>
  )
  const Seat = (
    <div className="bigbox">
      <Link href="/reservation">
        <button className="reload">
          <img src="reload_arrow.png" alt="reload_arrow" />
          <span>다시선택</span>
        </button>
      </Link>
      <div className="box_all">
        <div className="seat_and_peoples">
          <h3>인원 / 좌석</h3>
          <div className="peoples">
            <div className="norm">
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
            <div className="teenager">
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
          <div className="seats">
            <div className="show">
              <h3>screen</h3>
              <div className="seat_lines">
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
            <div className="information">
              <h4>좌석 안내</h4>
              <ul>
                <li>선택 완료</li>
                <li>예약 완료</li>
                <li>선택 불가</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="summary">
          <button onClick={()=>setNext(false)} className="go_reserve">
            &#8592;
            <button className="inner">영화선택</button>
          </button>
          <div className="movie_select">
            {movie===0 ? "" : <img src={movie[2]} alt="select_poster" />}
            <div className="movie_info">
              <br />
              <p>{movie===0 ? "" : movie[1]}</p>
              <p>{movie===0 ? "" : movie[3].map(info => ( info.showTypeGroupNm )) + " "}</p>
              <p>{movie===0 ? "" : movie[0]+" 관람가"}</p>
            </div>
          </div>
          <div className="another_selects">
            <p>극장: {theater===0 ? "" : theater[1]}</p>
            <p>일시: {dates===0 ? "" : dates[0] + "/" + dates[1] + "/" + dates[2] + " " + dates[3]}</p>
            <p>상영관: </p>
            <p>인원: </p>
          </div>
          <div className="seat_selected">
            <p>좌석: </p>
          </div>
          <div className="payment">
            <p>일반: </p>
            <p>청소년: </p>
            <br />
            <p>총금액  0</p>
          </div>
          <Link href="/movie_pay">
            <button className="go_pay">
              &#8594;
              <button className="inner">결제</button>
            </button>
          </Link>
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
