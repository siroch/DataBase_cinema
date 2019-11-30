import Header from '../Header'
import Managerpage_CSS from '../../components/managerpage_css'
import Link from 'next/link'

const Managerpage = () => {
	return (
		<div>
			<Header />
    	<Managerpage_CSS />
			<nava>
				<div class="main_box"></div>
				<div class="t_box">
					<Link href="/mypage_userinfo">
						<span title="information">회원 정보</span>
					</Link>
				</div>
				<div class="t_box">
					<Link href="/mypage_movie">
						<span title="reservation">예매 정보</span>
					</Link>
				</div>
				<div class="t_box">
					<Link href="/mypage_item">
						<span title="buy_item">구매 정보</span>
					</Link>
				</div>
				<div class="t_box">
					<Link href="/mypage_level">
						<span title="rank">등급 정보</span>
					</Link>
				</div>
				<div class="t_box">
					<Link href="/staffpage">
						<span title="staff">직원 메뉴</span>
					</Link>
				</div>
				<div class="t_box">
					<Link href="/managerpage">
						<span title="manager">점장 메뉴</span>
					</Link>
				</div>
			</nava>
    </div>
	)
}

export default Managerpage