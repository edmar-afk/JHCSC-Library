import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function History() {
	const controls = useAnimation();
	const [ref, inView] = useInView({ reset: true });
	const targetRef = useRef(null);

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (targetRef.current) {
			targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, [controls, inView]); // Empty dependency array ensures this effect runs only once after the component mounts

	return (
		<>
			<div
				ref={targetRef}
				className="p-4 sm:p-12 lg:p-32 bg-white">
				<motion.p
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { opacity: 1, x: 0 },
						hidden: { opacity: 0, x: 50 },
					}}
					transition={{ duration: 1 }}
					className="text-green-600 font-bold text-2xl mb-4">
					History Of JHCSC
				</motion.p>
				<motion.p
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						visible: { opacity: 1, x: 0 },
						hidden: { opacity: 0, x: -50 },
					}}
					transition={{ duration: 1 }}
					className="text-justify">
					Sometime in 1983, the members of San Miguel Municipal Council and the community folks of Mati, San Miguel,
					Zamboanga del Sur together with the Department of Education, Culture and Sports (DECS) officials strongly
					supported the move of Assemblyman Vicente Madarang Cerilles for the creation of a barangay high school in
					Mati. The school was named Josefina H. Cerilles Memorial Barangay High School in honor of the assemblyman’s
					beloved wife who was once a supervisor of DECS. This was approved through a Sangguniang Bayan Resolution No.
					23 in April 1983 and Sangguniang Panlalawigan Resolution No. 295-A in 1984 pursuant to DECS Order N0.6, series
					of 1983. Mr. Crispin Mag-usara took the leadership of the newly created school and not long after, Mr.
					Fortunato Gumintad succeeded him as teacher-in-charge. With the cooperation of the school’s faculty and staff,
					and the residents of the community, Mr. Gumintad made a lot of improvements of the school which was originally
					constructed out of light materials. In 1987, when all barangay high schools in the country were fully
					nationalized, the school’s name was changed to Josefina H. Cerilles National High School. In the succeeding
					year, it was one of the lucky recipients of the Secondary Education Development Program (SEDP) building
					package and subsequently thereafter, the U.S. AID academic building package. On February 25, 1995, Josefina H.
					Cerilles National High School was converted into Josefina H. Cerilles Polytechnic College by virtue of the
					Republic Act 7895 authored by Congressman Antonio H. Cerilles. With this development, the High School
					Department became the laboratory school of the Teacher Education Department of the College. In 1996, Josefina
					H. Cerilles Polytechnic College started its full operation as a CHED-supervised institution with Mr. Francisco
					Caylan of the DECS as its officer-in- charge. The first eight faculty members of the college were Mrs.
					Filomena G. Montealto, Mrs. Winifreda L. Rico, Mrs. Daylinda P. Sulong, Mrs. Mila A. Samin, MissNelia b.
					Aragon, Engr. Jerry B. Superales, Mr. Lumabao B. Sanlao and Mr. Jesus B. Purisima. In 1997, Mrs. Filomena G.
					Montealto was appointed as Vocational School Superintendent and since then, she took the lead in all the
					educational ventures of the College while at the same time upholding its vision, mission and goals by
					providing quality and relevant education to all its students. After six years of operation as a
					CHED-supervised institution, JHCPC was converted into Josefina H. Cerilles State College in August 11, 2011 by
					virtue of the Republic Act 9159 authored by Congresswoman Aurora E. Cerilles. Dr. Filomena G. Montealto was
					appointed as the first president of the state college. On February 21, 2005, Dr. Montealto tendered her
					voluntary resignation as president of the College due to health reasons. The JHCSC-Board of Trustees
					designated Mr. Dante B. Bayocot, the school registrar, as the officer-in-charge of the College. In order to
					make education accessible to the poorest of the poor in the province of Zamboanga del Sur, JHCSC campuses were
					opened in the municipalities of Tigbao, Lapuyan, Dimataling, Mahayag, Tambulig, and Ramon Magsaysay in June of
					2005. Three former Western Mindanao State University-External Studies Units’ (WMSU-ESU) were affiliated to
					JHCSC during this year. It was also the year which marked the opening of JHCSC-Pagadian Campus. In June 2006,
					two new campuses were opened in the municipalities of Josefina and San Pablo. A former WMSU-ESU in the
					municipality of Margosatubig was affiliated to JHCSC in June of this year. CMSECAT (Canuto MS Enerio College
					of Arts and Trade) in the municipality of Lakewood was integrated to the college in October of the same year.
					On December 1, 2006, Dr. Carlicita A. Saniel, was appointed by the JHCSC-BOT as President of the college to
					serve the remaining term of Dr. Filomena Montealto while Mr. Dante B. Bayocot assumed his former position as
					college registrar. In March 2007, Dr. Carlicita A. Saniel was installed by JHCSC-BOT as the second President
					of the college. During her term of office, new campuses were opened to cater the educational needs of the poor
					but deserving students of Zamboanga del Sur. These campuses are located in the municipalities of Vincenzo
					Sagun (opened in June 2007), Tabina (October 2007), Guipos (June 2009) and Sominot (June 2009). The
					integration of ZSAC (Zamboanga del Sur Agricultural College) to JHCSC in June 2009 led to the birth of
					JHCSC-Dumingag Campus. This was followed by the opening of a satellite campus of JHCSC-Main in Dumalinao and
					the satellite campus of JHCSC-Dumingag in Molave and Aurora. On June 15, 2012, JHCSC-BOT confirmed Dr.
					Carlicita A. Saniel as President of JHCSC for the second term. Today, The College has 21 campuses located in
					the different municipalities of Zamboanga del Sur. Its main campus is preparing for its Level 3 accreditation
					with AACCUP.
				</motion.p>
			</div>
		</>
	);
}

export default History;
