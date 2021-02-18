const {
	filterStructure,
	hasFullStructCheck,
	getFullStructCheck,
} = require('../src/utils/SentenceChecker/StructureChecker');

const s1 = 'I like science.';

describe('get filtered structures', () => {
	test('for pronouns and not null', () => {
		const filtered = filterStructure(s1);
		expect(filtered).not.toBeNull();
	});

	test('for pronouns array', () => {
		const filtered = filterStructure(s1);
		expect(filtered).toContain(
			'#Pronoun #Verb #Preposition #Determiner #Noun #Adverb?'
		);

		expect(filtered).not.toContain(
			'#Adverb #Pronoun #Verb #Determiner #Adjective #Noun'
		);

		expect(filtered).not.toContain(
			'#Determiner #Noun #Adverb #Verb #Preposition #Determiner #Noun'
		);
	});
});

describe('check', () => {
	test('to fully match one structure and return boolean value', () => {
		const filtered = filterStructure(s1);
		const result = hasFullStructCheck(s1, filtered);
		expect(result).toBeTruthy();
	});

	test('to fully match one structure and return structure string', () => {
		const filtered = filterStructure(s1);
		const result = getFullStructCheck(s1, filtered);
		expect(result).toBe('#Pronoun #Verb (#Adjective|#Noun)');
	});
});
