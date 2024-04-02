function Video() {
	return (
		<>
			<div className="bg-white py-2 w-full">
				<div className="mx-4 lg:mx-32 flex flex-col mb-32">
					<p className="text-yellow-300 ml-2 mb-4">__________________</p>
					<p className="text-4xl font-bold">COLLEGE LIBRARY</p>

					<iframe
						className="mt-4 h-[600px]"
						width="100%"
						src="https://www.youtube.com/embed/ZyqWfwQmk1U"
						allowFullScreen></iframe>
				</div>
			</div>
		</>
	);
}

export default Video;
