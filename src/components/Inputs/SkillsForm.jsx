// SkillsForm.jsx

import "../../styles/Inputs.css";
import TextInput from "../fields/TextInput";

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

export default SkillsForm;
