import Mypage from './mypage'
import Mypage_CSS from '../components/mypage_css'

const Mypage_item = () => {
	return (
		<div>
			<Mypage />
			<Mypage_CSS />
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
		</div>
	)
}

export default Mypage_item