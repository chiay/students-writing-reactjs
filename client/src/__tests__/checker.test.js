import {
	filterStructure,
	hasFullStructCheck,
	getFullStructCheck,
	getFullParagraphCheck,
} from '../utils/SentenceChecker/StructureChecker';

const s1 = 'I like science.';
const p1 = 'I like science. I like science. I like science.';

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

describe('paragraph check', () => {
	test('paragraph splitted', () => {
		const result = getFullParagraphCheck(p1);
		const expected = {
			sentence: 'I like science.',
			structure: '#Pronoun #Verb (#Adjective|#Noun)',
		};

		expect(result).toEqual([expected, expected, expected]);
	});
});
