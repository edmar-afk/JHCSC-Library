import { useState, useEffect } from "react";import axios from "axios";import { Carousel } from "flowbite-react";
import logo from "../../../assets/img/logo.png";
import API_URL from "../../../assets/data/api";
import mainLib from "../../../assets/img/libraries/mainLib.png";
import dumingagLib from "../../../assets/img/libraries/dumingagLib.png";
import pagadianLib from "../../../assets/img/libraries/pagadianLib.png";
import canutoLib from "../../../assets/img/libraries/canutoLib.png";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Libraries() {
	const controls = useAnimation();
	const [ref, inView] = useInView({ reset: true });
	const [librarians, setLibrarians] = useState([]);
	const [mainCampus, setMainCampus] = useState([]);
	const [dumingagCampus, setDumingagCampus] = useState([]);
	const [pagadianCampus, setPagadianCampus] = useState([]);
	const [canutoCampus, setCanutoCampus] = useState([]);
	useEffect(() => {
		const fetchLibrarians = async () => {
			if (inView) {
				controls.start("visible");
			}
			try {
				//all librarians head
				const response = await axios.get(`${API_URL}api/librarians/`);
				setLibrarians(response.data);

				//main campus librarians
				const mainCampusResponse = await axios.get(`${API_URL}api/main/`);
				setMainCampus(mainCampusResponse.data);

				//dumingag campus librarians
				const dumingagCampusResponse = await axios.get(`${API_URL}api/dumingag/`);
				setDumingagCampus(dumingagCampusResponse.data);

				//pagadian campus librarians
				const pagadianCampusResponse = await axios.get(`${API_URL}api/pagadian/`);
				setPagadianCampus(pagadianCampusResponse.data);

				//canuto campus librarians
				const canutoCampusResponse = await axios.get(`${API_URL}api/canuto/`);
				setCanutoCampus(canutoCampusResponse.data);
			} catch (error) {
				console.error("Error fetching librarians:", error);
			}
		};

		fetchLibrarians();
	}, [ controls, inView]);

	const campuses = [
		{ id: 1, campusName: "Main", img: mainLib },
		{ id: 2, campusName: "Dumingag", img: dumingagLib },
		{ id: 3, campusName: "Pagadian", img: pagadianLib },
		{ id: 4, campusName: "Canuto", img: canutoLib },
	];
	return (
		<>
			<div className="bg-white py-4 lg:py-24 w-full">
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { x: 0 },
						hidden: { x: -50 },
					}}
					transition={{ duration: 1 }}
					className="mx-4 lg:mx-32">
					<div className="flex items-center">
						<p className="text-gray-400 font-semibold text-sm tracking-wide">LIBRARIES</p>
						<p className="text-yellow-300 ml-2 mb-4">__________________</p>
					</div>
					<p className="font-bold text-4xl">JHCSC LIBRARIES</p>
				</motion.div>

				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { x: 0 },
						hidden: { x: 50 },
					}}
					transition={{ duration: 1 }}
					className="flex flex-row flex-wrap justify-evenly mt-8">
					{librarians
						.filter((list) => list.is_librarian_head)
						.map(({ id, name, site, email, facebook_link }) => {
							const campus = campuses.find((campus) => campus.campusName === site);
							if (!campus) return null; // handle the case where campus image is not found

							return (
								<div
									className="flex flex-col my-8"
									key={id}>
									<img
										src={campus.img}
										alt=""
										className="w-40 h-32"
										draggable="false"
									/>
									<p className="my-4 font-semibold text-lg">{site} Campus</p>
									<ol className="list-disc ml-12">
										<li>{name}</li>
										<li className="font-bold">
											<a
												href={`mailto:${email}?subject=Hello&body=Hello%20there,`}
												className="text-green-600">
												{email}
											</a>
										</li>
										<li>
											<a
												href={facebook_link}
												target="_blank"
												rel="noopener noreferrer"
												className="font-bold text-green-600">
												Facebook Page
											</a>
										</li>
									</ol>
								</div>
							);
						})}
				</motion.div>
			</div>
			<div className="bg-black/50 lg:p-4 text-white">
				<div className="h-screen sm:h-[640px] md:h-[710px] xl:h-[600px] 2xl:h-[600px]">
					<Carousel>
						<div className="flex flex-col justify-center items-center">
							<p className="text-center text-yellow-400 mb-24 font-semibold text-xl sm:text-4xl mt-4">Main Library</p>
							{mainCampus
								.filter((list) => list.is_librarian_head)
								.map(({ id, name, position, user_image }) => (
									<div
										className="flex flex-col justify-center items-center"
										key={id}>
										<img
											src={user_image}
											className="w-12 sm:w-24 rounded-full"
											alt=""
										/>
										<p className="text-lg font-bold">{name}</p>
										<p>{position}</p>
									</div>
								))}
							<div className="flex flex-col md:flex-row justify-center mt-8 flex-wrap">
								{mainCampus
									.filter((list) => !list.is_librarian_head)
									.map(({ id, name, position, user_image }) => (
										<div
											className="flex flex-col items-center mx-12 my-2"
											key={id}>
											<img
												src={user_image}
												className="w-4 h-24 sm:w-24 rounded-full"
												alt=""
											/>
											<p className="text-sm sm:text-lg font-bold">{name}</p>
											<p className="text-xs sm:text-md">{position}</p>
										</div>
									))}
							</div>
						</div>

						<div className="flex flex-col justify-center items-center">
							<p className="text-center text-yellow-400 mb-12 font-semibold text-xl sm:text-4xl">Dumingag Library</p>
							{dumingagCampus
								.filter((list) => list.is_librarian_head)
								.map(({ id, name, position, user_image }) => (
									<div
										className="flex flex-col items-center"
										key={id}>
										<img
											src={user_image}
											className="w-12 sm:w-24 rounded-full"
											alt=""
										/>
										<p className="text-lg font-bold">{name}</p>
										<p>{position}</p>
									</div>
								))}
							<div className="flex flex-col md:flex-row justify-between mt-8 flex-wrap">
								{dumingagCampus
									.filter((list) => !list.is_librarian_head)
									.map(({ id, name, position, user_image }) => (
										<div
											className="flex flex-col items-center mx-12 my-2"
											key={id}>
											<img
												src={user_image}
												className="w-4 h-24 sm:w-24 rounded-full"
												alt=""
											/>
											<p className="text-sm sm:text-lg font-bold">{name}</p>
											<p className="text-xs sm:text-md">{position}</p>
										</div>
									))}
							</div>
						</div>

						<div className="flex flex-col justify-center items-center">
							<p className="text-center text-yellow-400 mb-12 font-semibold text-xl sm:text-4xl">Pagadian Library</p>
							{pagadianCampus
								.filter((list) => list.is_librarian_head)
								.map(({ id, name, position, user_image }) => (
									<div
										className="flex flex-col items-center"
										key={id}>
										<img
											src={user_image}
											className="w-12 sm:w-24 rounded-full"
											alt=""
										/>
										<p className="text-lg font-bold">{name}</p>
										<p>{position}</p>
									</div>
								))}
							<div className="flex flex-col md:flex-row justify-between mt-8 flex-wrap">
								{pagadianCampus
									.filter((list) => !list.is_librarian_head)
									.map(({ id, name, position, user_image }) => (
										<div
											className="flex flex-col items-center mx-12 my-2"
											key={id}>
											<img
												src={user_image}
												className="w-12 sm:w-24 rounded-full"
												alt=""
											/>
											<p className="text-sm sm:text-lg font-bold">{name}</p>
											<p className="text-xs sm:text-md">{position}</p>
										</div>
									))}
							</div>
						</div>

						<div className="flex flex-col justify-center items-center">
							<p className="text-center text-yellow-400 mb-12 font-semibold text-xl sm:text-4xl">
								Canuto MS Enerio Library
							</p>
							{canutoCampus
								.filter((list) => list.is_librarian_head)
								.map(({ id, name, position, user_image }) => (
									<div
										className="flex flex-col items-center"
										key={id}>
										<img
											src={user_image}
											className="w-12 sm:w-24"
											alt=""
										/>
										<p className="text-lg font-bold">{name}</p>
										<p>{position}</p>
									</div>
								))}
							<div className="flex flex-col md:flex-row justify-between mt-8 flex-wrap">
								{canutoCampus
									.filter((list) => !list.is_librarian_head)
									.map(({ id, name, position }) => (
										<div
											className="flex flex-col items-center mx-12 my-2"
											key={id}>
											<img
												src={logo}
												className="w-12 sm:w-24 rounded-full"
												alt=""
											/>
											<p className="text-sm sm:text-lg font-bold">{name}</p>
											<p className="text-xs sm:text-md">{position}</p>
										</div>
									))}
							</div>
						</div>
					</Carousel>
				</div>
			</div>
		</>
	);
}

export default Libraries;
