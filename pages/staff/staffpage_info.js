import Staffpage from './staffpage'
import Staffpage_CSS from '../../components/staffpage_css'
import Link from 'next/link'

const Staffpage_info = () => {
	return (
		<div>
			<Staffpage />
    	<Staffpage_CSS />
			<div>
				<div class="head2">
					<h2>직원 정보</h2>
				</div>
				<div class="user_info">
					<table class="type05">
						<tr>
		    			<th scope="row">이름/성별</th>
		    			<td>강동호/남</td>
						</tr>
						<tr>
		    			<th scope="row">직무</th>
		    			<td>매점 관리 및 상품 판매</td>
						</tr>
						<tr>
		    			<th scope="row">근무 요일</th>
		    			<td>월,수,금,토</td>
						</tr>
						<tr>
		    			<th scope="row">근무 시간</th>
		    			<td>월,수(12:00~18:00) | 금,토(10:00~18:00)</td>
						</tr>
						<tr>
		    			<th scope="row">직원 점수</th>
		    			<td>132점</td>
						</tr>
						<tr>
		    			<th scope="row">급여</th>
		    			<td>8590₩/시간</td>
						</tr>
						<tr>
		    			<th scope="row">입사일</th>
		    			<td>2018.01.01</td>
						</tr>
					</table>
				</div>
			</div>   	
    </div>
	)
}

export default Staffpage_info