import React from 'react';

export default function Modal({ open, children }) {
	const isOpenClassName = open ? 'modal display-block' : 'modal display-none';
	return (
		<div className={isOpenClassName}>
			<section className="modal__body">{children}</section>
		</div>
	);
}
