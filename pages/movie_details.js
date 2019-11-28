import Header from './Header'
import Footer from './footer'
import Movie_details_CSS from '../components/movie_details_css'


const Movie_details = () => (
    <div>
      <Movie_details_CSS />
      <Header />
      <div class="details">
        <h1>영화 상세</h1>
        <hr />
        <div class="information">
          <div class="movie_info">
            <h2>블랙머니</h2>
            <p>Black Money</p>
            <br/>
            <strong>예매율</strong> 5.8% | <strong>평점</strong> 7.25
            <hr/>
            <br/>
            <strong>감독</strong>: 정지영 /<strong>프로듀서</strong>: 이종호, 이태관 /<strong>배우</strong>: 조진웅, 이하늬
            <br/>
            <br/>
            <strong>장르</strong>: 범죄, 드라마/ <strong>연령</strong>: 12세 이상/ <strong>국가</strong>: 한국/ <strong>러닝타임</strong>: 113분
            <strong>개봉</strong>: 2019.11.13
            <br/>
            <br/>
            <strong>타입</strong>: 2D
          </div>
          <img src="movie/blackmoney.jpg" alt="poster"/>
        </div>
        <hr />
        <div class="Preview">
          <div class="plot">
            <h2>줄거리</h2>
            <p>
            &nbsp;&nbsp;
            고발은 의무! 수사는 직진! 할말은 하고 깔 건 깐다!
            일명 서울지검 ‘막프로’! 검찰 내에서 거침없이 막 나가는 문제적 검사로
            이름을 날리는 ‘양민혁’은 자신이 조사를 담당한 피의자가 자살하는 사건으로 인해
            하루 아침에 벼랑 끝에 내몰린다. 억울한 누명을 벗기 위해 내막을 파헤치던 그는
            피의자가 대한은행 헐값 매각사건의 중요 증인이었음을 알게 된다.
            근거는 의문의 팩스 5장! 자산가치 70조 은행이 1조 7천억원에 넘어간
            희대의 사건 앞에서 ‘양민혁’ 검사는 금융감독원, 대형 로펌, 해외펀드 회사가 뒤얽힌
            거대한 금융 비리의 실체와 마주하게 되는데…
            대한민국 최대의 금융스캔들, 사건은 아직 끝나지 않았다!
            </p>
          </div>
          <iframe src="https://www.youtube.com/embed/alSU8mnZCaM" allowfullscreen></iframe>
        </div>
        <hr />
        <div class="review">
          <form action="" method="POST">
            <fieldset>
              <div class="score">
                평점
                <br/>
                <select name="grade">
          				<option>1점</option>
          				<option>2점</option>
          				<option>3점</option>
          				<option>4점</option>
          				<option>5점</option>
                  <option>6점</option>
          				<option>7점</option>
          				<option>8점</option>
          				<option>9점</option>
          				<option>10점</option>
          			</select>
              </div>
              <div class="write">
                <textarea title="리뷰" placeholder=" * 영화평은 로그인후 입력가능합니다."></textarea>
                <input type="submit" value="제출"/>
              </div>
            </fieldset>
          </form>
          <div class="read">
            <ul>
              <li>
                <h3>Giannis</h3>
                (9 점) 19.11.26
                <p>이 영화 몰입감이 장난이 아니네여!!!</p>
              </li>
              <li>
                <h3>감스트</h3>
                (7 점) 19.11.16
                <p>짜쓰~~!!!</p>
              </li>
              <li>
                <h3>Tonali</h3>
                (8 점) 19.11.14
                <p>귣귣귣!!!</p>
              </li>
              <li>
                <h3>williams</h3>
                (5 점) 19.11.13
                <p>This movie is very boring....</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
)

export default Movie_details
