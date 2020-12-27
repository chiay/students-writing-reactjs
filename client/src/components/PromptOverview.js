import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Post from './Post';

export default function PromptOverview() {
	const [prompt, setCurrentPrompt] = useState();
	const [loading, setLoading] = useState(false);
	const { id } = useParams();

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

	return (
		<Layout>
			{!loading && prompt && (
				<div className="container flex flex-col flex-jc-c flex-ai-c overview">
					<h1 className="overview__title">{prompt.title}</h1>
					<label className="overview__metadata">
						<span className="type">{prompt.type}</span> |
						<span className="datetime">
							{new Date(prompt.createdOn).toLocaleString()}
						</span>
					</label>
					<p className="overview__description">
						<i>
							{prompt.description
								? prompt.description
								: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
						</i>
					</p>
					<div className="overview__posts">
						{prompt.posts.length > 0 ? (
							prompt.posts.map((userPost) => {
								return <Post key={userPost._id} userPost={userPost} />;
							})
						) : (
							<i className="pendingMsg">
								---Still waiting for an answer...---
							</i>
						)}
					</div>
					<div className="overview__panel flex flex-col flex-jc-c flex-ai-c">
						<h2 className="panelTitle">Finding a place to write?</h2>
						<textarea
							className="panelInput"
							placeholder="Start writing here..."
							col="80"
							row="10"
						></textarea>
						<button type="button" className="btnSubmitAnswer ">
							Submit
						</button>
					</div>
				</div>
			)}
		</Layout>
	);
}
