import Mypage from './mypage'
import Mypage_CSS from '../components/mypage_css'

const Mypage_movie = () => {
	return (
		<div>
			<Mypage />
			<Mypage_CSS />
			<div>
				<div class="head2">
					<h2>예매 정보</h2>
				</div>
				<div class="user_info">
					<img src="/movie/blackmoney.jpg" alt="blackmoney" />
					<table class="type05">
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
				<div class="edit_rs_movie">
					<span>
						예매 취소
					</span>
				</div>
			</div>	
		</div>
	)
}

export default Mypage_movie