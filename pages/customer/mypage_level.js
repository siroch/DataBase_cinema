import Mypage from './mypage'
import Mypage_CSS from '../../components/mypage_css'
import axios from 'axios'
import {useState, useEffect} from 'react'

const Mypage_level = () => {
	const [ranking, getrank] = useState('');

	useEffect(() => {
		axios
		.get('/api/auth/samecheck/' + sessionStorage.getItem('userId'))
		.then(function(response) {
			var rank;
			if(response.data.rank===0) {
				rank = '일반';
			} else if(response.data.rank === 1) {
				rank = 'Bronze';
			} else if(response.data.rank === 2) {
				rank = 'Silver';
			} else if(response.data.rank === 3) {
				rank = 'Gold';
			} else {
				rank = 'Plantinum';
			}
			getrank(rank);
		})
	}, [])
	return (
		<div>
			<Mypage />
			<Mypage_CSS />
			<div>
				<div className="head2">
					<h2>등급 정보</h2>
				</div>
				<div className="user_info">
					<table className="type05">
						<tr>
		    			<th scope="row">현재 고객님의 등급</th>
						<td>{ranking}</td>
						</tr>
						<tr>
		    			<th scope="row">브론즈</th>
		    			<td>3% 할인 적용</td>
						</tr>
						<tr>
		    			<th scope="row">실버</th>
		    			<td>6% 할인 적용</td>
						</tr>
						<tr>
		    			<th scope="row">골드</th>
		    			<td>10% 할인 적용</td>
						</tr>
						<tr>
		    			<th scope="row">플레티넘</th>
		    			<td>15% 할인 적용</td>
						</tr>
					</table>
				</div>
		</div>
		</div>
	)
}

export default Mypage_level
