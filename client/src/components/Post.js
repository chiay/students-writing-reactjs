import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';

export default function Post({ userPost, currentUser, setError, id }) {
	const isOwner = currentUser
		? userPost.postedBy.email === currentUser.data.email
		: false;

	const [modalOpen, isModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState('');

	function handleModalClose() {
		isModalOpen(false);
		setModalMessage('');
	}

	function handleDeleteButton() {
		isModalOpen(true);
		setModalMessage('Are you sure you want to delete this post?');
	}

	async function handlePostDelete() {
		try {
			setError('');
			await axios.patch(`/api/prompt/${id}/delete/${userPost._id}`);
		} catch (err) {
			console.log(err, 'Unable to delete answer.');
			setError('Unable to delete your answer. Please try again later.');
		}

		handleModalClose();
		window.location.replace(`/promptoverview/${id}`);
	}

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
					<button type="button">Edit</button>
					<button type="button" onClick={handleDeleteButton}>
						Delete
					</button>
				</div>
			)}
			<Modal open={modalOpen}>
				<div className="modal__content flex flex-col flex-jc-c">
					<label>{modalMessage}</label>
					<div className="modal__content flex flex-jc-c">
						<button type="button" onClick={handleModalClose}>
							No
						</button>
						<button type="button" onClick={handlePostDelete}>
							Yes
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
}
