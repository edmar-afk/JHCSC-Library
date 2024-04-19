import Contact from "../components/pagesComponents/homepage/Contact";
import Libraries from "../components/pagesComponents/homepage/Libraries";
import OpacSearch from "../components/pagesComponents/homepage/OpacSearch";
import Video from "../components/pagesComponents/homepage/Video";
import Visitors from "../components/pagesComponents/homepage/Visitors";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
function Homepage() {
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 2000);
	}, []);

	if (loader) {
		return (
			<>
				<Loader />
			</>
		);
	} else {
		return (
			<>
				<OpacSearch />
				<Video />
				<Visitors />
				<Libraries />
				<Contact />
			</>
		);
	}
}

export default Homepage;
