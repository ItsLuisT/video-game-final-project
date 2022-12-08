import React, {useContext} from "react";
import "../../styles/home.css";
import Gamepicker from "../component/gamepicker";
import { Context } from "../store/appContext";


export const Home = props => {
	const { store, actions } = useContext(Context);
	return(
	<div className="container">
		<br/>
		<h1>What are you in the mood for?</h1>
		<Gamepicker/>
		<br/>
	{store.res.map((game, index) => {
		return (
			<div key={index} className="game-list">
				<h3>{game.name}</h3>
				<p>
					ESRB:
					{game.esrb_rating
						? game.esrb_rating.name
						: "Rating Not available"}
				</p>
				<p>Released: {game.released}</p>

				{/* {/* Bootstrap code. Card layout to display games */}
				<div class="card" >
					<img src={game.background_image} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">{game.name}</h5>
						<p class="card-text">  ESRB:
							{game.esrb_rating
								? game.esrb_rating.name
								: "Rating Not available"}
						</p>
					</div>
				</div>
			</div>
		);
	})
	}</div>)

};

