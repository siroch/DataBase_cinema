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
		    			<td>332,100,300₩
		    				<Link href="./sales_info_details">
		    					<button>...더보기</button>
		    				</Link>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">2019.10</th>
		    			<td>332,100,300₩
		    				<Link href="./sales_info_details">
		    					<button>...더보기</button>
		    				</Link>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">2019.09</th>
		    			<td>332,100,300₩
		    				<Link href="./sales_info_details">
		    					<button>...더보기</button>
		    				</Link>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">2019.08</th>
		    			<td>332,100,300₩
		    				<Link href="./sales_info_details">
		    					<button>...더보기</button>
		    				</Link>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">2019.07</th>
		    			<td>332,100,300₩
		    				<Link href="./sales_info_details">
		    					<button>...더보기</button>
		    				</Link>
		    			</td>
						</tr>
					</table>
				</div>
			</div>   	
		</div>
	)
}

export default Sales_info