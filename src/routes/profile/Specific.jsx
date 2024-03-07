import { useParams } from "react-router-dom";

export function Specific() {
	const { name } = useParams();

	return <h1>hei {name}</h1>;
}
