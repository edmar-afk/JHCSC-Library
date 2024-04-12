import admin from "../../assets/img/admin.jpg";
import { useRef, useEffect } from "react";

function VisionMission() {
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
				<div className="mx-4 lg:mx-32 flex flex-row justify-center flex-wrap lg:flex-nowrap">
					<img
						src={admin}
						alt="admin building"
						className="w-full max-w-[550px] h-[200px] sm:h-[400px] mr-0 sm:mr-12"
					/>
					<div className="flex-initial w-[90%] lg:w-[40%] mt-14 lg:mt-0">
						<p className="text-green-600 font-bold text-2xl">Vision</p>
						<ol className="list-disc ml-12">
							<ul className="break-words">
								Leading public higher education institution serving the ASEAN community with quality, innovative and
								culture-sensitive programs.
							</ul>
						</ol>

						<p className="mt-12 text-green-600 font-bold text-2xl">Mission</p>
						<ol className="list-disc ml-12">
							<ul>
								Provides relevant and responsive programs in Agriculture, Education and other courses deemed necessary
								for the fulfillment of its vision.
							</ul>
							<ul className="mt-2">
								Undertakes applied research, extension and production services that yield workable and durable solutions
								to sector specific challenges, thus improving the socio-economic well-being of identified communities.
							</ul>
						</ol>
					</div>
				</div>
			</div>
		</>
	);
}

export default VisionMission;
