/**
 * Legend:
 *
 * (A|B) or [A|B] = Either having 'A' or 'B'
 *
 * A? = 'A' is good to have but optional
 *
 * #Determiner a.k.a Article = A, An, The
 */

module.exports = [
	'#Pronoun #Verb (#Adjective|#Noun|#Adverb)',

	'(#Pronoun|#Subject) #Verb (#Determiner|#Possessive) #Adjective? #Noun (#Adverb #Preposition [#Determiner|#Possessive] #Noun)?',

	'(#Pronoun|#Subject) #Verb (#Determiner|#Possessive) #Adjective? #Noun (#Preposition [#Determiner|#Possessive] #Adjective? #Noun)? #Adverb?',

	'(#Pronoun|#Subject) #Verb (#Determiner|#Possessive) #Adjective? #Noun (#Preposition #Adjective? [#Determiner|#Possessive] #Noun)? #Adverb?',

	'(#Pronoun|#Subject) #Verb #Preposition (#Determiner|#Possessive) #Adjective? #Noun #Adverb?',
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

	'#Subject #Verb (#Object|#Adjective)',
	'#Subject #Verb #Object? #Preposition #Object',
	'#Subject #Verb #Object #Preposition #Determiner #Adjective? #Noun',

	'#Subject #Verb #Determiner #Adjective? #Noun #Preposition (#Object|#Determiner #Noun)',

	'#Subject #Verb #Preposition #Object #Preposition (#Object|#Determiner #Noun)',

	'#Subject #Verb #Preposition #Determiner #Adjective? #Noun (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Determiner #Adjective? #Noun #Verb #Object (#Determiner #Adjective #Noun)?',

	'#Determiner #Adjective #Noun #Verb #Object #Preposition #Object (#Preposition #Object)?',

	'#Determiner #Adjective? #Noun #Verb #Object #Preposition (#Object|#Determiner #Adjective? #Noun)',

	'#Determiner #Adjective #Noun #Verb #Determiner #Noun #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun (#Preposition [#Object|#Determiner #Adjective #Noun])?',

	'#Determiner #Adjective? #Noun #Verb #Preposition #Object #Preposition (#Object|#Determiner #Adjective? #Noun)',

	'#Determiner #Adjective? #Noun #Verb #Preposition #Determiner #Adjective? #Noun (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Determiner #Adjective? #Noun #Verb #Preposition #Object (#Determiner #Adjective #Noun)?',
];
