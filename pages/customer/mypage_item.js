import Mypage from './mypage'
import Mypage_CSS from '../../components/mypage_css'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Mypage_item = () => {
	const [items, setItems] = useState(true);
	const [doublecombo, getDoublecombo] = useState(false);
  	const [friedcombo, getFriedcombo] = useState(false);
  	const [friedsquidcombo, getFriedsquidcombo] = useState(false);
  	const [halfadecombo, getHalfadecombo] = useState(false);
  	const [hotdogcombo, getHotdogcombo] = useState(false);
  	const [instantfriedcombo, getInstantfriedcombo] = useState(false);
  	const [nachocombo, getNachocombo] = useState(false);
  	const [springfredzlecombo, getSpringfredzlecombo] = useState(false);
  	const [maplestorycomboa, getMaplestorycomboa] = useState(false);
  	const [maplestorycombob, getMaplestorycombob] = useState(false);
  	const [frozencomboa, getFrozencomboa] = useState(false);
  	const [frozencombob, getFrozencombob] = useState(false);
	const [frozen2original, getFrozen2original] = useState(false);
	const [ts, getts] = useState('');
	
	useEffect(() => {
		axios.
		get('/api/auth/getpurchase/' + sessionStorage.getItem('userId'))
		.then(function(res) {
			let list = [];
			getts(res.data.ts);
			list = String(res.data.list).split('|');
			for(var value of list) {
				if(value==='') break;
				if(value==='1') {getDoublecombo(true); }
				if(value==='2') {getFriedcombo(true); }
				if(value==='3') {getFriedsquidcombo(true); }
				if(value==='4') {getHalfadecombo(true); }
				if(value==='5') {getHotdogcombo(true); }
				if(value==='6') {getInstantfriedcombo(true); }
				if(value==='7') {getNachocombo(true); }
				if(value==='8') {getSpringfredzlecombo(true); }
				if(value==='9') {getMaplestorycomboa(true); }
				if(value==='10') {getMaplestorycomboa(true); }
				if(value==='11') {getMaplestorycombob(true);}
				if(value==='12') {getFrozencomboa(true);}
				if(value==='13') {getFrozencombob(true);}
				if(value==='14') {getFrozen2original(true);}
			}
		})
	}, [])
	
	const buyItem = (
		<div>
			<div className="head2">
				<h2>구매 정보</h2>
			</div>
			<div className="user_info">
				<table className="type05">
					<tr>{String(ts).substring(0,4) + '년 ' + String(ts).substring(4, 6) + "월 " + String(ts).substring(6, 8) + '일 '}</tr>
					{doublecombo ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>더블콤보 | 11,000₩</td>
					</tr>) : <tr></tr>}
					
					{friedcombo ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>후라이드콤보 | 11,000₩</td>
					</tr>) : <tr></tr>}

					{friedsquidcombo ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>통찡어콤보 | 14,000₩</td>
					</tr>) : <tr></tr>}
					
					{halfadecombo ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>반반에이드콤보 | 13,000₩</td>
					</tr>) : <tr></tr>}
					
					{hotdogcombo ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>핫도그콤보 | 11,000₩</td>
					</tr>) : <tr></tr>}
					
					{instantfriedcombo ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>즉석구이콤보 | 15,000₩</td>
					</tr>) : <tr></tr>}

					{nachocombo ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>나쵸콤보 | 11,000₩</td>
					</tr>) : <tr></tr>}

					{springfredzlecombo ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>스프링프렛즐콤보 | 12,000₩</td>
					</tr>) : <tr></tr>}

					{maplestorycomboa ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>메이플스토리 콤보A | 15,000₩</td>
					</tr>) : <tr></tr>}

					{maplestorycombob ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>메이플스토리 콤보 B | 15,000₩</td>
					</tr>) : <tr></tr>}

					{frozencomboa ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>겨울 왕국 콤보 A | 13,000₩</td>
					</tr>) : <tr></tr>}

					{frozencombob ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>겨울 왕국 콤보 B | 13,000₩</td>
					</tr>) : <tr></tr>}

					{frozen2original ? (<tr>
	    			<th scope="row">구매 품목</th>
	    			<td>Frozen2 오리지널 티켓 | 18,000₩</td>
					</tr>) : <tr></tr>}
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