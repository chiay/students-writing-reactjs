import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from 'draftail';

export default function PromptEntryForm({
	id,
	list,
	setList,
	prompt,
	setModalOpen,
}) {
	const { register, handleSubmit, errors, control } = useForm({
		mode: 'onChange',
		defaultValues: {
			title: prompt ? prompt.title : '',
			description: prompt ? prompt.description : '',
			DraftEditor: prompt
				? EditorState.createWithContent(
						convertFromRaw(JSON.parse(prompt.content))
				  )
				: EditorState.createEmpty(),
			type: prompt ? prompt.type : 'sentence',
			grade_3: prompt ? prompt.grade.grade_3 : false,
			grade_4: prompt ? prompt.grade.grade_4 : false,
			grade_5: prompt ? prompt.grade.grade_5 : false,
			grade_6: prompt ? prompt.grade.grade_6 : false,
			grade_7: prompt ? prompt.grade.grade_7 : false,
			grade_8: prompt ? prompt.grade.grade_8 : false,
			grade_any: prompt ? prompt.grade.grade_any : false,
		},
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const { token } = useAuth();
	const types = [
		{ label: 'Sentence', value: 'sentence' },
		{ label: 'Paragraph', value: 'paragraph' },
		{ label: 'Essay', value: 'essay' },
	];
	const grades = [
		{ label: '3', value: false },
		{ label: '4', value: false },
		{ label: '5', value: false },
		{ label: '6', value: false },
		{ label: '7', value: false },
		{ label: '8', value: false },
		{ label: 'any', value: false },
	];
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};

	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	useEffect(() => {
		if (prompt?.content) {
			setEditorState(
				EditorState.createWithContent(
					convertFromRaw(JSON.parse(prompt.content))
				)
			);
		}
	}, [prompt]);

	async function createPrompt(data) {
		setLoading(true);
		setError('');
		const {
			title,
			description,
			type,
			grade_3,
			grade_4,
			grade_5,
			grade_6,
			grade_7,
			grade_8,
			grade_any,
		} = data;

		const contentState = editorState.getCurrentContent();

		try {
			const { data: prompt } = await axios.post(
				'/api/prompt/create',
				{
					title,
					description,
					content: JSON.stringify(convertToRaw(contentState)),
					type,
					grade: {
						grade_3,
						grade_4,
						grade_5,
						grade_6,
						grade_7,
						grade_8,
						grade_any,
					},
				},
				config
			);

			if (prompt) {
				const newPromptList = [prompt, ...list];
				setList(newPromptList);
			}
		} catch (err) {
			setError('Unable to create prompt.');
			console.log('Unable to create prompt.', err);
		}
		setLoading(false);
		setModalOpen();
	}

	async function editPrompt(data) {
		setLoading(true);
		setError('');
		const {
			title,
			description,
			type,
			grade_3,
			grade_4,
			grade_5,
			grade_6,
			grade_7,
			grade_8,
			grade_any,
		} = data;

		const contentState = editorState.getCurrentContent();

		try {
			await axios.patch(
				`/api/prompt/${id}/edit`,
				{
					title,
					description,
					content: JSON.stringify(convertToRaw(contentState)),
					type,
					grade: {
						grade_3,
						grade_4,
						grade_5,
						grade_6,
						grade_7,
						grade_8,
						grade_any,
					},
				},
				config
			);
		} catch (err) {
			console.log('Unable to edit prompt.');
		}
		setLoading(false);
		setModalOpen();
		window.location.replace(`/overview/${id}`);
	}

	return (
		<div className="content flex flex-jc-c">
			{error && (
				<div className="error">
					<label>{error}</label>
				</div>
			)}
			<form
				className="flex flex-col flex-jc-c"
				onSubmit={handleSubmit(prompt ? editPrompt : createPrompt)}
			>
				<label className="formLabel">Title / Question *</label>
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

				<label className="formLabel">
					Content (e.g. passage, extra info, etc.)
				</label>
				<Controller
					render={() => (
						<DraftailEditor
							editorState={editorState}
							onChange={setEditorState}
							blockTypes={[{ type: BLOCK_TYPE.UNSTYLED }]}
							inlineStyles={[
								{ type: INLINE_STYLE.BOLD },
								{ type: INLINE_STYLE.ITALIC },
								{ type: INLINE_STYLE.UNDERLINE },
							]}
						/>
					)}
					name="DraftEditor"
					control={control}
				/>

				<label className="formLabel">Type*</label>
				<select name="type" ref={register}>
					{types.map((type) => (
						<option key={type.value} value={type.value}>
							{type.label}
						</option>
					))}
				</select>
				<label className="formLabel">Grade*</label>
				<div className="flex flex-jc-sa">
					{grades.map((grade) => {
						return (
							<label key={`grade_${grade.label}`}>
								<input
									type="checkbox"
									name={`grade_${grade.label}`}
									value={true}
									ref={register}
								/>
								{grade.label}
							</label>
						);
					})}
				</div>
				<div className="buttonPanel flex flex-jc-c flex-ai-c">
					<button type="button" onClick={setModalOpen}>
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
