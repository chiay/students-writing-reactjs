import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../contexts/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function Dashboard() {
	const { currentUser, token } = useAuth();
	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			firstName: currentUser.data.name.firstName,
			lastName: currentUser.data.name.lastName,
			alias: currentUser.data.alias,
			password: '',
			confirmPassword: '',
			grade: currentUser.data.grade,
		},
	});

	const [error, setError] = useState('');
	const grades = [
		{ label: 'Please select one', value: '' },
		{ label: '3rd grade', value: '3rd grade' },
		{ label: '4th grade', value: '4th grade' },
		{ label: '5th grade', value: '5th grade' },
		{ label: '6th grade', value: '6th grade' },
		{ label: '7th grade', value: '7th grade' },
		{ label: '8th grade', value: '8th grade' },
		{ label: 'other', value: 'other' },
	];

	const editProfile = async (data) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		const {
			firstName,
			lastName,
			alias,
			password,
			confirmPassword,
			grade,
		} = data;

		if (password !== confirmPassword) {
			return setError('Passwords do not match.');
		}

		try {
			setError('');
			await axios.patch(
				'/api/user/updateProfile',
				{
					password,
					name: {
						firstName,
						lastName,
					},
					alias,
					grade,
				},
				config
			);
		} catch (err) {
			console.log('Unable to update profile');
			setError('Unable to update your profile. Please try again later.');
		}
	};

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
					<form
						className="flex flex-col flex-ai-c"
						onSubmit={handleSubmit(editProfile)}
					>
						<table>
							<tbody>
								<tr>
									<td>Email:</td>
									<td>{currentUser.data.email}</td>
								</tr>
								<tr>
									<td>First Name:</td>
									<td>
										<input
											name="firstName"
											type="text"
											ref={register}
										/>
									</td>
								</tr>
								<tr>
									<td>Last Name:</td>
									<td>
										<input
											name="lastName"
											type="text"
											ref={register}
										/>
									</td>
								</tr>
								<tr>
									<td>Alias: </td>
									<td>
										<input name="alias" type="text" ref={register} />
									</td>
								</tr>
								<tr>
									<td>Password:</td>
									<td>
										<input
											name="password"
											type="password"
											placeholder="Leave blank if unchanged"
											ref={register({ minLength: 9 })}
										/>
										{errors.password &&
											errors.password.type === 'minLength' && (
												<p className="">
													Password length must be longer than 8.
												</p>
											)}
									</td>
								</tr>
								<tr>
									<td>Confirm password: </td>
									<td>
										<input
											name="confirmPassword"
											type="password"
											placeholder="Leave blank if unchanged"
											ref={register}
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
										<select name="grade" ref={register}>
											{grades.map((grade) => (
												<option
													key={grade.value}
													value={grade.value}
												>
													{grade.label}
												</option>
											))}
										</select>
									</td>
								</tr>
							</tbody>
						</table>

						<motion.button
							type="submit"
							whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
						>
							Update
						</motion.button>
					</form>
				</div>
			</div>
		</Layout>
	);
}
