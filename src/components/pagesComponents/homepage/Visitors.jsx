/* eslint-disable react/no-unescaped-entities */ import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/img/logo.png";
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";
import { dates } from "../../../assets/data/links";
import { useState, useEffect } from "react";
import axios from "axios";
function Visitors() {
	const [visitorCount, setVisitorCount] = useState(0);

	useEffect(() => {
		const visitDate = localStorage.getItem("visitDate");
		const currentDate = new Date().toISOString().slice(0, 10); // Get current date in yyyy-mm-dd format

		// If the visit date is different from the current date, count the visit
		if (visitDate !== currentDate) {
			axios
				.get("http://127.0.0.1:8000/api/visitor-views/")
				.then((response) => {
					setVisitorCount(response.data.count);
					// Update local storage with the current date to indicate visit has been counted for the day
					localStorage.setItem("visitDate", currentDate);
				})
				.catch((error) => {
					console.error("Error fetching visitor count:", error);
				});
		}
	}, []);

	const currentMonth = new Date().toLocaleString("default", { month: "long" });

	const [dateToggle, setDateToggle] = useState(false);
	const [inputDate, setInputDate] = useState(currentMonth);

	const handleButtonClick = (date) => {
		setInputDate(date);
	};
	return (
		<>
			<div className="bg-black/50 p-4 lg:p-24 text-white w-full">
				<div className="flex items-center">
					<p className="text-md font-semibold">VISITOR</p>
					<span className="ml-4 text-yellow-200 text-xs">──────────────</span>
				</div>
				<p className="text-4xl font-bold mt-2">SITE VISITOR</p>

				<div className="flex flex-row justify-evenly flex-wrap mt-14">
					<div className="flex items-center p-4 bg-white relative rounded w-full max-w-[320px] lg:max-w-[290px] 2xl:max-w-[320px] mb-4">
						<div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
							<img
								src={logo}
								className="w-12 h-12"
								alt="JH LOGO"
								draggable="false"
							/>
						</div>
						<div className="flex-grow flex flex-col ml-4 text-gray-700">
							<span className="text-xl font-bold">Total Visit</span>
							<div className="flex items-center justify-between">
								<span className="text-gray-500">1234567</span>
								<div className="text-green-500 text-sm font-semibold ml-2">Overall</div>
							</div>
						</div>
					</div>

					<div className="flex items-center p-4 bg-white rounded w-full max-w-[320px] lg:max-w-[290px] 2xl:max-w-[320px] mb-4">
						<div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
							<img
								src={logo}
								className="w-12 h-12"
								alt="JH LOGO"
								draggable="false"
							/>
						</div>
						<div className="flex-grow flex flex-col ml-4 text-gray-700">
							<span className="text-xl font-bold">Today's Visit</span>
							<div className="flex items-center justify-between">
								<span className="text-gray-500">{visitorCount}</span>
								<div className="text-green-500 text-sm font-semibold ml-2">Monday</div>
							</div>
						</div>
					</div>

					<div
						className={`flex items-center p-4 bg-white rounded relative w-full max-w-[320px] lg:max-w-[290px] 2xl:max-w-[320px] ${
							dateToggle ? "mb-16 sm:mb-0" : "mb-4"
						}`}>
						{dateToggle && (
							<div className="absolute flex-col bottom-[-60px] left-0">
								<div className="bg-green-800 flex justify-center p-2 rounded-lg text-white text-xs w-full max-w-[320px] lg:max-w-[290px] 2xl:max-w-[320px] flex-wrap">
									{dates.map((lists) => {
										const { id, date } = lists;

										return (
											<button
												onClick={() => handleButtonClick(date)}
												className="px-2 hover:bg-green-400 hover:text-gray-800 hover:font-bold rounded-md duration-300 cursor-pointer"
												key={id}>
												{date}
											</button>
										);
									})}
								</div>
							</div>
						)}

						<div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
							<img
								src={logo}
								className="w-12 h-12"
								alt="JH LOGO"
								draggable="false"
							/>
						</div>
						<div className="flex-grow flex flex-col ml-4 text-gray-700">
							<span className="text-xl font-bold">Monthly Visit</span>
							<div className="flex items-center justify-between">
								<span className="text-gray-500">1234567</span>
								<div
									onClick={() => setDateToggle(!dateToggle)}
									className="text-green-500 text-sm font-semibold ml-2 hover:text-gray-800 cursor-pointer hover:scale-110 duration-300">
									{inputDate} 2024 <FontAwesomeIcon icon={faArrowDownShortWide} />
								</div>
							</div>
						</div>
					</div>

					<div className="flex items-center p-4 bg-white rounded w-full max-w-[320px] lg:max-w-[290px] 2xl:max-w-[320px] mb-4">
						<div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
							<img
								src={logo}
								className="w-12 h-12"
								alt="JH LOGO"
								draggable="false"
							/>
						</div>
						<div className="flex-grow flex flex-col ml-4 text-gray-700">
							<span className="text-xl font-bold">Yearly Visit</span>
							<div className="flex items-center justify-between">
								<span className="text-gray-500">1234567</span>
								<div className="text-green-500 text-sm font-semibold ml-2">2024</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Visitors;
