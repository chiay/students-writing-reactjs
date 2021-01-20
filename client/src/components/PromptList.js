import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import axios from 'axios';
import Prompt from './Prompt';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Modal from './Modal';
import PromptEntryForm from './PromptEntryForm';

export default function PromptList() {
	const [list, setList] = useState();
	const [loading, setLoading] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const { currentUser } = useAuth();

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

	return (
		<Layout>
			<div className="container promptList">
				{currentUser && currentUser.data.role === 'admin' && (
					<div className="promptList__control flex flex-jc-fe">
						<button
							className="btnAddNew"
							onClick={() => setModalOpen(true)}
						>
							Add New
						</button>
					</div>
				)}

				<Modal open={modalOpen}>
					<PromptEntryForm
						list={list}
						setList={setList}
						setModalOpen={setModalOpen}
					/>
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
