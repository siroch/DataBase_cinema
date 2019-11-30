import Mypage from './mypage'
import Mypage_CSS from '../components/mypage_css'

const Mypage_userinfo = () => {
	return (
		<div>
			<Mypage />
			<Mypage_CSS />
			<div>
				<div class="head2">
					<h2>회원 정보</h2>
				</div>
				<div class="user_info">
					<table class="type05">
						<tr>
		    			<th scope="row">ID</th>
		    			<td>siroch</td>
						</tr>
						<tr>
		    			<th scope="row">이름</th>
		    			<td>강동호</td>
						</tr>
						<tr>
		    			<th scope="row">생년월일</th>
		    			<td>1999.09.22</td>
						</tr>
						<tr>
		    			<th scope="row">전화번호</th>
		    			<td>010-5031-9590</td>
						</tr>
						<tr>
		    			<th scope="row">회원등급</th>
		    			<td>골드</td>
						</tr>
						<tr>
		    			<th scope="row">이번 달 지출</th>
		    			<td>113,700₩</td>
						</tr>
					</table>
				</div>
				<div class="edit_userinfo">
					<span>
						회원 정보 수정
					</span>
				</div>
			</div>
		</div>
	)
}

export default Mypage_userinfo