import Staffpage from './staffpage'
import Staffpage_CSS from '../../components/staffpage_css'
import Link from 'next/link'

const Staffpage_item = () => {
	return (
		<div>
			<Staffpage />
    	<Staffpage_CSS />
			<div>
				<div className="head2">
					<h2>시설 정보</h2>
				</div>
				<div className="user_info">
					<table className="type05">
						<tr>
		    			<th scope="row">1관</th>
		    			<td>전체 80석 | 2석 파손</td>
						</tr>
						<tr>
		    			<th scope="row">2관</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">...</th>
		    			<td>...</td>
						</tr>
						<tr>
		    			<th scope="row">팝콘 기계</th>
		    			<td>전체 2개 | 1개 파손</td>
						</tr>
						<tr>
		    			<th scope="row">...</th>
		    			<td>...</td>
						</tr>
						<tr>
		    			<th scope="row">3D 안경</th>
		    			<td>전체 400개 | 4개 파손 | 18개 분실</td>
						</tr>
						<tr>
		    			<th scope="row">...</th>
		    			<td>...</td>
						</tr>
					</table>
				</div>
			</div>   	
    </div>
	)
}

export default Staffpage_item