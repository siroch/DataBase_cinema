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
            서울
            {th_data.Seoul.map(info => (
              <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`} href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                <button>{info.split('|')[2]}</button>
              </Link>
            ))}
          </li>
          <li>
            경기
            {th_data.Gyeonggi.map(info => (
              <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`} 
                href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                <button>{info.split('|')[2]}</button>
              </Link>
            ))}
          </li>
          <li>
            인천
            {th_data.Incheon.map(info => (
              <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`} 
                href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                <button>{info.split('|')[2]}</button>
              </Link>
            ))}
          </li>
          <li>
            대전 | 세종 | 충청
            {th_data.Daejeon_Sejong_Chungcheong.map(info => (
              <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`} 
                href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                <button>{info.split('|')[2]}</button>
              </Link>
            ))}
          </li>
          <li>
            부산 | 경상
            {th_data.Busan_Gyeongsangdo.map(info => (
              <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`} 
                href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                <button>{info.split('|')[2]}</button>
              </Link>
            ))}
          </li>
          <li>
            광주 | 전라
            {th_data.Gwangju_Jeolla.map(info => (
              <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`} 
                href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                <button>{info.split('|')[2]}</button>
              </Link>
            ))}
          </li>
          <li>
            제주
            {th_data.Jeju.map(info => (
              <Link as={`/theaters/${info.split('|')[0]}/${info.split('|')[1]}`} 
                href={{pathname:'/theater_list',query:{areaNum:info.split('|')[0],theaterNum:info.split('|')[1]}}}>
                <button>{info.split('|')[2]}</button>
              </Link>
            ))}
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
