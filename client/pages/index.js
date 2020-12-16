import Head from 'next/Head';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Home() {
	return (
		<Layout title="Students Writing">
			<Hero />
		</Layout>
	);
}
