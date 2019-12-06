import Staffpage from './staffpage'
import Staffpage_CSS from '../../components/staffpage_css'
import Link from 'next/link'

const Staffpage_today = () => {
	return (
		<div>
			<Staffpage />
    	<Staffpage_CSS />
			<div>
				<div className="head2">
					<h2>근무 기록</h2>
				</div>
				<div className="user_info1">
					<div className="info_sort">
						<table className="type05">
							<tr>
			    			<th scope="row">2019.11.30 출근</th>
			    			<td>10:13:48 | 지각</td>
							</tr>
							<tr>
			    			<th scope="row">2019.11.30 퇴근</th>
			    			<td>18:00:32</td>
							</tr>
							<tr>
			    			<th scope="row">2019.11 기록</th>
			    			<td>전체 17일 | 출근 17일 | 지각 1일</td>
							</tr>
						</table>
					</div>
					<div className="info_sort_button">
						<button>출근</button>
						<button>퇴근</button>
					</div>
				</div>
			</div>   	
    </div>
	)
}

export default Staffpage_today