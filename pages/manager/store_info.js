import Managerpage from './managerpage'
import Managerpage_CSS from '../../components/managerpage_css'
import Link from 'next/link'

const Store_info = () => {
	return (
		<div>
			<Managerpage />
			<Managerpage_CSS />
			<div>
				<div class="head2">
					<h2>매장 정보</h2>
				</div>
				<div class="user_info">
					<table class="type05">
						<tr>
		    			<th scope="row">상영관 갯수</th>
		    			<td>8관 | 2D 6관 | 3D 1관 | 4D 1관</td>
						</tr>
						<tr>
		    			<th scope="row">총 직원</th>
		    			<td>20명</td>
						</tr>
						<tr>
		    			<th scope="row">상영중인 영화 숫자</th>
		    			<td>10개</td>
						</tr>
						<tr>
		    			<th scope="row">역대 최고 매출(월)</th>
		    			<td>564,231,200₩</td>
						</tr>
						<tr>
		    			<th scope="row">역대 최저 매출(월)</th>
		    			<td>113,312,400₩</td>
						</tr>
						<tr>
		    			<th scope="row">이번달 매출(현재)</th>
		    			<td>332,100,300₩ | 2019.11.30</td>
						</tr>
						<tr>
		    			<th scope="row">이번달 지출(현재)</th>
		    			<td>99,321,400₩ | 2019.11.30</td>
						</tr>
					</table>
				</div>
			</div>   	
		</div>
	)
}

export default Store_info