import Sales_info_details_CSS from '../../components/sales_info_details_css'
import Link from 'next/link'

const Sales_info_details = () => {
	return (
		<div>
			<Sales_info_details_CSS />
			<div class="sales_info_details_header">
				<Link href="./sales_info_details">
					<button>새로고침</button>
				</Link>
				<h2>매출 상세 정보</h2>
				<Link href="./sales_info">
					<button>뒤로가기</button>
				</Link>
			</div>
			<div class="sales_info_details">
				<div class="year">
					<img src="/reload_arrow.png" alt="xx" />
				</div>
			</div>
		</div>
	)
}

export default Sales_info_details