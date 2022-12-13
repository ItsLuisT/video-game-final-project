import React, { useEffect, useState, useContext } from "react";
import "../../styles/gamepicker.css";
import "../store/flux";
import FilterFunction from "../../../FilterFunction";
import { Context } from "../store/appContext";


export const Gamepicker = props => {
	const [genre, setGenre] = useState('');
	const [platform, setPlatform] = useState('');
	const [tags, seTtags] = useState('');

	function genreChanger(value) {
		setGenre(value)
		actions.searchPropertiesChanger('genres', value)
	}

	//const [query, setQuery] = useState(searchProperties);
	const { store, actions } = useContext(Context);
	//const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		actions.datafetcher()
		console.log(store.searchProperties)
	}, [genre, platform, tags]);
	return (
		<div className="text-center mt-5">
			<form className="d-flex justify-content-evenly">

				<select onChange={(e)=>(genreChanger(e.target.value))}className="form-select" name="genre">
					<option  value="">Genres</option>
					<option  value="action">Action</option>
					<option value="adventure">Adventure</option>
					<option  value="fighting">Fighting</option>
					<option value="racing">Racing</option>
					<option  value="role-playing-games-rpg">RPG</option>
					<option value="platformer">Platformer</option>
				</select>

				<select onChange={(e)=>(actions.searchPropertiesChanger('parent_platforms',e.target.value))} className="form-select" name="Platform">
					<option  value="">Platform</option>
					<option  value="1">PC</option>
					<option  value="2">Playstation</option>
					<option value="3">Xbox</option>
					<option value="7">Nintendo</option>
				</select>

				<select onChange={(e)=>(actions.searchPropertiesChanger('tags',e.target.value))} className="form-select" name="Single-Or-Online">
					<option  value="">Number of Players</option>
					<option value="singleplayer">Singleplayer</option>
					<option  value="multiplayer">Multiplayer</option>
					<option  value="coop">Coop</option>
				</select>
			</form>

		
		</div>
	);
};

export default Gamepicker;