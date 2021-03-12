module.exports = [
	'#Pronoun #Verb (#Adjective|#Noun|#Adverb)',

	'#Pronoun #Verb (#Determiner|#Possessive) #Adjective? #Noun (#Adverb #Preposition [#Determiner|#Possessive] #Noun)?',

	'#Pronoun #Verb (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)? #Adverb?',

	'#Pronoun #Verb (#Determiner|#Possessive) #Adjective? #Noun (#Preposition #Adjective? [#Determiner|#Possessive] #Noun)? #Adverb?',

	'#Pronoun #Verb #Preposition (#Determiner|#Possessive) #Adjective? #Noun #Adverb?',
	'#Pronoun #Verb #Preposition (#Determiner|#Possessive) #Adjective #Noun #Preposition (#Determiner|#Possessive) #Adjective #Noun',
	'#Pronoun #Verb #Preposition (#Determiner|#Possessive) #Noun #Preposition (#Determiner|#Possessive) #Noun #Adverb',

	'#Pronoun #Verb #Preposition (#Determiner|#Possessive) #Adjective #Noun #Preposition (#Determiner|#Possessive) #Adjective? #Noun #Adverb?',

	'#Pronoun #Verb #Preposition (#Determiner|#Possessive) #Noun #Adverb #Preposition (#Determiner|#Possessive) #Noun',

	'#Pronoun #Verb #Preposition #Adverb (#Determiner|#Possessive) #Adjective #Noun #Preposition #Adjective (#Determiner|#Possessive) #Noun',

	'#Pronoun #Verb #Adverb (#Determiner|#Possessive) #Adjective #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	/** Not sure if this is correct */
	'#Pronoun #Verb #Adverb #Determiner #Possessive #Adjective #Noun #Preposition #Adjective #Determiner #Noun',
	'#Pronoun #Verb #Adverb #Determiner #Possessive #Adjective #Noun #Preposition #Determiner #Noun',
	/********************************/

	'#Pronoun #Verb #Adverb #Preposition (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Noun)?',

	'#Pronoun #Adverb #Verb ([#Determiner|#Possessive] #Adjective? #Noun)? (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'#Pronoun #Adverb #Verb #Preposition (#Determiner|#Possessive) #Adjective? #Noun #Preposition (#Determiner|#Possessive) #Adjective? #Noun',

	/****************************************************************************************************/

	'#Adverb #Pronoun #Verb ([#Determiner|#Possessive] #Adjective #Noun)? (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'#Adverb #Pronoun #Verb (#Determiner|#Possessive) #Preposition (#Determiner|#Possessive) #Noun',

	'#Adverb #Pronoun #Verb #Preposition (#Determiner|#Possessive) #Noun #Preposition (#Determiner|#Possessive) #Noun',

	'#Adverb #Pronoun #Verb #Preposition (#Determiner|#Possessive) (#Preposition [#Determiner|#Possessive] #Noun|#Adjective #Noun #Preposition [#Determiner|#Possessive] #Adjective #Noun)',

	'#Adverb (#Determiner|#Possessive) #Noun #Verb (#Possessive #Noun)? (#Preposition [#Determiner|#Possessive] #Noun)?',

	'#Adverb (#Determiner|#Possessive) #Noun #Verb (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'#Adverb (#Determiner|#Possessive) #Adjective? #Noun #Verb',

	'#Adverb (#Determiner|#Possessive) #Adjective? #Noun #Verb #Preposition (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'#Adverb (#Determiner|#Possessive) #Adjective? #Noun #Verb (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	/****************************************************************************************************/

	'(#Determiner|#Possessive) #Noun #Verb #Adverb? #Preposition ([#Determiner|#Possessive] #Adjective? #Noun)? (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Noun #Verb #Adverb? ([#Determiner|#Possessive] #Adjective? #Noun)? (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Noun #Verb #Preposition ([#Determiner|#Possessive] #Adjective? #Noun)? (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)? #Adverb?',

	'(#Determiner|#Possessive) #Noun #Verb #Preposition ([#Determiner|#Possessive] #Adjective #Noun)? #Adverb? (#Preposition [#Determiner|#Possessive] #Adjective #Noun)?',

	'(#Determiner|#Possessive) #Noun #Verb ([#Determiner|#Possessive] #Adjective? #Noun)? #Adverb? (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Noun #Verb ([#Determiner|#Possessive] #Adjective? #Noun)? (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)? #Adverb?',

	'(#Determiner|#Possessive) #Noun #Adverb? #Verb ([#Determiner|#Possessive] #Adjective? #Noun)? (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Noun #Adverb #Verb #Preposition (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Noun #Adverb #Verb (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Adjective? #Noun #Verb #Adjective (#Noun #Preposition #Possessive #Adjective #Noun)?',

	'(#Determiner|#Possessive) #Adjective? #Noun #Verb #Adverb ([#Determiner|#Possessive] #Adjective? #Noun)? (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Adjective? #Noun #Verb #Adverb #Preposition (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Adjective #Noun #Verb (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)? #Adverb?',

	'(#Determiner|#Possessive) #Adjective #Noun #Verb (#Determiner|#Possessive) #Adjective? #Noun #Adverb (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Adjective? #Noun #Verb #Preposition (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)? #Adverb?',

	'(#Determiner|#Possessive) #Adjective #Noun #Verb #Preposition (#Determiner|#Possessive) #Adjective? #Noun #Adverb (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Adjective #Noun #Adverb #Verb ([#Determiner|#Possessive] #Adjective? #Noun)? (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Adjective #Noun #Adverb #Verb #Preposition (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)?',

	'(#Determiner|#Possessive) #Adjective #Noun #Adverb #Verb #Preposition (#Determiner|#Possessive) #Adjective? #Noun (#Determiner|#Possessive) #Adjective? #Noun',

	'(#Determiner|#Possessive) #Adjective? #Noun #Verb #Adjective',
	/****************************************************************************************************/
];
