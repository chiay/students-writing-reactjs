const structures = require('./SentenceStructure');
const compromise = require('compromise');

function filterStructure(sentence) {
	const identifier = sentence.split(' ')[0];

	const filteredStructure = structures.filter((structure) => {
		let starter = structure.split(' ')[0];
		return compromise(identifier).has(starter);
	});

	console.log(filteredStructure);

	return filteredStructure;
}

filterStructure('I like science.');
