import Mypage from './mypage'
import Mypage_CSS from '../../components/mypage_css'
import Axios from 'axios'
import {useEffect, useState} from 'react'

const Mypage_userinfo = () => {
	const [user_id, getUserid] = useState('');
	const [user_name, getUsername] = useState('');
	const [user_birth, getUserBirth] = useState('');
	const [user_phone, getUserPhone] = useState('');
	const [user_spend, getUserSpend] = useState('');
	const [user_rank, getUserRank] = useState('');

	useEffect(() => {
		var url = "/api/auth/samecheck/" + sessionStorage.getItem('userId');
		Axios
		.get(url)
		.then(function(response) {
      		console.log(response.data.birth);
			var birth = String(response.data.birth);
			var phone = String(response.data.phone);
			if(birth[4] === '0') {
				birth = birth.substring(0,4) + '년 ' + birth.substring(5, 6) + '월 ' + birth.substring(6, 8) + '일';
			} else {
				birth = birth.substring(0,4) + '년 ' + birth.substring(4, 6) + '월 ' + birth.substring(6, 8) + '일';
			}
			phone = '0' + phone.substring(0,2) + '-' + phone.substring(2, 6) + '-' + phone.substring(6, 10);
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
			getUserid(response.data.id);
			getUsername(response.data.name);
			getUserBirth(birth);
			getUserPhone(phone);
			getUserSpend(response.data.spend);
			getUserRank(rank);
		})
	}, [])
	return (
		<div>
			<Mypage />
			<Mypage_CSS />
			<div>
				<div className="head2">
					<h2>회원 정보</h2>
				</div>
				<div className="user_info">
					<table className="type05">
						<tr>
		    			<th scope="row">ID</th>
		    			<td>{user_id}</td>
						</tr>
						<tr>
		    			<th scope="row">이름</th>
		    			<td>{user_name}</td>
						</tr>
						<tr>
		    			<th scope="row">생년월일</th>
		    			<td>{user_birth}</td>
						</tr>
						<tr>
		    			<th scope="row">전화번호</th>
		    			<td>{user_phone}</td>
						</tr>
						<tr>
		    			<th scope="row">회원등급</th>
		    			<td>{user_rank}</td>
						</tr>
						<tr>
		    			<th scope="row">이번 달 지출</th>
		    			<td>{user_spend} ₩</td>
						</tr>
					</table>
				</div>
				<div className="edit_userinfo">
					<span>
						회원 정보 수정
					</span>
				</div>
			</div>
		</div>
	)
}

export default Mypage_userinfo