import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import Prompt from '../components/Prompt';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Modal from '../components/Modal';
import PromptEntryForm from '../components/PromptEntryForm';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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

	function toggleModalOpen() {
		setModalOpen(!modalOpen);
	}

	return (
		<Layout>
			<div className="container promptList">
				{currentUser && currentUser.data.role === 'admin' && (
					<div className="promptList__control flex flex-jc-fe">
						<button
							className="btnAddNew flex flex-jc-c"
							onClick={toggleModalOpen}
						>
							<AddCircleOutlineIcon />
						</button>
					</div>
				)}

				<Modal open={modalOpen}>
					<PromptEntryForm
						list={list}
						setList={setList}
						setModalOpen={toggleModalOpen}
					/>
				</Modal>

				{!loading && list ? (
					list.map((prompt) => {
						return (
							<Link
								to={`/overview/${prompt._id}`}
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
