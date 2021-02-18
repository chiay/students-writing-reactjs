const structures = require('./SentenceStructure');
const compromise = require('compromise');

/**
 * Filter a list of sentence structures
 *
 * @version 1.0.0
 * @param {string} sentence
 * @returns {array} Filtered list of structures that match part of speech of first word
 * @since 1.0.0
 */
function filterStructure(sentence) {
	const identifier = sentence.split(' ')[0];

	return structures.filter((structure) => {
		let starter = structure.split(' ')[0];
		return compromise(identifier).has(starter);
	});
}

/**
 * Match sentence with list of structures using Compromise and returns boolean result
 *
 * @version 1.0.0
 * @param {string} sentence String for analysis
 * @param {array} filteredStructures Filtered list of structures
 * @returns {boolean} True if one structure is matched
 * 						 False if no match
 * @since 1.0.0
 */
function hasFullStructCheck(sentence, filteredStructures) {
	return filteredStructures.some((structure) => {
		return compromise(sentence).has(structure);
	});
}

/**
 * Match sentence with list of structures using Compromise and returns structure that matches
 *
 * @version 1.0.0
 * @param {string} sentence
 * @param {array} filteredStructures
 * @returns {string} structure that matches sentence
 * @since 1.0.0
 */
function getFullStructCheck(sentence, filteredStructures) {
	return filteredStructures.find((structure) => {
		return compromise(sentence).has(structure);
	});
}

/*function perWordStructCheck(sentence, filteredStructures) {
	filteredStructures.forEach((structure) => {
		let splittedStructure = structure.split(' ');
		let words = sentence.split(' ');
	});
}

function matchWords(words, structure) {
	if (words.length == 0) return 0;
	if (structure.length == 0) return 0;

	let result = compromise(words[0]).has(structure[0]);
	let checkedWords = words.shift();
	let checkedStructure = structure.shift();
	if (result) return 1 + matchWords(checkedWords, checkedStructure)
}*/

module.exports = { filterStructure, hasFullStructCheck, getFullStructCheck };
