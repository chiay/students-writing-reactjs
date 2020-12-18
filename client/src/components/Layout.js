import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			<main className="flex flex-jc-c">{children}</main>

			<footer className="flex flex-jc-c" style={{ marginTop: '1.5rem' }}>
				<label>© 2020 Students Writing.com</label>
			</footer>
		</div>
	);
}
