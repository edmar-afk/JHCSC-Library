import logo from "../assets/img/logo.png";import { useState, useEffect } from "react";import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
function Navbar() {
	const [scrollPosition, setScrollPosition] = useState(0);

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
			<nav className={`z-50 fixed w-full p-2 ${scrollPosition > 190 ? "bg-black/80" : "bg-transparent"} duration-300`}>
				<div className="mx-auto px-2 sm:px-6 lg:px-16">
					<div className="relative flex h-16 items-center justify-between">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								type="button"
								className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false">
								<span className="absolute -inset-0.5"></span>
								<span className="sr-only">Open main menu</span>

								<svg
									className="block h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>

								<svg
									className="hidden h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex flex-shrink-0 items-center">
							<img
								className="h-8 w-auto"
								src={logo}
								alt="logo"
							/>
						</div>
						<div className="flex flex-1 items-center justify-center sm:items-stretch">
							<div className="hidden sm:ml-6 sm:block font-bold">
								<div className="flex space-x-4">
									<Link
										to={'/'}
										className="text-gray-300 duration-300 items-center hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-md font-medium">
										Home
									</Link>

									<div className="text-white hover:bg-yellow-400 rounded-md px-3 py-2 bg-transparent font-light">
										<Dropdown
											label="About"
											inline>
											
												<Dropdown.Item>
													<Link
														to={"/visionmission"}
														className="hover:text-green-800 duration-300">
														Vision Mission
													</Link>
												</Dropdown.Item>
												<Dropdown.Item>
													<Link
														to={"/history"}
														className="hover:text-green-800 duration-300">
														Brief History
													</Link>
												</Dropdown.Item>
												<Dropdown.Item>
													<Link
														to={"/servicehours"}
														className="hover:text-green-800 duration-300">
														Service Hours
													</Link>
												</Dropdown.Item>
												<Dropdown.Item>
													<Link
														to={"/contact"}
														className="hover:text-green-800 duration-300">
														Contact Us
													</Link>
												</Dropdown.Item>
											
										</Dropdown>
									</div>

									<div className="text-white hover:bg-yellow-400 rounded-md px-3 py-2 bg-transparent font-light">
										<Dropdown
											label="Services"
											inline>
											<Dropdown.Item>
												<Link
													to={"/ask"}
													className="hover:text-green-800 duration-300">
													Ask the Librarian
												</Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Link
													to={"/barrowing"}
													className="hover:text-green-800 duration-300">
													Barrowing and Returning of Books
												</Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Link
													to={"/referrals"}
													className="hover:text-green-800 duration-300">
													Referrals
												</Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Link
													to={"/policies"}
													className="hover:text-green-800 duration-300">
													Policies
												</Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Link
													to={"/visitingUsers"}
													className="hover:text-green-800 duration-300">
													Visiting Users
												</Link>
											</Dropdown.Item>
										</Dropdown>
									</div>

									<div className="text-white hover:bg-yellow-400 rounded-md px-3 py-2 bg-transparent font-light">
										<Dropdown
											label="Resources/Collections"
											inline>
											<Dropdown.Item>
												<Link
													to={"/databases"}
													className="hover:text-green-800 duration-300">
													Databases
												</Link>
											</Dropdown.Item>
										</Dropdown>
									</div>

									<div className="text-white hover:bg-yellow-400 rounded-md px-3 py-2 bg-transparent font-light">
										<Dropdown
											label="Learning Spaces"
											inline>
											<Dropdown.Item>
												<Link
													to={"/room"}
													className="hover:text-green-800 duration-300">
													AUDIO-VISUAL ROOM
												</Link>
											</Dropdown.Item>
										</Dropdown>
									</div>
									<a
										href="#"
										className="text-gray-300 hover:bg-yellow-400 duration-300 hover:text-white rounded-md px-3 py-2 text-md font-medium">
										Satellite Libraries
									</a>
								</div>
							</div>
						</div>
						<div className="flex flex-shrink-0 items-center">
							<p className="p-1.5 border-2 border-yellow-400 text-white px-6">Get Started</p>
						</div>
					</div>
				</div>

				<div
					className="sm:hidden"
					id="mobile-menu">
					<div className="space-y-1 px-2 pb-3 pt-2">
						<a
							href="#"
							className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
							aria-current="page">
							Dashboard
						</a>
						<a
							href="#"
							className="text-gray-300 hover:bg-yellow-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
							Team
						</a>
						<a
							href="#"
							className="text-gray-300 hover:bg-yellow-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
							Projects
						</a>
						<a
							href="#"
							className="text-gray-300 hover:bg-yellow-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
							Calendar
						</a>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
