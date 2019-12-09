import Header from './Header'
import Footer from './footer'
import Store_CSS from '../components/store_css'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import router from 'next/router'

const Store = () => {

  const [goods, setGoods] = useState(true);
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

  function sendinfo() {
    sessionStorage.setItem("basket", JSON.stringify({
      "doublecombo" : doublecombo,
      "friedcombo" : friedcombo,
      "friedsquidcombo" : friedsquidcombo,
      "halfadecombo" : halfadecombo,
      "hotdogcombo" : hotdogcombo,
      "instantfriedcombo" : instantfriedcombo,
      "nachocombo" : nachocombo,
      "springfredzlecombo" : springfredzlecombo,
      "maplestorycomboa" : maplestorycomboa,
      "maplestorycombob" : maplestorycombob,
      "frozencomboa" : frozencomboa,
      "frozencombob" : frozencombob,
      "frozen2original" : frozen2original
    }));
    router.push('/baskets');
  }

  const Food = (
      <div className="all">
        <div className="gallery">
          <img src="/store/combo1.jpg" alt="combo1" />
          <div className="desc">반반에이드콤보</div>
          <button onClick={(e) => {alert("추가 되었습니다."); getHalfadecombo(true);}}>장바구니</button>
          <span className="price">13000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo2.jpg" alt="combo2" />
          <div className="desc">후라이드콤보</div>
          <button onClick={(e) => {alert("추가 되었습니다."); getFriedcombo(true);}}>장바구니</button>
          <span className="price">11000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo3.jpg" alt="combo3" />
          <div className="desc">통찡어콤보</div>
          <button onClick={(e) => {alert("추가 되었습니다."); getFriedsquidcombo(true);}}>장바구니</button>
          <span className="price">14000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo4.jpg" alt="combo4" />
          <div className="desc">즉석구이콤보</div>
          <button onClick={(e) => {alert("추가 되었습니다."); getInstantfriedcombo(true);}}>장바구니</button>
          <span className="price">15000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo5.jpg" alt="combo5" />
          <div className="desc">더블콤보</div>
          <button onClick={(e) => {alert("추가 되었습니다."); getDoublecombo(true);}}>장바구니</button>
          <span className="price">11000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo6.jpg" alt="combo6" />
          <div className="desc">핫도그콤보</div>
          <button onClick={(e) => {alert("추가 되었습니다."); getHotdogcombo(true);}}>장바구니</button>
          <span className="price">11000원</span>
        </div>

        <div className="gallery">
          <img src="./store/combo7.jpg" alt="combo7" />
          <div className="desc">스프링프렛즐콤보</div>
          <button onClick={(e) => {alert("추가 되었습니다."); getSpringfredzlecombo(true);}}>장바구니</button>
          <span className="price">12000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo8.jpg" alt="combo8" />
          <div className="desc">나쵸콤보</div>
          <button onClick={(e) => {alert("추가 되었습니다."); getNachocombo(true);}}>장바구니</button>
          <span className="price">11000원</span>
        </div>

        <div className="fixed">
          <span onClick={sendinfo}>
            <img src="/store/basket.png" />
          </span>
        </div>
      </div>
  )

  const Event_goods = (
      <div className="all">
          <div className="gallery">
            <img src="/store/mapleA.png" alt="mapleA"/>
            <div className="desc">메이플스토리 콤보 A</div>
            <button onClick={(e) => {alert("추가 되었습니다."); getMaplestorycomboa(true);}}>장바구니</button>
            <span className="price">15000원</span>
          </div>

          <div className="gallery">
            <img src="/store/mapleB.png" alt="mapleB"/>
            <div className="desc">메이플스토리 콤보 B</div>
            <button onClick={(e) => {alert("추가 되었습니다."); getMaplestorycombob(true);}}>장바구니</button>
            <span className="price">15000원</span>
          </div>

          <div className="gallery">
            <img src="/store/winterkingdomA.jpg" alt="winterkingdomA"/>
            <div className="desc">겨울 왕국 콤보 A</div>
            <button onClick={(e) => {alert("추가 되었습니다."); getFrozencomboa(true);}}>장바구니</button>
            <span className="price">13000원</span>
          </div>

          <div className="gallery">
            <img src="/store/winterkingdomB.jpg" alt="winterkingdomB"/>
            <div className="desc">겨울 왕국 콤보 B</div>
            <button onClick={(e) => {alert("추가 되었습니다."); getFrozencombob(true);}}>장바구니</button>
            <span className="price">13000원</span>
          </div>

          <div className="gallery">
            <img src="/store/frozen_ticket.png" alt="frozen ticket"/>
            <div className="desc">Forzen2 오리지널 티켓</div>
            <button onClick={(e) => {alert("추가 되었습니다."); getFrozen2original(true);}}>장바구니</button>
            <span className="price">18000원</span>
          </div>
          <div className="fixed">
          	<span onClick={sendinfo}>
              <img src="/store/basket.png" />
            </span>
          </div>
      </div>
  )

  return(
    <div>
      <Store_CSS />
      <Header />
      <div className="category">
        <h2>스토어</h2>
        <a onClick={() => setGoods(true)}>팝콘/음료</a>
        |
        <a onClick={() => setGoods(false)}>이벤트 상품</a>
      </div>
      { goods ? Food : Event_goods }
      <Footer />
    </div>
  )
}

export default Store
