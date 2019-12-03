import Managerpage from './managerpage'
import Managerpage_CSS from '../../components/managerpage_css'
import Link from 'next/link'

const Sales_info = () => {
	return (
		<div>
			<Managerpage />
			<Managerpage_CSS />
			<div>
				<div class="head2">
					<h2>매출 정보</h2>
				</div>
				<div class="user_info">
					<table class="type05">
						<tr>
		    			<th scope="row">2019.11</th>
		    			<td>
		    				<p>영화 매출 : 121,000,000₩</p>
		    				<p>상품 매출 : 123,000,000₩</p>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">2019.10</th>
		    			<td>
		    				<p>영화 매출 : 121,000,000₩</p>
		    				<p>상품 매출 : 123,000,000₩</p>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">2019.09</th>
		    			<td>
		    				<p>영화 매출 : 121,000,000₩</p>
		    				<p>상품 매출 : 123,000,000₩</p>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">2019.08</th>
		    			<td>
		    				<p>영화 매출 : 121,000,000₩</p>
		    				<p>상품 매출 : 123,000,000₩</p>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">2019.07</th>
		    			<td>
		    				<p>영화 매출 : 121,000,000₩</p>
		    				<p>상품 매출 : 123,000,000₩</p>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">2019.06</th>
		    			<td>
		    				<p>영화 매출 : 121,000,000₩</p>
		    				<p>상품 매출 : 123,000,000₩</p>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">2019.05</th>
		    			<td>
		    				<p>영화 매출 : 121,000,000₩</p>
		    				<p>상품 매출 : 123,000,000₩</p>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">2019.04</th>
		    			<td>
		    				<p>영화 매출 : 121,000,000₩</p>
		    				<p>상품 매출 : 123,000,000₩</p>
		    			</td>
						</tr>
					</table>
				</div>
				<div class="sales_info">
					<Link href="./sales_info_details">
						<span>
							매출 상세 정보
						</span>
					</Link>
				</div>
			</div>   	
		</div>
	)
}

export default Sales_info