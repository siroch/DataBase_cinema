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
						<span>회원 정보</span>
					</div>
					<div class="t_box">
						<span>예매 정보</span>
					</div>
					<div class="t_box">
						<span>구매 정보</span>
					</div>
					<div class="t_box">
						<span>등급 정보</span>
					</div>
				</nava>

				<div class="ad">
					ㅁㄴ;이ㅏ러ㅣㅏ;너리ㅓ
				</div>
			</div>
    </div>
	)
}

export default Mypage