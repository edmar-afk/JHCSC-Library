/* eslint-disable react/no-unescaped-entities */ import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faDatabase } from "@fortawesome/free-solid-svg-icons";
function Banner() {
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
						<div className="p-4 md:p-8 border-[1px] w-full md:w-[200px] my-2 border-gray-200/30 mx-3 hover:border-yellow-300 text-white hover:text-yellow-300 duration-300">
							<div className="flex flex-col mx-2 my-4">
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="text-3xl text-yellow-300"
								/>
								<p className="font-bold mt-2 text-[19px]">AVR Booking</p>
							</div>
						</div>

						<div className="p-8 border-[1px] w-full md:w-[200px] my-2 border-gray-200/30 mx-3 hover:border-yellow-300 text-white hover:text-yellow-300 duration-300">
							<div className="flex flex-col mx-2 my-2">
								<FontAwesomeIcon
									icon={faDatabase}
									className="text-3xl text-yellow-300"
								/>
								<p className="font-bold mt-2 text-xl">OPAC</p>
							</div>
						</div>

						<div className="p-8 border-[1px] w-full md:w-[200px] my-2 border-gray-200/30 mx-3 hover:border-yellow-300 text-white hover:text-yellow-300 duration-300">
							<div className="flex flex-col mx-2 my-2">
								<FontAwesomeIcon
									icon={faDatabase}
									className="text-3xl text-yellow-300"
								/>
								<p className="font-bold mt-2 text-xl">Subanen Collection</p>
							</div>
						</div>

						<div className="p-8 border-[1px] w-full md:w-[200px] my-2 border-gray-200/30 mx-3 hover:border-yellow-300 text-white hover:text-yellow-300 duration-300">
							<div className="flex flex-col mx-2 my-2">
								<FontAwesomeIcon
									icon={faDatabase}
									className="text-3xl text-yellow-300"
								/>
								<p className="font-bold mt-2 text-xl">eRepository</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
