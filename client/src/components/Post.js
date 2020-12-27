import React from 'react';

export default function Post({ userPost }) {
	console.log(userPost);
	return (
		<div className="post">
			<div className="post__metadata">
				<label className="writer flex">
					Writer:{' '}
					{userPost.alias ? userPost.alias : userPost.postedBy.email}
				</label>
				<label className="datetime">
					Date: {new Date(userPost.updatedOn).toLocaleString()}
				</label>
			</div>
			<p className="post__text">{userPost.text}</p>
			<div className="post__control flex flex-jc-fe">
				<button type="button">Check</button>
				<button type="button">Edit</button>
				<button type="button">Delete</button>
			</div>
		</div>
	);
}
