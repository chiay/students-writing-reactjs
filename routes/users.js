const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const { getUser, checkRole } = require('./middleware');

/**
 * Get all users
 * @access private
 */
router.get('/', checkRole, async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

/**
 * Login a user
 * @access public
 */
router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (user == null) {
			return res.status(400).send('Wrong email or password!');
		}
		if (await bcrypt.compare(req.body.password, user.password)) {
			res.status(200).send('Success');
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

/**
 * Register a user
 * @access public
 */
router.post('/register', checkUser, async (req, res) => {
	try {
		const hashPassword = await bcrypt.hash(req.body.password, 10);
		const tempUser = new User({
			email: req.body.email,
			password: hashPassword,
			role: 'user',
		});
		const newUser = await tempUser.save();
		res.status(200).json(newUser);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

/**
 * Set role to a user by admin
 * @access private
 */

router.patch('/setRole', checkRole, getUser, async (req, res) => {
	if (req.body.role != null) {
		res.User.role = req.body.role;
	}
	try {
		const updatedUser = await res.User.save();
		res.status(200).json(updatedUser);
	} catch (err) {
		return res.status(400).json({ message: err.message });
	}
});

/**
 * Update user profile
 * @access public
 */

router.patch('/updateProfile', getUser, async (req, res) => {
	if (req.body.newEmail != null) {
		res.User.email = req.body.newEmail;
	}
	if (req.body.name.firstName != null) {
		res.User.name.firstName = req.body.name.firstName;
	}
	if (req.body.name.lastName != null) {
		res.User.name.lastName = req.body.name.lastName;
	}
	try {
		const updatedUser = await res.User.save();
		res.json(updatedUser);
	} catch (err) {
		return res.status(400).json({ message: err.message });
	}
});

/**
 * Delete user
 * @access private
 */
router.delete('/delete', getUser, checkRole, async (req, res) => {
	try {
		await res.User.remove();
		res.json({ message: 'User removed.' });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

/**
 * Check if user exist
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function checkUser(req, res, next) {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (user !== null) {
			return res.status(400).send('User already registered!');
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	next();
}

module.exports = router;
