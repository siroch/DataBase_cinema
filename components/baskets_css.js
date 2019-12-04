const Baskets_CSS = () => {
  return (
    <style global jsx>{`
    		div.pay_basket {
    			display: flex;
    			border: 3px solid black;
    			border-radius: 5px;
    			margin-left: 10%;
    			margin-right: 10%;
    			margin-bottom: 5%;
    			justify-content: center;
    			padding: 10px;
    		}
    		.paybox{
    			border-right: 1px solid black;
    			overflow-y: scroll;
    			height: 450px;
    			padding-right: 10px;
    			width: 65%;
    			margin-right: 20px;
    		}
    		.basket_title {
    			text-align: center;
    			margin-top: 10%;
    		}

    		div.product_list {
    			display: flex;
    			align-items: center;
    			margin: 10px;
    			padding: 10px;
    			border-bottom: 1px solid black;
    		}

    		.product_list img {
    			margin-left: 20px;
    			width: 100px;
    			height: 150px;
    		}

    		.product_list ul {
    			display: flex;
    			width: 80%;
    			justify-content: center;
    		}

    		.product_list li {
    			margin-right: 50px;
    		}

    		.product_list input[type=button] {
    			margin-left: auto;
    			width: 60px;
    			height: 60px;
    			border: none;
    			border: 1px solid;
    			background-color: black;
    			color: white;
    			border-radius: 10px;
    			font-weight: bold;
    		}
    		.card_box{
          display: flex;
          flex-flow: column;
        }
        .card_box td,.card_box tr,.card_box input,.card_box select {
          font-size: 12pt;
          border-radius: 5px;
          margin: 8px;
        }
        .card_box input[type=button] {
          padding: 3px;
          background-color: black;
          color: white;
        }
        .card_box p{
          margin-top: auto;
          text-align: center;
          font-weight: bold;
        }
    `}</style>
  )
}

export default Baskets_CSS
