// EducationForm.jsx

import "../../styles/Inputs.css";
import { useState } from "react";
import TextInput from "../fields/TextInput";
import TextArea from "../fields/TextArea";

function EducationForm() {
	const [formData, setFormData] = useState({
		degree: "John Doe",
		university: "john.doe@email.com",
		location: "+1 (123) 456-7890",
		startDate: "City, ST",
		endDate: "City, ST",
	});

	function handleInputChange(field, value) {
		setFormData((prev) => ({ ...prev, [field]: value }));
	}

	return (
		<form className="education-form">
			<TextInput
				id="degree"
				label="Degree"
				value={formData.degree}
				onChange={(value) => handleInputChange("degree", value)}
			/>
			<TextInput
				id="university"
				label="University"
				value={formData.university}
				onChange={(value) => handleInputChange("university", value)}
			/>
			<TextInput
				id="location"
				label="Location"
				value={formData.location}
				onChange={(value) => handleInputChange("location", value)}
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
		</form>
	);
}

export default EducationForm;
