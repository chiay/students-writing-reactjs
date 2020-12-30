import React from 'react';
import { motion } from 'framer-motion';

export default function Prompt({ prompt }) {
	const date = new Date(prompt.createdOn).toLocaleString();
	return (
		<motion.div className="prompt" whileHover={{ scale: 1.02 }}>
			<div className="prompt__main flex flex-jc-sb flex-ai-c">
				<h3 className="title">{prompt.title}</h3>
				<label className="metadata">
					<span className="type">{prompt.type}</span> |{' '}
					<span className="datetime">{date}</span>
				</label>
			</div>
			<i className="prompt__description">
				{prompt.description ? prompt.description : ''}
			</i>
		</motion.div>
	);
}
