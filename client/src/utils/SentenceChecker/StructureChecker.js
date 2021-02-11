const structures = require('./SentenceStructure');
const compromise = require('compromise');

/**
 * Filter a list of sentence structures
 *
 * @param {string} sentence
 * @returns [SentenceStructures]
 */
function filterStructure(sentence) {
	const identifier = sentence.split(' ')[0];

	return structures.filter((structure) => {
		let starter = structure.split(' ')[0];
		return compromise(identifier).has(starter);
	});
}

/**
 * Match sentence with list of structures using Compromise
 *
 * @param {string} sentence
 * @param {array} filteredStructures
 */
function fullStructCheck(sentence, filteredStructures) {
	return filteredStructures.some((structure) => {
		return compromise(sentence).has(structure);
	});
}

module.exports = { filterStructure, fullStructCheck };
