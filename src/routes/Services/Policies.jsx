import policies from "../../assets/img/policies.png";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Policies() {
	const controls = useAnimation();
	const [ref, inView] = useInView({ reset: true });
	const targetRef = useRef(null);

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (targetRef.current) {
			targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, [controls, inView]); // Empty dependency array ensures this effect runs only once after the component mounts
	return (
		<>
			<div
				ref={targetRef}
				className="bg-white py-16">
				<div className="mx-4 lg:mx-32 flex flex-row items-center justify-center flex-wrap lg:flex-nowrap">
					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, x: 0 },
							hidden: { opacity: 0, x: 50 },
						}}
						transition={{ duration: 1 }}
						className="flex-initial w-[90%] lg:w-[40%] mt-14 lg:mt-0">
						<p className="text-green-600 font-bold text-2xl">Library Policies</p>
						<p className="break-words mt-8 font-bold text-gray-700">Library Hours Policy</p>
						<ol className="list-disc ml-8">
							<li>
								The library is open 54 hours per week. Currently, operating hours are Monday-Friday, from 7:00 AM to
								6:00 PM, no noon-break. The library is closed on Saturdays, Sundays, Holidays as well as all holidays’
								days observed by the Province of Zamboanga del Sur
							</li>
						</ol>

						<p className="break-words mt-8 font-bold text-gray-700">Rules in the Use of Library</p>
						<ol className="list-disc ml-8">
							<li>
								The College Library seeks to provide a safe, friendly, and welcoming environment for library patrons and
								staff. In order to effectively accomplish this mission, it becomes necessary to outline certain
								prohibited behaviors. A complete understanding of what is and what is not permissible within the library
								benefits of patrons, staff, and any visitors to the premises. Internet is generated outside the library,
								the library is not held responsible for the information accuracy, authenticity, and recency.
							</li>
						</ol>
					</motion.div>

					<motion.img
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 1 }}
						src={policies}
						alt="admin building"
						className="w-full max-w-[650px] h-[200px] sm:h-[400px] mr-0 sm:mr-12"
						draggable="false"
					/>
				</div>
			</div>
		</>
	);
}

export default Policies;
