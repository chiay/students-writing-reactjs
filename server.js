require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
	console.error(error);
});

db.once('open', () => {
	console.log('Database Connected');
});

const usersRouter = require('./routes/users');
const promptsRouter = require('./routes/prompts');

app.use('/api/user', usersRouter);
app.use('/api/prompt', promptsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
