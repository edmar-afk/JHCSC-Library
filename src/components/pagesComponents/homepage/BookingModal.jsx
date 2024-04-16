import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Example from "./Example";


function BookingModal() {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<p
				onClick={() => setOpenModal(true)}
				className="z-20">
				Set Schedule
			</p>
			<Modal
				size="6xl"
				dismissible
				show={openModal}
				onClose={() => setOpenModal(false)}>
				<Modal.Header>Book a Schedule</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<Example/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setOpenModal(false)}>Book</Button>
					<Button
						color="gray"
						onClick={() => setOpenModal(false)}>
						Decline
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default BookingModal;
