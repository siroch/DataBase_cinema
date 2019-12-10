import Showmovielist_CSS from '../components/showmovielist_css'
import {useState, useEffect} from 'react'
import Link from "next/link"
import data from '../data/movie_info'
import sorted from '../data/getInfo'

const ShowMovieList = () => {

		const [index, setIndex] = useState(0)
		const [isSorted, setSort] = useState(0)

		function leftHandler(){ if(index>0) setIndex(index-1) }
		function rightHandler(){ if(index<2) setIndex(index+1) }

	  useEffect(() => {
			var bnts = document.getElementsByTagName("button") // 버튼 가져오기
			var list_box = document.getElementsByClassName("list") // 스크롤 부분 가져오는거
			var slides = document.getElementsByClassName("slide") // 영화 사진 몇개인지 체크하기 위함
			var acts = document.getElementsByClassName("active") // 엑티브 된 동그라미 가져옴
		  var cirs = document.getElementsByClassName("circle") // 엑티브 안된 동그라미 가져옴
			list_box[0].scroll(790*index,0) // 버튼 누를 때 스크롤 위치 바뀌는 부분
			if(index==0){
				acts[0].classList="circle"
				cirs[0].classList="active"
				bnts[3].disabled=true
			}
			else if(index==1){
				acts[0].classList="circle"
				cirs[1].classList="active"
				bnts[3].disabled=false
				bnts[4].disabled=false
			}
			else if(index==2){
				acts[0].classList="circle"
				cirs[2].classList="active"
				bnts[4].disabled=true
			}
			var age = document.getElementsByClassName("ages")
	    for(var i=0; i<age.length; i++){
				age[i].classList.remove('fifteen')
				age[i].classList.remove('twelve')
				age[i].classList.remove('allage')
				age[i].classList.remove('nineteen')
	      if(age[i].textContent === "19" || age[i].textContent === "청불"){
					age[i].classList.add('nineteen')
					age[i].textContent = "청불"
				}
	      else if(age[i].textContent === "15"){ age[i].classList.add('fifteen') }
	      else if(age[i].textContent === "12"){ age[i].classList.add('twelve') }
	      else if(age[i].textContent === "전체" || age[i].textContent === ""){
					age[i].classList.add('allage')
					age[i].textContent = "전체"
				}
	    }
		})

		const rankMovie = (
			<div className="list">
				{data.map(movies => (
					<div className={'slide'}>
						<Link href={{ pathname: "/movie_details", query: { movieCd: movies.movie_info.movieCd } }}>
							<img src={movies.movie_info.picture} alt={movies.movie_info.movieNm}/>
						</Link>
						<Link href={{ pathname: "/movie_details", query: { movieCd: movies.movie_info.movieCd } }}>
							<p><span className="ages">{movies.movie_info.ageRestriction}</span> {movies.movie_info.movieNm}</p>
						</Link>
					</div>
				))}
			</div>
		)

		const latestMovie = (
			<div className={"list"}>
				{sorted.map(movies => (
					<div className={'slide'}>
						<Link href={{ pathname: "/movie_details", query: { movieCd: movies.movie_id } }}>
							<img src={movies.picture} alt={movies.movie_title}/>
						</Link>
						<Link href={{ pathname: "/movie_details", query: { movieCd: movies.movie_id } }}>
							<p><span className="ages">{movies.age_limit}</span> {movies.movie_title}</p>
						</Link>
					</div>
				))}
			</div>
		)

		const reservationMovie = (
			<div className={"list"}>
				<p>???</p>
			</div>
		)

		const orderMovie = [rankMovie, latestMovie, reservationMovie]

		return(
			<div className="movielist">
				<Showmovielist_CSS />
		    <div className="sort">
		      <button onClick={() => setSort(0)}>인기순</button>
		      <button onClick={() => setSort(1)}>최신순</button>
		      <button onClick={() => setSort(2)}>예매순</button>
		    </div>
		    <div className="leftbutton">
		      <button onClick={() => leftHandler()}>&lsaquo;</button>
		    </div>
		    <div className="rightbutton">
		      <button onClick={() => rightHandler()}>&rsaquo;</button>
		    </div>
				{orderMovie[isSorted]}
				<div className="circles">
					<span className="active"></span>
					<span className="circle"></span>
					<span className="circle"></span>
				</div>
		  </div>
	)
}

export default ShowMovieList
