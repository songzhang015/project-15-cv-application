// ExperienceForm.jsx

import "../../styles/Inputs.css";
import TextInput from "../fields/TextInput";
import TextArea from "../fields/TextArea";

function ExperienceForm({ formData, onFormChange, onSave, onDelete }) {
	function handleInputChange(field, value) {
		onFormChange({ ...formData, [field]: value });
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

			<div className="form-actions">
				<button type="button" className="save-input-btn" onClick={onSave}>
					Save
				</button>
				<button type="button" className="delete-input-btn" onClick={onDelete}>
					Delete
				</button>
			</div>
		</form>
	);
}

export default ExperienceForm;
