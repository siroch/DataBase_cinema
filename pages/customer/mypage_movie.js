import Mypage from './mypage'
import Mypage_CSS from '../../components/mypage_css'
import {useState} from 'react'

const Mypage_movie = () => {
	const [movies, setMovies] = useState(true)

	const res = (
		<div>
			<div className="head2">
				<h2>예매 정보</h2>
			</div>
			<div className="user_info">
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
			<div className="edit_rs_movie">
				<span onClick={() => setMovies(false)}>
					예매 취소
				</span>
			</div>
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
			<div className="edit_rs_movie">
				<span onClick={() => setMovies(true)}>
					예매 취소
				</span>
			</div>
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