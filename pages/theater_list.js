import Header from './Header'
import Footer from './footer'
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
        <Link as={`/theaters/0/1372`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1372}}}><button>강남</button></Link>
        <Link as={`/theaters/0/1359`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1359}}}><button>강남대로(씨티)</button></Link>
        <Link as={`/theaters/0/1341`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1341}}}><button>강동</button></Link>
        <Link as={`/theaters/0/1431`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1431}}}><button>군자</button></Link>
        <Link as={`/theaters/0/1003`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1003}}}><button>동대문</button></Link>
        <Link as={`/theaters/0/1572`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1572}}}><button>마곡</button></Link>
        <Link as={`/theaters/0/1581`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1581}}}><button>목동</button></Link>
        <Link as={`/theaters/0/1311`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1311}}}><button>상봉</button></Link>
        <Link as={`/theaters/0/1211`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1211}}}><button>상암월드컵경기장</button></Link>
        <Link as={`/theaters/0/1331`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1331}}}><button>성수</button></Link>
        <Link as={`/theaters/0/1371`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1371}}}><button>센트럴</button></Link>
        <Link as={`/theaters/0/1381`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1381}}}><button>송파파크하비오</button></Link>
        <Link as={`/theaters/0/1202`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1202}}}><button>신촌</button></Link>
        <Link as={`/theaters/0/1221`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1221}}}><button>은평</button></Link>
        <Link as={`/theaters/0/1561`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1561}}}><button>이수</button></Link>
        <Link as={`/theaters/0/1321`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1321}}}><button>창동</button></Link>
        <Link as={`/theaters/0/1351`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1351}}}><button>코엑스</button></Link>
        <Link as={`/theaters/0/1212`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1212}}}><button>홍대</button></Link>
        <Link as={`/theaters/0/1571`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1571}}}><button>화곡</button></Link>
        <Link as={`/theaters/0/1562`}href={{pathname:'/theater_list',query:{areaNum:0,theaterNum:1562}}}><button>ARTNINE</button></Link>
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
        <Link as={`/theaters/1/4121`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4121}}}><button>고양스타필드</button></Link>
        <Link as={`/theaters/1/4152`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4152}}}><button>김포한강신도시</button></Link>
        <Link as={`/theaters/1/4721`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4721}}}><button>남양주</button></Link>
        <Link as={`/theaters/1/4451`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4451}}}><button>동탄</button></Link>
        <Link as={`/theaters/1/4652`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4652}}}><button>미사강변</button></Link>
        <Link as={`/theaters/1/4113`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4113}}}><button>백석</button></Link>
        <Link as={`/theaters/1/4722`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4722}}}><button>별내</button></Link>
        <Link as={`/theaters/1/4221`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4221}}}><button>부천스타필드시티</button></Link>
        <Link as={`/theaters/1/4631`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4631}}}><button>분당</button></Link>
        <Link as={`/theaters/1/4411`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4411}}}><button>수원</button></Link>
        <Link as={`/theaters/1/4421`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4421}}}><button>수원남문</button></Link>
        <Link as={`/theaters/1/4291`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4291}}}><button>시흥배곧</button></Link>
        <Link as={`/theaters/1/4253`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4253}}}><button>안산중앙</button></Link>
        <Link as={`/theaters/1/4821`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4821}}}><button>양주</button></Link>
        <Link as={`/theaters/1/4431`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4431}}}><button>영통</button></Link>
        <Link as={`/theaters/1/4471`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4471}}}><button>오산</button></Link>
        <Link as={`/theaters/1/4462`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4462}}}><button>용인테크노밸리</button></Link>
        <Link as={`/theaters/1/4804`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4804}}}><button>의정부 민락</button></Link>
        <Link as={`/theaters/1/4111`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4111}}}><button>일산</button></Link>
        <Link as={`/theaters/1/4104`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4104}}}><button>일산벨라시타</button></Link>
        <Link as={`/theaters/1/4112`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4112}}}><button>킨텍스</button></Link>
        <Link as={`/theaters/1/4132`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4132}}}><button>파주금촌</button></Link>
        <Link as={`/theaters/1/4115`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4115}}}><button>파주운정</button></Link>
        <Link as={`/theaters/1/4131`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4131}}}><button>파주출판도시</button></Link>
        <Link as={`/theaters/1/4501`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4501}}}><button>평택</button></Link>
        <Link as={`/theaters/1/4651`}href={{pathname:'/theater_list',query:{areaNum:1,theaterNum:4651}}}><button>하남스타필드</button></Link>
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
        <Link as={`/theaters/2/4041`}href={{pathname:'/theater_list',query:{areaNum:2,theaterNum:4041}}}><button>검단</button></Link>
        <Link as={`/theaters/2/4062`}href={{pathname:'/theater_list',query:{areaNum:2,theaterNum:4062}}}><button>송도</button></Link>
        <Link as={`/theaters/2/4001`}href={{pathname:'/theater_list',query:{areaNum:2,theaterNum:4001}}}><button>영종</button></Link>
        <Link as={`/theaters/2/4051`}href={{pathname:'/theater_list',query:{areaNum:2,theaterNum:4051}}}><button>인천논현</button></Link>
        <Link as={`/theaters/2/4042`}href={{pathname:'/theater_list',query:{areaNum:2,theaterNum:4042}}}><button>청라</button></Link>
        <Link as={`/theaters/2/4043`}href={{pathname:'/theater_list',query:{areaNum:2,theaterNum:4043}}}><button>청라지젤</button></Link>
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
        <Link as={`/theaters/3/3141`}href={{pathname:'/theater_list',query:{areaNum:3,theaterNum:3141}}}><button>공주</button></Link>
        <Link as={`/theaters/3/3021`}href={{pathname:'/theater_list',query:{areaNum:3,theaterNum:3021}}}><button>대전</button></Link>
        <Link as={`/theaters/3/3011`}href={{pathname:'/theater_list',query:{areaNum:3,theaterNum:3011}}}><button>대전중앙로</button></Link>
        <Link as={`/theaters/3/3391`}href={{pathname:'/theater_list',query:{areaNum:3,theaterNum:3391}}}><button>세종</button></Link>
        <Link as={`/theaters/3/3631`}href={{pathname:'/theater_list',query:{areaNum:3,theaterNum:3631}}}><button>오창</button></Link>
        <Link as={`/theaters/3/3901`}href={{pathname:'/theater_list',query:{areaNum:3,theaterNum:3901}}}><button>제천</button></Link>
        <Link as={`/theaters/3/3651`}href={{pathname:'/theater_list',query:{areaNum:3,theaterNum:3651}}}><button>진천</button></Link>
        <Link as={`/theaters/3/3301`}href={{pathname:'/theater_list',query:{areaNum:3,theaterNum:3301}}}><button>천안</button></Link>
        <Link as={`/theaters/3/3611`}href={{pathname:'/theater_list',query:{areaNum:3,theaterNum:3611}}}><button>청주충북대</button></Link>
        <Link as={`/theaters/3/3801`}href={{pathname:'/theater_list',query:{areaNum:3,theaterNum:3801}}}><button>충주</button></Link>
        <Link as={`/theaters/3/3501`}href={{pathname:'/theater_list',query:{areaNum:3,theaterNum:3501}}}><button>홍성내포</button></Link>
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
        <Link as={`/theaters/4/6701`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6701}}}><button>거창</button></Link>
        <Link as={`/theaters/4/7602`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:7602}}}><button>경북도청</button></Link>
        <Link as={`/theaters/4/7122`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:7122}}}><button>경산하양</button></Link>
        <Link as={`/theaters/4/7801`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:7801}}}><button>경주</button></Link>
        <Link as={`/theaters/4/7303`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:7303}}}><button>구미강동</button></Link>
        <Link as={`/theaters/4/7401`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:7401}}}><button>김천</button></Link>
        <Link as={`/theaters/4/7901`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:7901}}}><button>남포항</button></Link>
        <Link as={`/theaters/4/7022`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:7022}}}><button>대구(칠성로)</button></Link>
        <Link as={`/theaters/4/7011`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:7011}}}><button>대구 신세계</button></Link>
        <Link as={`/theaters/4/7012`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:7012}}}><button>대구 이시아</button></Link>
        <Link as={`/theaters/4/6161`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6161}}}><button>덕천</button></Link>
        <Link as={`/theaters/4/6312`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6312}}}><button>마산</button></Link>
        <Link as={`/theaters/4/7451`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:7451}}}><button>문경</button></Link>
        <Link as={`/theaters/4/6001`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6001}}}><button>부산극장</button></Link>
        <Link as={`/theaters/4/6906`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6906}}}><button>부산대</button></Link>
        <Link as={`/theaters/4/7021`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:7021}}}><button>북대구(칠곡)</button></Link>
        <Link as={`/theaters/4/6641`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6641}}}><button>사천</button></Link>
        <Link as={`/theaters/4/6642`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6642}}}><button>삼천포</button></Link>
        <Link as={`/theaters/4/6261`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6261}}}><button>양산</button></Link>
        <Link as={`/theaters/4/6262`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6262}}}><button>양산라피에스타</button></Link>
        <Link as={`/theaters/4/6811`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6811}}}><button>울산</button></Link>
        <Link as={`/theaters/4/6191`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6191}}}><button>정관</button></Link>
        <Link as={`/theaters/4/6421`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6421}}}><button>창원</button></Link>
        <Link as={`/theaters/4/6121`}href={{pathname:'/theater_list',query:{areaNum:4,theaterNum:6121}}}><button>해운대(장산)</button></Link>
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
        <Link as={`/theaters/5/5021`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5021}}}><button>광주상무</button></Link>
        <Link as={`/theaters/5/5061`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5061}}}><button>광주하남</button></Link>
        <Link as={`/theaters/5/5901`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5901}}}><button>남원</button></Link>
        <Link as={`/theaters/5/5301`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5301}}}><button>목포</button></Link>
        <Link as={`/theaters/5/5302`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5302}}}><button>목포하당(포르모)</button></Link>
        <Link as={`/theaters/5/5612`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5612}}}><button>송천</button></Link>
        <Link as={`/theaters/5/5401`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5401}}}><button>순천</button></Link>
        <Link as={`/theaters/5/5551`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5551}}}><button>여수</button></Link>
        <Link as={`/theaters/5/5552`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5552}}}><button>여수용천</button></Link>
        <Link as={`/theaters/5/5001`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5001}}}><button>전대(광주)</button></Link>
        <Link as={`/theaters/5/5063`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5063}}}><button>전주(객사)</button></Link>
        <Link as={`/theaters/5/5064`}href={{pathname:'/theater_list',query:{areaNum:5,theaterNum:5064}}}><button>첨단(광주)</button></Link>
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
        <Link as={`/theaters/6/2001`}href={{pathname:'/theater_list',query:{areaNum:6,theaterNum:2001}}}><button>남춘천</button></Link>
        <Link as={`/theaters/6/2171`}href={{pathname:'/theater_list',query:{areaNum:6,theaterNum:2171}}}><button>속초</button></Link>
        <Link as={`/theaters/6/2201`}href={{pathname:'/theater_list',query:{areaNum:6,theaterNum:2201}}}><button>원주</button></Link>
        <Link as={`/theaters/6/2202`}href={{pathname:'/theater_list',query:{areaNum:6,theaterNum:2202}}}><button>원주센트럴</button></Link>
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
        <h2>EGV ({smallCity})</h2>
        <div>
          <p>주소 : (ex)경기도 안양시 만안구 안양동 ---- xx건물 x층)</p>
        </div>
        <div className="map_img">
          <img src="/store/combo1.jpg" alt="combo1" />
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
