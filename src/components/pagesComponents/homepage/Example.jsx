/* eslint-disable react/prop-types */ import {	faArrowAltCircleLeft,	faArrowAltCircleRight,
	faBuildingLock,
	faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	add,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isEqual,
	isSameDay,
	isSameMonth,
	isToday,
	parse,
	parseISO,
	startOfToday,
} from "date-fns";
import logo from "../../../assets/img/logo.png";
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../../assets/data/api";
// State to store the bookings data

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		// Function to fetch data
		const fetchBookings = async () => {
			try {
				// Make GET request to the API endpoint
				const response = await axios.get(`${API_URL}api/booking/`);
				// Set the bookings state with the data from the response
				setBookings(response.data);
			} catch (error) {
				console.error("Error fetching bookings:", error);
			}
		};

		// Call the fetchBookings function
		fetchBookings();
	}, []);

	let today = startOfToday();
	let [selectedDay, setSelectedDay] = useState(today);
	let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
	let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

	let days = eachDayOfInterval({
		start: firstDayCurrentMonth,
		end: endOfMonth(firstDayCurrentMonth),
	});

	function previousMonth() {
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
		setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
	}

	function nextMonth() {
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
		setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
	}

	let selectedDayMeetings = bookings.filter((meeting) => isSameDay(parseISO(meeting.startDatetime), selectedDay));

	return (
		<div className="pt-2">
			<div className="max-w-md px-4 mx-auto md:max-w-6xl">
				<div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
					<div className="md:pr-14">
						<div className="flex items-center">
							<h2 className="flex-auto font-semibold text-gray-900">{format(firstDayCurrentMonth, "MMMM yyyy")}</h2>
							<button
								type="button"
								onClick={previousMonth}
								className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
								<span className="sr-only">Previous month</span>
								<FontAwesomeIcon icon={faArrowAltCircleLeft} />
							</button>
							<button
								onClick={nextMonth}
								type="button"
								className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
								<span className="sr-only">Next month</span>
								<FontAwesomeIcon icon={faArrowAltCircleRight} />
							</button>
						</div>
						<div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
							<div>S</div>
							<div>M</div>
							<div>T</div>
							<div>W</div>
							<div>T</div>
							<div>F</div>
							<div>S</div>
						</div>
						<div className="grid grid-cols-7 mt-0 text-sm">
							{days.map((day, dayIdx) => (
								<div
									key={day.toString()}
									className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], "py-3")}>
									<button
										type="button"
										onClick={() => setSelectedDay(day)}
										className={classNames(
											isEqual(day, selectedDay) && "text-white",
											!isEqual(day, selectedDay) && isToday(day) && "text-white bg-green-700 animate-pulse",
											!isEqual(day, selectedDay) &&
												!isToday(day) &&
												isSameMonth(day, firstDayCurrentMonth) &&
												"text-gray-900",
											!isEqual(day, selectedDay) &&
												!isToday(day) &&
												!isSameMonth(day, firstDayCurrentMonth) &&
												"text-gray-400",
											isEqual(day, selectedDay) && isToday(day) && "bg-green-500 animate-pulse",
											isEqual(day, selectedDay) && !isToday(day) && "bg-green-900",
											!isEqual(day, selectedDay) && "hover:bg-green-200",
											(isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
											"mx-auto flex h-8 w-8 items-center justify-center rounded-full"
										)}>
										<time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>
									</button>

									<div className="mx-auto -mt-0.5 relative">
										{bookings.some((meeting) => isSameDay(parseISO(meeting.startDatetime), day)) && (
											<div className="text-center">
												<FontAwesomeIcon
													icon={faXmarkCircle}
													className="text-red-600 animate-bounce"
												/>
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
					<section className="mt-12 md:mt-0 md:pl-4">
						<h2 className="font-semibold text-gray-900">
							Schedule for{" "}
							<time dateTime={format(selectedDay, "yyyy-MM-dd")}>{format(selectedDay, "MMM dd, yyy")}</time>
						</h2>
						<ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
							{selectedDayMeetings.length > 0 ? (
								selectedDayMeetings.map((meeting) => (
									<Meeting
										meeting={meeting}
										key={meeting.id}
									/>
								))
							) : (
								<>
									<div className="flex flex-col justify-center items-center h-full">
										<img
											src="https://cdn-icons-png.flaticon.com/512/5360/5360003.png"
											alt=""
											className="flex-none w-1/2"
										/>
										<p className="text-bold text-xl mt-12 text-gray-800">
											No upcoming booking for {format(selectedDay, "MMM dd")}.
										</p>
									</div>
								</>
							)}
						</ol>
					</section>
				</div>
			</div>
		</div>
	);
}

function Meeting({ meeting }) {
	let startDateTime = parseISO(meeting.startDatetime);
	let endDateTime = parseISO(meeting.endDatetime);

	return (
		<>
			<li className="pb-3 sm:pb-4 bg-gray-100 hover:bg-red-200 rounded-xl p-3 duration-300">
				<div className="flex items-center space-x-4">
					<div className="flex-shrink-0">
						<img
							className="w-8 h-8 rounded-full"
							src={logo}
						/>
					</div>
					<div className="flex-1 min-w-0">
						<p className="text-sm font-medium text-gray-900 truncate">{meeting.event}</p>
						<p className="text-sm text-gray-500 truncate">
							<time dateTime={meeting.startDatetime}>{format(startDateTime, "h:mm a")} - </time>
							<time dateTime={meeting.endDatetime}>{format(endDateTime, "h:mm a")}</time>
						</p>
					</div>
					<div className="inline-flex items-center text-base font-semibold text-gray-900">
						<FontAwesomeIcon
							icon={faBuildingLock}
							className="animate-pulse text-xl text-red-600"
						/>
					</div>
				</div>
			</li>
		</>
	);
}

let colStartClasses = ["", "col-start-2", "col-start-3", "col-start-4", "col-start-5", "col-start-6", "col-start-7"];
