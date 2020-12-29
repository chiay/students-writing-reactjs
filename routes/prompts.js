const express = require('express');
const router = express.Router();
const Prompt = require('../models/prompt');
const User = require('../models/user');
const { getUser, checkRole } = require('./middleware');
const passport = require('passport');
const userRole = require('../constants/userRole');

/**
 * Get all prompts
 * @access public
 */
router.get('/', async (req, res) => {
	try {
		const prompts = await Prompt.find(
			{},
			{ posts: 0 },
			{ sort: { createdOn: -1 } }
		);
		res.status(200).json(prompts);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

/**
 * Get one specific prompts
 * @access public
 */
router.get('/:id', async (req, res) => {
	try {
		const prompt = await Prompt.findById(req.params.id).populate(
			'posts.postedBy',
			{ email: 1, alias: 1 } // Show only email
		);
		res.status(200).json(prompt);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

/**
 * Create a new prompt
 * @access private
 */
router.post(
	'/create',
	passport.authenticate('jwt', { session: false }),
	async (req, res) => {
		if (req.user.role !== userRole.ADMIN) {
			return res.status(401).send('Access denied!');
		}
		try {
			const tempPrompt = new Prompt({
				title: req.body.title,
				description: req.body.description,
				type: req.body.type,
			});
			const newPrompt = await tempPrompt.save();
			res.status(200).json(newPrompt);
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	}
);

/**
 * Edit prompt
 * @access private
 */
router.patch(
	'/:id/edit',
	passport.authenticate('jwt', { session: false }),
	getPrompt,
	async (req, res) => {
		if (req.user.role !== userRole.ADMIN) {
			return res.status(401).send('Access denied!');
		}
		if (req.body.title != null) {
			res.Prompt.title = req.body.title;
		}
		if (req.body.description != null) {
			res.Prompt.description = req.body.description;
		}
		try {
			const updatedPrompt = await res.Prompt.save();
			res.status(200).json(updatedPrompt);
		} catch (err) {
			return res.status(400).json({ message: err.message });
		}
	}
);

/**
 * Delete prompt
 * @access private
 */
router.delete(
	'/:id/delete',
	passport.authenticate('jwt', { session: false }),
	getPrompt,
	async (req, res) => {
		if (req.user.role !== userRole.ADMIN) {
			return res.status(401).send('Access denied!');
		}
		try {
			await res.Prompt.remove();
			res.status(200).json({ message: 'Prompt removed.' });
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	}
);

/**
 * Post answer
 * @access public
 */
router.patch('/:id/post', getPrompt, getUser, async (req, res) => {
	const post = { postedBy: res.User._id, text: req.body.text };

	const tempPosts = [...res.Prompt.posts, post];
	res.Prompt.posts = tempPosts;

	try {
		const tempPrompt = await res.Prompt.save();
		const updatedPrompt = await tempPrompt
			.populate('posts.postedBy', { email: 1, alias: 1 })
			.execPopulate();

		res.status(200).json(updatedPrompt);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

/**
 * Delete answer
 * @access public
 */
router.patch('/:id/delete/:pid', getPrompt, async (req, res) => {
	const filteredPost = res.Prompt.posts.filter((post) => {
		return post._id == req.params.pid;
	});
	res.Prompt.posts = filteredPost;
	try {
		const updatedPrompt = await res.Prompt.save();
		res.status(200).json(updatedPrompt);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

/**
 * Get a particular prompt middleware
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function getPrompt(req, res, next) {
	let existingPrompt;
	try {
		existingPrompt = await Prompt.findById(req.params.id);
		if (existingPrompt == null) {
			return res.status(404).json({ message: 'Cannot find prompt!' });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.Prompt = existingPrompt;
	next();
}

module.exports = router;
