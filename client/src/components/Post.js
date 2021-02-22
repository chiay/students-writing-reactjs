import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';
import {
	filterStructure,
	getFullStructCheck,
} from '../utils/SentenceChecker/StructureChecker';

export default function Post({ userPost, currentUser, setError, id }) {
	const isOwner = currentUser
		? userPost.postedBy.email === currentUser.data.email
		: false;

	const [checkModalOpen, setCheckModalOpen] = useState(false);
	const [deleteModalOpen, isDeleteModalOpen] = useState(false);
	// const [editModalOpen, isEditModalOpen] = useState(false);
	// const textRef = useRef();
	const [token] = useLocalStorage('token', '');

	const [checkResult, setCheckResult] = useState('');

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

	function handleCheckModalOpen() {
		setCheckModalOpen(true);
		check();
	}

	function handleCheckModalClose() {
		setCheckModalOpen(false);
	}

	function check() {
		const filtered = filterStructure(userPost.text);
		const result = getFullStructCheck(userPost.text, filtered);

		setCheckResult(
			result
				? `Yay! You got it. Your sentence matches ${result}`
				: 'Oops! Something is wrong with your sentence.'
		);
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
		window.location.replace(`/overview/${id}`);
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
			)}
			{isOwner && (
				<Modal open={checkModalOpen}>
					<div className="modal__content flex flex-col flex-jc-c">
						<label>Your Result:</label>
						<label>{checkResult}</label>
						<div className="modal__control flex flex-jc-c">
							<button type="button" onClick={handleCheckModalClose}>
								Close
							</button>
						</div>
					</div>
				</Modal>
			)}
			{isOwner && (
				<Modal open={deleteModalOpen}>
					<div className="modal__content flex flex-col flex-jc-c">
						<label>Are you sure you want to delete this post?</label>
						<div className="modal__control flex flex-jc-c">
							<button type="button" onClick={handleDeleteModalClose}>
								No
							</button>
							<button type="button" onClick={handlePostDelete}>
								Yes
							</button>
						</div>
					</div>
				</Modal>
			)}
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
