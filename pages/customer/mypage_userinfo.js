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
		Axios
		.get("http://localhost:3001/memo")
		.then(function(response) {
			getUserid(response.data[0].id);
			getUsername(response.data[0].name);
			getUserBirth(response.data[0].birth);
			getUserPhone(response.data[0].phone);
			getUserSpend(response.data[0].spend);
			getUserRank(response.data[0].rank);
		})
	})
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
		    			<td>{user_spend}₩</td>
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