import React from 'react';

export default function UserInfo({ user }) {
	return (
		<div className="">
			<label>Email: {user.email}</label>
			<label>First Name: {user.name?.firstName || 'Not Set'}</label>
			<label>Last Name: {user.name?.lastName || 'Not Set'}</label>
			<label>Alias: {user.alias ? user.alias : 'Not Set'}</label>
			<label>Role: {user.role}</label>
			<label>Grade: {user.grade ? user.grade : 'Not Set'}</label>
		</div>
	);
}
