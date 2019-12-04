import Header from './Header'
import th_data from '../data/theater'
import locations from '../data/location'
import Link from 'next/link'
import Theater_list_CSS from '../components/theater_list_css'
import {useState,useEffect} from 'react'

const Theater_list = ({areaNum,theaterNum}) => {
  const [bigCity, setBigCity] = useState(areaNum)
  const [smallCity, setSmallCity] = useState(theaterNum)
  const change = (bc,sc)=>{
    setBigCity(bc);
    setSmallCity(sc);
  }
  useEffect(()=>{
    change(areaNum,theaterNum);
  },[{areaNum,theaterNum}])
  const area=[[0,1372,"서울"],[1,4121,"경기"],[2,4041,"인천"],
  [3,3141,"대전/세종/충청"],[4,6701,"부산/경상"],[5,5021,"광주/전라"]
  ,[6,2001,"강원"],[7,6901,"제주"]];
  const Su = (
    <navi>
      <div className="region">
        {area.map((region)=>(
          <Link as={`/theaters/${region[0]}/${region[1]}`}href={{pathname:'/theater_list',query:{areaNum:region[0],theaterNum:region[1]}}}>
            <button>{region[2]}</button>
          </Link>
        ))}
      </div>
      <div className="smallcitys">
        {th_data.Seoul.map(info => (
          <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
            href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
            <button>{info.split('|')[2]}</button>
          </Link>
        ))}
      </div>
    </navi>
  )
  const Gg = (
    <navi>
      <div className="region">
        {area.map((region)=>(
          <Link as={`/theaters/${region[0]}/${region[1]}`}href={{pathname:'/theater_list',query:{areaNum:region[0],theaterNum:region[1]}}}>
            <button>{region[2]}</button>
          </Link>
        ))}
      </div>
      <div className="smallcitys">
        {th_data.Gyeonggi.map(info => (
          <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
            href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
            <button>{info.split('|')[2]}</button>
          </Link>
        ))}
      </div>
    </navi>
  )
  const Ic = (
    <navi>
      <div className="region">
        {area.map((region)=>(
          <Link as={`/theaters/${region[0]}/${region[1]}`}href={{pathname:'/theater_list',query:{areaNum:region[0],theaterNum:region[1]}}}>
            <button>{region[2]}</button>
          </Link>
        ))}
      </div>
      <div className="smallcitys">
        {th_data.Incheon.map(info => (
          <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
            href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
            <button>{info.split('|')[2]}</button>
          </Link>
        ))}
      </div>
    </navi>
  )
  const Dsc = (
    <navi>
      <div className="region">
        {area.map((region)=>(
          <Link as={`/theaters/${region[0]}/${region[1]}`}href={{pathname:'/theater_list',query:{areaNum:region[0],theaterNum:region[1]}}}>
            <button>{region[2]}</button>
          </Link>
        ))}
      </div>
      <div className="smallcitys">
        {th_data.Daejeon_Sejong_Chungcheong.map(info => (
          <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
            href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
            <button>{info.split('|')[2]}</button>
          </Link>
        ))}
      </div>
    </navi>
  )
  const Bg = (
    <navi>
      <div className="region">
        {area.map((region)=>(
          <Link as={`/theaters/${region[0]}/${region[1]}`}href={{pathname:'/theater_list',query:{areaNum:region[0],theaterNum:region[1]}}}>
            <button>{region[2]}</button>
          </Link>
        ))}
      </div>
      <div className="smallcitys">
        {th_data.Busan_Gyeongsangdo.map(info => (
          <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
            href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
            <button>{info.split('|')[2]}</button>
          </Link>
        ))}
      </div>
    </navi>
  )
  const Gj = (
    <navi>
      <div className="region">
        {area.map((region)=>(
          <Link as={`/theaters/${region[0]}/${region[1]}`}href={{pathname:'/theater_list',query:{areaNum:region[0],theaterNum:region[1]}}}>
            <button>{region[2]}</button>
          </Link>
        ))}
      </div>
      <div className="smallcitys">
        {th_data.Gwangju_Jeolla.map(info => (
          <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
            href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
            <button>{info.split('|')[2]}</button>
          </Link>
        ))}
      </div>
    </navi>
  )
  const Gw = (
    <navi>
      <div className="region">
        {area.map((region)=>(
          <Link as={`/theaters/${region[0]}/${region[1]}`}href={{pathname:'/theater_list',query:{areaNum:region[0],theaterNum:region[1]}}}>
            <button>{region[2]}</button>
          </Link>
        ))}
      </div>
      <div className="smallcitys">
        {th_data.Gangwon.map(info => (
          <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
            href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
            <button>{info.split('|')[2]}</button>
          </Link>
        ))}
      </div>
    </navi>
  )
  const Jj = (
    <navi>
      <div className="region">
        {area.map((region)=>(
          <Link as={`/theaters/${region[0]}/${region[1]}`}href={{pathname:'/theater_list',query:{areaNum:region[0],theaterNum:region[1]}}}>
            <button>{region[2]}</button>
          </Link>
        ))}
      </div>
      <div className="smallcitys">
        <Link as={`/theaters/7/6901`}href={{pathname:'/theater_list',query:{areaNum:7,theaterNum:6901}}}><button>제주</button></Link>
      </div>
    </navi>
  )
  const citys_lists=[Su, Gg, Ic, Dsc, Bg, Gj, Gw, Jj]

  return(
    <div>
      <Theater_list_CSS />
      <Header />
      {citys_lists[bigCity]}
      <theater>
        <h2>EGV {locations[smallCity][0]}</h2>
        <div>
          <p>주소 : {locations[smallCity][1]}</p>
        </div>
        <div className="map_img">
          <img src={"/map/"+smallCity+".png"} />
        </div>
        <div className="select_day">
          <div className="tmonth">12월</div>
          <div className="tday">
            <button>화 10</button>
            <button>수 11</button>
            <button>목 12</button>
            <button>금 13</button>
            <button>토 14</button>
            <button>일 15</button>
            <button>월 16</button>
          </div>
        </div>
        <div className="movie_true">
          <table>
            <thead>
              <tr>
                <th className="t_1">영화제목</th><th className="t_2">상영관</th><th>상영시간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>겨울왕국2</td><td>1관</td>
                <td className="ttime">
                  <p>
                    <span>22:88</span>
                    <span>22:88</span>
                    <span>22:88</span>
                    <span>22:88</span>
                    <span>22:88</span>
                    <span>22:88</span>
                    <span>22:88</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>겨울왕국2</td><td>1관</td>
                <td className="ttime">
                  <p>
                    <span>22:88</span>
                    <span>22:88</span>
                    <span>22:88</span>
                    <span>22:88</span>
                    <span>22:88</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </theater>
    </div>
  )
}
Theater_list.getInitialProps= async(res)=>{
  console.log(res.query);
  const {areaNum,theaterNum}=res.query;
  return {
    "areaNum":areaNum,
    "theaterNum":theaterNum
  }
}
Theater_list.defaultProps={
  areaNum:0,
  theaterNum:1372
}
export default Theater_list
