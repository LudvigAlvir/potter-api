import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Character.module.css";

export function Character() {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	useEffect(() => {
		async function getData() {
			const res = await fetch(
				"https://hp-api.onrender.com/api/character/" + id
			);
			const data = await res.json();
			console.log(data);
			setData(data);
			setLoading(false);
		}
		getData();
	}, [id]);
	if (loading) {
		return <p>Loading</p>;
	}
	return (
		<div className={styles.container}>
			{data[0] ? (
				<div className={styles.card}>
					<h2>{data[0].name}</h2>
					{data[0].house && <p>{data[0].house}</p>}
					<img
						src={data[0].image}
						alt={"Image of " + data[0].name}
					/>
					<p>Actor: {data[0].actor}</p>
				</div>
			) : (
				<p>Error</p>
			)}
		</div>
	);
}
