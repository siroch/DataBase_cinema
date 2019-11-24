const Theater_list_CSS = () => {
  return (
    <style global jsx>{`
    	theater div {
    		display: flex;
    		text-align: center;
    	}
      theater button {
    		background-color: gray;
        border: none;
        color: black;
        opacity: .7;
        font-size: 9pt;
        margin: 2px;
      }
      theater p {
      	margin-right: 5%;
      }
      button:hover {
      	cursor: pointer;
      	border-bottom: 2px solid black;
      }
    	.theater_list {
    		background-color: gray;
    		margin-top: 100px;
    		margin-bottom: 10px;
    		margin-left: 15%;
    		margin-right: 15%;
    		padding-bottom: 10px;
    		border: 1px solid black;
    		flex-direction: column;
    	}
    	.region {
    		margin-left: 15%;
    		margin-right: 15%;
    		margin-bottom: 10px;
    		border-top: 1px solid black;
    		border-bottom: 1px solid black;
    		justify-content: center;
    	}
    	.possition1 {
    		justify-content: center;
    	}
    	.theater_info {
    		margin-bottom: 10px;
    		margin-left: 20%;
    		margin-right: 20%;
    		justify-content: center;
    		flex-direction: column;
    	}
    	.theater_img {
    		border: 1px solid black;
    	}
    	.info {
    		display: flex;
        justify-content: space-between;
    		border: 1px solid black;
    		padding-right: 15px;
    	}
    	.left_info {
    		text-align: left;
    	}
    	.right_info {
    		text-align: right;
    	}
    	.h2line {
    		padding-bottom: 10px;
    		border-bottom: 2px solid black;
    	}
    	.reserve {
    		margin-bottom: 10px;
    		margin-left: 20%;
    		margin-right: 20%;
    		justify-content: center;
    		flex-direction: column;
    	}
    	.movie_reserve_info {
    		margin-bottom: 10px;
    		margin-left: 5%;
    		margin-right: 5%;
    		border-bottom: 1px solid black;
    		flex-direction: row;
    	}
    	.movie_reserve {
    		margin-bottom: 10px;
    		margin-left: 10%;
    		margin-right: 5%;
    		flex-direction: column;
    	}
    `}</style>
  )
}

export default Theater_list_CSS