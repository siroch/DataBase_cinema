import Footer_CSS from '../components/footer_css'

const Footer = () => {
  return (
    <footer>
      <Footer_CSS />
      <div class="top">
        <h3>EGV 영화관 찾기</h3>
        <ul>
          <li>서울 : <a>강남</a><a>강동</a><a>군자</a><a>동대문</a></li>
          <li>경기 : <a>안산</a><a>수원</a></li>
          <li>인천 : <a>송도</a></li>
          <li>광주 : <a>광주</a></li>
          <li>부산 : <a>부산</a></li>
          <li>제주 : <a>제주</a></li>
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
