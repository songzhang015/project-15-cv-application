// GeneralForm.jsx

import "../../styles/Inputs.css";
import { useState } from "react";
import TextInput from "../fields/TextInput";
import TextArea from "../fields/TextArea";

function GeneralForm() {
	const [formData, setFormData] = useState({
		fullName: "John Doe",
		email: "john.doe@email.com",
		phoneNumber: "+1 (123) 456-7890",
		address: "City, ST",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit. " +
			"Quisque faucibus ex sapien vitae pellentesque sem placerat. " +
			"In id cursus mi pretium tellus duis convallis.",
	});

	function handleInputChange(field, value) {
		setFormData((prev) => ({ ...prev, [field]: value }));
	}

	return (
		<form className="general-form">
			<TextInput
				id="fullName"
				label="Full Name"
				value={formData.fullName}
				onChange={(value) => handleInputChange("fullName", value)}
			/>
			<TextInput
				id="email"
				label="Email"
				value={formData.email}
				onChange={(value) => handleInputChange("email", value)}
			/>
			<TextInput
				id="phoneNumber"
				label="Phone Number"
				value={formData.phoneNumber}
				onChange={(value) => handleInputChange("phoneNumber", value)}
			/>
			<TextInput
				id="address"
				label="Address"
				value={formData.address}
				onChange={(value) => handleInputChange("address", value)}
			/>
			<TextArea
				id="summary"
				label="Summary"
				value={formData.summary}
				onChange={(value) => handleInputChange("summary", value)}
			/>
		</form>
	);
}

export default GeneralForm;
