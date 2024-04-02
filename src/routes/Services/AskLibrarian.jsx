import admin from "../../assets/img/admin.jpg";
function AskLibrarian() {
	return (
		<>
			<div className="bg-white py-16">
				<div className="mx-4 lg:mx-32 flex flex-row items-center justify-center flex-wrap lg:flex-nowrap">
					<img
						src={admin}
						alt="admin building"
						className="w-full max-w-[550px] h-[200px] sm:h-[400px] mr-0 sm:mr-12"
					/>
					<div className="flex-initial w-[90%] lg:w-[40%] mt-14 lg:mt-0">
						<p className="text-green-600 font-bold text-2xl">Ask the Librarian</p>

						<p className="break-words">
							Through chat, email, facebook and short messaging system (SMS), the Librarian gives precise and prompt
							responses to reference queries.
						</p>
						<ol className="list-disc ml-8">
							<li>
								Email:
								<ol className="ml-8 list-decimal">
									<li>
										<p className="text-yellow-400">library@jhcsc.edu.ph</p>
									</li>
									<li>
										<p className="text-yellow-400">jhcscmainlib2020@gmail.com</p>
									</li>
								</ol>
							</li>
							<li>SMS: +639076771755</li>
							<li>Messenger: Facebook Messenger</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	);
}

export default AskLibrarian;
