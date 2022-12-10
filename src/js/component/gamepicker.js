import React, { useEffect, useState, useContext } from "react";
import "../../styles/gamepicker.css";
import "../store/flux";
import FilterFunction from "../../../FilterFunction";
import { Context } from "../store/appContext";


export const Gamepicker = props => {

	const { store, actions } = useContext(Context);
	const [query, setQuery] = useState(store.searchProperties);
	const [searchResults, setSearchResults] = useState([]);


	// function req (value){
	// 	const q = query + value
	// 	setQuery(q)

	// }
	function req(key, value) {
		let q = query
		q[key] = value
		setQuery(q)
		console.log(query)
		actions.datafetcher(query)
	}
	// useEffect(() => {


	// 	fetch(
	// 		`https://api.rawg.io/api/games?key=bfe242c109884e06860a295ba9f3a547${query}`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			{
	// 				data ? setSearchResults(data.results) : "loading";
	// 			}
	// 			console.log(data);
	// 			console.log(data.results);
	// 		})
	// 		.catch((error) => console.error("Error:", error));
	// }, [query]);
	return (
		<div className="text-center mt-5">
			<form className="d-flex">

				<select className="form-select" name="Genre">
					<option onClick={() => req("genres", "")} value="Genre">Genres</option>
					<option onClick={() => req("genres", "action")} value="Action">Action</option>
					<option onClick={() => req("genres", "adventure")} value="Adventure">Adventure</option>
					<option onClick={() => req("genres", "fighting")} value="Fighting">Fighting</option>
					<option onClick={() => req("genres", "racing")} value="Racing">Racing</option>
					<option onClick={() => req("genres", "role-playing-games-rpg")} value="RPG">RPG</option>
					<option onClick={() => req("genres", "platformer")} value="Platformer">Platformer</option>
				</select>

				<select className="form-select" name="Platform">
					<option onClick={() => req("parent_platforms", "")} value="Platform">Platform</option>
					<option onClick={() => req("parent_platforms", "1")} value="PC">PC</option>
					<option onClick={() => req("parent_platforms", "2")} value="Playstation">Playstation</option>
					<option onClick={() => req("parent_platforms", "3")} value="Xbox">Xbox</option>
					<option onClick={() => req("parent_platforms", "7")} value="Nintendo">Nintendo</option>
				</select>

				<select className="form-select" name="Single-Or-Online">
					<option onClick={() => req("tags", "")} value="Online-or-Multi">Number of Players</option>
					<option onClick={() => req("tags", "singleplayer")} value="singleplayer">Singleplayer</option>
					<option onClick={() => req("tags", "multiplayer")} value="multiplayer">Multiplayer</option>
					<option onClick={() => req("tags", "cooperative")} value="coop">Coop</option>
				</select>

			</form>

			{searchResults.map((game, index) => {
				return (
					<div key={index}>
						<h1>{game.name}</h1>
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
			}
		</div>
	);
};

export default Gamepicker;