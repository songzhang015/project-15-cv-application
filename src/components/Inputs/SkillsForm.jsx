// SkillsForm.jsx

import "../../styles/Inputs.css";
import TextInput from "../fields/TextInput";
import TextArea from "../fields/TextArea";

function SkillsForm({ formData, onFormChange, onSave, onDelete }) {
	function handleInputChange(field, value) {
		onFormChange({ ...formData, [field]: value });
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

export default SkillsForm;
