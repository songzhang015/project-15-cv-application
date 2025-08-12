// Inputs.jsx

import { useState } from "react";
import "../../styles/Inputs.css";
import SectionTabs from "./SectionTabs";
import GeneralForm from "./GeneralForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";

function Inputs({
	generalData,
	setGeneralData,
	experiences,
	setExperiences,
	educations,
	setEducations,
	skills,
	setSkills,
}) {
	const [activeTab, setActiveTab] = useState("general");

	const [editModeIndex, setEditModeIndex] = useState(null);

	function handleTabChange(newTab) {
		setActiveTab(newTab);
		setEditModeIndex(null);
	}

	// Experience Functions
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

	// Education Functions
	function updateEducation(index, newData) {
		setEducations((prev) => {
			const newEducations = [...prev];
			newEducations[index] = newData;
			return newEducations;
		});
	}

	function addEducation() {
		setEducations((prev) => [
			...prev,
			{
				degree: "",
				university: "",
				location: "",
				startDate: "",
				endDate: "",
			},
		]);
		setEditModeIndex(educations.length);
	}

	function deleteEducation(index) {
		setEducations((prev) => prev.filter((education, idx) => idx !== index));
		setEditModeIndex(null);
	}

	// Skill Functions
	function updateSkill(index, newData) {
		setSkills((prev) => {
			const newSkills = [...prev];
			newSkills[index] = newData;
			return newSkills;
		});
	}

	function addSkill() {
		setSkills((prev) => [
			...prev,
			{
				skill: "",
				description: "",
			},
		]);
		setEditModeIndex(skills.length);
	}

	function deleteSkill(index) {
		setSkills((prev) => prev.filter((skill, idx) => idx !== index));
		setEditModeIndex(null);
	}

	return (
		<div className="inputs">
			<SectionTabs activeTab={activeTab} onTabChange={handleTabChange} />

			{activeTab === "general" && (
				<GeneralForm formData={generalData} onFormChange={setGeneralData} />
			)}

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

			{activeTab === "education" && (
				<>
					{editModeIndex === null ? (
						<>
							{educations.map((education, index) => (
								<div key={index}>
									<div
										key={index}
										className="input-card"
										onClick={() => setEditModeIndex(index)}
									>
										{education.degree || "New Education"}
									</div>
								</div>
							))}

							<button className="new-card" onClick={addEducation}>
								+ Add Education
							</button>
						</>
					) : (
						<EducationForm
							formData={educations[editModeIndex]}
							onFormChange={(newData) =>
								updateEducation(editModeIndex, newData)
							}
							onSave={() => setEditModeIndex(null)}
							onDelete={() => deleteEducation(editModeIndex)}
						/>
					)}
				</>
			)}

			{activeTab === "skills" && (
				<>
					{editModeIndex === null ? (
						<>
							{skills.map((skill, index) => (
								<div key={index}>
									<div
										key={index}
										className="input-card"
										onClick={() => setEditModeIndex(index)}
									>
										{skill.skill || "New Skill"}
									</div>
								</div>
							))}

							<button className="new-card" onClick={addSkill}>
								+ Add Skill
							</button>
						</>
					) : (
						<SkillsForm
							formData={skills[editModeIndex]}
							onFormChange={(newData) => updateSkill(editModeIndex, newData)}
							onSave={() => setEditModeIndex(null)}
							onDelete={() => deleteSkill(editModeIndex)}
						/>
					)}
				</>
			)}
		</div>
	);
}

export default Inputs;
