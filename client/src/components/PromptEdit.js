import React, { useState, useRef } from 'react';

export default function PromptEdit({
	control,
	prompt,
	loading,
	handleModalClose,
}) {
	const titleRef = useRef();
	const descriptionRef = useRef();
	const [type, setType] = useState(
		control === 'edit' ? prompt.type : 'sentence'
	);
	const [types] = useState([
		{ label: 'Sentence', value: 'sentence' },
		{ label: 'Paragraph', value: 'paragraph' },
		{ label: 'Essay', value: 'essay' },
	]);

	function handleChange(e) {
		setType(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className="modal__content flex flex-jc-c">
			<form className="flex flex-col" onSubmit={handleSubmit}>
				<label className="formLabel">Title</label>
				<input
					type="text"
					required
					ref={titleRef}
					value={control === 'edit' ? prompt.title : ''}
				/>
				<label className="formLabel">Description</label>
				<input
					type="text"
					ref={descriptionRef}
					placeholder="Optional"
					value={control === 'edit' ? prompt.description : ''}
				/>
				<label className="formLabel">Type</label>
				<select
					onChange={(e) => handleChange(e)}
					value={control === 'edit' ? prompt.type : ''}
				>
					{types.map((type) => (
						<option key={type.value} value={type.value}>
							{type.label}
						</option>
					))}
				</select>
				<div className="buttonPanel flex flex-jc-c flex-ai-c">
					<button type="button" onClick={handleModalClose}>
						Cancel
					</button>
					<button type="submit" disabled={loading}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
