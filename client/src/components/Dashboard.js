import React, { useState, useRef } from 'react';
import Layout from './Layout';
import { useAuth } from '../contexts/AuthContext';
import AdminSidebar from './AdminSidebar';
import { motion } from 'framer-motion';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Dashboard() {
	const [grade, setGrade] = useState('');
	const [error, setError] = useState('');
	const [grades] = useState([
		{ label: '', value: '' },
		{ label: '3rd grade', value: '3rd' },
		{ label: '4th grade', value: '4th' },
		{ label: '5th grade', value: '5th' },
		{ label: '6th grade', value: '6th' },
		{ label: '7th grade', value: '7th' },
		{ label: '8th grade', value: '8th' },
		{ label: 'other', value: 'other' },
	]);
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const aliasRef = useRef();

	const { currentUser } = useAuth();
	const [token] = useLocalStorage('token', '');

	function handleChange(e) {
		setGrade(e.target.value);
	}

	async function handleSubmit() {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};

		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setError('Passwords do not match.');
		}

		if (passwordRef.current.value.length <= 8) {
			return setError('Password length must be longer than 8.');
		}

		try {
			setError('');
			const user = await axios.patch(
				'/api/user/updateProfile',
				{
					email: emailRef.current.value,
					password: passwordRef.current.value,
					name: {
						firstName: firstNameRef.current.value,
						lastName: lastNameRef.current.value,
					},
					alias: aliasRef.current.value,
					grade,
				},
				config
			);
		} catch (err) {
			setError('Unable to update your profile. Please try again later.');
		}
	}

	return (
		<Layout>
			{currentUser && currentUser.data.role === 'admin' && <AdminSidebar />}
			<div className="dashboard">
				<h2 className="dashboard__greeting">
					Hello,{' '}
					{currentUser && currentUser.data.alias
						? currentUser.data.alias
						: currentUser.data.email}
				</h2>
				<div className="dashboard__profile flex flex-col flex-ai-c">
					{error && (
						<div className="error">
							<label>{error}</label>
						</div>
					)}
					<h2 className="title">PROFILE</h2>
					<table>
						<tr>
							<td>Email:</td>
							<td>
								<input
									type="email"
									disabled="true"
									ref={emailRef}
									value={currentUser.data.email}
								/>
							</td>
						</tr>
						<tr>
							<td>First Name:</td>
							<td>
								<input
									type="text"
									ref={firstNameRef}
									value={currentUser.data.name.firstName}
								/>
							</td>
						</tr>
						<tr>
							<td>Last Name:</td>
							<td>
								<input
									type="text"
									ref={lastNameRef}
									value={currentUser.data.name.lastName}
								/>
							</td>
						</tr>
						<tr>
							<td>Alias: </td>
							<td>
								<input
									type="text"
									ref={aliasRef}
									value={currentUser.data.alias}
								/>
							</td>
						</tr>
						<tr>
							<td>Password:</td>
							<td>
								<input
									type="password"
									placeholder="Leave blank if unchanged"
									ref={passwordRef}
								/>
							</td>
						</tr>
						<tr>
							<td>Confirm password: </td>
							<td>
								<input
									type="password"
									placeholder="Leave blank if unchanged"
									ref={confirmPasswordRef}
								/>
							</td>
						</tr>
						<tr>
							<td>Role:</td>
							<td>{currentUser.data.role}</td>
						</tr>
						<tr>
							<td>Grade:</td>
							<td>
								<select onChange={(e) => handleChange(e)}>
									{grades.map((grade) => (
										<option key={grade.value} value={grade.value}>
											{grade.label}
										</option>
									))}
								</select>
							</td>
						</tr>
					</table>

					<motion.button
						type="button"
						onClick={handleSubmit}
						whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
					>
						Update
					</motion.button>
				</div>
			</div>
		</Layout>
	);
}
