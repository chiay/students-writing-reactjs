import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import publishArticleImg from '../images/undraw_publish_article.svg';
import { motion } from 'framer-motion';

export default function Hero() {
	const history = useHistory();

	function handleClick() {
		history.push('/signup');
	}

	return (
		<div className="hero container flex flex-jc-sa flex-ai-c">
			<div className="hero__text">
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
			</div>
			<img
				src={publishArticleImg}
				alt="write"
				width="300"
				height="300"
				className="hero__image"
			/>
		</div>
	);
}
