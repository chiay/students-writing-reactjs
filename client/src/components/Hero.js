import React from 'react';
import { useHistory } from 'react-router-dom';
import publishArticleImg from '../images/undraw_publish_article.svg';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

export default function Hero() {
	const history = useHistory();
	const { currentUser } = useAuth();

	function handleClick() {
		if (currentUser) {
			history.push('/promptlist');
		} else {
			history.push('/signup');
		}
	}

	return (
		<div className="hero container flex flex-jc-sa flex-ai-c">
			<motion.div
				className="hero__text"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<h1>Welcome to Students Writing!</h1>

				<h3 className="subtitle">
					Sentences, Paragraphs, Essays - All become easy with structure
				</h3>
				<h3 className="subtitle">
					Learn the structure, view the edits, master writing
				</h3>
				<motion.button
					whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
					className="btnStart"
					onClick={handleClick}
				>
					Get Started
				</motion.button>
			</motion.div>
			<motion.img
				src={publishArticleImg}
				alt="write"
				width="300"
				height="300"
				className="hero__image"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			/>
		</div>
	);
}
