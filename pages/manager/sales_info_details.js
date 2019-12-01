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
					<h3>연별 매출 그래프</h3>
					<img src="/reload_arrow.png" alt="xx" />
				</div>
				<div class="best_sales">
					<h3>최고 매출</h3>
					<img src="/reload_arrow.png" alt="xx" />
				</div>
				<div class="best_profit">
					<h3>최고 수익</h3>
					<img src="/reload_arrow.png" alt="xx" />
				</div>
				<div class="worst_sales">
					<h3>최저 매출</h3>
					<img src="/reload_arrow.png" alt="xx" />
				</div>
				<div class="worst_profit">
					<h3>최저 이익</h3>
					<img src="/reload_arrow.png" alt="xx" />
				</div>
				<div class="last_month">
					<h3>저번달 매출</h3>
					<img src="/reload_arrow.png" alt="xx" />
				</div>
				<div class="this_month">
					<h3>이번달 매출</h3>
					<img src="/reload_arrow.png" alt="xx" />
				</div>
				<div class="sales_table">
					<h3>총 매출 정보</h3>
					<img src="/reload_arrow.png" alt="xx" />
				</div>
			</div>
		</div>
	)
}

export default Sales_info_details