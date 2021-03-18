const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	content: {
		type: mongoose.Schema.Types.Mixed,
	},
	type: {
		type: String,
		required: true,
	},
	grade: {
		grade_3: {
			type: Boolean,
			default: false,
		},
		grade_4: {
			type: Boolean,
			default: false,
		},
		grade_5: {
			type: Boolean,
			default: false,
		},
		grade_6: {
			type: Boolean,
			default: false,
		},
		grade_7: {
			type: Boolean,
			default: false,
		},
		grade_8: {
			type: Boolean,
			default: false,
		},
		grade_any: {
			type: Boolean,
			default: false,
		},
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
