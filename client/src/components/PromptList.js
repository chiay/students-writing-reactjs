import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import axios from 'axios';
import Prompt from './Prompt';
import { Link } from 'react-router-dom';

export default function PromptList() {
	const [list, setList] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		let cancel;

		const getList = async () => {
			try {
				const { data } = await axios.get('/api/prompt', {
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				});
				setList(data);
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
			<div className="container promptList">
				{!loading &&
					list &&
					list.map((prompt) => {
						return (
							<Link
								to={`/promptoverview/${prompt._id}`}
								className="link"
								key={prompt._id}
							>
								<Prompt key={prompt._id} prompt={prompt} />
							</Link>
						);
					})}
			</div>
		</Layout>
	);
}
