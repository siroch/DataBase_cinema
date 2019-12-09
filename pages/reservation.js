import Header from './Header'
import Footer from './footer'
import Reservation_CSS from '../components/reservation_css'
import {useState, useEffect,Fragment} from 'react'
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
  const [seats, setSeats] = useState("")
  const [table,setTable] = useState([])
  const [showtime,settime] = useState(0)
  const [initSeats,setInitSeats] =useState([])
  const [normPerson, setNormPerson] = useState(0)
  const [teenPerson, setTeenPerson] = useState(0)
  function reloadHandler(){
    if(next === false){
      setMovies(0)
      setTheater(0)
      setDates(0)
      settime(0)
    }
    if(next === true){
      setSeats("")
      setNormPerson(0)
      setTeenPerson(0)
    }
  }
  function backHandler(){
    setMovies(0)
    setTheater(0)
    setDates(0)
    settime(0)
  }

  useEffect(() => {
    var next_bnt = document.getElementsByClassName("go_seat")
    var back_bnt = document.getElementsByClassName("go_reserve")
    var payment_bnt = document.getElementsByClassName("go_pay")
    var inner_bnt = document.getElementsByClassName("inner")
    if(next===false){
      if(movie!=0 && theater!=0 && dates!=0){
        Axios.get("/api/data/timetable",{
          params:{
            theater_id:theater[0],
            movie_id:movie[4],
            date_str:dates[0]+","+dates[1]+","+dates[2]
          }
        }).then((res)=>{
          setTable(res.data);
        }).catch((err)=>{
          console.log(err.message);
        });
        if(showtime!=0){
          next_bnt[0].disabled=false
          inner_bnt[0].disabled=false
        }
      }
      else{
        next_bnt[0].disabled=true
        inner_bnt[0].disabled=true
      }
    }
    if(next===true){
      if(initSeats.length===0){
        Axios.get('/api/data/seats',{
          params:{
            theater_id:theater[0],
            movie_id:movie[4],
            screen_num:showtime[2],
            dates:dates[0]+"-"+dates[1]+"-"+dates[2]+" "+showtime[0]+":"+showtime[1]+":00"
          }
        }).then((res)=>{
          setInitSeats(res.data);
        }).catch((err)=>{
          console.log(err.message);
        })
      }
      if(seats.length != 0){
        back_bnt[0].disabled=true;
        inner_bnt[0].disabled=true;
        payment_bnt[0].disabled=false;
        inner_bnt[1].disabled=false;
      }
      else{
        back_bnt[0].disabled=false;
        inner_bnt[0].disabled=false;
        payment_bnt[0].disabled=true;
        inner_bnt[1].disabled=true;
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
    var screen_nums = document.getElementsByClassName('table')
    var ts = document.getElementsByClassName('movie_time')
    for(var k=0; k<ts.length; k++){
      if(ts[k].textContent === (showtime[0]+":"+showtime[1]) && screen_nums[k].textContent.substr(0,2) === (showtime[2]+"관")) ts[k].classList.add('focus')
      else ts[k].classList.remove('focus')
    }
    var colss = document.getElementsByClassName('cols')
    for(var c=0; c<colss.length; c++){
      if(colss[c].textContent.substr(1)==="04"){
        colss[c].classList.add('line4')
      }else if(colss[c].textContent.substr(1)==="11"){
        colss[c].classList.add('line11')
      }else if(colss[c].textContent===" "){
        colss[c].classList.add('invisibles')
      }
      if(colss[c].name === "1"){
        colss[c].classList.add('reservated_seat')
        colss[c].disabled=true
      }
    }
    if(seats.length===0){
      for(var c=0; c<colss.length; c++){
        colss[c].classList.remove('choose_seat')
        colss[c].disabled = false
      }
    }
    for(var c=0; c<colss.length; c++){
      if(colss[c].textContent == seats.substr(seats.length-4, seats.length-1) || (colss[c].textContent+" ") == seats.substr(seats.length-4, seats.length-1)){
        colss[c].classList.add('choose_seat')
        colss[c].disabled = true
      }
    }
    if(seats.length/4 === (normPerson*1+teenPerson*1)){
      for(var c=0; c<colss.length; c++){
        colss[c].disabled = true
      }
    }
    console.log(seats.substr(seats.length-5, seats.length-2))
    console.log(seats.length)
  })

  const Su = (
    <div className="smallcity">
      {th_data.Seoul.map(info => (
        <button className="thea" onClick={()=>{setTheater([info.split('|')[1], info.split('|')[2]]),settime(0),setDates(0)}}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Gg = (
    <div className="smallcity">
      {th_data.Gyeonggi.map(info => (
        <button className="thea" onClick={()=>{setTheater([info.split('|')[1], info.split('|')[2]]),settime(0),setDates(0)}}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Ic = (
    <div className="smallcity">
      {th_data.Incheon.map(info => (
        <button className="thea" onClick={()=>{setTheater([info.split('|')[1], info.split('|')[2]]),settime(0),setDates(0)}}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Dsc = (
    <div className="smallcity">
      {th_data.Daejeon_Sejong_Chungcheong.map(info => (
        <button className="thea" onClick={()=>{setTheater([info.split('|')[1], info.split('|')[2]]),settime(0),setDates(0)}}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Bg = (
    <div className="smallcity">
      {th_data.Busan_Gyeongsangdo.map(info => (
        <button className="thea" onClick={()=>{setTheater([info.split('|')[1], info.split('|')[2]]),settime(0),setDates(0)}}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Gj = (
    <div className="smallcity">
      {th_data.Gwangju_Jeolla.map(info => (
        <button className="thea" onClick={()=>{setTheater([info.split('|')[1], info.split('|')[2]]),settime(0),setDates(0)}}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Gw = (
    <div className="smallcity">
      {th_data.Gangwon.map(info => (
        <button className="thea" onClick={()=>{setTheater([info.split('|')[1], info.split('|')[2]]),settime(0),setDates(0)}}>{info.split('|')[2]}</button>
      ))}
    </div>
  )
  const Jj = (
    <div className="smallcity">
      {th_data.Jeju.map(info => (
        <button className="thea" onClick={()=>{setTheater([info.split('|')[1], info.split('|')[2]]),settime(0),setDates(0)}}>{info.split('|')[2]}</button>
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
              <button className="mov" onClick={()=>{setMovies([movies.movie_info.ageRestriction, movies.movie_info.movieNm,
                movies.movie_info.picture, movies.movie_info.showTypes,movies.movie_info.movieCd]),setCity(0),settime(0),setTheater(0),setDates(0)}}>
                <span>{movies.movie_info.ageRestriction}</span>
                {movies.movie_info.movieNm}
              </button>
            ))}
          </div>
          <div className="theater">
            <h3>극장</h3>
            <div className="city">
              <div className="bigcity">
                <button onClick={()=>{setCity(0),settime(0),setTheater(0),setDates(0)}}>서울</button>
                <button onClick={()=>{setCity(1),settime(0),setTheater(0),setDates(0)}}>경기</button>
                <button onClick={()=>{setCity(2),settime(0),setTheater(0),setDates(0)}}>인천</button>
                <button onClick={()=>{setCity(3),settime(0),setTheater(0),setDates(0)}}>대전/세종/충청</button>
                <button onClick={()=>{setCity(4),settime(0),setTheater(0),setDates(0)}}>부산/경상</button>
                <button onClick={()=>{setCity(5),settime(0),setTheater(0),setDates(0)}}>광주/전라</button>
                <button onClick={()=>{setCity(6),settime(0),setTheater(0),setDates(0)}}>강원</button>
                <button onClick={()=>{setCity(7),settime(0),setTheater(0),setDates(0)}}>제주</button>
              </div>
              {city_lists[city]}
            </div>
          </div>
          <div className="date">
            <h3>날짜</h3>
            <div className="data_select">
              <h4>2019</h4>
              <h1>12</h1>
              <button className="days" onClick={()=>{setDates(["2019", "12", "10", "(화)"]),settime(0)}}>화 <strong>10</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "11", "(수)"]),settime(0)}}>수 <strong>11</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "12", "(목)"]),settime(0)}}>목 <strong>12</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "13", "(금)"]),settime(0)}}>금 <strong>13</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "14", "(토)"]),settime(0)}}>토 <strong>14</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "15", "(일)"]),settime(0)}}>일 <strong>15</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "16", "(월)"]),settime(0)}}>월 <strong>16</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "17", "(화)"]),settime(0)}}>화 <strong>17</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "18", "(수)"]),settime(0)}}>수 <strong>18</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "19", "(목)"]),settime(0)}}>목 <strong>19</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "20", "(금)"]),settime(0)}}>금 <strong>20</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "21", "(토)"]),settime(0)}}>토 <strong>21</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "22", "(일)"]),settime(0)}}>일 <strong>22</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "23", "(월)"]),settime(0)}}>월 <strong>23</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "24", "(화)"]),settime(0)}}>화 <strong>24</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "25", "(수)"]),settime(0)}}>수 <strong>25</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "26", "(목)"]),settime(0)}}>목 <strong>26</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "27", "(금)"]),settime(0)}}>금 <strong>27</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "28", "(토)"]),settime(0)}}>토 <strong>28</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "29", "(일)"]),settime(0)}}>일 <strong>29</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "30", "(월)"]),settime(0)}}>월 <strong>30</strong></button>
              <button className="days" onClick={()=>{setDates(["2019", "12", "31", "(화)"]),settime(0)}}>화 <strong>31</strong></button>
              <h4>2020</h4>
              <h1>1</h1>
              <button className="days" onClick={()=>{setDates(["2020", "01", "01", "(수)"]),settime(0)}}>수 <strong>01</strong></button>
              <button className="days" onClick={()=>{setDates(["2020", "01", "02", "(목)"]),settime(0)}}>목 <strong>02</strong></button>
              <button className="days" onClick={()=>{setDates(["2020", "01", "03", "(금)"]),settime(0)}}>금 <strong>03</strong></button>
              <button className="days" onClick={()=>{setDates(["2020", "01", "04", "(토)"]),settime(0)}}>토 <strong>04</strong></button>
              <button className="days" onClick={()=>{setDates(["2020", "01", "05", "(일)"]),settime(0)}}>일 <strong>05</strong></button>
              <button className="days" onClick={()=>{setDates(["2020", "01", "06", "(월)"]),settime(0)}}>월 <strong>06</strong></button>
              <button className="days" onClick={()=>{setDates(["2020", "01", "07", "(화)"]),settime(0)}}>화 <strong>07</strong></button>
              <button className="days" onClick={()=>{setDates(["2020", "01", "08", "(수)"]),settime(0)}}>수 <strong>08</strong></button>
              <button className="days" onClick={()=>{setDates(["2020", "01", "09", "(목)"]),settime(0)}}>목 <strong>09</strong></button>
            </div>
          </div>
          <div className="timetable">
            <h3>시간</h3>
            <div className="time_list">
              {dates===0 ? "" : table.map((t)=>(
                <div className="table">
                  <div className="screen_info">
                    {t.screen_num}관(2D)
                  </div>
                  <div className="time">
                    <button className="movie_time" onClick={()=>settime([t.show_date[0],t.show_date[1], t.screen_num])}>{t.show_date[0]}:{t.show_date[1]}</button>
                  </div>
                </div>
              ))}
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
            <p>일시: {dates===0 ? "" : dates[0] + "/" + dates[1] + "/" + dates[2] + " " + dates[3]} {showtime===0 ? "" : showtime[0]+":"+showtime[1]}</p>
            <p>상영관: {showtime===0 ? "" : showtime[2]+"관"} </p>
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
        <button onClick={()=>reloadHandler()} className="reload">
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
              <select name="normal" value={normPerson} onChange={(e)=>setNormPerson(e.target.value)}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
            </div>
            <div className="teenager">
              <strong>청소년</strong>
              <select name="teen" value={teenPerson} onChange={(e)=>setTeenPerson(e.target.value)}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
            </div>
            <p>인원 선택은 최대 8명까지 가능합니다.</p>
          </div>
          <div className="seats">
            <div className="show">
              <h3>screen</h3>
              <div className="seat_lines">
                {
                  initSeats.map(x=>(
                    <p className="rows">
                    {
                    x.map(i=>(
                      <button name={i.seatType}onClick={(e)=>setSeats(seats+(e.target.textContent.substr(0))+" ")} className="cols">{i.invisible==1?" ": i.col<10 ? i.row+"0"+i.col:i.row+""+i.col}</button>
                    ))
                    }
                    </p>
                  ))
                }
              </div>
            </div>
            <div className="information">
              <h4>좌석 안내</h4>
              <ul>
                <li><span className="seat_box_select"></span> 선택 완료</li>
                <li><span className="seat_box_done"></span> 예약 완료</li>
                <li><span className="seat_box_okay"></span> 일반석</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="summary">
          <button onClick={()=>setNext(false)} className="go_reserve">
            &#8592;
            <button onClick={()=>backHandler()} className="inner">영화선택</button>
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
            <p>일시: {dates===0 ? "" : dates[0] + "/" + dates[1] + "/" + dates[2] + " " + dates[3]} {showtime===0 ? "" : showtime[0]+":"+showtime[1]}</p>
            <p>상영관: {showtime===0 ? "" : showtime[2]+"관"} </p>
            <p>인원: {normPerson*1+teenPerson*1}명</p>
          </div>
          <div className="seat_selected">
            <p>
              좌석:
              <span>{seats}</span>
            </p>
          </div>
          <div className="payment">
            <p>일반: {normPerson}</p>
            <p>청소년: {teenPerson}</p>
            <br />
            <p>총금액  {normPerson*12000 + teenPerson*10000}원</p>
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
