import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Homepage from "./routes/Homepage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VisionMission from "./routes/about/VisionMission.jsx";
import History from "./routes/about/History.jsx";
import ServiceHours from "./routes/about/ServiceHours.jsx";
import AskLibrarian from "./routes/Services/AskLibrarian.jsx";
import Barrowing from "./routes/Services/Barrowing.jsx";
import Referrals from "./routes/Services/Referrals.jsx";
import VisitingUsers from "./routes/Services/VisitingUsers.jsx";
import Policies from "./routes/Services/Policies.jsx";
import Databases from "./routes/resouces/Databases.jsx";
import Room from "./routes/learningSpaces/Room.jsx";
import HomepageLibrary from "./routes/HomepageLibrary.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Homepage />,
			},
			{
				path: "/libraries",
				element: <HomepageLibrary />,
			},
			{
				path: "/contact",
				element: <Homepage />,
			},
			{
				path: "/visionmission",
				element: <VisionMission />,
			},
			{
				path: "/history",
				element: <History />,
			},
			{
				path: "/servicehours",
				element: <ServiceHours />,
			},
			{
				path: "/ask",
				element: <AskLibrarian />,
			},
			{
				path: "/barrowing",
				element: <Barrowing />,
			},
			{
				path: "/referrals",
				element: <Referrals />,
			},
			{
				path: "/visitingUsers",
				element: <VisitingUsers />,
			},
			{
				path: "/policies",
				element: <Policies />,
			},
			{
				path: "/databases",
				element: <Databases />,
			},
			{
				path: "/room",
				element: <Room />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
