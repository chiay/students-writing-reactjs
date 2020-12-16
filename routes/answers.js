const express = require('express');
const router = express.Router();
const Answer = require('../models/answer');
const User = require('../models/user');

/**
 * Get all answers
 * @access public
 */
router.get('/', async (req, res) => {
   try {
		const answers = await Answer.find({});
		res.json(answers);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

/**
 * Create a new answer
 * @access private
 */
router.post('/create', getUser, async (req, res) => {
   try {
      const tempAnswer = new Answer({
         author: res.User._id,
         entry: req.body.entry,
      })
      const newAnswer = await tempAnswer.save();
      res.status(201).json(newAnswer);
   } catch (err) {
		return res.status(500).json({ message: err.message });
   }
   
})

/**
 * Edit answer
 * @access private
 */
router.patch('/edit', getUser, getAnswer, async (req, res) => {
   if (req.body.entry != null) {
      res.Answer.entry = req.body.entry;
   }
   res.Answer.updatedOn = Date.now;
   try {
      if (res.User._id !== res.Answer.author) {
         return res.status(400).json({ message: 'Cannot edit answer of another user.' });
      }
		const updatedAnswer = await res.Answer.save();
		res.json(updatedAnswer);
	} catch (err) {
		return res.status(400).json({ message: err.message });
	}
})

/**
 * Delete answer
 * @access private
 */
router.delete('/delete', getUser, getAnswer, async (req, res) => {
   try {
      if (res.User._id !== res.Answer.author) {
         return res.status(400).json({ message: 'Cannot delete answer of another user.' });
      }
		await res.Answer.remove();
		res.json({ message: 'Answer removed.' });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
})

/**
 * Get a particular user middleware
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function getUser(req, res, next) {
	let existingUser;
	try {
		existingUser = await User.findOne({ email: req.body.email });
		if (existingUser == null) {
			return res.status(404).json({ message: 'Cannot find user!' });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.User = existingUser;
	next();
}

/**
 * Get a particular answer middleware
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function getAnswer(req, res, next) {
	let oldAnswer;
	try {
		oldAnswer = await Answer.findById(req.body.id);
		if (oldAnswer == null) {
			return res.status(404).json({ message: 'Cannot find answer!' });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.Answer = oldAnswer;
	next();
}

module.exports = router;