import Header from './Header'
import Footer from './footer'
import Movie_list_CSS from '../components/movie_list_css'
import {useState} from 'react'
import Link from 'next/link'

import data from '../data/movie_info'

const Movie_list = () => {

  return(
    <div>
    	<Movie_list_CSS />
      <Header />
      <div class="movie_list">
       	<h2>영화 목록</h2>
       	<a>예매순</a>
       	|
       	<a>평점순</a>
     	</div>
			<div class="sort_movie_info">
				{data.map(movies => (
					<div className={"info_movie"}>
						<h2>{movies.movie_info.rank}</h2>
						<Link href={{ pathname: "/movie_details", query: { movieCd: movies.movie_info.movieCd } }}>
							<img src={movies.movie_info.picture}/>
						</Link>
						<div class={"information"}>
							<div class={"movie_name"}>
								<span>{movies.movie_info.ageRestriction}</span> 
								<Link href={{ pathname: "/movie_details", query: { movieCd: movies.movie_info.movieCd } }}>
									<a>{movies.movie_info.movieNm}</a>
								</Link>
								<p>예매율 : ??% | 평점 : ?? | 개봉일 : {movies.movie_info.openDt}</p>
								<Link href={{ pathname: "/movie_details", query: { movieCd: movies.movie_info.movieCd } }}>
									<button>상세정보보기</button>
								</Link>
							</div>
							<div className={"reserve_button"}>
								<button>예매하기</button>
							</div>
						</div>
					</div>
				))}
			</div>
      <Footer />
    </div>
  )
}

export default Movie_list
