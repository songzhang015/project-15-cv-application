// TextInput.jsx

function TextInput({ id, label, value, onChange }) {
	return (
		<div className="text-input">
			<label htmlFor={id} className="text-input-label">
				{label}
			</label>
			<input
				id={id}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="text-input-field"
			></input>
		</div>
	);
}

export default TextInput;
