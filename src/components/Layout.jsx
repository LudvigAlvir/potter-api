export function Layout({ children }) {
	return (
		<>
			<header>
				<nav>
					<ul>
						<a href="#">Link1</a>
					</ul>
					<ul>
						<a href="#">Link2</a>
					</ul>
					<ul>
						<a href="#">Link3</a>
					</ul>
				</nav>
			</header>

			<main>{children}</main>

			<footer>this is our footer</footer>
		</>
	);
}
