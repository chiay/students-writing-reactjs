import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Post({ userPost, currentUser, setError, id }) {
	const isOwner = currentUser
		? userPost.postedBy.email === currentUser.data.email
		: false;

	const [deleteModalOpen, isDeleteModalOpen] = useState(false);
	// const [editModalOpen, isEditModalOpen] = useState(false);
	// const textRef = useRef();
	const [token] = useLocalStorage('token', '');

	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};

	function handleDeleteModalClose() {
		isDeleteModalOpen(false);
	}

	function handleDeleteModalOpen() {
		isDeleteModalOpen(true);
	}

	// function handleEditModalClose() {
	// 	isEditModalOpen(false);
	// }

	// function handleEditModalOpen() {
	// 	isEditModalOpen(true);
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
		window.location.replace(`/promptoverview/${id}`);
	}

	// async function handlePostEdit() {
	// 	try {
	// 		setError('');

	// 	} catch (err) {
	// 		console.log(err, 'Unable to edit answer.');
	// 		setError('Unable to edit your answer. Please try again later.');
	// 	}

	// 	handleEditModalClose();
	// 	window.location.replace(`/promptoverview/${id}`);
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
				<div className="post__control flex flex-jc-fe">
					<button type="button">Check</button>
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
					<label>Are you sure you want to delete this post?</label>
					<div className="modal__content flex flex-jc-c">
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
				<div className="modal__content flex flex-col flex-jc-c">
					<textarea
						className="panelInput"
						col="80"
						row="10"
						ref={textRef}
						value={userPost.text}
					/>
					<div className="flex flex-jc-c panelControl">
						<button type="button" onClick={handleEditModalClose}>
							Cancel
						</button>
						<button type="button" onClick={handlePostEdit}>
							Submit
						</button>
					</div>
				</div>
			</Modal> */}
		</div>
	);
}
