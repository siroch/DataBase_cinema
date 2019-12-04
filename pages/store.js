import Header from './Header'
import Footer from './footer'
import Store_CSS from '../components/store_css'
import {useState} from 'react'

const Store = () => {

  const [goods, setGoods] = useState(true)

  const Food = (
      <div className="all">
        <div className="gallery">
          <img src="/store/combo1.jpg" alt="combo1" />
          <div className="desc">반반에이드콤보</div>
          <button>장바구니</button>
          <span className="price">13000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo2.jpg" alt="combo2" />
          <div className="desc">후라이드콤보</div>
          <button>장바구니</button>
          <span className="price">11000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo3.jpg" alt="combo3" />
          <div className="desc">통찡어콤보</div>
          <button>장바구니</button>
          <span className="price">14000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo4.jpg" alt="combo4" />
          <div className="desc">즉석구이콤보</div>
          <button>장바구니</button>
          <span className="price">15000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo5.jpg" alt="combo5" />
          <div className="desc">더블콤보</div>
          <button>장바구니</button>
          <span className="price">11000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo6.jpg" alt="combo6" />
          <div className="desc">핫도그콤보</div>
          <button>장바구니</button>
          <span className="price">11000원</span>
        </div>

        <div className="gallery">
          <img src="./store/combo7.jpg" alt="combo7" />
          <div className="desc">스프링프렛즐콤보</div>
          <button>장바구니</button>
          <span className="price">12000원</span>
        </div>

        <div className="gallery">
          <img src="/store/combo8.jpg" alt="combo8" />
          <div className="desc">나쵸콤보</div>
          <button>장바구니</button>
          <span className="price">11000원</span>
        </div>

        <div className="fixed">
        	<img src="/store/basket.png" />
        </div>
      </div>
  )

  const Event_goods = (
      <div className="all">
          <div className="gallery">
            <img src="/store/mapleA.png" alt="mapleA"/>
            <div className="desc">메이플스토리 콤보 A</div>
            <button>장바구니</button>
            <span className="price">15000원</span>
          </div>

          <div className="gallery">
            <img src="/store/mapleB.png" alt="mapleB"/>
            <div className="desc">메이플스토리 콤보 B</div>
            <button>장바구니</button>
            <span className="price">15000원</span>
          </div>

          <div className="gallery">
            <img src="/store/winterkingdomA.jpg" alt="winterkingdomA"/>
            <div className="desc">겨울 왕국 콤보 A</div>
            <button>장바구니</button>
            <span className="price">13000원</span>
          </div>

          <div className="gallery">
            <img src="/store/winterkingdomB.jpg" alt="winterkingdomB"/>
            <div className="desc">겨울 왕국 콤보 B</div>
            <button>장바구니</button>
            <span className="price">13000원</span>
          </div>

          <div className="gallery">
            <img src="/store/frozen_ticket.png" alt="frozen ticket"/>
            <div className="desc">Forzen2 오리지널 티켓</div>
            <button>장바구니</button>
            <span className="price">18000원</span>
          </div>
          <div className="fixed">
          	<img src="/store/basket.png" />
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
