import Header from '../Header'
import Mypage_CSS from '../../components/mypage_css'
import Link from 'next/link'

const Mypage = () => {
	return (
		<div>
			<Header />
    	<Mypage_CSS />
     	<div className="all_display">
				<nava>
					<div className="main_box"></div>
					<div className="t_box">
						<Link href="./mypage_userinfo">
							<span>회원 정보</span>
						</Link>
					</div>
					<div className="t_box">
						<Link href="./mypage_movie">
							<span>예매 정보</span>
						</Link>
					</div>
					<div className="t_box">
						<Link href="./mypage_item">
							<span>구매 정보</span>
						</Link>
					</div>
					<div className="t_box">
						<Link href="./mypage_level">
							<span>등급 정보</span>
						</Link>
					</div>
					<div className="t_box">
						<Link href="../staff/staffpage_info">
							<span>직원 메뉴</span>
						</Link>
					</div>
					<div className="t_box">
						<Link href="../manager/store_info">
							<span>점장 메뉴</span>
						</Link>
					</div>
				</nava>
			</div>
    </div>
	)
}

export default Mypage