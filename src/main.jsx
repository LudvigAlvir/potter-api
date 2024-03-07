import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Profile } from "./routes/profile/Index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Specific } from "./routes/profile/Specific.jsx";
import { Layout } from "./components/Layout.jsx";
import { Characters } from "./routes/characters/Characters.jsx";
import { Character } from "./routes/characters/Character.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/characters",
				element: <Characters />,
			},
			{
				path: "/character/:id",
				element: <Character />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
