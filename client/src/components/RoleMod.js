import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

export default function RoleMod({ users, toggleModal }) {
	const roles = [
		{ label: '', value: '' },
		{ label: 'user', value: 'user' },
		{ label: 'admin', value: 'admin' },
	];

	const { register, handleSubmit, setValue } = useForm({
		defaultValues: {
			user: '',
			role: '',
		},
	});

	const { token } = useAuth();
	const [userList, setUserList] = useState(users);
	const [selectedUser, setSelectedUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};

	useEffect(() => {
		setUserList(users);
	}, [users]);

	function handleChange(e) {
		setError('');
		setSuccess('');
		const user = userList.find((user) => user.email === e.target.value);

		if (user) {
			setSelectedUser(user);
			setValue('role', user.role);
		} else {
			setSelectedUser(null);
			setValue('role', '');
		}
	}

	function handleClose() {
		setSelectedUser(null);
		setValue('email', '');
		setError('');
		setSuccess('');
		toggleModal();
	}

	async function setRole(data) {
		setError('');
		setSuccess('');
		const { email, role } = data;

		if (email === '') {
			return setError('Please select a user');
		}
		if (role === '') {
			return setError('A role is not selected.');
		}
		if (selectedUser.role === role) {
			return setError(`${email} is already a(n) ${role}.`);
		}

		setLoading(true);
		try {
			await axios.patch('/api/user/setRole', { email, role }, config);

			const found = userList.findIndex((user) => {
				return user.email === email;
			});
			userList[found].role = role;

			setSuccess(`${email} set to ${role}.`);
		} catch (err) {
			setError(`Failed to set ${email} as ${role}.`);
			console.log('Failed to set role.', err);
		}
		setLoading(false);
	}

	return (
		<div className="modal__content flex flex-jc-c">
			<form
				className="flex flex-col flex-jc-c"
				onSubmit={handleSubmit(setRole)}
			>
				{error && (
					<div className="error">
						<label>{error}</label>
					</div>
				)}
				{success && (
					<div className="success">
						<label>{success}</label>
					</div>
				)}
				<label className="formLabel">Email:</label>
				<select
					name="email"
					ref={register}
					onChange={(e) => handleChange(e)}
				>
					<option value="">Please select a user</option>
					{userList.map((user) => (
						<option key={user._id} value={user.email}>
							{user.email}
						</option>
					))}
				</select>

				{selectedUser && (
					<>
						<label className="formLabel">
							Name: {selectedUser.name?.lastName || 'Not Set'},{' '}
							{selectedUser.name?.firstName || 'Not Set'}
						</label>

						<label className="formLabel">
							Alias:{' '}
							{selectedUser.alias ? selectedUser.alias : 'Not Set'}
						</label>
						<label className="formLabel">Role:</label>
						<select name="role" ref={register}>
							{roles.map((role) => (
								<option key={role.value} value={role.value}>
									{role.label}
								</option>
							))}
						</select>
					</>
				)}
				<div className="buttonPanel flex flex-jc-c flex-ai-c">
					<button type="button" onClick={handleClose}>
						Close
					</button>
					<button type="submit" disabled={loading}>
						Set
					</button>
				</div>
			</form>
		</div>
	);
}
