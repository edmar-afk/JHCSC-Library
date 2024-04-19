import logo from "../assets/img/logo.png";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { useState, useEffect } from "react";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import BookingModal from "./pagesComponents/homepage/BookingModal";

function Navbar() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [showNav, setShowNav] = useState(false);

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
	return (
		<>
			<nav
				className={`z-50 fixed w-full p-2 ${scrollPosition > 190 ? "bg-black/80 backdrop-blur-md" : "bg-transparent"} ${
					showNav ? "h-fit" : "transition h-24 delay-700"
				} duration-300`}>
				<div className="mx-auto px-2 sm:px-6 lg:px-16">
					<div className="relative flex h-16 items-center justify-between mt-2">
						<div className="flex flex-shrink-0 items-center">
							<img
								className="h-8 w-auto"
								src={logo}
								alt="logo"
							/>
						</div>
						<div className="flex flex-1 items-center justify-center sm:items-stretch">
							<div className="hidden sm:ml-6 lg:block font-bold">
								<div className="flex flex-row space-x-4">
									<NavLinks />
								</div>
							</div>
						</div>
						<div className="flex flex-shrink-0 items-center">
							<div className="p-1.5 relative border-2 border-yellow-400 text-white px-6 hover:cursor-pointer hover:bg-yellow-400 duration-300">
								<BookingModal />
							</div>
							{showNav ? (
								<FontAwesomeIcon
									onClick={() => setShowNav(!showNav)}
									icon={faBarsStaggered}
									className="text-white ml-4 text-2xl block lg:hidden"
								/>
							) : (
								<FontAwesomeIcon
									onClick={() => setShowNav(!showNav)}
									icon={faBars}
									className="text-white ml-4 text-2xl block lg:hidden"
								/>
							)}
						</div>
					</div>
				</div>

				<div
					className={`lg:hidden ${showNav ? "scale-100" : "scale-0"} duration-300`}
					id="mobile-menu">
					<div className="space-y-1 px-2 pb-3 pt-2">
						<div className="flex flex-col space-x-4">
							<NavLinks />
						</div>
					</div>
				</div>
			</nav>
			<div
				onClick={() => setShowNav(!showNav)}
				className={`bg-gray-700/20 w-full h-full fixed left-0 bottom-0 ${showNav ? "block" : " hidden"}`}></div>
		</>
	);
}

export default Navbar;
