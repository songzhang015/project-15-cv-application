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

	return (
		<div className="inputs">
			<SectionTabs activeTab={activeTab} onTabChange={setActiveTab} />
			{activeTab === "general" && <GeneralForm />}
			{activeTab === "experience" && <ExperienceForm />}
			{activeTab === "education" && <EducationForm />}
			{activeTab === "skills" && <SkillsForm />}
		</div>
	);
}

export default Inputs;
