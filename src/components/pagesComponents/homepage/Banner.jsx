/* eslint-disable react/no-unescaped-entities */ import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faDatabase } from "@fortawesome/free-solid-svg-icons";
import BookingModal from "./BookingModal";
import Booking from "../../../assets/data/Booking.pdf";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function Banner() {
	const controls = useAnimation();
	const [ref, inView] = useInView({ reset: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);
	return (
		<>
			<div className="w-full h-full md:h-screen bg">
				<div className="flex flex-col justify-center items-center">
					<div className="mb-24 mt-40 md:mt-56 text-center">
						<p className="text-white text-3xl md:text-6xl font-bold">JHCSC Library</p>
						<p className="text-yellow-300 text-xs md:text-lg mt-4">
							"Stronger and Bolder JHCSC for Quality Tertiary Education"
						</p>
					</div>

					<div className="flex flex-row justify-center mb-32 md:mb-48 text-center flex-wrap">
						<motion.div
							ref={ref}
							initial="hidden"
							animate={controls}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: 20 },
							}}
							transition={{ duration: 0.5 }}
							className="bg-transparent relative hover:cursor-pointer p-4 md:p-8 border-[1px] w-full md:w-[200px] my-2
							border-gray-200/30 mx-3 hover:border-yellow-300 text-white hover:text-yellow-300 duration-300">
							<a
								href={Booking}
								target="_blank">
								<div className="flex flex-col mx-2 my-4">
									<FontAwesomeIcon
										icon={faCalendarDays}
										className="text-3xl text-yellow-300"
									/>
									<p className="font-bold mt-2 text-[19px]">AVR Booking</p>
								</div>
							</a>
							<button className="absolute bottom-2 left-0 right-0 text-center z-30 animate-pulse hover:scale-110 duration-300 text-green-100">
								<BookingModal />
							</button>
						</motion.div>
						<motion.a
							ref={ref}
							initial="hidden"
							animate={controls}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: 20 },
							}}
							transition={{ duration: 0.5 }}
							href="https://opac.jhcsc.edu.ph/cgi-bin/koha/opac-main.pl"
							target="_blank"
							className="bg-transparent hover:cursor-pointer p-8 border-[1px] w-full md:w-[200px] my-2 border-gray-200/30 mx-3 hover:border-yellow-300 text-white hover:text-yellow-300 duration-300">
							<div className="flex flex-col mx-2 my-2">
								<FontAwesomeIcon
									icon={faDatabase}
									className="text-3xl text-yellow-300"
								/>
								<p className="font-bold mt-2 text-xl">OPAC</p>
							</div>
						</motion.a>
						<motion.a
							ref={ref}
							initial="hidden"
							animate={controls}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: 20 },
							}}
							transition={{ duration: 0.5 }}
							href="https://subanencc.librarika.com/"
							target="_blank"
							className="bg-transparent hover:cursor-pointer p-8 border-[1px] w-full md:w-[200px] my-2 border-gray-200/30 mx-3 hover:border-yellow-300 text-white hover:text-yellow-300 duration-300">
							<div className="flex flex-col mx-2 my-2">
								<FontAwesomeIcon
									icon={faDatabase}
									className="text-3xl text-yellow-300"
								/>
								<p className="font-bold mt-2 text-xl">Subanen Collection</p>
							</div>
						</motion.a>

						<motion.a
							ref={ref}
							initial="hidden"
							animate={controls}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: 20 },
							}}
							transition={{ duration: 0.5 }}
							href="https://jhmainliberepository.pythonanywhere.com/login/"
							target="_blank"
							className="bg-transparent hover:cursor-pointer p-8 border-[1px] w-full md:w-[200px] my-2 border-gray-200/30 mx-3 hover:border-yellow-300 text-white hover:text-yellow-300 duration-300">
							<div className="flex flex-col mx-2 my-2">
								<FontAwesomeIcon
									icon={faDatabase}
									className="text-3xl text-yellow-300"
								/>
								<p className="font-bold mt-2 text-xl">eRepository</p>
							</div>
						</motion.a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
