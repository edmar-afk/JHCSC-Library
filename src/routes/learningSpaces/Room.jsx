/* eslint-disable react/no-unescaped-entities */ import { useState, useEffect } from "react";function Room() {
	const [currentTime, setCurrentTime] = useState(new Date());
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const formatDate = (date) => {
		const options = {
			month: "2-digit",
			day: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: true,
		};

		return new Intl.DateTimeFormat("en-US", options).format(date);
	};

	return (
		<>
			<div className="bg-white py-4 lg:py-24 w-full">
				<div className="mx-4 lg:mx-32">
					<div className="flex items-center">
						<p className="text-gray-400 font-semibold text-sm tracking-wide">ROOM</p>
						<p className="text-yellow-300 ml-2 mb-4">__________________</p>
					</div>
					<p className="font-bold text-4xl">AUDIO-VISUAL ROOM</p>

					<div className="flex flex-row flex-wrap lg:flex-nowrap mt-24 justify-between">
						<div className="flex flex-col w-full max-w-full lg:max-w-[320px] mr-0 lg:mr-8">
							<div>
								<div className="border-2 rounded-t-md bg-gray-100">
									<p className="my-2 mx-2">Space Booking</p>
								</div>
								<div className="border-2 border-t-0 rounded-b-md mb-4 p-4">
									<p className="mb-4">Click the button below to book a discussion rooms in the Library!</p>
									<a
										href="#"
										className="bg-cyan-400 hover:bg-cyan-600 hover:text-white duration-300 p-1.5 rounded-md text-sm">
										Book a Discussion Room
									</a>
								</div>
							</div>

							<div>
								<div className="border-2 rounded-t-md bg-gray-100">
									<p className="my-2 mx-2">Today's Date and Time</p>
								</div>
								<div className="border-2 border-t-0 rounded-b-md mb-4 p-4">
									<div className="border-b-2">
										<p className="mb-4 text-center">{formatDate(currentTime)}</p>
									</div>
									<div className="text-center text-sm mt-2">
										<p className="text-blue-600">The learning commons</p>
										<p>07:00 AM - 06:00 PM</p>
									</div>
								</div>
							</div>
						</div>

						<div className="grow h-full">
							<div className="border-2 rounded-t-md bg-gray-100">
								<p className="my-2 mx-2">Guidelines and Policies</p>
							</div>
							<div className="border-2 border-t-0 rounded-b-md mb-4 p-4">
								<ul className="list-disc mx-4 break-words text-md">
									<li>The use of the Audio Visual Room must be in a first come first serve basis.</li>
									<li>
										The user, i.e. students; teachers; department must schedule the utilization of the AVR five (5) days
										before the actual usage.
									</li>
									<li>
										The user of the room shall be responsible for the immediate removal and "clean-up" of decoration,
										props, etc. after the even or the program.
									</li>
									<li>
										The individual or department who is responsible for the event or program take charge of the damage,
										misuse, deterioration, vandalism, and the theft of any equipment or facilities and if anything
										happen or destroyed, they shall be required to pay, repair, replace or shoulder the cost of same;
										refusal to do so and valid investigation shall be subject to disciplinary action or prescribe in the
										College Code.
									</li>
									<li>
										The user must at all times be responsible to ensure that all exits must remain unobstracted and
										accessible to all.
									</li>
									<li>The JHCSC AVR is a smoke free area.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Room;
