import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Post from '../components/Post';
import Modal from '../components/Modal';
import PromptEntryForm from '../components/PromptEntryForm';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { EditorState, convertFromRaw } from 'draft-js';
import { DraftailEditor } from 'draftail';

export default function PromptOverview() {
	const [prompt, setCurrentPrompt] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);
	const textRef = useRef();
	const { id } = useParams();
	const { currentUser, token } = useAuth();
	const history = useHistory();
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	useEffect(() => {
		setLoading(true);
		let cancel;

		const getList = async () => {
			try {
				const { data } = await axios.get(`/api/prompt/${id}`, {
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				});
				setCurrentPrompt(data);
				setEditorState(
					EditorState.createWithContent(
						convertFromRaw(JSON.parse(data.content))
					)
				);
			} catch (err) {
				console.log('Unable to fetch data from server.');
			}
		};

		getList();
		getGrade();
		setLoading(false);
		return () => cancel();
	}, [id]);

	async function handleSubmit(e) {
		e.preventDefault();

		if (textRef.current.value.length <= 3) {
			return setError('The minimum words is 4.');
		}

		setLoading(true);

		try {
			setError('');
			await axios.patch(
				`/api/prompt/${id}/post`,
				{ text: textRef.current.value },
				config
			);
		} catch (err) {
			console.log(err, 'Unable to submit answer.');
			setError('Unable to submit your answer. Please try again later.');
		}

		setLoading(false);
		window.location.replace(`/overview/${id}`);
	}

	function toggleDeleteModal() {
		setDeleteModalOpen(!deleteModalOpen);
	}

	function toggleEditModal() {
		setEditModalOpen(!editModalOpen);
	}

	function getGrade() {
		if (prompt?.grade) {
			let grade = [];
			for (const g in prompt.grade) {
				if (prompt.grade[g]) {
					grade.push(g.split('_')[1]);
				}
			}
			return grade.join(', ').toString();
		}
	}

	async function handlePromptDelete() {
		setLoading(true);

		try {
			setError('');
			await axios.delete(`/api/prompt/${id}/delete`, config);
			history.goBack();
			return;
		} catch (err) {
			console.log(err, 'Unable to delete prompt.');
			setError('Unable to delete this prompt. Please try again later.');
		}

		setLoading(false);
		toggleDeleteModal();
	}

	return (
		<Layout>
			{!loading && prompt && (
				<div className="container flex flex-col flex-jc-c flex-ai-c overview">
					{error && (
						<div className="error">
							<label>{error}</label>
						</div>
					)}
					{currentUser?.data.role === 'admin' && (
						<div className="overview__admin">
							<button type="button" onClick={toggleEditModal}>
								<EditOutlinedIcon fontSize="small" /> <span>Edit</span>
							</button>
							<button type="button" onClick={toggleDeleteModal}>
								<DeleteForeverOutlinedIcon fontSize="small" />{' '}
								<span>Delete</span>
							</button>
						</div>
					)}
					{currentUser?.data.role === 'admin' && (
						<Modal open={deleteModalOpen}>
							<div className="modal__content flex flex-col flex-jc-c">
								<label>
									Are you sure you want to delete this prompt?
								</label>
								<div className="modal__content flex flex-jc-c">
									<button type="button" onClick={toggleDeleteModal}>
										No
									</button>
									<button
										type="button"
										onClick={handlePromptDelete}
										disabled={loading}
									>
										Yes
									</button>
								</div>
							</div>
						</Modal>
					)}
					{currentUser?.data.role === 'admin' && (
						<Modal open={editModalOpen}>
							<PromptEntryForm
								id={id}
								prompt={prompt}
								setModalOpen={toggleEditModal}
							/>
						</Modal>
					)}
					<h1 className="overview__title">{prompt.title}</h1>
					<label className="overview__metadata">
						<span className="grade">Grade: {getGrade()}</span> |
						<span className="type">{prompt.type}</span> |
						<span className="datetime">
							{new Date(prompt.createdOn).toLocaleString()}
						</span>
					</label>
					<p className="overview__description">
						<i>{prompt.description ? prompt.description : ''}</i>
					</p>
					<div className="overview__content">
						<DraftailEditor
							editorState={editorState}
							onChange={(editorState) => setEditorState(editorState)}
							readOnly={true}
						/>
					</div>

					<div className="overview__posts flex flex-col flex-jc-c">
						{prompt.posts.length > 0 ? (
							prompt.posts.map((userPost) => {
								return (
									<Post
										key={userPost._id}
										userPost={userPost}
										currentUser={currentUser}
										setError={setError}
										id={id}
									/>
								);
							})
						) : (
							<i className="pendingMsg">
								---Still waiting for an answer---
							</i>
						)}
					</div>
					<div className="overview__panel flex flex-col flex-jc-c flex-ai-c">
						<h2 className="panelTitle">Finding a place to write?</h2>
						{currentUser ? (
							<form
								className="flex flex-col flex-ai-c"
								onSubmit={handleSubmit}
							>
								<textarea
									className="panelInput"
									placeholder="Start writing here..."
									col="80"
									row="10"
									ref={textRef}
								/>
								<button
									type="submit"
									className="btnSubmitAnswer"
									disabled={loading}
								>
									Submit
								</button>
							</form>
						) : (
							<Link to="/login" className="link">
								Click here to login.
							</Link>
						)}
					</div>
				</div>
			)}
		</Layout>
	);
}
