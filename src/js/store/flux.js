const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			searchProperties: 
				{
				search: "",
				genre: "",
				platform: ""
				},
			res: []	
		},
		actions: {
			datafetcher: (object) => {
				let query = ''
				for (const property in object) {
					if (object[property] != '') {
						query = query + '&' + property + '=' + object[property]
					}
					// console.log(`${property}: ${object[property]}`);
				}
				console.log(query)
				fetch(
					`https://api.rawg.io/api/games?key=bfe242c109884e06860a295ba9f3a547` + query
				)
					.then((res) => res.json())
					.then((data) => {
						// {
						// 	data ? setSearchResults(data.results) : "loading";
						// }
						console.log(data);
						console.log(data.results);

						const store = getStore();

						//we have to loop the entire demo array to look for the respective index
						//and change its color
						const res = data.results

						//reset the global store
						setStore({ res: res });
						console.log(getStore())

					})
					.catch((error) => console.error("Error:", error));
			}
		}
	};
};

export default getState;
