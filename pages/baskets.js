import Header from './Header'
import Baskets_CSS from '../components/baskets_css'
import Footer from './footer'

const Baskets = () => {
    return(
      <div>
        <Baskets_CSS />
        <Header />
        <h2 className="basket_title">장바구니</h2>
      	<div className="pay_basket">
      		<div className="paybox">
      			<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/combo1.jpg" alt="product"/>
      				<ul type="none">
      					<li>팝콘 Regular</li>
      					<li>치즈</li>
      					<li>가격: 7500원(R)</li>
      				</ul>
      				<input type="button" value="취소" />
      			</div>
      			<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/combo1.jpg" alt="product"/>
      				<ul type="none">
      					<li>팝콘 Regular</li>
      					<li>치즈</li>
      					<li>가격: 7500원(R)</li>
      				</ul>
      				<input type="button" value="취소" />
      			</div>
      			<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/combo1.jpg" alt="product"/>
      				<ul type="none">
      					<li>팝콘 Regular</li>
      					<li>치즈</li>
      					<li>가격: 7500원(R)</li>
      				</ul>
      				<input type="button" value="취소" />
      			</div>
      		</div>
      		<div className="card_box">
            <h3>카드결제</h3>
            <table>
              <tr>
                <td>카드종류 </td>
                <td colspan="3">
                  <select name="card_name">
                    <option value="신한" selected>신한</option>
                    <option value="하나">하나</option>
                    <option value="기업">기업</option>
                    <option value="농협">농협</option>
                    <option value="우리">우리</option>
                    <option value="카카오">카카오</option>
                    <option value="토스">토스</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>카드번호</td>
                <td colspan="3">
                  <input type="text" size="4" required/>
                  -<input type="text" size="4" required/>
                  -<input type="text" size="4" required/>
                  -<input type="text" size="4" required/>
                </td>
              </tr>
              <tr>
                <td>유효기간</td>
                <td>
                  <input type="text" size="3" required/>월
                  <input type="text" size="3" required/>년
                </td>
                <td>
                  CVC 번호
                </td>
                <td>
                  <input type="text" size="3" required/>
                </td>
              </tr>
            </table>
            <p>총금액: 36000원</p>
            <input type="button" value="결제완료" />
          </div>
      	</div>
        <Footer />
      </div>
    )
}

export default Baskets
