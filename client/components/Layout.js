import React from 'react';
import Head from 'next/Head';
import Navbar from './Navbar';

export default function Layout({ title, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Commissioner:wght@300;400;500&display=swap');
				</style>
			</Head>
			<Navbar />
			<main className="max-w-full p-2">
				{children}
			</main>
			<footer className="p-4 flex justify-center">
				<label className="text-gray-400">© 2020 Students Writing.com</label>
			</footer>
		</div>
	);
}
