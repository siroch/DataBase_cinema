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
              {props.movies.plot.map(info => (
                <p>{info}</p>
              ))}
            </p>
          </div>
          <iframe src={props.movies.trailer} allowfullscreen></iframe>
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
  const response = await axios.get(`/api/data/movies/${movieCd}`);
  return {
    movies: response.data
  };
};

export default Movie_details
