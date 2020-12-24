import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import axios from 'axios';

export default function PromptList() {
	const [list, setList] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		let cancel;

		async function getList() {
			try {
				const { data } = await axios.get('/api/prompt', {
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				});
				setList(data);
			} catch (err) {
				console.log('Unable to fetch data from server.');
			}
		}

      getList();
      setLoading(false);
      return () => cancel();
	}, []);

	return <Layout>List</Layout>;
}
