import axios from 'axios';

const createPrompt = async (title, description, type, config) => {
	return await axios.post(
		'/api/prompt/create',
		{
			title,
			description,
			type,
		},
		config
	);
};

module.exports = { createPrompt };
