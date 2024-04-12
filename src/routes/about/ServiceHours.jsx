/* eslint-disable react/no-unescaped-entities */
import admin from "../../assets/img/admin.jpg";
import { useRef, useEffect } from "react";
function ServiceHours() {
	const targetRef = useRef(null);

	useEffect(() => {
		if (targetRef.current) {
			targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, []); // Empty dependency array ensures this effect runs only once after the component mounts
	return (
		<>
			<div
				ref={targetRef}
				className="bg-white py-16">
				<div className="mx-4 lg:mx-32 flex flex-row items-center justify-center flex-wrap lg:flex-nowrap">
					<img
						src={admin}
						alt="admin building"
						className="w-full max-w-[550px] h-[200px] sm:h-[400px] mr-0 sm:mr-12"
					/>
					<div className="flex-initial w-[90%] lg:w-[40%] mt-14 lg:mt-0">
						<p className="text-green-600 font-bold text-2xl">Service Hours</p>
						<ol className="list-disc">
							<ul className="break-words">
								<p className="font-bold text-gray-800">Library Hours Policy</p>
								The library is open 54 hours per week. Currently, operating hours are Monday-Friday, from 7:00 AM to
								6:00 PM, no noon-break. The library is closed on Saturdays, Sundays, Holidays as well as all holidays'
								days observed by the Province of Zamboanga del Sur.
							</ul>
						</ol>
					</div>
				</div>
			</div>
		</>
	);
}

export default ServiceHours;
