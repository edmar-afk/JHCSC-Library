import { motion, useAnimation } from "framer-motion";import { useInView } from "react-intersection-observer";import { useEffect } from "react";function Video() {	const controls = useAnimation();
	const [ref, inView] = useInView({ reset: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);
	return (
		<>
			<div className="bg-white py-2 w-full">
				<div className="mx-4 lg:mx-32 flex flex-col mb-32">
					<p className="text-yellow-300 ml-2 mb-4">__________________</p>
					<motion.p
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 2 }}
						className="text-4xl font-bold">
						COLLEGE LIBRARY
					</motion.p>

					<motion.iframe
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{ duration: 1 }}
						className="mt-4 h-[600px]"
						width="100%"
						src="https://www.youtube.com/embed/ZyqWfwQmk1U"
						allowFullScreen></motion.iframe>
				</div>
			</div>
		</>
	);
}

export default Video;
