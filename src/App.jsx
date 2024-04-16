import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/pagesComponents/homepage/Banner";
import NavigateUp from "./components/NavigateUp";
import Chat from "./components/Chat";
import { useEffect } from "react";
import axios from "axios";
import API_URL from "./assets/data/api";

function App() {
	useEffect(() => {
		const recordVisit = async () => {
			try {
				// Send a POST request to your Django backend API
				await axios.post(`${API_URL}api/visits/`);
				console.log("Visit recorded successfully");
			} catch (error) {
				console.error("Error recording visit:", error);
			}
		};

		recordVisit();
	}, []); // Empty dependency array ensures that the effect runs only once when the component mounts
	return (
		<>
			<>
				<Navbar />
				<Banner />
				<div className="w-full">
					<Outlet />
				</div>
				<Chat />
				<NavigateUp />
				<Footer />
			</>
		</>
	);
}

export default App;
