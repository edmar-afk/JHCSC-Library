import gale from "../../assets/img/gale.jpg";import pej from "../../assets/img/pej.jpg";
import pq from "../../assets/img/pq.png";
import { useRef, useEffect } from "react";
function Databases() {
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
				className="bg-white py-4 lg:py-24 w-full">
				<div className="mx-4 lg:mx-32">
					<div className="flex items-center">
						<p className="text-gray-400 font-semibold text-sm tracking-wide">Databases</p>
						<p className="text-yellow-300 ml-2 mb-4">__________________</p>
					</div>
					<p className="font-bold text-4xl">JHCSC DATABASES</p>

					<div className="flex flex-row justify-evenly mt-12 flex-wrap">
						<div className="flex flex-col w-full max-w-[370px] my-16">
							<img
								src={gale}
								className="w-44"
								alt=""
							/>
							<p className="text-gray-700 font-semibold text-xl mt-6 mb-2">Gale Ref Complete</p>
							<p>
								Gale offers a variety of resources for education, lifelong learning, and academic research. Whether you
								are looking for peer-reviewed articles; full-text magazines, newspapers, and eBooks; primary source
								documents; and videos or podcasts, Gale puts the right vetted content and tools at your fingertips!
							</p>
							<a
								href="https://link.gale.com/apps/"
								className="text-blue-600 font-bold mt-4"
								target="_blank">
								https://link.gale.com/apps/
							</a>
						</div>

						<div className="flex flex-col w-full max-w-[370px] my-16">
							<img
								src={pej}
								className="w-24"
								alt=""
							/>
							<p className="text-gray-700 font-semibold text-xl mt-6 mb-2">Phil E-Journal</p>
							<p>
								The Philippine E-Journals is an expanding collection of academic journals that are made accessible
								globally through a single Web-based platform. It is hosted by C&E Publishing, Inc., a premier
								educational publisher in the Philippines and a leader in the distribution of integrated
								information-based solutions.
							</p>
							<a
								href="https://ejournals.ph/"
								className="text-blue-600 font-bold mt-4"
								target="_blank">
								https://ejournals.ph/
							</a>
						</div>

						<div className="flex flex-col w-full max-w-[370px] my-16">
							<img
								src={pq}
								className="w-44"
								alt=""
							/>
							<p className="text-gray-700 font-semibold text-xl mt-6 mb-2">ProQuest</p>
							<p>Empower researchers to take on today’s global challenges.</p>
							<a
								href="https://www.proquest.com/"
								className="text-blue-600 font-bold mt-4"
								target="_blank">
								https://www.proquest.com/
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Databases;
