import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { useState, useEffect } from "react";function NavigateUp() {	const [scrollPosition, setScrollPosition] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY;
			setScrollPosition(position);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Smooth scrolling behavior
		});
	};
	return (
		<>
			<div
				onClick={handleScrollToTop}
				className={`${
					scrollPosition > 250 ? "-translate-x-px" : "translate-x-24 opacity-0 duration-[2000ms]"
				} right-6 bottom-6 fixed z-50 p-3 px-4 text-white hover:bg-slate-950 hover:text-yellow-300 hover:scale-110 cursor-pointer duration-500 rounded-lg bg-yellow-300`}>
				<FontAwesomeIcon icon={faArrowAltCircleUp} className="animate-bounce"/>
			</div>
		</>
	);
}

export default NavigateUp;
