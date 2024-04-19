import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { faFacebook } from "@fortawesome/free-brands-svg-icons";import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function Contact() {
	const controls = useAnimation();
	const [ref, inView] = useInView({ reset: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<>
			<div className="bg-white py-24 w-full">
				<div className="mx-4 lg:mx-32">
					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 1 }}
						className="flex items-center">
						<p className="text-gray-400 font-semibold text-xs md:text-sm tracking-wide">CONTACT</p>
						<p className="text-yellow-300 ml-2 mb-4">__________________</p>
					</motion.div>
					<motion.p
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 1 }}
						className="font-bold text-4xl">
						CONTACT US
					</motion.p>

					<div className="flex flex-row justify-between flex-wrap sm:flex-nowrap">
						<motion.div
							ref={ref}
							initial="hidden"
							animate={controls}
							variants={{
								visible: { opacity: 1, scale: 1 },
								hidden: { opacity: 0, scale: 0 },
							}}
							transition={{ duration: 1 }}
							className="flex flex-col mt-4 sm:mt-12 flex-wrap w-[30rem]">
							<div className="flex items-center my-4">
								<FontAwesomeIcon
									icon={faLocationDot}
									className="bg-yellow-400 text-white p-4 rounded-lg"
								/>
								<div className="ml-4 ">
									<p className="text-md sm:text-2xl font-semibold">Location:</p>
									<p className="text-xs md:text-sm text-gray-600">Mati, San Miguel Zamboanga del Sur</p>
								</div>
							</div>
							<div className="flex items-center my-4">
								<FontAwesomeIcon
									icon={faEnvelope}
									className="bg-yellow-400 text-white p-4 rounded-lg"
								/>
								<div className="ml-4 ">
									<p className="text-md sm:text-2xl font-semibold">Mail:</p>
									<p className="text-xs md:text-sm text-gray-600">library@jhcsc.edu.ph</p>
								</div>
							</div>
							<div className="flex items-center my-4">
								<FontAwesomeIcon
									icon={faFacebook}
									className="bg-yellow-400 text-white p-4 rounded-lg"
								/>
								<div className="ml-4 ">
									<p className="text-md sm:text-2xl font-semibold">Facebook Page</p>
									<p className="text-xs md:text-sm text-gray-600">JHCSC Library</p>
								</div>
							</div>
						</motion.div>

						<motion.iframe
							ref={ref}
							initial="hidden"
							animate={controls}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: -50 },
							}}
							transition={{ duration: 1 }}
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7516.279861429809!2d123.29238100000002!3d7.707905000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256a7c534e55169%3A0xc912169190408699!2sJ.H.%20Cerilles%20State%20College%20-%20Main%20Campus!5e1!3m2!1sen!2sph!4v1711541368703!5m2!1sen!2sph"
							width="100%"
							height="450"
							className="border-0 mt-14 ml-0 sm:ml-24"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></motion.iframe>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
