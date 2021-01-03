import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Post from './Post';
import Modal from './Modal';
import useLocalStorage from '../hooks/useLocalStorage';
import PromptEdit from './PromptEdit';

export default function PromptOverview() {
	const [prompt, setCurrentPrompt] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [deleteModalOpen, isDeleteModalOpen] = useState(false);
	const [editModalOpen, isEditModalOpen] = useState(false);
	const [token] = useLocalStorage('token', '');
	const textRef = useRef();
	const { id } = useParams();
	const { currentUser } = useAuth();
	const history = useHistory();
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};

	useEffect(() => {
		setLoading(true);
		let cancel;

		const getList = async () => {
			try {
				const { data } = await axios.get(`/api/prompt/${id}`, {
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				});
				setCurrentPrompt(data);
			} catch (err) {
				console.log('Unable to fetch data from server.');
			}
		};

		getList();
		setLoading(false);
		return () => cancel();
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();

		if (textRef.current.value.length <= 4) {
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
		window.location.replace(`/promptoverview/${id}`);
	}

	function handleDeleteModalClose() {
		isDeleteModalOpen(false);
	}

	function handleDeleteModalOpen() {
		isDeleteModalOpen(true);
	}

	function handleEditModalClose() {
		isEditModalOpen(false);
	}

	function handleEditModalOpen() {
		isEditModalOpen(true);
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
		handleDeleteModalClose();
	}

	return (
		<Layout>
			{!loading && prompt && (
				<div className="container flex flex-col flex-jc-c flex-ai-c overview">
					{error && (
						<div className="overview__error">
							<label>{error}</label>
						</div>
					)}
					{currentUser && currentUser.data.role === 'admin' && (
						<div className="overview__admin">
							{/* <button type="button" onClick={handleEditModalOpen}>
								Edit
							</button> */}
							<button type="button" onClick={handleDeleteModalOpen}>
								Delete
							</button>
						</div>
					)}
					<Modal open={deleteModalOpen}>
						<div className="modal__content flex flex-col flex-jc-c">
							<label>Are you sure you want to delete this prompt?</label>
							<div className="modal__content flex flex-jc-c">
								<button type="button" onClick={handleDeleteModalClose}>
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
					<Modal open={editModalOpen}>
						<PromptEdit
							control="edit"
							prompt={prompt}
							loading={loading}
							handleModalClose={handleEditModalClose}
						/>
					</Modal>
					<h1 className="overview__title">{prompt.title}</h1>
					<label className="overview__metadata">
						<span className="type">{prompt.type}</span> |
						<span className="datetime">
							{new Date(prompt.createdOn).toLocaleString()}
						</span>
					</label>
					<p className="overview__description">
						<i>{prompt.description ? prompt.description : ''}</i>
					</p>

					<div className="overview__posts">
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
