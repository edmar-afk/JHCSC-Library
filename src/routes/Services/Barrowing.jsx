import admin from "../../assets/img/admin.jpg";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Barrowing() {
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
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
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
							hidden: { opacity: 0, x: 50 },
						}}
						transition={{ duration: 1 }}
						className="flex-initial w-[90%] lg:w-[40%] mt-14 lg:mt-0">
						<p className="text-green-600 font-bold text-2xl">Borrowing & Returning</p>

						<p className="break-words mt-8 font-bold text-gray-700">Borrowing of Books</p>
						<ol className="list-decimal ml-8">
							<li>
								Students must present their Library ID to the section in-charge before they ask for the books they
								wanted to borrow.
							</li>
							<li>Books can only be borrowed for a limited time, unless not needed by other users.</li>
							<li>Students who want to photocopy the material are given 30 minutes only.</li>
						</ol>

						<p className="break-words mt-8 font-bold text-gray-700">Loss of Books</p>
						<ol className="list-decimal ml-8">
							<li>Any library material lost must be replaced by the borrower.</li>
							<li>
								Any lost book should be replaced by the same or later edition of the same title of the original book.
							</li>
						</ol>
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default Barrowing;
