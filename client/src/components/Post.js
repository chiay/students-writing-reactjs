import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
//import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import {
	filterStructure,
	getFullStructCheck,
	getTags,
} from '../utils/SentenceChecker/StructureChecker';
import CheckModal from './CheckModal';

export default function Post({ userPost, currentUser, setError, id }) {
	const isOwner = currentUser
		? userPost.postedBy.email === currentUser.data.email
		: false;
	// const { register, handleSubmit } = useForm({
	// 	defaultValues: {
	// 		post: userPost.text,
	// 	},
	// });
	const [checkModalOpen, setCheckModalOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	// const [editModalOpen, setEditModalOpen] = useState(false);
	const { token } = useAuth();

	const [checkResult, setCheckResult] = useState('');
	const [tags, setTags] = useState();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};

	function handleDeleteModalClose() {
		setDeleteModalOpen(false);
	}

	function handleDeleteModalOpen() {
		setDeleteModalOpen(true);
	}

	function handleCheckModalOpen() {
		setCheckModalOpen(true);
		check();
	}

	function handleCheckModalClose() {
		setCheckModalOpen(false);
	}

	function check() {
		const structures = filterStructure(userPost.text);
		const result = getFullStructCheck(userPost.text, structures);
		const [terms] = getTags(userPost.text, structures);

		setTags(terms.terms);

		setCheckResult(
			result
				? `Yay! You got it. Your sentence matches a structure.`
				: 'Oops! Something is wrong with your sentence.'
		);
	}

	// function handleEditModalClose() {
	// 	setEditModalOpen(false);
	// }

	// function handleEditModalOpen() {
	// 	setEditModalOpen(true);
	// }

	async function handlePostDelete() {
		try {
			setError('');
			await axios.patch(
				`/api/prompt/${id}/delete/${userPost._id}`,
				{},
				config
			);
		} catch (err) {
			console.log(err, 'Unable to delete answer.');
			setError('Unable to delete your answer. Please try again later.');
		}

		handleDeleteModalClose();
		window.location.replace(`/overview/${id}`);
	}

	// async function editPost(data) {
	// 	const { post } = data;
	// 	try {
	// 		setError('');
	// 		await axios.patch();
	// 	} catch (err) {
	// 		console.log(err, 'Unable to edit answer.');
	// 		setError('Unable to edit your answer. Please try again later.');
	// 	}

	// 	handleEditModalClose();
	// 	window.location.replace(`/overview/${id}`);
	// }

	return (
		<div className="post">
			<div className="post__metadata">
				<label className="writer flex">
					Writer:{' '}
					{userPost.postedBy.alias
						? userPost.postedBy.alias
						: userPost.postedBy.email}
				</label>
				<label className="datetime">
					Date: {new Date(userPost.updatedOn).toLocaleString()}
				</label>
			</div>
			<p className="post__text">{userPost.text}</p>
			{isOwner && (
				<>
					<div className="post__control flex flex-jc-fe">
						<button type="button" onClick={handleCheckModalOpen}>
							Check
						</button>
						{/* <button type="button" onClick={handleEditModalOpen}>
							Edit
						</button> */}
						<button type="button" onClick={handleDeleteModalOpen}>
							Delete
						</button>
					</div>
					<Modal open={checkModalOpen}>
						<CheckModal
							checkResult={checkResult}
							tags={tags}
							handleCheckModalClose={handleCheckModalClose}
						/>
					</Modal>
					<Modal open={deleteModalOpen}>
						<div className="modal__content flex flex-col flex-jc-c">
							<label>Are you sure you want to delete this post?</label>
							<div className="control flex flex-jc-c">
								<button type="button" onClick={handleDeleteModalClose}>
									No
								</button>
								<button type="button" onClick={handlePostDelete}>
									Yes
								</button>
							</div>
						</div>
					</Modal>
					{/* <Modal open={editModalOpen}>
						<div className="modal__content flex flex-jc-c">
							<form
								className="flex flex-col"
								onSubmit={handleSubmit(editPost)}
							>
								<textarea
									name="post"
									className="panelInput"
									col="200"
									row="10"
									ref={register}
								/>
								<div className="flex flex-jc-c panelControl">
									<button type="button" onClick={handleEditModalClose}>
										Cancel
									</button>
									<button type="submit">Edit</button>
								</div>
							</form>
						</div>
					</Modal> */}
				</>
			)}
		</div>
	);
}
