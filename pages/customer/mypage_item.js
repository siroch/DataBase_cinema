import Mypage from './mypage'
import Mypage_CSS from '../../components/mypage_css'
import {useState} from 'react'

const Mypage_item = () => {
	const [items, setItems] = useState(true)

	const buyItem = (
		<div>
			<div className="head2">
				<h2>구매 정보</h2>
			</div>
			<div className="user_info">
				<table className="type05">
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
			<div className="edit_rs_movie">
				<span onClick={() => setItems(false)}>
					구매 취소
				</span>
			</div>
		</div>	
	)

	const buyItem_x = (
		<div>
			<div className="head2">
				<h2>구매 정보</h2>
			</div>
			<div className="user_info">
				<table className="type05">
					<tr>
	    			<th scope="row">
	    				<input type="checkbox" name="product" value="1"/>
	    				구매 품목 1
	    			</th>
	    			<td>EGV A set | 17,000₩</td>
					</tr>
					<tr>
	    			<th scope="row">
	    				<input type="checkbox" name="product" value="1"/>
	    				구매 품목 2
	    			</th>
	    			<td>메이플스토리 콤보 A | 14,000₩</td>
					</tr>
				</table>
			</div>
			<div className="edit_rs_movie">
				<span onClick={() => setItems(false)}>
					구매 취소
				</span>
			</div>
		</div>	
	)

	return (
		<div>
			<Mypage />
			<Mypage_CSS />
			{items ? buyItem : buyItem_x}
		</div>
	)
}

export default Mypage_item