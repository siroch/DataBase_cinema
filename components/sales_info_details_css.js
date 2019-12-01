const Sales_info_details_CSS = () => {
  return (
    <style global jsx>{`
        h3 {
            margin-bottom: 10px;
            margin-left: 10%;
            margin-right: 10%;
            text-align: center;
            border-bottom: 1px solid black;
        }
    	.sales_info_details_header {
    		margin-top: 5%;
    		margin-left: 20%;
    		margin-right: 20%;
    		display: flex;
    		justify-content: space-around;
    		text-align: center;
    	}
    	.sales_info_details_header button {
    		font-size: 12pt;
    		background-color: black;
    		color: white;
    		height: 50%;
    	}
    	.sales_info_details_header button:hover {
    		cursor: pointer;
    	}
        .sales_info_details {
            margin-left: 20%;
            margin-right: 20%;
            border-top: 2px solid black;
            border-bottom: 2px solid black;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        .sales_info_details div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 20px;
        }
        .sales_info_details img {
            margin-left: 20%;
            width: 60%;
            height: 120px;
        }
    `}</style>
  )
}

export default Sales_info_details_CSS