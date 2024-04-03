import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/logo.png";
import { faEllipsis, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Chat() {
	const [ellipsesHover, setEllpsesHover] = useState(false);
	const [chatModal, setChatModal] = useState(false);
	const [startChat, setStartChat] = useState(false);
	return (
		<>
			<div
				className={`fixed ${
					chatModal ? "scale-100" : "scale-0"
				} left-8 bottom-24 h-[370px] w-[370px] bg-gray-100 rounded-3xl duration-300 shadow-xl`}>
				<div className="relative">
					<div className="p-4 flex flex-col">
						<div className="flex flex-row items-center justify-between mx-4 mt-4">
							<img
								src={logo}
								className="w-12"
								alt=""
							/>

							<div className="flex">
								<div className="relative">
									<FontAwesomeIcon
										icon={faEllipsis}
										onClick={() => setEllpsesHover(!ellipsesHover)}
										className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300"
									/>

									{ellipsesHover && (
										<>
											<div
												onClick={() => {
													setEllpsesHover(!ellipsesHover);
												}}
												className="bg-gray-400/10 h-full w-full fixed left-0 top-0"></div>
											<div className="absolute w-[350px] left-[-253px] top-12 bg-white shadow-2xl rounded-xl p-3 z-30">
												<p className="cursor pointer">Visit Facebook Page</p>
												<p className="mt-4">Add Messenger to your website</p>
											</div>
										</>
									)}
								</div>
								<FontAwesomeIcon
									onClick={() => setChatModal(false)}
									icon={faMinus}
									className="bg-gray-200 p-2 ml-4 rounded-full cursor-pointer hover:bg-gray-300"
								/>
							</div>
						</div>

						<div className="mt-8 mx-4 font-semibold text-xl">
							<p>Chat with JHCSC Library</p>
							<p className="font-light text-sm mt-8">Hi! How can we help you?</p>
						</div>

						{startChat && (
							<div>
								<div
									onClick={() => setStartChat(!startChat)}
									className="bg-gray-800/30 w-full h-full fixed left-0 top-0 rounded-3xl"></div>
								<div className="bg-white fixed w-full left-0 bottom-0 rounded-3xl flex flex-col items-center p-4">
									<p className="text-xl font-bold mt-4">Log In</p>
									<button className="bg-green-600 text-white font-semibold text-lg py-3 px-32 rounded-xl mt-6 mb-6">
										Continue
									</button>
								</div>
							</div>
						)}

						<div className="flex flex-col items-center justify-center mt-16">
							<button
								onClick={() => setStartChat(!startChat)}
								className="bg-lime-600 text-white font-semibold py-3 px-32 rounded-2xl mb-6">
								Start Chat
							</button>
							<div className="flex items-center font-semibold text-sm">
								<FontAwesomeIcon
									icon={faFacebookMessenger}
									className="mr-2"
								/>
								Powered by Messenger
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				onClick={() => setChatModal(!chatModal)}
				className="fixed left-8 bottom-8 bg-green-600 rounded-full p-2 cursor-pointer">
				<div className="flex flex-row items-center mx-2 text-white">
					<FontAwesomeIcon
						icon={faFacebookMessenger}
						className="mr-2 text-xl animate-pulse"
					/>
					<p className="text-lg font-semibold">Chat</p>
				</div>
			</div>
		</>
	);
}

export default Chat;
