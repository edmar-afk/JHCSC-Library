import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Referrals() {
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
				className="bg-white w-full">
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { opacity: 1, x: 0 },
						hidden: { opacity: 0, x: 50 },
					}}
					transition={{ duration: 1 }}
					className="p-24">
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
				</motion.div>
			</div>
		</>
	);
}

export default Referrals;
