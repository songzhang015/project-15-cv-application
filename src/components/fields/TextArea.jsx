// TextArea.jsx

function TextArea({ id, label, value, onChange }) {
	return (
		<div className="text-area">
			<label htmlFor={id} className="text-area-label">
				{label}
			</label>
			<textarea
				id={id}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="text-area-field"
				rows={6}
			></textarea>
		</div>
	);
}

export default TextArea;
