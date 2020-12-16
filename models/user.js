const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		index: { unique: true },
	},
	password: {
		type: String,
		required: true,
	},
	alias: {
		type: String,
		required: true,
	},
	name: {
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
	},
	role: {
		type: String,
		required: true,
	},
	createdOn: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

module.exports = mongoose.model('User', userSchema);
