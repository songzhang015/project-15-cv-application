// Inputs.jsx

import { useState } from "react";
import "../../styles/Inputs.css";
import SectionTabs from "./SectionTabs";
import GeneralForm from "./GeneralForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";

function Inputs() {
	const [activeTab, setActiveTab] = useState("general");

	const [experiences, setExperiences] = useState([
		{
			jobRole: "Title",
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

	const [editModeIndex, setEditModeIndex] = useState(null);

	function updateExperience(index, newData) {
		setExperiences((prev) => {
			const newExperiences = [...prev];
			newExperiences[index] = newData;
			return newExperiences;
		});
	}

	function addExperience() {
		setExperiences((prev) => [
			...prev,
			{
				jobRole: "",
				companyTitle: "",
				companyLocation: "",
				startDate: "",
				endDate: "",
				description: "",
			},
		]);
		setEditModeIndex(experiences.length);
	}

	function deleteExperience(index) {
		setExperiences((prev) => prev.filter((experience, idx) => idx !== index));
		setEditModeIndex(null);
	}

	return (
		<div className="inputs">
			<SectionTabs activeTab={activeTab} onTabChange={setActiveTab} />

			{activeTab === "general" && <GeneralForm />}

			{activeTab === "experience" && (
				<>
					{editModeIndex === null ? (
						<>
							{experiences.map((experience, index) => (
								<div key={index}>
									<div
										key={index}
										className="input-card"
										onClick={() => setEditModeIndex(index)}
									>
										{experience.jobRole || "New Experience"}
									</div>
								</div>
							))}

							<button className="new-card" onClick={addExperience}>
								+ Add Experience
							</button>
						</>
					) : (
						<ExperienceForm
							formData={experiences[editModeIndex]}
							onFormChange={(newData) =>
								updateExperience(editModeIndex, newData)
							}
							onSave={() => setEditModeIndex(null)}
							onDelete={() => deleteExperience(editModeIndex)}
						/>
					)}
				</>
			)}

			{activeTab === "education" && <EducationForm />}

			{activeTab === "skills" && <SkillsForm />}
		</div>
	);
}

export default Inputs;
