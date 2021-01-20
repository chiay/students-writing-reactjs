import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

export default function PromptEntryForm({
	list,
	setList,
	prompt,
	setModalOpen,
}) {
	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			title: prompt ? prompt.title : '',
			description: prompt ? prompt.description : '',
			type: prompt ? prompt.type : 'sentence',
		},
	});
	const [loading, setLoading] = useState(false);
	const { token } = useAuth();
	const types = [
		{ label: 'Sentence', value: 'sentence' },
		{ label: 'Paragraph', value: 'paragraph' },
		{ label: 'Essay', value: 'essay' },
	];
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};

	async function createPrompt(data) {
		setLoading(true);
		const { title, description, type } = data;
		try {
			const { data: prompt } = await axios.post(
				'/api/prompt/create',
				{
					title,
					description,
					type,
				},
				config
			);

			if (prompt) {
				setList([prompt, ...list]);
			}
		} catch (err) {
			console.log('Unable to create prompt.');
		}
		setLoading(false);
		setModalOpen(false);
	}

	async function editPrompt() {}

	return (
		<div className="modal__content flex flex-jc-c">
			<form
				className="flex flex-col flex-jc-c"
				onSubmit={handleSubmit(prompt ? editPrompt : createPrompt)}
			>
				<label className="formLabel">Title*</label>
				<input
					name="title"
					type="text"
					required
					ref={register({ required: true })}
				/>
				{errors.name && errors.title.type === 'required' && (
					<p className="">This field is required.</p>
				)}

				<label className="formLabel">Description</label>
				<input name="description" type="text" ref={register} />

				<label className="formLabel">Type*</label>
				<select name="type" ref={register}>
					{types.map((type) => (
						<option key={type.value} value={type.value}>
							{type.label}
						</option>
					))}
				</select>
				<div className="buttonPanel flex flex-jc-c flex-ai-c">
					<button type="button" onClick={() => setModalOpen(false)}>
						Close
					</button>
					<button type="submit" disabled={loading}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
