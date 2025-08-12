// GeneralForm.jsx

import "../../styles/Inputs.css";
import TextInput from "../fields/TextInput";
import TextArea from "../fields/TextArea";

function GeneralForm({ formData, onFormChange }) {
	function handleInputChange(field, value) {
		onFormChange((prev) => ({ ...prev, [field]: value }));
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
