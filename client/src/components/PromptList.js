import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import axios from 'axios';
import Prompt from './Prompt';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Modal from './Modal';
import useLocalStorage from '../hooks/useLocalStorage';

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
	const [token] = useLocalStorage('token');

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
		setLoading(true);
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
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

		setLoading(false);
		isModalOpen(false);
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

				<Modal open={modalOpen}>
					<div className="modal__content flex flex-jc-c">
						<form
							className="flex flex-col flex-jc-c"
							onSubmit={handleSubmit}
						>
							<label className="formLabel">Title*</label>
							<input type="text" required ref={titleRef} />
							<label className="formLabel">Description</label>
							<input type="text" ref={descriptionRef} />
							<label className="formLabel">Type*</label>
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
								<button type="submit" disabled={loading}>
									Submit
								</button>
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
					<label className="promptList__noContent">No content.</label>
				)}
			</div>
		</Layout>
	);
}
