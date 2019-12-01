const Staff_info_details_CSS = () => {
  return (
    <style global jsx>{`
    	.staff_info_details_header {
    		margin-top: 5%;
    		margin-left: 20%;
    		margin-right: 20%;
    		display: flex;
    		justify-content: space-around;
    		text-align: center;
    	}
    	.staff_info_details_header button {
    		font-size: 12pt;
    		background-color: black;
    		color: white;
    		height: 50%;
    	}
    	.staff_info_details_header button:hover {
    		cursor: pointer;
    	}
    	.staff_info_details {
    		margin-left: 20%;
    		margin-right: 20%;
    		border-top: 2px solid black;
    		border-bottom: 2px solid black;
    		display: flex;
    		flex-direction: column;
    		justify-content: space-around;
    	}
    	.staff_info_name {
    		margin-left: 5%;
    		margin-right: 5%;
    		border-bottom: 1px solid black;
    		padding: 5px;
    		text-align: center;
    	}
    	.details {
    		display: flex;
    		flex-direction: row;
    	}
    	.work_info {
    		display: flex;
    		justify-content: center;
    		overflow: scroll;
    		height: 350px;
    	}
    	table.type05 {
        border-collapse: separate;
        border-spacing: 1px;
        text-align: left;
        line-height: 1.5;
        border-top: 1px solid #ccc;
        margin: 20px 60px;
      }
      table.type05 th {
        width: 150px;
        padding: 10px;
        font-weight: bold;
        vertical-align: top;
        border-bottom: 1px solid #ccc;
        background: black;
        color: white;
      }
      table.type05 td {
        width: 350px;
        padding: 10px;
        vertical-align: top;
        background: #efefef;
        border-bottom: 1px solid #ccc;
      }      
    `}</style>
  )
}

export default Staff_info_details_CSS