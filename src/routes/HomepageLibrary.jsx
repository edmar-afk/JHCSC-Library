import Contact from "../components/pagesComponents/homepage/Contact";
import Libraries from "../components/pagesComponents/homepage/Libraries";
import OpacSearch from "../components/pagesComponents/homepage/OpacSearch";
import Video from "../components/pagesComponents/homepage/Video";
import Visitors from "../components/pagesComponents/homepage/Visitors";
import { useRef, useEffect } from "react";
function HomepageLibrary() {
	const librariesRef = useRef(null);

	useEffect(() => {
		// Scroll to the Libraries component when the component mounts
		librariesRef.current.scrollIntoView({ behavior: "smooth" });
	}, []); // Empty dependency array to run this effect only once when the component mounts

	return (
		<>
			<OpacSearch />
			<Video />
			<Visitors />
			<div ref={librariesRef}>
				<Libraries />
			</div>
			<Contact />
		</>
	);
}

export default HomepageLibrary;
