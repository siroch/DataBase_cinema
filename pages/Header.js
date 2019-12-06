import Header_CSS from '../components/header_css'
import Link from 'next/link'
import router from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'



const Header = () => {
	const [login_status, getLoginStatus] = useState(false);
	var user_info = [];

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
				user_info.push(res.data.info.customer_id);
				user_info.push(res.data.info.customer_name);
			})
		}
	})

	function logout() {
		axios.
		delete('http://localhost:3001/memo/' + user_info[0])
		.then(function(res) {
			localStorage.removeItem('login');
			alert("로그아웃 되었습니다.");
			getLoginStatus(false);
			router.push('/');
		})
		.catch(function(res){
			console.log(res);
		})
	}

	function ifLogin() {
		if(!login_status) {
			alert("로그인이 필요한 서비스입니다.");
			router.push('/');
		} else {
			router.push({
				pathname: '/customer/mypage_userinfo'
			});
			sessionStorage.setItem('userId', user_info[0]);
			sessionStorage.setItem('userName', user_info[1]);
			console.log(sessionStorage.getItem("userId"));
		}
	}

		return(
		<header>
			<Header_CSS />
			<div className="small">
				{login_status ? <span title="Log-Out" onClick={logout}>로그아웃 </span> : <Link href="/login_nomember"><span title="Log-In">로그인 </span></Link> }
				|
				{login_status ? <Link href="/modify"><span title="Modify"> 회원정보 수정 </span></Link> : <Link href="/sign_in"><span title="Sign-In"> 회원가입 </span></Link> }
				|
				<span title={'Mypage'} onClick={ifLogin}> Mycinema </span>
	    </div>
	    <nav>
	      <ul>
					<li>
						<Link href="/">
							<img src="/300.jpg" alt="logo" />
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
