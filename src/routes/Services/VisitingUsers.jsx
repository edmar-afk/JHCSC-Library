/* eslint-disable react/no-unescaped-entities */ import visit from "../../assets/img/visit.png";
import { useRef, useEffect } from "react";
function VisitingUsers() {
	const targetRef = useRef(null);

	useEffect(() => {
		if (targetRef.current) {
			targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, []); // Empty dependency array ensures this effect runs only once after the component mounts
	return (
		<>
			<div ref={targetRef} className="bg-white py-16">
				<div className="mx-4 lg:mx-32 flex flex-row items-center justify-center flex-wrap lg:flex-nowrap">
					<img
						src={visit}
						alt="admin building"
						className="w-full max-w-[450px] h-[200px] sm:h-[400px] mr-0 sm:mr-12"
						draggable="false"
					/>
					<div className="flex-initial w-[90%] lg:w-[40%] mt-14 lg:mt-0">
						<p className="text-green-600 font-bold text-2xl">Visiting User/s</p>

						<p className="break-words mt-8 font-bold text-gray-700">Library Visitor/s</p>
						<ol className="list-decimal ml-8">
							<li>All Library visitor/s must present any valid Identification Card to the library in charge.</li>
							<li>The library visitor/s is required to log-in and out in the visitor's logbook.</li>
							<li>Visitor/s is subject to the library's rules and regulations when using the library.</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	);
}

export default VisitingUsers;
