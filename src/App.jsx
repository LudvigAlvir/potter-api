import { Link, Outlet } from "react-router-dom";
import "./App.css";

function Layout({ children }) {
	return (
		<>
			<header>
				<nav>
					<ul>
						<Link to="/characters">All characters</Link>
					</ul>
				</nav>
			</header>

			<main>{children}</main>

			<footer>this is our footer</footer>
		</>
	);
}

function App() {
	return (
		<>
			<Layout>
				<Outlet />
			</Layout>
		</>
	);
}

export default App;
