import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Characters() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		async function getCharacters() {
			try {
				const res = await fetch("https://hp-api.onrender.com/api/characters");
				const data = await res.json();
				console.log(data);
				setData(data);
				setLoading(false);
				setError(false);
			} catch (e) {
				setError(true);
				setLoading(false);
			}
		}
		getCharacters();
	}, []);

	if (loading) {
		return <p>Loading</p>;
	}

	if (error) {
		return <p>Error</p>;
	}
	return (
		<div>
			{data ? (
				data.map((character) => {
					return (
						<div key={character.id}>
							<Link to={"/character/" + character.id}>{character.name}</Link>
						</div>
					);
				})
			) : (
				<p>error</p>
			)}
		</div>
	);
}
