const Movie_list_CSS = () => {
  return (
    <style global jsx>{`
    	.movie_list {
    		margin-top: 100px;
    		margin-bottom: 10px;
        	text-align:center;
        	border-bottom: 2px solid black;
        	margin-left: 20%;
        	margin-right: 20%;
    	}
    	.sort_movie_info {
    		margin-left: 25%;
    		margin-right: 25%;
    	}
    	.info_movie {
    		display: flex;
    		flex-direction: row;
    		border-bottom: 1px solid black;
    	}
    	.info_movie h2 {
    		padding-left: 10px;
    		white-space:nowrap;
    	}
    	.info_movie img {
    		margin-left: 5%;
    		margin-right: 5%;
    		width: 80px;
        	height: 120px;
    	}
    	.movie_name {
    		border-bottom: 1px solid black;
    	}
    	.reserve_button {
    		display: flex;
    		flex-direction: row;
    		justify-content: space-between;
    		align-items: center;
    	}
    	.reserve_button button {
    		border: 1px solid black;
    		background-color: red;
    		color: white;
    		opacity: .7;
    		height: 50px;
        	font-size: 9pt;
        	margin: 2px;
    	}
    `}</style>
  )
}

export default Movie_list_CSS