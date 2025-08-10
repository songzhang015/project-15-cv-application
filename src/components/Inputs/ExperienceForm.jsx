// ExperienceForm.jsx

import "../../styles/Inputs.css";
import { useState } from "react";
import TextInput from "../fields/TextInput";
import TextArea from "../fields/TextArea";

function ExperienceForm() {
	const [formData, setFormData] = useState({
		jobRole: "Title",
		companyTitle: "Company",
		companyLocation: "City, ST",
		startDate: "January 1234",
		endDate: "December 1234",
		description:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit. " +
			"Quisque faucibus ex sapien vitae pellentesque sem placerat. " +
			"In id cursus mi pretium tellus duis convallis.",
	});

	function handleInputChange(field, value) {
		setFormData((prev) => ({ ...prev, [field]: value }));
	}

	return (
		<form className="experience-form">
			<TextInput
				id="jobRole"
				label="Job Role"
				value={formData.jobRole}
				onChange={(value) => handleInputChange("jobRole", value)}
			/>
			<TextInput
				id="companyTitle"
				label="Company Title"
				value={formData.companyTitle}
				onChange={(value) => handleInputChange("companyTitle", value)}
			/>
			<TextInput
				id="companyLocation"
				label="Company Location"
				value={formData.companyLocation}
				onChange={(value) => handleInputChange("companyLocation", value)}
			/>
			<TextInput
				id="startDate"
				label="Start Date"
				value={formData.startDate}
				onChange={(value) => handleInputChange("startDate", value)}
			/>
			<TextInput
				id="endDate"
				label="End Date"
				value={formData.endDate}
				onChange={(value) => handleInputChange("endDate", value)}
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

export default ExperienceForm;
