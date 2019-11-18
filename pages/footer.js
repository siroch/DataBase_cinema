import Footer_CSS from '../components/footer_css'

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
            서울  <button class="one">강남</button><button>강남대로(씨티)</button><button>강동</button><button>군자</button><button>동대문</button><button>마곡</button><button>목동</button>
            <button>상봉</button><button>상암월드컵경기장</button><button>성수</button><button>센트럴</button><button>송파파크하비오</button><button>신촌</button><button>은평</button>
            <button>이수</button><button>창동</button><button>코엑스</button><button>홍대</button>
          </li>
          <li>
            <button class="sec">화곡</button><button>ARTNINE</button>
          </li>
          <li>
            경기 <button class="one">고양스타필드</button><button>김포한강신도시</button><button>남양주</button><button>동탄</button><button>미사강변</button><button>백석</button><button>별내</button>
            <button>부천스타필드시티</button><button>분당</button><button>수원</button><button>수원남문</button><button>시흥배곧</button><button>안산중앙</button><button>양주</button>
            <button>영통</button><button>오산</button>
          </li>
          <li>
            <button class="sec">용인테크노밸리</button><button>의정부 민락</button><button>일산일산벨라시타</button><button>킨텍스</button><button>파주금촌</button><button>파주운정</button>
            <button>파주출판도시</button><button>평택</button><button>하남스타필드</button>
          </li>
          <li>
            인천 <button class="one">검단</button><button>송도</button><button>영종</button><button>인천</button><button>논현</button><button>청라</button><button>청라지젤</button>
          </li>
          <li>
            대전 | 세종 | 충청
            <button class="tri">공주</button><button>대전</button><button>대전중앙로</button><button>세종</button><button>오창</button><button>파주운정</button>
            <button>제천</button><button>진천</button><button>천안</button><button>청주충북대</button><button>충주</button><button>홍성내포</button>
          </li>
          <li>
            부산 | 경상
            <button class="dou">거창</button><button>경북도청</button><button>경산하양</button><button>경주</button><button>구미강동</button><button>김천</button>
            <button>남포항</button><button>대구(칠성로)</button><button>대구 신세계</button><button>대구 이시아</button><button>덕천</button><button>마산</button>
            <button>문경</button><button>부산극장</button><button>부산대</button><button>북대구(칠곡)</button>
          </li>
          <li>
            <button class="sec">사천</button><button>삼천포</button><button>양산</button><button>양산라피에스타</button><button>울산</button><button>정관</button>
            <button>창원</button><button>해운대(장산)</button>
          </li>
          <li>
            광주 | 전라
            <button class="dou">광주</button><button>상무</button><button>광주하남</button><button>남원</button><button>목포</button><button>목포하당(포르모)</button>
            <button>송천</button><button>순천</button><button>여수</button><button>여수용천</button><button>전대(광주)</button><button>전주(객사)</button>
            <button>첨단(광주)</button>
          </li>
          <li>강원 <button class="one">남춘천</button><button>속초</button><button>원주</button><button>원주센트럴</button> </li>
          <li>제주 <button class="one">제주</button> </li>
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
