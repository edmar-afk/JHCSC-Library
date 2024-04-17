import admin from "../../assets/img/admin.jpg";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function AskLibrarian() {
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
					<motion.img
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, x: 0 },
							hidden: { opacity: 0, x: 50 },
						}}
						transition={{ duration: 1 }}
						src={admin}
						alt="admin building"
						className="w-full max-w-[550px] h-[200px] sm:h-[400px] mr-0 sm:mr-12"
					/>
					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, x: 0 },
							hidden: { opacity: 0, x: -50 },
						}}
						transition={{ duration: 1 }}
						className="flex-initial w-[90%] lg:w-[40%] mt-14 lg:mt-0">
						<p className="text-green-600 font-bold text-2xl">Ask the Librarian</p>

						<p className="break-words">
							Through chat, email, facebook and short messaging system (SMS), the Librarian gives precise and prompt
							responses to reference queries.
						</p>
						<ol className="list-disc ml-8">
							<li>
								Email:
								<ol className="ml-8 list-decimal">
									<li>
										<p className="text-yellow-400">library@jhcsc.edu.ph</p>
									</li>
									<li>
										<p className="text-yellow-400">jhcscmainlib2020@gmail.com</p>
									</li>
								</ol>
							</li>
							<li>SMS: +639076771755</li>
							<li>Messenger: Facebook Messenger</li>
						</ol>
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default AskLibrarian;
