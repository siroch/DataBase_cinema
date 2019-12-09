import Header from './Header'
import Baskets_CSS from '../components/baskets_css'
import Footer from './footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import router from 'next/router'

const Baskets = () => {
  const [doublecombo, getDoublecombo] = useState(false);
  const [friedcombo, getFriedcombo] = useState(false);
  const [friedsquidcombo, getFriedsquidcombo] = useState(false);
  const [halfadecombo, getHalfadecombo] = useState(false);
  const [hotdogcombo, getHotdogcombo] = useState(false);
  const [instantfriedcombo, getInstantfriedcombo] = useState(false);
  const [nachocombo, getNachocombo] = useState(false);
  const [springfredzlecombo, getSpringfredzlecombo] = useState(false);
  const [maplestorycomboa, getMaplestorycomboa] = useState(false);
  const [maplestorycombob, getMaplestorycombob] = useState(false);
  const [frozencomboa, getFrozencomboa] = useState(false);
  const [frozencombob, getFrozencombob] = useState(false);
  const [frozen2original, getFrozen2original] = useState(false);
  const [totalspend, getTotalspend] = useState(0);
  
  useEffect(() => {
    let spend = 0;
    const basket = JSON.parse(sessionStorage.getItem("basket"));
    getDoublecombo(basket.doublecombo);
    getFriedcombo(basket.friedcombo);
    getFriedsquidcombo(basket.friedsquidcombo);
    getHalfadecombo(basket.halfadecombo);
    getHotdogcombo(basket.hotdogcombo);
    getInstantfriedcombo(basket.instantfriedcombo);
    getNachocombo(basket.nachocombo);
    getSpringfredzlecombo(basket.springfredzlecombo);
    getMaplestorycomboa(basket.maplestorycomboa);
    getMaplestorycombob(basket.maplestorycombob);
    getFrozencomboa(basket.frozencomboa);
    getFrozencombob(basket.frozencombob);
    getFrozen2original(basket.frozen2original);
    if(basket.doublecombo) {spend = spend + 11000; getTotalspend(spend);}
    if(basket.friedcombo) {spend = spend + 11000; getTotalspend(spend);}
    if(basket.friedsquidcombo) {spend = spend + 14000; getTotalspend(spend);}
    if(basket.halfadecombo) {spend = spend + 13000; getTotalspend(spend);}
    if(basket.hotdogcombo) { spend = spend + 11000; getTotalspend(spend);}
    if(basket.instantfriedcombo) {spend = spend + 15000; getTotalspend(spend);}
    if(basket.nachocombo) { spend = spend + 11000; getTotalspend(spend );}
    if(basket.springfredzlecombo) {spend = spend + 12000; getTotalspend(spend);}
    if(basket.maplestorycomboa) { spend = spend + 15000; getTotalspend(spend);}
    if(basket.maplestorycombob) { spend = spend + 15000; getTotalspend(spend);}
    if(basket.frozencomboa) { spend = spend + 13000; getTotalspend(spend);}
    if(basket.frozencombob) { spend = spend + 13000; getTotalspend(spend);}
    if(basket.frozen2original) {spend = spend + 18000; getTotalspend(spend);}

  }, [])

  const validate = () => {
    let sendinfo = '';
    if(doublecombo) { sendinfo = sendinfo + '1|'}
    if(friedcombo) { sendinfo = sendinfo + '2|'}
    if(friedsquidcombo) { sendinfo = sendinfo + '3|'}
    if(halfadecombo) { sendinfo = sendinfo + '4|'}
    if(hotdogcombo) { sendinfo = sendinfo + '5|'}
    if(instantfriedcombo) { sendinfo = sendinfo + '6|'}
    if(nachocombo) { sendinfo = sendinfo + '7|'}
    if(springfredzlecombo) { sendinfo = sendinfo + '8|'}
    if(maplestorycomboa) { sendinfo = sendinfo + '9|'}
    if(maplestorycombob) { sendinfo = sendinfo + '10|'}
    if(frozencomboa) { sendinfo = sendinfo + '11|'}
    if(frozencombob) { sendinfo = sendinfo + '12|'}
    if(frozen2original) {sendinfo = sendinfo + '13'}
    console.log(sessionStorage.getItem("userId"), sendinfo, totalspend, new Date());
    axios.
    post("/api/auth/updatepurchase/" + {
      "id" : sessionStorage.getItem("userId"),
      "list" : sendinfo,
      "bill" : totalspend,
      "time" : String(new Date())
    })
    .then(function(res) {
      alert("구매가 완료되었습니다.");
      router.push('/customer/mypage_item');
    })
    .catch(function(res) {
      console.log(res);
    });
  }
    return(
      <div>
        <Baskets_CSS />
        <Header />
        <h2 className="basket_title">장바구니</h2>
      	<div className="pay_basket">
      		<div className="paybox">
            {doublecombo ?  (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/combo5.jpg" alt="product"/>
      				<ul type="none">
      					<li>더블콤보</li>
      					<li>가격: 11000원(R)</li>
      				</ul>
      				<input type="button" onClick={(e) => {getTotalspend(totalspend - 11000); getDoublecombo(false);}} value="취소" />
            </div>) : <div></div> }
           
            {friedcombo ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/combo2.jpg" alt="product"/>
      				<ul type="none">
      					<li>후라이드콤보</li>
      					<li>가격: 11000원(R)</li>
      				</ul>
      				<input type="button" onClick={(e) => {getFriedcombo(false); getTotalspend(totalspend - 11000);}} value="취소" />
      			</div>) : <div></div>}
      			
      			{friedsquidcombo ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/combo3.jpg" alt="product"/>
      				<ul type="none">
      					<li>통찡어콤보</li>
      					<li>가격: 14000원(R)</li>
      				</ul>
      				<input type="button" onClick={(e) => {getFriedsquidcombo(false);getTotalspend(totalspend - 14000);}} value="취소" />
      			</div>) : <div></div>}

            {halfadecombo ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/combo1.jpg" alt="product"/>
      				<ul type="none">
      					<li>반반에이드콤보</li>
      					<li>가격: 13000원(R)</li>
      				</ul>
      				<input type="button" onClick={(e) => {getHalfadecombo(false);getTotalspend(totalspend - 13000);}} value="취소" />
      			</div>) : <div></div>}

            {hotdogcombo ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/combo6.jpg" alt="product"/>
      				<ul type="none">
      					<li>핫도그콤보</li>
      					<li>가격: 11000원(R)</li>
      				</ul>
      				<input type="button" onClick={() => {getHotdogcombo(false);getTotalspend(totalspend - 11000);}} value="취소" />
      			</div>) : <div></div>}

            {instantfriedcombo ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/combo4.jpg" alt="product"/>
      				<ul type="none">
      					<li>즉석구이콤보</li>
      					<li>가격: 15000원(R)</li>
      				</ul>
      				<input type="button" onClick={() => {getInstantfriedcombo(false); getTotalspend(totalspend - 15000);}} value="취소" />
      			</div>) : <div></div>}

            {nachocombo ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/combo8.jpg" alt="product"/>
      				<ul type="none">
      					<li>나쵸콤보</li>
      					<li>가격: 11000원(R)</li>
      				</ul>
      				<input type="button" onClick={() => {getNachocombo(false);getTotalspend(totalspend - 11000);}} value="취소" />
      			</div>) : <div></div>}

            {springfredzlecombo ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/combo7.jpg" alt="product"/>
      				<ul type="none">
      					<li>스프링프렛즐콤보</li>
      					<li>가격: 12000원(R)</li>
      				</ul>
      				<input type="button" onClick={() => {getSpringfredzlecombo(false);getTotalspend(totalspend - 12000);}} value="취소" />
      			</div>) : <div></div>}

            {maplestorycomboa ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/mapleA.png" alt="product"/>
      				<ul type="none">
      					<li>메이플스토리콤보A</li>
      					<li>가격: 15000원(R)</li>
      				</ul>
              <input type="button" onClick={() => {getMaplestorycomboa(false);getTotalspend(totalspend - 15000);}} value="취소" />
      			</div>) : <div></div>}

            {maplestorycombob ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/mapleB.png" alt="product"/>
      				<ul type="none">
      					<li>메이플스토리콤보B</li>
      					<li>가격: 15000원(R)</li>
      				</ul>
      				<input type="button" onClick={() => {getMaplestorycombob(false);getTotalspend(totalspend - 15000);}} value="취소" />
      			</div>) : <div></div>}

            {frozencomboa ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/winterkingdomA.jpg" alt="product"/>
      				<ul type="none">
      					<li>겨울 왕국 콤보 A</li>
      					<li>가격: 13000원(R)</li>
      				</ul>
      				<input type="button" onClick={() => {getFrozencomboa(false);getTotalspend(totalspend - 13000);}} value="취소" />
      			</div>) : <div></div>}

            {frozencombob ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/winterkingdomB.jpg" alt="product"/>
      				<ul type="none">
      					<li>겨울 왕국 콤보 B</li>
      					<li>가격: 13000원(R)</li>
      				</ul>
      				<input type="button" onClick={() => {getFrozencombob(false);getTotalspend(totalspend - 13000);}} value="취소" />
      			</div>) : <div></div>}

            {frozen2original ? (<div className="product_list">
      				<input type="checkbox" name="product" value="1"/>
      				<img src="store/frozen_ticket.png" alt="product"/>
      				<ul type="none">
      					<li>Frozen2 오리지널 티켓</li>
      					<li>가격: 18000원(R)</li>
      				</ul>
      				<input type="button" onClick={() => {getFrozen2original(false);getTotalspend(totalspend - 18000);}} value="취소" />
      			</div>) : <div></div>}

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
            <p>총금액: {totalspend}원</p>
            <input type="button" onClick={validate} value="결제완료" />
          </div>
      	</div>
        <Footer />
      </div>
    )
}

export default Baskets
