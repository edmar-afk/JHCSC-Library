import { useRef, useEffect } from "react";
function Referrals() {
	const targetRef = useRef(null);

	useEffect(() => {
		if (targetRef.current) {
			targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, []); // Empty dependency array ensures this effect runs only once after the component mounts
	return (
		<>
			<div ref={targetRef} className="bg-white w-full">
				<div className="p-24">
					<p className="text-green-400 font-bold text-xl">Referral</p>
					<ol>
						<li>
							Referral letter will be provided to student/s who wishes to do research to other libraries subject to the
							rules and regulations of the school the wish to visit.
						</li>
						<li>All students who requested for referral letter must sign-in the record book.</li>
						<li>Referral letter will be issued upon presentation of the Library ID.</li>
					</ol>

					<div className="flex mt-4">
						<a className="mx-2 bg-green-400 p-1.5 rounded-md text-white hover:bg-green-600 cursor-pointer hover:scale-110 duration-300">
							Book Request(FAC)
						</a>
						<a className="mx-2 bg-green-400 p-1.5 rounded-md text-white hover:bg-green-600 cursor-pointer hover:scale-110 duration-300">
							Client Satisfaction
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Referrals;
