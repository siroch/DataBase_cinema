import Midcontent_CSS from '../components/midcontent_css'

const Midcontent = () => {
  return (
    <div>
      <Midcontent_CSS/>
      <div className="midcontents">
        <div className="event">
          <fieldset>
            <legend><h2>이벤트 상품</h2></legend>
            <img src="event/maple_event.png" alt="maple event" />
            <img src="event/frozen_event.png" alt="frozen event" />
            <img src="event/frozen_tickets.jpg" alt="frozen ticket" />
          </fieldset>
        </div>
        <div className="rank">
          <fieldset>
            <legend><h2>등급 안내</h2></legend>
            <div className="rank_info">
              <div className="ranks">
                <div className="rank_b">
                  <img src="rank/bronze.png" alt="bronze" />
                  <ul>
                    <h4>BRONZE</h4>
                    <li>1년간 <strong>10만원</strong> 이상</li>
                    <li>혜택: <strong>3%</strong> 할인</li>
                  </ul>
                </div>
                <div className="rank_s">
                  <img src="rank/silver.png" alt="silver" />
                  <ul>
                    <h3>SILVER</h3>
                    <li>1년간 <strong>20만원</strong> 이상</li>
                    <li>혜택: <strong>6%</strong> 할인</li>
                  </ul>
                </div>
                <div className="rank_g">
                  <img src="rank/gold.png" alt="gold" />
                  <ul>
                    <h2>GOLD</h2>
                    <li>1년간 <strong>40만원</strong> 이상</li>
                    <li>혜택: <strong>10%</strong> 할인</li>
                  </ul>
                </div>
                <div className="rank_p">
                  <img src="rank/platinum.png" alt="platinum" />
                  <ul>
                    <h1>PLATINUM</h1>
                    <li>1년간 <strong>70만원</strong> 이상</li>
                    <li>혜택: <strong>15%</strong> 할인</li>
                  </ul>
                </div>
              </div>
              <p>* 누적 사용 금액은 1년 단위이며, 할인 혜택은 결제시에만 적용됩니다.(누적 금액은 그대로 계산됩니다.)</p>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default Midcontent
