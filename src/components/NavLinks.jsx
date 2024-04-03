import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

function NavLinks() {
	return (
		<>
			<Link
				to={"/"}
				className="text-gray-300 ml-4 duration-300 items-center hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-md font-medium">
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
		</>
	);
}

export default NavLinks;
