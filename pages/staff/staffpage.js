import Header from '../Header'
import Staffpage_CSS from '../../components/staffpage_css'
import Link from 'next/link'

const Staffpage = () => {
	return (
		<div>
			<Header />
    	<Staffpage_CSS />
			<nava>
				<div class="main_box"></div>
				<div class="t_box">
					<Link href="./staffpage_info">
						<span>직무 정보</span>
					</Link>
				</div>
				<div class="t_box">
					<Link href="./staffpage_work">
						<span>근태 기록</span>
					</Link>
				</div>
				<div class="t_box">
					<Link href="./staffpage_today">
						<span>출 / 퇴근</span>
					</Link>
				</div>
			</nava>
    </div>
	)
}

export default Staffpage