import Header from './Header'
import Footer from './footer'
import Movie_details_CSS from '../components/movie_details_css'
import axios from 'axios'

const Movie_details = (props) => (
    <div>
      <Movie_details_CSS />
      <Header />
      <div className="details">
        <h1>영화 상세</h1>
        <hr />
        <div className="information">
          <div className="movie_info">
            <h2>{props.movies.movieNm}</h2>
            <p>{props.movies.movieNmEn}</p>
            <br/>
            <strong>예매율</strong> 5.8% | <strong>평점</strong> 7.25
            <hr/>
            <br/>
            <strong>감독</strong>: {props.movies.directors[0].peopleNm} /<strong>배우</strong>: {props.movies.actor}
            <br/>
            <br/>
            <strong>장르</strong>: {props.movies.genreAlt}/ <strong>연령</strong>: {props.movies.ageRestriction}/
            <strong> 국가</strong>: {props.movies.nationAlt}/ <strong>러닝타임</strong>: {props.movies.runningTime}/
            <strong> 개봉</strong>: {props.movies.openDt}
            <br/>
            <br/>
            <strong>타입</strong>: {props.movies.showTypes.map(info => ( info.showTypeGroupNm )) + " "}
          </div>
          <img src={props.movies.picture} alt="poster"/>
        </div>
        <hr />
        <div className="Preview">
          <div className="plot">
            <h2>줄거리</h2>
            <p>
              <strong>내 마법의 힘은 어디서 왔을까?</strong><br/>
              <strong>나를 부르는 저 목소리는 누구지?</strong><br/>
              어느 날 부턴가 의문의 목소리가 엘사를 부르고, 평화로운 아렌델 왕국을 위협한다.<br/>
              트롤은 모든 것은 과거에서 시작되었음을 알려주며 엘사의 힘의 비밀과 진실을 찾아 떠나야한다고 조언한다.<br/><br/>
              위험에 빠진 아렌델 왕국을 구해야만 하는 엘사와 안나는 숨겨진 과거의 진실을 찾아<br/>
              크리스토프, 올라프 그리고 스벤과 함께 위험천만한 놀라운 모험을 떠나게 된다.<br/>
              자신의 힘을 두려워했던 엘사는 이제 이 모험을 헤쳐나가기에 자신의 힘이 충분하다고 믿어야만 하는데…<br/><br/>
              두려움을 깨고 새로운 운명을 만나다!
            </p>
          </div>
          <iframe src="https://www.youtube.com/embed/alSU8mnZCaM" allowfullscreen></iframe>
        </div>
        <hr />
        <div className="review">
          <form action="" method="POST">
            <fieldset>
              <div className="score">
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
              <div className="write">
                <textarea title="리뷰" placeholder=" * 영화평은 로그인후 입력가능합니다."></textarea>
                <input type="submit" value="제출"/>
              </div>
            </fieldset>
          </form>
          <div className="read">
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

Movie_details.getInitialProps = async (res) => {
  const {movieCd} = res.query;
  const response = await axios.get(`http://localhost:3000/api/data/movies/${movieCd}`);
  return {
    movies: response.data
  };
};

export default Movie_details
