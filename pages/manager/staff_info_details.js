import Staff_info_details_CSS from '../../components/staff_info_details_css'
import Link from 'next/link'
import {useState} from 'react'

const Staff_info_details = () => {
	const [score, setScore] = useState(100)

	return (
		<div>
			<Staff_info_details_CSS />
			<div className="staff_info_details_header">
				<button>수정완료</button>
				<h2>직원 상세 정보</h2>
				<Link href="./staff_info">
					<button>뒤로가기</button>
				</Link>
			</div>
			<div className="staff_info_details">
				<div className="staff_info_name">
					<div className="details">
						<img src="/reload_arrow.png" alt="xx" />
						<div>
							<table className="type05">
								<tr>
				    			<th scope="row">이름 | 나이 | 성별</th>
				    			<td>강동호 | 21세 | 남자</td>
								</tr>
								<tr>
				    			<th scope="row">직무</th>
				    			<td><input type = "text" value = "기존 직무" name = "work" required  /></td>
								</tr>
								<tr>
				    			<th scope="row">수당</th>
				    			<td><input type = "text" value = "기존 수당" name = "pay" required  /></td>
								</tr>
								<tr>
				    			<th scope="row">근무 요일</th>
				    			<td>월,수(12:00~18:00) 금,토(10:00~18:00)</td>
								</tr>
								<tr>
				    			<th scope="row">직원 점수</th>
				    			<td>{score}점
				    				<button onClick={() => setScore(score+1)}>+</button>
				    				<button onClick={() => setScore(score-1)}>-</button>
				    			</td>
								</tr>
							</table>							
						</div>
					</div>
					<h3>근태 정보</h3>
				</div>
				<div className="work_info">
					<table className="type05">
						<tr>
		    			<th scope="row">2018.01</th>
		    			<td>전체 18일 | 출근 17일 | 지각 3일 | 결근 1일</td>
						</tr>
						<tr>
		    			<th scope="row">2018.02</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2018.03</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2018.04</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2018.05</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2018.06</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2018.07</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2018.08</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2018.09</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2018.10</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2018.11</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2018.12</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2019.01</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2019.02</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2019.03</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2019.04</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2019.05</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2019.06</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2019.07</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2019.08</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2019.09</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2019.10</th>
		    			<td></td>
						</tr>
						<tr>
		    			<th scope="row">2019.11</th>
		    			<td></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Staff_info_details