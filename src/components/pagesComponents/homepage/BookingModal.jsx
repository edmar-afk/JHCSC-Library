import { Button, Modal } from "flowbite-react";import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "../../../assets/data/events";
function BookingModal() {
	const [openModal, setOpenModal] = useState(false);
	const localizer = momentLocalizer(moment); // or globalizeLocalizer
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
						<Calendar
							localizer={localizer}
							events={events}
							startAccessor="start"
							endAccessor="end"
						/>
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
