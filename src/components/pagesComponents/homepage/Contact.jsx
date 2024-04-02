import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
function Contact() {
	return (
		<>
			<div className="bg-white py-24 w-full">
				<div className="mx-4 lg:mx-32">
					<div className="flex items-center">
						<p className="text-gray-400 font-semibold text-xs md:text-sm tracking-wide">CONTACT</p>
						<p className="text-yellow-300 ml-2 mb-4">__________________</p>
					</div>
					<p className="font-bold text-4xl">CONTACT US</p>

					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7516.279861429809!2d123.29238100000002!3d7.707905000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256a7c534e55169%3A0xc912169190408699!2sJ.H.%20Cerilles%20State%20College%20-%20Main%20Campus!5e1!3m2!1sen!2sph!4v1711541368703!5m2!1sen!2sph"
						width="100%"
						height="250"
						className="border-0 mt-14"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>

					<div className="flex flex-row justify-start lg:justify-between mt-4 sm:mt-12  flex-wrap">
						<div className="flex flex-col">
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
						</div>

						<div className="flex flex-col flex-1 mt-4 sm:mt-0">
							<div>
								<form
									action="#"
									className="ml-0 md:ml-24 items-center">
									<div className="flex flex-row mb-6">
										<input
											type="text"
											className="border-2 p-2 mr-2 w-full rounded-lg"
											placeholder="Your Name"
										/>

										<input
											type="text"
											className="border-2 p-2 ml-2 w-full rounded-lg"
											placeholder="Your Email"
										/>
									</div>
									<input
										type="text"
										className="border-2 p-2 w-full rounded-lg mb-6"
										placeholder="Your Name"
									/>

									<textarea
										className="border-2 p-2 w-full h-32 rounded-lg mb-6"
										placeholder="Message"
									/>
									<div className="flex justify-center">
										<button className="p-3 px-6 bg-yellow-300 rounded-lg hover:bg-yellow-500 hover:scale-105 duration-300">
											Send Message
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
