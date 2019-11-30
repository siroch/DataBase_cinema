import Header_CSS from '../components/header_css'
import Link from 'next/link'
import router from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'



const Header = () => {
	const [login_status, getLoginStatus] = useState(false);

	useEffect(() => {
		if(localStorage.getItem('login')) {
			axios({
				method: "GET",
				url: "/api/auth/check",
				headers: {
					"x-access-token" : localStorage.getItem('login').split(":")[2].split('"')[1]
				},
				data: {}
			})
			.then(function(res) {
				getLoginStatus(true);
				console.log(res);
			})
		}
	})

	function logout() {
		localStorage.removeItem('login');
		alert("로그아웃 되었습니다.");
		getLoginStatus(false);
		router.push('/index');
	}
		return(
		<header>
			<Header_CSS />
			<div class="small">
				{login_status ? <span title="Log-Out" onClick={logout}>로그아웃 </span> : <Link href="/login_nomember"><span title="Log-In">로그인 </span></Link> }
				|
				<Link href="/sign_in">
					<span title="Sign-In"> 회원가입 </span>
				</Link>
				|
				<Link href="/customer/mypage_userinfo">
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
						</Link>
						<Link href="/reservation">
							<span title="Reservation and Seat">예매</span>
						</Link>
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
