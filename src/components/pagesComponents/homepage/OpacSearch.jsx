import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import libraryBuilding from "../../../assets/img/libraryBuilding.jpg";import { faCalendarAlt, faClock, faCommentDots, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../../assets/data/api";
function OpacSearch() {
	const [currentDateTime, setCurrentDateTime] = useState(new Date());
	const [searchValue, setSearchValue] = useState("");
	const [views, setViews] = useState([]);
	const [daily, setDaily] = useState();

	const currentYear = new Date().getFullYear();
	const currentDate = new Date();
	const currentMonthWithLeadingZero = currentDate.toLocaleString("default", { month: "2-digit" });
	const currentDayWithLeadingZero = currentDate.toLocaleString("default", { day: "2-digit" });

	useEffect(() => {
		const fetchData = async () => {
			// setIsLoading(true); // Set loading to true before the fetch
			try {
				const visit = await axios.get(`${API_URL}/api/visits/`);
				setViews(visit.data.length);

				const daily = await axios.get(
					`${API_URL}api/views/daily/${currentYear}/${currentMonthWithLeadingZero}/${currentDayWithLeadingZero}`
				);
				const dailyCount = daily.data.length;
				setDaily(dailyCount);
			} catch (error) {
				console.error("Error fetching data:", error.response);
			} finally {
				// setIsLoading(false); // Set loading to false after fetch (regardless of success/error)
			}
		};

		fetchData();

		const interval = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, [currentYear, currentMonthWithLeadingZero, currentDayWithLeadingZero]);

	const formattedDateTime = currentDateTime.toLocaleString();

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<>
			<div className="py-24 bg-white w-full overflow-x-hidden">
				<div className="mx-4 lg:mx-32">
					<p className="text-center md:text-left text-sm md:text-xl text-gray-500">OPAC Search</p>

					<div className="flex items-center mx-auto mt-4">
						<label
							htmlFor="voice-search"
							className="sr-only">
							Search
						</label>
						<div className="relative w-full">
							<input
								type="text"
								id="voice-search"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full ps-4 p-2.5 placeholder-gray-400"
								placeholder="Search"
								required
								onChange={handleInputChange}
								value={searchValue} // Set the input value to the state variable
							/>
						</div>
						<a
							onClick={searchValue ? null : (e) => e.preventDefault()}
							target="_blank"
							href={`https://opac.jhcsc.edu.ph/cgi-bin/koha/opac-search.pl?idx=&q=${searchValue}&branch_group_limit=&weight_search=1`}
							className={`inline-flex items-center py-2.5 px-3 ms-2 text-xs md:text-sm font-medium text-white ${
								searchValue
									? "bg-green-700 border-green-700 hover:bg-green-800"
									: "bg-red-700 border-red-700 hover:bg-red-800 cursor-not-allowed"
							}  rounded-lg border duration-300`}>
							<svg
								className="w-4 h-4 me-0 md:me-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
							<p className="hidden md:block">Search</p>
						</a>
					</div>

					<a href="https://opac.jhcsc.edu.ph/cgi-bin/koha/opac-search.pl" target="_blank">
						<p className="text-center underline mt-2 cursor-pointer mb-14">Advanced Search</p>
					</a>

					<div className="flex flex-row justify-center flex-wrap md:flex-nowrap">
						<img
							src={libraryBuilding}
							alt=""
							className="w-[100%] sm:w-[60%]"
						/>
						<div className="flex flex-row md:flex-col ml-0 md:ml-8 flex-wrap justify-evenly">
							<div className="flex flex-row py-5">
								<FontAwesomeIcon
									icon={faClock}
									className="text-lg md:text-4xl text-yellow-500"
								/>
								<div className="flex flex-col ml-2 md:ml-4 text-gray-400">
									<p className="font-bold text-sm md:text-xl text-gray-600">Library Hours</p>
									<p className="mt-2 text-xs md:text-sm font-semibold">Monday - Friday</p>
									<p className="text-xs md:text-sm font-semibold">07:00AM - 06:00PM</p>
								</div>
							</div>

							<div className="flex flex-row py-5">
								<FontAwesomeIcon
									icon={faCalendarAlt}
									className="text-lg md:text-4xl text-yellow-500"
								/>
								<div className="flex flex-col ml-2 md:ml-4 text-gray-400">
									<p className="font-bold text-sm md:text-xl text-gray-600">Date Today</p>
									<p className="mt-2 text-xs md:text-sm font-semibold">{formattedDateTime}</p>
								</div>
							</div>

							<div className="flex flex-row py-5">
								<FontAwesomeIcon
									icon={faUser}
									className="text-lg md:text-4xl text-yellow-500"
								/>
								<div className="flex flex-col ml-2 md:ml-4 text-gray-400">
									<p className="font-bold text-sm md:text-xl text-gray-600">Visitors</p>
									<div className="flex mt-2">
										<p className="bg-red-400 p-[2px] px-2 rounded-md mx-1 text-white text-xs font-bold">
											Today: {daily}
										</p>
										<p className="bg-green-800 p-[2px] px-2 rounded-md mx-1 text-white text-xs font-bold">
											Total: {views}
										</p>
									</div>
								</div>
							</div>

							<div className="flex flex-row py-5">
								<FontAwesomeIcon
									icon={faCommentDots}
									className="text-lg md:text-4xl text-yellow-500"
								/>
								<div className="flex flex-col ml-2 md:ml-4 text-green-600">
									<p className="font-bold text-sm md:text-xl text-gray-600">Ask the Librarian</p>
									<a
										href="mailto:jhcscmainlib2020@gmail.com"
										className="mt-2 text-xs md:text-sm font-semibold">
										jhcscmainlib2020@gmail.com
									</a>
									<a
										href="library@jhcsc.edu.ph"
										target="_blank"
										className="text-xs md:text-sm font-semibold">
										library@jhcsc.edu.ph
									</a>
									<a
										href="library@jhcsc.edu.ph"
										target="_blank"
										className="text-xs md:text-sm font-semibold">
										library@jhcsc.edu.ph
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OpacSearch;
