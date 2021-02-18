module.exports = [
	//'#Pronoun #Verb #Preposition #Determiner #Noun',
	'#Pronoun #Verb #Preposition #Determiner #Noun #Adverb?',

	'#Pronoun #Verb #Preposition #Possessive #Noun',
	'#Pronoun #Verb #Preposition #Possessive #Adjective #Noun',

	//'#Pronoun #Verb #Preposition #Determiner #Adjective #Noun',
	'#Pronoun #Verb #Preposition #Determiner #Adjective #Noun #Adverb?',
	'#Pronoun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun',

	'#Pronoun #Verb #Preposition #Possessive #Adjective #Noun #Preposition #Determiner #Adjective #Noun',
	'#Pronoun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Possessive #Adjective #Noun',
	'#Pronoun #Verb #Preposition #Possessive #Adjective #Noun #Preposition #Possessive #Adjective #Noun',

	'#Pronoun #Verb #Adverb #Determiner #Adjective #Noun',

	//'#Pronoun #Verb #Adverb #Preposition #Determiner #Noun',
	'#Pronoun #Verb #Adverb #Preposition #Determiner #Adjective? #Noun',

	'#Pronoun #Verb (#Adjective|#Noun)',
	//'#Pronoun #Verb #Noun',
	'#Pronoun #Verb #Possessive #Noun',
	'#Pronoun #Verb #Possessive #Adjective #Noun',
	//'#Pronoun #Verb #Determiner #Noun',
	//'#Pronoun #Verb #Determiner #Adjective? #Noun',
	'#Pronoun #Verb #Determiner #Adjective? #Noun #Adverb?',

	//'#Pronoun #Adverb #Verb #Determiner #Adjective #Noun',
	//'#Pronoun #Adverb #Verb #Preposition #Determiner #Noun',
	'#Pronoun #Adverb #Verb (#Preposition)? #Determiner #Adjective? #Noun',

	'#Adverb #Pronoun #Verb #Determiner #Adjective #Noun',
	'#Adverb #Pronoun #Verb #Preposition #Determiner #Adjective? #Noun',
	//'#Adverb #Pronoun #Verb #Preposition #Determiner #Noun',

	//'#Adverb #Determiner #Noun #Verb #Preposition #Determiner #Noun',
	'#Adverb #Determiner #Noun #Verb #Preposition #Determiner #Noun (#Preposition #Determiner #Noun)?',

	//'#Adverb #Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun',
	'#Adverb #Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun (#Preposition #Determiner #Adjective #Noun)?',

	//'#Adverb #Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun',
	'#Adverb #Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun (#Preposition #Determiner #Adjective #Noun)?',

	//'#Determiner #Noun #Verb #Preposition #Determiner #Noun',
	'#Determiner #Noun #Verb #Preposition #Possessive #Noun',
	'#Determiner #Noun #Verb #Preposition #Determiner #Noun #Adverb?',
	'#Determiner #Noun #Verb #Preposition (#Determiner|#Possessive) #Noun #Preposition #Determiner #Noun',
	'#Determiner #Noun #Verb #Preposition #Determiner #Noun #Preposition #Possessive #Noun',

	//'#Determiner #Noun #Verb #Adjective',
	'#Determiner #Noun #Verb (#Determiner|#Possessive) #Noun',
	//'#Determiner #Noun #Verb #Possessive #Noun',
	'#Determiner #Noun #Verb #Adverb #Preposition #Determiner #Noun',
	'#Determiner #Noun #Adverb #Verb #Preposition #Determiner #Noun',

	'#Determiner #Adjective? #Noun #Verb #Adjective',

	//'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Adverb?',
	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Possessive #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Possessive #Adjective #Noun #Preposition #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Possessive #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Adjective #Noun #Preposition #Possessive #Adjective #Noun',

	//'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Adverb?',
	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Preposition #Possessive #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Preposition #Possessive #Adjective #Noun #Preposition #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Possessive #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun #Adverb',
	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Possessive #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Adverb #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Adverb #Preposition #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun #Adverb?',

	//'#Determiner #Adjective #Noun #Adverb #Verb #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Adverb #Verb #Determiner #Adjective #Noun (#Preposition #Determiner #Adjective #Noun)?',

	//'#Determiner #Adjective #Noun #Adverb #Verb #Preposition #Determiner #Adjective #Noun',
	'#Determiner #Adjective #Noun #Adverb #Verb #Preposition #Determiner #Adjective #Noun (#Preposition #Determiner #Adjective #Noun)?',

	'#Possessive #Noun #Verb (#Determiner|#Possessive) #Noun',
	'#Possessive #Adjective #Noun #Verb (#Determiner|#Possessive) #Adjective #Noun',
	'#Possessive #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun',
	'#Possessive #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Possessive #Adjective #Noun',

	'#Possessive #Adjective #Noun #Verb #Preposition #Possessive #Adjective #Noun',
	'#Possessive #Adjective #Noun #Verb #Preposition #Possessive #Adjective #Noun #Preposition #Possessive #Adjective #Noun',
	'#Possessive #Adjective #Noun #Verb #Preposition #Adjective #Noun #Preposition #Determiner #Adjective #Noun',
	'#Possessive #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Possessive #Adjective #Noun',
	'#Possessive #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun',

	'#Possessive #Adjective #Noun #Verb #Preposition #Adjective #Noun #Determiner #Adjective #Noun',
	'#Possessive #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun',
	'#Possessive #Adjective #Noun #Verb #Possessive #Adjective #Noun #Preposition #Possessive #Adjective #Noun',
	'#Possessive #Adjective #Noun #Verb #Possessive #Adjective #Noun #Preposition #Determiner #Adjective #Noun',

	//'#Possessive #Noun #Verb #Adjective',
	'#Possessive #Adjective? #Noun #Verb #Adjective',
	'#Possessive #Noun #Verb #Preposition (#Determiner|#Possessive) #Noun',
	'#Possessive #Noun #Verb #Preposition (#Determiner|#Possessive) #Noun #Preposition #Determiner #Noun',
	'#Possessive #Noun #Verb #Preposition #Determiner #Noun #Preposition #Possessive #Noun',
];
