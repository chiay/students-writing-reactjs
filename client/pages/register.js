import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/Image';

export default function register() {
	return (
		<Layout title="Students Writing: Sign Up">
			<div className="p-2 flex flex-col">
				<Image src="/undraw_sign_in_e6hj.svg" width="200" height="200" />
				<h1 className="p-5 text-center text-3xl text-yellow-800">
					Sign Up
				</h1>
				<form className="flex flex-col items-center">
					<input
						type="email"
						className="p-2 border-2 rounded"
						placeholder="*Email"
						required
					/>
					<input
						type="password"
						className="p-2 my-3 border-2 rounded"
						placeholder="*Password"
						required
					/>
					<input
						type="password"
						className="p-2 border-2 rounded"
						placeholder="*Confirm Password"
						required
					/>
					<button className="w-32 px-3 py-2 my-3 bg-red-400 rounded text-yellow-800 hover:bg-red-500 transition-colors duration-200">
						Submit
					</button>
				</form>
			</div>
		</Layout>
	);
}
