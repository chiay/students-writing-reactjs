import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import UserInfo from '../components/UserInfo';
import Modal from '../components/Modal';
import RoleMod from '../components/RoleMod';

export default function UserList() {
	const { token } = useAuth();
	const [userList, setUserList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		setLoading(true);
		let cancel;

		const getList = async () => {
			try {
				const { data } = await axios.post(
					'/api/user/all',
					{},
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
						cancelToken: new axios.CancelToken((c) => (cancel = c)),
					}
				);
				if (data) setUserList(data);
			} catch (err) {
				console.log('Unable to fetch data from server.');
			}
		};

		getList();
		setLoading(false);
		return () => cancel();
	}, [token]);

	function toggleModal() {
		setModalOpen(!modalOpen);
	}

	return (
		<Layout>
			<div className="userList">
				<div className="flex flex-jc-fe">
					<button onClick={toggleModal}>Set Role</button>
				</div>
				<Modal open={modalOpen}>
					<RoleMod users={userList} toggleModal={toggleModal} />
				</Modal>
				<table>
					<thead>
						<tr>
							<th>Email</th>
							<th>Alias</th>
							<th>Role</th>
						</tr>
					</thead>
					<tbody>
						{!loading &&
							userList &&
							userList.map((user) => {
								return <UserInfo user={user} key={user._id} />;
							})}
					</tbody>
				</table>
				<hr />
			</div>
		</Layout>
	);
}
