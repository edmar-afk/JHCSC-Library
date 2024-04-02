import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from './components/pagesComponents/homepage/Banner'
import NavigateUp from "./components/NavigateUp";
import Chat from "./components/Chat";
function App() {
	return (
		<>
			<>
				<Navbar />
				<Banner/>
				<div className="w-full">
					<Outlet />
				</div>
				<Chat/>
				<NavigateUp/>
				<Footer />
			</>
		</>
	);
}

export default App;
