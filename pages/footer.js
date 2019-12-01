import Footer_CSS from '../components/footer_css'
import th_data from '../data/theater'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <Footer_CSS />
      <div class="top">
        <ul>
          <li>
            <h3>EGV 영화관 찾기</h3>
          </li>
          <li>
            <div className="bigc">서울</div>
            <div className="smallc">
              {th_data.Seoul.map(info => (
                <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
                  href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                  <button>{info.split('|')[2]}</button>
                </Link>
              ))}
            </div>
          </li>
          <li>
            <div className="bigc">경기</div>
            <div className="smallc">
              {th_data.Gyeonggi.map(info => (
                <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
                  href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                  <button>{info.split('|')[2]}</button>
                </Link>
              ))}
            </div>
          </li>
          <li>
            <div className="bigc">인천</div>
            <div className="smallc">
              {th_data.Incheon.map(info => (
                <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
                  href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                  <button>{info.split('|')[2]}</button>
                </Link>
              ))}
            </div>
          </li>
          <li>
            <div className="bigc">대전/세종/충청</div>
            <div className="smallc">
              {th_data.Daejeon_Sejong_Chungcheong.map(info => (
                <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
                  href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                  <button>{info.split('|')[2]}</button>
                </Link>
              ))}
            </div>
          </li>
          <li>
            <div className="bigc">부산/경상</div>
            <div className="smallc">
              {th_data.Busan_Gyeongsangdo.map(info => (
                <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
                  href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                  <button>{info.split('|')[2]}</button>
                </Link>
              ))}
            </div>
          </li>
          <li>
            <div className="bigc">광주/전라</div>
            <div className="smallc">
              {th_data.Gwangju_Jeolla.map(info => (
                <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
                  href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                  <button>{info.split('|')[2]}</button>
                </Link>
              ))}
            </div>
          </li>
          <li>
            <div className="bigc">강원</div>
            <div className="smallc">
              {th_data.Gangwon.map(info => (
                <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
                  href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                  <button>{info.split('|')[2]}</button>
                </Link>
              ))}
            </div>
          </li>
          <li>
            <div className="bigc">제주</div>
            <div className="smallc">
              {th_data.Jeju.map(info => (
                <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`}
                  href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                  <button>{info.split('|')[2]}</button>
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <p>logo_name</p>
        <p>DBDB딥 (강동호, 김한수, 박성빈, 박지호, 안한서, 최병익)</p>
      </div>
    </footer>
  )
}

export default Footer
