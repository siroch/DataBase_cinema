import Header from './Header'
import Footer from './footer'
import Movie_details_CSS from '../components/movie_details_css'
import axios from 'axios'

const Movie_details = (props) => {
  const postRating = () => {
    const d = new Date();
    const rate = document.getElementById("rating").value;
    const curTime = String(d.getFullYear()) + "-" + String((d.getMonth() + 1)) + "-" + String(d.getDate()) + " "
      + String(d.getHours()) + ":" + String(d.getMinutes()) + ":" + String(d.getSeconds());
    axios.post("/api/data/postReview", {
      movieCd: props.movies.movieCd,
      user: sessionStorage.getItem('userId'),
      rate: rate,
      date: curTime
    });
    alert(`평점이 등록되었습니다!\n평점: ${rate}`);
  }

  return (
    <div>
      <Movie_details_CSS/>
      <Header/>
      <div className="details">
        <h1>영화 상세 정보</h1>
        <hr/>
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
            <strong>타입</strong>: {props.movies.showTypes.map(info => (info.showTypeGroupNm)) + " "}
            <br/>
            <br/>
            <strong>평점 입력</strong>: <input id={"rating"} type="number" min="0" max="10" step="0.1"/> <input onClick={postRating} type="submit" value="제출"/>
          </div>
          <img src={props.movies.picture} alt="poster"/>
        </div>
        <hr/>
        <div className="Preview">
          <div className="plot">
            <h2>줄거리</h2>
            <p>
              {props.movies.plot.map(info => (
                <p>{info}</p>
              ))}
            </p>
          </div>
          <iframe src={props.movies.trailer} allowFullScreen></iframe>
        </div>
        <hr/>
      </div>
      <Footer/>
    </div>
  )
}

Movie_details.getInitialProps = async (res) => {
  const {movieCd} = res.query;
  const response = await axios.get(`/api/data/movies/${movieCd}`);
  return {
    movies: response.data
  };
};

export default Movie_details
