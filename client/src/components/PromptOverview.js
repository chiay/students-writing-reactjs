import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Post from './Post';

export default function PromptOverview() {
	const [prompt, setCurrentPrompt] = useState();
	const [postList, setPostList] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const textRef = useRef();
	const { id } = useParams();

	const { currentUser } = useAuth();

	useEffect(() => {
		setLoading(true);
		let cancel;

		const getList = async () => {
			try {
				const { data } = await axios.get(`/api/prompt/${id}`, {
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				});
				setCurrentPrompt(data);
				setPostList(data.posts);
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
			setError('The minimum words is 4.');
			return;
		}
		const config = { headers: { 'Content-Type': 'application/json' } };

		setLoading(true);

		try {
			setError('');
			await axios.patch(
				`/api/prompt/${id}/post`,
				{ email: currentUser.data.email, text: textRef.current.value },
				config
			);
		} catch (err) {
			console.log(err, 'Unable to submit answer.');
			setError('Unable to submit your answer. Please try again later.');
		}

		setLoading(false);
		window.location.replace(`/promptoverview/${id}`);
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
					{currentUser && (
						<div className="overview__admin">
							<button type="button">Edit</button>
							<button type="button">Delete</button>
						</div>
					)}
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
						{postList ? (
							postList.map((userPost) => {
								return (
									<Post
										key={userPost._id}
										userPost={userPost}
										currentUser={currentUser}
									/>
								);
							})
						) : (
							<i className="pendingMsg">
								---Still waiting for an answer...---
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
