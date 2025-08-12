// EducationForm.jsx

import "../../styles/Inputs.css";
import TextInput from "../fields/TextInput";
import TextArea from "../fields/TextArea";

function EducationForm({ formData, onFormChange, onSave, onDelete }) {
	function handleInputChange(field, value) {
		onFormChange({ ...formData, [field]: value });
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

			<div className="form-actions">
				<button type="button" className="delete-input-btn" onClick={onDelete}>
					Delete
				</button>
				<button type="button" className="save-input-btn" onClick={onSave}>
					Save
				</button>
			</div>
		</form>
	);
}

export default EducationForm;
