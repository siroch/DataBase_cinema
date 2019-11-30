import Header from './Header'
import Mypage_CSS from '../components/mypage_css'
import Link from 'next/link'

const Mypage = () => {
	return (
		<div>
			<Header />
    	<Mypage_CSS />
     	<div class="all_display">
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
				</nava>
			</div>
    </div>
	)
}

export default Mypage