import Contact from "../components/pagesComponents/homepage/Contact";
import Libraries from "../components/pagesComponents/homepage/Libraries";
import OpacSearch from "../components/pagesComponents/homepage/OpacSearch";
import Video from "../components/pagesComponents/homepage/Video";
import Visitors from "../components/pagesComponents/homepage/Visitors";
import { useRef, useEffect } from "react";
function HomepageContact() {
	const contactRef = useRef(null);

	useEffect(() => {
		// Scroll to the Contact component when the component mounts
		contactRef.current.scrollIntoView({ behavior: "smooth" });
	}, []); // Empty dependency array to run this effect only once when the component mounts
	return (
		<>
			<OpacSearch />
			<Video />
			<Visitors />
			<Libraries />
			<div ref={contactRef}>
				<Contact />
			</div>
		</>
	);
}

export default HomepageContact;
