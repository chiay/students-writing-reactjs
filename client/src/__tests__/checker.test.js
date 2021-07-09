import {
	hasFullStructCheck,
	getFullStructCheck,
	getFullParagraphCheck,
} from '../utils/SentenceChecker/StructureChecker';

const s1 = 'The rabbit ran and fell.';
//const s2 = 'He loves her.';
const p1 = 'I like science. I like science. I like science.';
const s1Struct = '#Determiner #Noun #Verb (and|or) #Verb';


describe('check', () => {
	test('to fully match one structure and return boolean value', () => {
		const result = hasFullStructCheck(s1);
		expect(result).toBeTruthy();
	});

	test('to fully match one structure and return structure string', () => {
		const result = getFullStructCheck(s1);
		expect(result).toBe(s1Struct);
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

describe('check custom tags plugin', () => {
	test('if subject and object tags detected', () => {
		const result = getFullStructCheck(s1);
		expect(result).toBe(s1Struct);
	});
});
