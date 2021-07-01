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

	'#Subject #Verb (#Object|#Adjective)?',
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

	/****************************************************************************************************/

	'#Determiner #Adjective? #Noun (and|or) #Determiner #Adjective? #Noun #Verb (#Object|#Determiner #Adjective? #Noun)? (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Determiner #Adjective? #Noun (and|or) #Determiner #Adjective? #Noun #Verb #Preposition (#Object|#Determiner #Adjective? #Noun) (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Determiner #Adjective? #Noun (and|or) #Determiner #Adjective? #Noun #Verb #Adjective?',

	'#Determiner #Adjective? #Noun (and|or) #Subject #Preposition #Verb (#Object|#Determiner #Adjective? #Noun) (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Determiner #Adjective? #Noun (and|or) #Subject #Verb (#Adjective|#Preposition #Object)?',

	'#Determiner #Adjective? #Noun (and|or) #Subject #Verb #Object (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Determiner #Adjective? #Noun (and|or) #Subject #Verb #Preposition (#Object|#Determiner #Adjective? #Noun) (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Determiner #Adjective? #Noun (and|or) #Subject #Verb #Determiner #Adjective? #Noun (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Determiner #Adjective? #Noun (and|or) #Subject #Verb #Object #Preposition (#Object|#Determiner #Adjective? #Noun) (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Determiner #Adjective? #Noun (and|or) #Noun #Verb',

	'#Subject (and|or) #Subject #Verb (#Determiner #Adjective? #Noun #Preposition #Determiner #Adjective)?',

	'#Subject (and|or) #Subject #Verb #Determiner #Adjective? #Noun (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Subject (and|or) #Subject #Verb #Preposition (#Object|#Determiner #Adjective? #Noun) (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Subject (and|or) #Subject #Verb #Adjective',

	'#Subject (and|or) #Subject #Verb #Object (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Subject (and|or) #Determiner #Adjective? #Noun #Verb',

	'#Subject (and|or) #Determiner #Adjective? #Noun #Verb #Determiner #Adjective? #Noun (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Subject (and|or) #Determiner #Adjective? #Noun #Verb #Preposition (#Object|#Determiner #Adjective? #Noun) (#Preposition [#Object|#Determiner #Adjective? #Noun])?',

	'#Subject (and|or) #Determiner #Adjective? #Noun #Verb #Object #Preposition (#Object|#Determiner #Adjective? #Noun)',

	/****************************************************************************************************/
	// Non-simplified structure start here

	'#Determiner #Adjective #Noun #Verb #Adjective (and|or) #Adjective',

	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb #Object #Preposition #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb #Object (and|or) #Object',

	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb #Preposition #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb #Preposition #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb #Preposition #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb #Preposition #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb #Preposition #Object (and|or) #Object',

	'#Determiner #Adjective #Noun #Verb #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Adjective (and|or) #Adjective',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Object #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Object #Preposition #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Object (and|or) #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Object (and|or) #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun #Verb (and|or) #Verb ',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun #Verb #Adjective (and|or) #Adjective',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun #Verb #Object (and|or) #Object',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun #Verb #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun #Verb (and|or) #Verb #Adjective (and|or) #Adjective',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Noun #Verb #Adjective (and|or) #Adjective',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Noun #Verb #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun ',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Noun #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Determiner #Noun #Verb (and|or) #Verb #Adjective (and|or) #Adjective',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Adjective (and|or) #Adjective',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Determiner #Noun (and|or) #Determiner #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Object #Preposition #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Object (and|or) #Object',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Object (and|or) #Object',

	'#Determiner #Adjective #Noun (and|or) #Subject #Verb #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Preposition #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Preposition #Verb #Object (and|or) #Object',

	'#Determiner #Noun #Preposition #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Preposition #Verb (and|or) #Verb #Object (and|or) #Object',

	'#Determiner #Noun #Verb #Adjective (and|or) #Adjective',

	'#Determiner #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb #Determiner #Noun (and|or) #Determiner #Noun',

	'#Determiner #Noun #Verb #Determiner #Noun',

	'#Determiner #Noun #Verb #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Verb #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb #Object (and|or) #Object (and|or) #Object',

	'#Determiner #Noun #Verb #Object (and|or) #Object',

	'#Determiner #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective',

	'#Determiner #Noun #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Verb #Preposition #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb #Preposition #Object #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb #Preposition #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb #Preposition #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Verb #Preposition #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb (and|or) #Verb #Adjective (and|or) #Adjective',

	'#Determiner #Noun #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb (and|or) #Verb #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb (and|or) #Verb #Determiner #Noun (and|or) #Determiner #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Determiner #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Object #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Object #Preposition #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb (and|or) #Verb #Object (and|or) #Object (and|or) #Object',

	'#Determiner #Noun #Verb (and|or) #Verb #Object (and|or) #Object',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Object #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb (and|or) #Verb #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun #Verb (and|or) #Verb ',

	'#Determiner #Noun (and|or) #Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun (and|or) #Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun (and|or) #Determiner #Adjective #Noun #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Adjective (and|or) #Adjective',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Determiner #Noun (and|or) #Determiner #Noun',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Object (and|or) #Object',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun (and|or) #Determiner #Noun #Verb (and|or) #Verb #Adjective (and|or) #Adjective',

	'#Determiner #Noun (and|or) #Subject #Preposition #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun (and|or) #Subject #Preposition #Verb #Object (and|or) #Object',

	'#Determiner #Noun (and|or) #Subject #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Subject #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun (and|or) #Subject #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun (and|or) #Subject #Verb #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Subject #Verb #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Subject #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun (and|or) #Subject #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun (and|or) #Subject #Verb #Determiner #Noun (and|or) #Determiner #Noun',

	'#Determiner #Noun (and|or) #Subject #Verb #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Subject #Verb #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Determiner #Noun (and|or) #Subject #Verb #Object (and|or) #Object',

	'#Determiner #Noun (and|or) #Subject #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Subject #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Determiner #Noun (and|or) #Subject #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Determiner #Noun (and|or) #Subject #Verb #Preposition #Object (and|or) #Preposition #Object',

	'#Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb #Adjective (and|or) #Adjective',

	'#Subject #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Subject #Verb #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb #Determiner #Noun (and|or) #Determiner #Noun',

	'#Subject #Verb #Determiner #Noun',

	'#Subject #Verb #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb #Object (and|or) #Object',

	'#Subject #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb #Preposition #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb #Preposition #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb #Preposition #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb #Preposition #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb #Preposition #Object',

	'#Subject #Verb (and|or) #Verb #Adjective (and|or) #Adjective',

	'#Subject #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Subject #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb (and|or) #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb (and|or) #Verb #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Subject #Verb (and|or) #Verb #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb (and|or) #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb (and|or) #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb (and|or) #Verb #Determiner #Noun (and|or) #Determiner #Noun',

	'#Subject #Verb (and|or) #Verb #Determiner #Noun',

	'#Subject #Verb (and|or) #Verb #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb (and|or) #Verb #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb (and|or) #Verb #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb (and|or) #Verb #Object (and|or) #Object',

	'#Subject #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb (and|or) #Verb #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb (and|or) #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb (and|or) #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb (and|or) #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun',

	'#Subject #Verb (and|or) #Verb #Preposition #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb (and|or) #Verb #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb (and|or) #Verb #Preposition #Determiner #Noun',

	'#Subject #Verb (and|or) #Verb #Preposition #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject #Verb (and|or) #Verb #Preposition #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject #Verb (and|or) #Verb #Preposition #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb (and|or) #Verb #Preposition #Object (and|or) #Object',

	'#Subject #Verb (and|or) #Verb #Preposition #Object (and|or) #Preposition #Object',

	'#Subject #Verb (and|or) #Verb #Preposition #Object',

	'#Subject #Verb (and|or) #Verb',

	'#Subject (and|or) #Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject (and|or) #Determiner #Adjective #Noun #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Determiner #Adjective #Noun #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Determiner #Adjective #Noun #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Determiner #Adjective #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Determiner #Adjective #Noun #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Determiner #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject (and|or) #Determiner #Noun #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Determiner #Noun #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Determiner #Noun #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Determiner #Noun #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Determiner #Noun #Verb #Determiner #Noun (and|or) #Determiner #Noun',

	'#Subject (and|or) #Determiner #Noun #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Determiner #Noun #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Subject #Verb #Adjective (and|or) #Adjective',

	'#Subject (and|or) #Subject #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject (and|or) #Subject #Verb #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Subject #Verb #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Subject #Verb #Determiner #Adjective #Noun (and|or) #Determiner #Adjective #Noun',

	'#Subject (and|or) #Subject #Verb #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject (and|or) #Subject #Verb #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Subject #Verb #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Subject #Verb #Determiner #Noun (and|or) #Determiner #Noun',

	'#Subject (and|or) #Subject #Verb #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject (and|or) #Subject #Verb #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Subject #Verb #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Subject #Verb #Object (and|or) #Object',

	'#Subject (and|or) #Subject #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject (and|or) #Subject #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Subject #Verb #Preposition #Determiner #Adjective #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Subject #Verb #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject (and|or) #Subject #Verb #Preposition #Determiner #Adjective #Noun',

	'#Subject (and|or) #Subject #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject (and|or) #Subject #Verb #Preposition #Determiner #Noun #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Subject #Verb #Preposition #Determiner #Noun #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Subject #Verb #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Subject #Verb #Preposition #Object #Preposition #Determiner #Adjective #Noun (and|or) #Preposition #Determiner #Adjective #Noun',

	'#Subject (and|or) #Subject #Verb #Preposition #Object #Preposition #Determiner #Noun (and|or) #Preposition #Determiner #Noun',

	'#Subject (and|or) #Subject #Verb #Preposition #Object #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Subject #Verb #Preposition #Object (and|or) #Preposition #Object',

	'#Subject (and|or) #Subject #Verb #Preposition #Object',

	'#Subject (and|or) #Subject #Verb (and|or) #Verb #Adjective (and|or) #Adjective',
];
