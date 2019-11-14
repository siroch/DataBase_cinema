import Showmovielist_CSS from '../components/showmovielist_css'

const ShowMovieList = () => {
		return(
			<div class="movielist">
				<Showmovielist_CSS />
		    <div class="sort">
		      <button>예매순</button>
		      <button>평점순</button>
		      <button>최신순</button>
		    </div>
		    <div class="leftbutton">
		      <button> [ </button>
		    </div>
		    <div class="rightbutton">
		      <button> ] </button>
		    </div>
		    <div class="list">
		      <div class="slide">
		        <p>img</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div class="slide">
		        <p>img</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div class="slide">
		        <p>img</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div class="slide">
		        <p>img</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div class="slide">
		        <p>img</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div class="slide">
		        <p>img</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div class="slide">
		        <p>img</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		    </div>
		  </div>
	)
}

export default ShowMovieList
