import Header from './Header'
import Footer from './footer'
import Movie_list_CSS from '../components/movie_list_css'
import {useState} from 'react'

import data from '../data/movie_info'

const Movie_list = (props) => {

	const [movie_, setMovie] = useState(true)

	const reserve = (
		<div class="sort_movie_info">
			{props.data.map(movies => (
				<div className={"info_movie"}>
					<h2>{movies.movie_info.rank}</h2>
					<img src={movies.movie_info.picture}/>
					<div class={"information"}>
						<div class={"movie_name"}>
							<p>({movies.movie_info.ageRestriction}) {movies.movie_info.movieNm}</p>
							<p>예매율 : ??% | 평점 : ?? | 개봉일 : {movies.movie_info.openDt}</p>
						</div>
						<div className={"reserve_button"}>
							<div>
								<p>줄거리</p>
								<p>줄거리</p>
								<p>줄거리</p>
							</div>
							<button>예매하기</button>
						</div>
					</div>
				</div>
			))}
		</div>
	)
	
	const review = (
		<div class="sort_movie_info">
			<div class="info_movie">
				<h2>1</h2>
				<img src="/movie/blackmoney.jpg" alt="blackmoney" />
				<div class="information">
					<div class="movie_name">
						<p>(12세) 블랙머니</p>
						<p>예매율 : 7.5% | 평점 : 5 | 개봉일 : 2019.09.01</p>
					</div>
					<div class="reserve_button">
						<div>
							<p>줄거리</p>
							<p>줄거리</p>
							<p>줄거리</p>
						</div>
						<button>예매하기</button>
					</div>
				</div>
			</div>
			<div class="info_movie">
				<h2>2</h2>
				<img src="/movie/blackmoney.jpg" alt="blackmoney" />
				<div class="information">
					<div class="movie_name">
						<p>(12세) 블랙머니</p>
						<p>예매율 : 8.3% | 평점 : 4.9 | 개봉일 : 2019.09.01</p>
					</div>
					<div class="reserve_button">
						<div>
							<p>줄거리</p>
							<p>줄거리</p>
							<p>줄거리</p>
						</div>
						<button>예매하기</button>
					</div>
				</div>
			</div>
			<div class="info_movie">
				<h2>3</h2>
				<img src="/movie/blackmoney.jpg" alt="blackmoney" />
				<div class="information">
					<div class="movie_name">
						<p>(12세) 블랙머니</p>
						<p>예매율 : 7% | 평점 : 4.9 | 개봉일 : 2019.09.01</p>
					</div>
					<div class="reserve_button">
						<div>
							<p>줄거리</p>
							<p>줄거리</p>
							<p>줄거리</p>
						</div>
						<button>예매하기</button>
					</div>
				</div>
			</div>
			<div class="info_movie">
				<h2>4</h2>
				<img src="/movie/blackmoney.jpg" alt="blackmoney" />
				<div class="information">
					<div class="movie_name">
						<p>(12세) 블랙머니</p>
						<p>예매율 : 10.5% | 평점 : 4.8 | 개봉일 : 2019.09.01</p>
					</div>
					<div class="reserve_button">
						<div>
							<p>줄거리</p>
							<p>줄거리</p>
							<p>줄거리</p>
						</div>
						<button>예매하기</button>
					</div>
				</div>
			</div>
			<div class="info_movie">
				<h2>5</h2>
				<img src="/movie/blackmoney.jpg" alt="blackmoney" />
				<div class="information">
					<div class="movie_name">
						<p>(12세) 블랙머니</p>
						<p>예매율 : 10.1% | 평점 : 4.8 | 개봉일 : 2019.09.01</p>
					</div>
					<div class="reserve_button">
						<div>
							<p>줄거리</p>
							<p>줄거리</p>
							<p>줄거리</p>
						</div>
						<button>예매하기</button>
					</div>
				</div>
			</div>
			<div class="info_movie">
				<h2>6</h2>
				<img src="/movie/blackmoney.jpg" alt="blackmoney" />
				<div class="information">
					<div class="movie_name">
						<p>(12세) 블랙머니</p>
						<p>예매율 : 10% | 평점 : 4.8 | 개봉일 : 2019.09.01</p>
					</div>
					<div class="reserve_button">
						<div>
							<p>줄거리</p>
							<p>줄거리</p>
							<p>줄거리</p>
						</div>
						<button>예매하기</button>
					</div>
				</div>
			</div>
			<div class="info_movie">
				<h2>7</h2>
				<img src="/movie/blackmoney.jpg" alt="blackmoney" />
				<div class="information">
					<div class="movie_name">
						<p>(12세) 블랙머니</p>
						<p>예매율 : 9.3% | 평점 : 4.8 | 개봉일 : 2019.09.01</p>
					</div>
					<div class="reserve_button">
						<div>
							<p>줄거리</p>
							<p>줄거리</p>
							<p>줄거리</p>
						</div>
						<button>예매하기</button>
					</div>
				</div>
			</div>
			<div class="info_movie">
				<h2>8</h2>
				<img src="/movie/blackmoney.jpg" alt="blackmoney" />
				<div class="information">
					<div class="movie_name">
						<p>(12세) 블랙머니</p>
						<p>예매율 : 9% | 평점 : 4.8 | 개봉일 : 2019.09.01</p>
					</div>
					<div class="reserve_button">
						<div>
							<p>줄거리</p>
							<p>줄거리</p>
							<p>줄거리</p>
						</div>
						<button>예매하기</button>
					</div>
				</div>
			</div>
		</div>
	)

  return(
    <div>
    	<Movie_list_CSS />
      <Header />

      <div class="movie_list">
       	<h2>영화 목록</h2>
       	<a onClick={() => setMovie(true)}>예매순</a>
       	|
       	<a onClick={() => setMovie(false)}>평점순</a>
     	</div>
     	{ movie_ ? reserve : review }

      <Footer />
    </div>
  )
}

Movie_list.getInitialProps = async () => {
	return {
		data: data
	}
}

export default Movie_list
