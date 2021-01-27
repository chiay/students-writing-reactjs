import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import UserInfo from '../components/UserInfo';

export default function UserList() {
	const { token } = useAuth();
	const [userList, setUserList] = useState([]);
	const [loading, setLoading] = useState(false);

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

	return (
		<Layout>
			<div className="flex flex-col">
				{!loading &&
					userList &&
					userList.map((user) => {
						return <UserInfo user={user} key={user._id} />;
					})}
			</div>
		</Layout>
	);
}
