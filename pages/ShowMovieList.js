import Showmovielist_CSS from '../components/showmovielist_css'
import {useState, useEffect} from 'react'

const ShowMovieList = () => {

		const [index, setIndex] = useState(0)
	  useEffect(() => {
			var list_box = document.getElementsByClassName("list") // 스크롤 부분 가져오는거
			var slides = document.getElementsByClassName("slide") // 영화 사진 몇개인지 체크하기 위함
			var acts = document.getElementsByClassName("active") // 엑티브 된 동그라미 가져옴
		  var cirs = document.getElementsByClassName("circle") // 엑티브 안된 동그라미 가져옴
		  if (index > slides.length-3) {setIndex(0)} // 나중에 바꿀 부분 버튼 끝 부분
			if (index < 0) {setIndex(0)} // 나중에 바꿀 부분 버튼 끝 부분
			list_box[0].scroll(260*index,0) // 버튼 누를 때 스크롤 위치 바뀌는 부분
			if(index==0){
				acts[0].classList="circle"
				cirs[0].classList="active"
			}
			else if(index==3){
				acts[0].classList="circle"
				cirs[1].classList="active"
			}
			else if(index==6){
				acts[0].classList="circle"
				cirs[2].classList="active"
			}
		})

		return(
			<div className="movielist">
				<Showmovielist_CSS />
		    <div className="sort">
		      <button>예매순 {index}</button>
		      <button>평점순</button>
		      <button>최신순</button>
		    </div>
		    <div className="leftbutton">
		      <button onClick={() => setIndex(index-1)}>&lt;</button>
		    </div>
		    <div className="rightbutton">
		      <button onClick={() => setIndex(index+1)}>&gt;</button>
		    </div>
		    <div className="list">
		      <div className="slide">
		        <p>img1</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div className="slide">
		        <p>img2</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div className="slide">
		        <p>img3</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div className="slide">
		        <p>img4</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div className="slide">
		        <p>img5</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div className="slide">
		        <p>img6</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div className="slide">
		        <p>img7</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
					<div className="slide">
		        <p>img8</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		      <div className="slide">
		        <p>img9</p>
		        <p>제목</p>
		        <p>감독, 러닝타임, 장르</p>
		        <p>평점:</p>
		      </div>
		    </div>
				<div className="circles">
					<span className="active"></span>
					<span className="circle"></span>
					<span className="circle"></span>
				</div>
		  </div>
	)
}

export default ShowMovieList
