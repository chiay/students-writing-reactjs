import React from 'react';

export default function UserInfo({ user }) {
	return (
		<tr>
			<td>{user.email}</td>
			<td>{user.alias ? user.alias : 'Not Set'}</td>
			<td>{user.role}</td>
		</tr>
	);
}
