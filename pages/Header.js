import Header_CSS from '../components/header_css'
import Link from 'next/link'

const Header = () => {
		return(
		<header>
			<Header_CSS />
			<div class="small">
				<Link href="/login_nomember">
					<span title="Log-In">로그인 </span>
				</Link>
				|
				<Link href="/sign_in">
					<span title="Sign-In"> 회원가입 </span>
				</Link>
				|
				<Link href="/mypage">
					<span title="Mypage"> Mycinema </span>
				</Link>
	    </div>
	    <nav>
	      <ul>
					<li>
						<Link href="/">
							<span title="main">Logo-Image</span>
						</Link>
					</li>
					<li>
						<Link href="/movie_list">
							<span title="Movie_list">영화</span>
						</Link> <a>예매</a>
						<Link href="/theater_list">
							<span title="Theater_list">극장</span>
						</Link>
						<Link href="/store">
							<span title="Store">스토어</span>
						</Link>
					</li>
				</ul>
	    </nav>
		</header>
	)
}

export default Header
