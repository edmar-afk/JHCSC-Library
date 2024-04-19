/* eslint-disable react/no-unescaped-entities */ import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import logo from "../../../assets/img/logo.png";import { faArrowDownShortWide, faSpinner } from "@fortawesome/free-solid-svg-icons";import { dates } from "../../../assets/data/links";import { useState, useEffect } from "react";import API_URL from "../../../assets/data/api";import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
function Visitors() {
	const controls = useAnimation();
	const [ref, inView] = useInView({ reset: true });
	const currentMonth = new Date().toLocaleString("default", { month: "short" });
	const currentYear = new Date().getFullYear();
	const currentDate = new Date();
	const currentMonthNum = currentDate.getMonth() + 1;
	const currentMonthWithLeadingZero = currentDate.toLocaleString("default", { month: "2-digit" });
	const currentDayWithLeadingZero = currentDate.toLocaleString("default", { day: "2-digit" });

	const [dateToggle, setDateToggle] = useState(false);
	const [inputDate, setInputDate] = useState(currentMonth);
	const [dateCount, setDateCount] = useState(0);
	const [viewsMonth, setViewsMonth] = useState(currentMonthNum);
	const [yearViewsCount, setYearViewsCount] = useState();
	const [daily, setDaily] = useState();

	const [totalViews, setTotalViews] = useState(0);
	const [isLoading, setIsLoading] = useState(false); // State for loading spinner
	const handleButtonClick = (date, id) => {
		setInputDate(date);
		setViewsMonth(id);
	};

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		const fetchData = async () => {
			try {
				setIsLoading(true); // Set loading to true before fetching data

				const total = await axios.get(`${API_URL}api/visits/`);
				const totalCount = total.data.length;
				setTotalViews(totalCount);

				const daily = await axios.get(
					`${API_URL}api/views/daily/${currentYear}/${currentMonthWithLeadingZero}/${currentDayWithLeadingZero}`
				);
				const dailyCount = daily.data.length;
				setDaily(dailyCount);

				const monthly = await axios.get(`${API_URL}api/views/month/${viewsMonth}/`);
				const monthCount = monthly.data.length;
				setDateCount(monthCount);

				const yearly = await axios.get(`${API_URL}api/views/year/${currentYear}/`);
				const yearCount = yearly.data.length;
				setYearViewsCount(yearCount);

				setIsLoading(false); // Set loading to false after fetching data
			} catch (error) {
				console.error("Error fetching data:", error);
				setIsLoading(false); // Set loading to false in case of error
			}
		};

		fetchData();
	}, [viewsMonth, currentYear, currentMonthWithLeadingZero, currentDayWithLeadingZero, controls, inView]); // Make sure to include month in the dependency array to re-fetch data when month changes

	return (
		<>
			<div className="bg-black/50 p-4 lg:p-24 text-white w-full">
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 },
					}}
					transition={{ duration: 1 }}
					className="flex items-center">
					<p className="text-md font-semibold">VISITOR</p>
					<span className="ml-4 text-yellow-200 text-xs">──────────────</span>
				</motion.div>
				<motion.p
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 },
					}}
					transition={{ duration: 1 }}
					className="text-4xl font-bold mt-2">
					SITE VISITOR
				</motion.p>

				<div className="flex flex-row justify-evenly flex-wrap mt-14">
					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 1 }}
						className="flex items-center p-4 bg-white relative rounded w-full max-w-[320px] lg:max-w-[290px] 2xl:max-w-[320px] mb-4">
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
								<span className="text-gray-500">{totalViews}</span>
								<div className="text-green-500 text-sm font-semibold ml-2">Overall</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 1 }}
						className="flex items-center p-4 bg-white rounded w-full max-w-[320px] lg:max-w-[290px] 2xl:max-w-[320px] mb-4">
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
								<span className="text-gray-500">{daily}</span>
								<div className="text-green-500 text-sm font-semibold ml-2">Monday</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 1 }}
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
												onClick={() => handleButtonClick(date, id)}
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
								<span className="text-gray-500">
									{isLoading ? (
										<FontAwesomeIcon
											icon={faSpinner}
											className="animate-spin"
										/>
									) : (
										<p> {dateCount}</p>
									)}
								</span>
								<div
									onClick={() => setDateToggle(!dateToggle)}
									className="text-green-500 text-sm font-semibold ml-2 hover:text-gray-800 cursor-pointer hover:scale-110 duration-300">
									{inputDate} 2024 <FontAwesomeIcon icon={faArrowDownShortWide} />
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 1 }}
						className="flex items-center p-4 bg-white rounded w-full max-w-[320px] lg:max-w-[290px] 2xl:max-w-[320px] mb-4">
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
								<span className="text-gray-500">{yearViewsCount}</span>
								<div className="text-green-500 text-sm font-semibold ml-2">2024</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default Visitors;
