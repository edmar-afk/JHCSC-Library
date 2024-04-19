import loader from "../assets/img/loader.gif";function Loader() {
	return (
		<>
			<div className="fixed top-0 left-0 w-screen h-screen bg-[#1D2E28] z-[100]">
				<img
					src={loader}
					alt=""
					className="mx-auto mt-52 mb-96 w-72"
				/>
			</div>
		</>
	);
}

export default Loader;
