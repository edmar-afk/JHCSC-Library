/* eslint-disable react/prop-types */ import {	faArrowAltCircleLeft,	faArrowAltCircleRight,} from "@fortawesome/free-solid-svg-icons";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import {	add,	eachDayOfInterval,	endOfMonth,	format,
	getDay,
	isEqual,
	isSameDay,
	isSameMonth,
	isToday,
	parse,
	parseISO,
	startOfToday,
} from "date-fns";
import { useState } from "react";

const meetings = [
	{
		id: 1,
		name: "Capstone defend for BSIT",
		imageUrl: "https://t3.ftcdn.net/jpg/01/38/48/40/360_F_138484065_1enzXuW8NlkppNxSv4hVUrYoeF8qgoeY.jpg",
		startDatetime: "2024-04-11T13:00",
		endDatetime: "2024-05-11T14:30",
	},
	{
		id: 2,
		name: "",
		imageUrl: "https://t3.ftcdn.net/jpg/01/38/48/40/360_F_138484065_1enzXuW8NlkppNxSv4hVUrYoeF8qgoeY.jpg",
		startDatetime: "2024-05-20T09:00",
		endDatetime: "2024-05-20T11:30",
	},
	{
		id: 3,
		name: "",
		imageUrl: "https://t3.ftcdn.net/jpg/01/38/48/40/360_F_138484065_1enzXuW8NlkppNxSv4hVUrYoeF8qgoeY.jpg",
		startDatetime: "2024-05-20T17:00",
		endDatetime: "2024-05-20T18:30",
	},
	{
		id: 4,
		name: "",
		imageUrl: "https://t3.ftcdn.net/jpg/01/38/48/40/360_F_138484065_1enzXuW8NlkppNxSv4hVUrYoeF8qgoeY.jpg",
		startDatetime: "2024-06-09T13:00",
		endDatetime: "2024-06-09T14:30",
	},
	{
		id: 5,
		name: "",
		imageUrl: "https://t3.ftcdn.net/jpg/01/38/48/40/360_F_138484065_1enzXuW8NlkppNxSv4hVUrYoeF8qgoeY.jpg",
		startDatetime: "2024-05-13T14:00",
		endDatetime: "2024-05-13T14:30",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
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

	let selectedDayMeetings = meetings.filter((meeting) => isSameDay(parseISO(meeting.startDatetime), selectedDay));

	return (
		<div className="pt-16">
			<div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
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
						<div className="grid grid-cols-7 mt-2 text-sm">
							{days.map((day, dayIdx) => (
								<div
									key={day.toString()}
									className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], "py-1.5")}>
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

									<div className="w-1 h-1 mx-auto mt-1">
										{meetings.some((meeting) => isSameDay(parseISO(meeting.startDatetime), day)) && (
											<div className="w-1 h-1 rounded-full bg-sky-500"></div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
					<section className="mt-12 md:mt-0 md:pl-14">
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
										<p className="text-bold text-xl mt-12">No booking for today.</p>
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
		<li className="flex flex-col items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
			<img
				src={meeting.imageUrl}
				alt=""
				className="flex-none w-full"
			/>
			<div className="flex flex-col font-bold text-xl mt-4  items-center">
				<div>
					<p className="text-green-900">{meeting.name}</p>
				</div>
				<div className="flex flex-row">
					<time dateTime={meeting.startDatetime}>{format(startDateTime, "h:mm a")}</time> -{" "}
					<time dateTime={meeting.endDatetime}>{format(endDateTime, "h:mm a")}</time>
				</div>
			</div>
		</li>
	);
}

let colStartClasses = ["", "col-start-2", "col-start-3", "col-start-4", "col-start-5", "col-start-6", "col-start-7"];
