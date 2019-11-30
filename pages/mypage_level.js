import Mypage from './mypage'
import Mypage_CSS from '../components/mypage_css'

const Mypage_level = () => {
	return (
		<div>
			<Mypage />
			<Mypage_CSS />
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
		</div>
	)
}

export default Mypage_level