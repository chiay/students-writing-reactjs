const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	createdOn: {
		type: Date,
		required: true,
		default: Date.now,
	},
	posts: [
		{
			postedBy: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
			postedOn: {
				type: Date,
				default: Date.now,
			},
			updatedOn: {
				type: Date,
				default: Date.now,
			},
			text: {
				type: String,
			},
		},
	],
});

module.exports = mongoose.model('Prompt', promptSchema);
