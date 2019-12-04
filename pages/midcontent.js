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
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default Midcontent
