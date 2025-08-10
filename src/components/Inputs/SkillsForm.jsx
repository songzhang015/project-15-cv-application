// SkillsForm.jsx

import "../../styles/Inputs.css";
import { useState } from "react";
import TextInput from "../fields/TextInput";
import TextArea from "../fields/TextArea";

function SkillsForm() {
	const [formData, setFormData] = useState({
		skill: "Skill",
		description:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit. " +
			"Quisque faucibus ex sapien vitae pellentesque sem placerat. " +
			"In id cursus mi pretium tellus duis convallis.",
	});

	function handleInputChange(field, value) {
		setFormData((prev) => ({ ...prev, [field]: value }));
	}

	return (
		<form className="skills-form">
			<TextInput
				id="skill"
				label="Skill"
				value={formData.skill}
				onChange={(value) => handleInputChange("skill", value)}
			/>
			<TextArea
				id="description"
				label="Description"
				value={formData.description}
				onChange={(value) => handleInputChange("description", value)}
			/>
		</form>
	);
}

export default SkillsForm;
