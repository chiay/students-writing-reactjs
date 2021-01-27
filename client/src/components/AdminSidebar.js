import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
	return (
		<div className="adminSidebar">
			<p>ADMIN CONTROL</p>
			<ul>
				<li>
					<Link to="/admin/users" className="link">
						User List
					</Link>
				</li>
				<li>Add scheduled prompts </li>
			</ul>
		</div>
	);
}
