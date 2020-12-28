import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import axios from 'axios';
import Prompt from './Prompt';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Modal from './Modal';

export default function PromptList() {
	const [list, setList] = useState();
	const [loading, setLoading] = useState(false);
	const [modalOpen, isModalOpen] = useState(false);
	const [types] = useState([
		{ label: 'Sentence', value: 'sentence' },
		{ label: 'Paragraph', value: 'paragraph' },
		{ label: 'Essay', value: 'essay' },
	]);
	const [type, setType] = useState('sentence');

	const { currentUser } = useAuth();

	const titleRef = useRef();
	const descriptionRef = useRef();

	useEffect(() => {
		setLoading(true);
		let cancel;

		const getList = async () => {
			try {
				const { data } = await axios.get('/api/prompt', {
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				});
				if (data) setList(data);
			} catch (err) {
				console.log('Unable to fetch data from server.');
			}
		};

		getList();
		setLoading(false);
		return () => cancel();
	}, []);

	function handleModalClose() {
		isModalOpen(false);
	}

	function handleChange(e) {
		setType(e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDIwMjM4ZjBkZDNkNWUyYzBmZjM4MCIsImlhdCI6MTYwODc5MzY2OH0.z1ULvziKwK3Rh9Lbrx_3uONxbkRT52EF2h7Rn90uwTM',
			},
		};

		try {
			const { data } = await axios.post(
				'/api/prompt/create',
				{
					title: titleRef.current.value,
					description: descriptionRef.current.value,
					type,
				},
				config
			);

			if (data) {
				setList([data, ...list]);
			}
		} catch (err) {
			console.log('Unable to fetch data from server.');
		}
	}

	return (
		<Layout>
			<div className="container promptList">
				{currentUser && currentUser.data.role === 'admin' && (
					<div className="promptList__control flex flex-jc-fe">
						<button
							className="btnAddNew"
							onClick={() => isModalOpen(true)}
						>
							Add New
						</button>
					</div>
				)}

				<Modal open={modalOpen} handleModalClose={handleModalClose}>
					<div className="modal__content flex flex-jc-c">
						<form
							className="flex flex-col flex-jc-c"
							onSubmit={handleSubmit}
						>
							<label className="formLabel">Title</label>
							<input type="text" required ref={titleRef} />
							<label className="formLabel">Description</label>
							<input type="text" ref={descriptionRef} />
							<label className="formLabel">Type</label>
							<select onChange={(e) => handleChange(e)}>
								{types.map((type) => (
									<option key={type.value} value={type.value}>
										{type.label}
									</option>
								))}
							</select>
							<div className="buttonPanel flex flex-jc-c flex-ai-c">
								<button
									type="button"
									onClick={() => handleModalClose()}
								>
									Close
								</button>
								<button type="submit">Submit</button>
							</div>
						</form>
					</div>
				</Modal>

				{!loading && list ? (
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
					})
				) : (
					<label>No content.</label>
				)}
			</div>
		</Layout>
	);
}
