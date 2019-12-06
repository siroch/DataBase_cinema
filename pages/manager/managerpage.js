import Header from '../Header'
import Managerpage_CSS from '../../components/managerpage_css'
import Link from 'next/link'

const Managerpage = () => {
	return (
		<div>
			<Header />
    	<Managerpage_CSS />
			<nava>
				<div className="main_box"></div>
				<div className="t_box">
					<Link href="./store_info">
						<span>매장 정보</span>
					</Link>
				</div>
				<div className="t_box">
					<Link href="./staff_info">
						<span>직원 정보</span>
					</Link>
				</div>
				<div className="t_box">
					<Link href="./sales_info">
						<span>매출 정보</span>
					</Link>
				</div>
			</nava>
    </div>
	)
}

export default Managerpage