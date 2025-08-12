import { useState, useRef } from "react";
import "./App.css";
import Inputs from "./components/Inputs/Inputs";
import Resume from "./components/Resume/Resume";
import html2pdf from "html2pdf.js";

function App() {
	const resumeRef = useRef(null);
	const handleDownloadPdf = () => {
		html2pdf(resumeRef.current, {
			filename: "resume.pdf",
			html2canvas: { scale: 3 },
			jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
		});
	};

	const [generalData, setGeneralData] = useState({
		fullName: "John Doe",
		email: "john.doe@email.com",
		phoneNumber: "+1 (123) 456-7890",
		address: "City, ST",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit. " +
			"Quisque faucibus ex sapien vitae pellentesque sem placerat. " +
			"In id cursus mi pretium tellus duis convallis.",
	});

	const [experiences, setExperiences] = useState([
		{
			jobRole: "Job Role",
			companyTitle: "Company",
			companyLocation: "City, ST",
			startDate: "January 1234",
			endDate: "December 1234",
			description:
				"Lorem ipsum dolor sit amet consectetur adipiscing elit. " +
				"Quisque faucibus ex sapien vitae pellentesque sem placerat. " +
				"In id cursus mi pretium tellus duis convallis.",
		},
	]);

	const [educations, setEducations] = useState([
		{
			degree: "Degree in Major",
			university: "University of State",
			location: "City, ST",
			startDate: "January 1234",
			endDate: "December 1234",
		},
	]);

	const [skills, setSkills] = useState([
		{ skill: "Proficient in X" },
		{ skill: "Proficient in Y" },
		{ skill: "Proficient in Z" },
	]);

	return (
		<div className="app">
			<button className="download-btn" onClick={handleDownloadPdf}>
				Download PDF
			</button>
			<Inputs
				generalData={generalData}
				setGeneralData={setGeneralData}
				experiences={experiences}
				setExperiences={setExperiences}
				educations={educations}
				setEducations={setEducations}
				skills={skills}
				setSkills={setSkills}
			/>
			<div ref={resumeRef}>
				<Resume
					generalData={generalData}
					experiences={experiences}
					educations={educations}
					skills={skills}
				/>
			</div>
		</div>
	);
}

export default App;
