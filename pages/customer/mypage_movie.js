import Mypage from './mypage'
import Mypage_CSS from '../../components/mypage_css'
import {useState, useEffect} from 'react'
import th_data from '../../data/api/_1121.json'
import location from '../../data/location.json'
import Axios from 'axios'

const Mypage_movie = () => {
	const [movies, setMovies] = useState(true)
	const [movieid, getMovieid] = useState('');
	const [theater_location, getTheaterLocation] = useState('');
	const [screen_num , getScreenNum] = useState('');
	const [reserve_id, getReserveId] = useState('');
	const [seatinfo, getSeatInfo] = useState([]);
	const [time, getTime] = useState('');
	const [src, getSrc] = useState('');
	
	useEffect(() => {
		Axios.
		get("/api/auth/getusermovie/" + sessionStorage.getItem("userId"))
		.then(function(res) {
			console.log(th_data[res.data.movie_id]);
			getMovieid(th_data[res.data.movie_id].movieNm);
			getTheaterLocation(location[res.data.theater_id][0]);
			getScreenNum(res.data.screen_num);
			getSeatInfo(String(res.data.seat_info).split('|'));
			getReserveId(res.data.reserve_id);
			getTime(res.data.show_date);
			getSrc(th_data[res.data.movie_id].picture);
		})
		.catch(function(res) {
			
		})
		
	}, [])
	const res = (
		<div>
			<div className="head2">
				<h2>예매 정보</h2>
			</div>
			<div className="user_info">
				<img src={src} alt="blackmoney" />
				<table className="type05">
					<tr>
	    			<th scope="row">영화 제목</th>
					<td>{movieid}</td>
					</tr>
					<tr>
	    			<th scope="row">지점</th>
					<td>{theater_location}</td>
					</tr>
					<tr>
	    			<th scope="row">상영관 및 좌석</th>
					<td>{String(screen_num) + '관 ' + String(seatinfo)}</td>
					</tr>
					<tr>
	    			<th scope="row">상영시간</th>
					<td>{String(time).substring(0, 4) + "년 " + String(time).substring(4, 6) + "월 " + String(time).substring(6, 8) + "일 " + String(time).substring(8, 10) + "시 " + String(time).substring(10, 12) + "분"}</td>
					</tr>
					<tr>
	    			<th scope="row">예매번호</th>
					<td>{reserve_id}</td>
					</tr>
					{/* <tr>
	    			<th scope="row">영화정보</th>
	    			<td>예매율:5% | 평점:5</td>
					</tr> */}
				</table>
			</div>
			{/* <div className="edit_rs_movie">
				<span onClick={() => setMovies(false)}>
					예매 취소
				</span>
			</div> */}
		</div>	
	)

	const res_x = (
		<div>
			<div className="head2">
				<h2>예매 정보</h2>
			</div>
			<div className="user_info">
				<input type="checkbox" name="product" value="1"/>
				<img src="/movie/blackmoney.jpg" alt="blackmoney" />
				<table className="type05">
					<tr>
	    			<th scope="row">영화 제목</th>
	    			<td>블랙 머니</td>
					</tr>
					<tr>
	    			<th scope="row">지점</th>
	    			<td>EGV 강남</td>
					</tr>
					<tr>
	    			<th scope="row">상영관 및 좌석</th>
	    			<td>3관 E 11,12, G 11,12</td>
					</tr>
					<tr>
	    			<th scope="row">상영시간</th>
	    			<td>2019.12.03(화) 11:30</td>
					</tr>
					<tr>
	    			<th scope="row">예매번호</th>
	    			<td>201941023321</td>
					</tr>
					<tr>
	    			<th scope="row">영화정보</th>
	    			<td>예매율:5% | 평점:5</td>
					</tr>
				</table>
			</div>
			{/* <div className="edit_rs_movie">
				<span onClick={() => setMovies(true)}>
					예매 취소
				</span>
			</div> */}
		</div>	
	)

	return (
		<div>
			<Mypage />
			<Mypage_CSS />
			{movies ? res : res_x}
		</div>
	)
}

export default Mypage_movie