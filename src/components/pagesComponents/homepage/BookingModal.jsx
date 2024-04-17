import { Button, Modal } from "flowbite-react";import { useState } from "react";
import Example from "./Example";
import Booking from "../../../assets/data/Booking.pdf";
function BookingModal() {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<p
				onClick={() => setOpenModal(true)}
				className="z-20">
				View Schedules
			</p>
			<Modal
				size="6xl"
				dismissible
				show={openModal}
				onClose={() => setOpenModal(false)}>
				<Modal.Header>View Schedules</Modal.Header>
				<Modal.Body>
					<div className="">
						<Example />
					</div>
				</Modal.Body>
				<Modal.Footer>
					<a
						className="bg-green-400 px-4 py-2 rounded-xl font-semibold hover:bg-green-600 hover:scale-110 duration-200 hover:text-white"
						href={Booking}
						target="_blank">
						Book
					</a>
					<Button
						color="gray"
						onClick={() => setOpenModal(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default BookingModal;
