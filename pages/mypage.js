import Header from './Header'
import Mypage_CSS from '../components/mypage_css'
import Link from 'next/link'

const Mypage = () => {
	const us_info = (
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
	)

	const res_movie = (
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
	)

	const buy_item = (
		<div>
			<div class="head2">
				<h2>구매 정보</h2>
			</div>
			<div class="user_info">
				<table class="type05">
					<tr>
	    			<th scope="row">구매 품목 1</th>
	    			<td>EGV A set | 17,000₩</td>
					</tr>
					<tr>
	    			<th scope="row">구매 품목 2</th>
	    			<td>메이플스토리 콤보 A | 14,000₩</td>
					</tr>
				</table>
			</div>
			<div class="edit_rs_movie">
				<span>
					구매 취소
				</span>
			</div>
		</div>	
	)

	const user_level = (
		<div>
			<div class="head2">
				<h2>등급 정보</h2>
			</div>
			<div class="user_info">
				<table class="type05">
					<tr>
	    			<th scope="row">현재 고객님의 등급</th>
	    			<td>골드</td>
					</tr>
					<tr>
	    			<th scope="row">브론즈</th>
	    			<td>XXXX</td>
					</tr>
					<tr>
	    			<th scope="row">실버</th>
	    			<td>XXXX</td>
					</tr>
					<tr>
	    			<th scope="row">골드</th>
	    			<td>XXXX</td>
					</tr>
					<tr>
	    			<th scope="row">플레티넘</th>
	    			<td>XXXX</td>
					</tr>
					<tr>
	    			<th scope="row">다이아몬드</th>
	    			<td>XXXX</td>
					</tr>
				</table>
			</div>
		</div>	
	)	

	return (
		<div>
			<Header />
    	<Mypage_CSS />
     	<div class="all_display">
				<nava>
					<div class="main_box"></div>
					<div class="t_box">
						<span>회원 정보</span>
					</div>
					<div class="t_box">
						<span>예매 정보</span>
					</div>
					<div class="t_box">
						<span>구매 정보</span>
					</div>
					<div class="t_box">
						<span>등급 정보</span>
					</div>
				</nava>
				{user_level}
			</div>
    </div>
	)
}

export default Mypage