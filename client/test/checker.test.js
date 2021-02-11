const { filter } = require('../src/utils/SentenceChecker/SentenceStructure');
const {
	filterStructure,
	fullStructCheck,
} = require('../src/utils/SentenceChecker/StructureChecker');

const s1 = 'I like science.';

describe('get filter structures', () => {
	test('for pronouns and not null', () => {
		const filtered = filterStructure(s1);
		expect(filtered).not.toBeNull();
	});

	test('for pronouns array', () => {
		const filtered = filterStructure(s1);
		expect(filtered).toContain(
			'#Pronoun #Verb * #Preposition * #Determiner #Noun'
		);

		expect(filtered).not.toContain(
			'#Adverb #Pronoun #Verb #Determiner #Adjective #Noun'
		);

		expect(filtered).not.toContain(
			'#Determiner #Noun #Adverb #Verb * #Preposition * #Determiner #Noun'
		);
	});
});

describe('check', () => {
	test('to fully match one structure', () => {
		const filtered = filterStructure(s1);
		const result = fullStructCheck(s1, filtered);
		expect(result).toBeTruthy();
	});
});
