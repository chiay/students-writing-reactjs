export const customTags = function (Doc, world) {
	world.addTags({
		Subject: {
			isA: 'Pronoun',
		},
		Object: {
			isA: 'Pronoun',
		},
	});

	world.addWords({
		i: 'Subject',
		he: 'Subject',
		she: 'Subject',
		it: 'Subject',
		you: 'Subject',
		we: 'Subject',
		they: 'Subject',
		me: 'Object',
		him: 'Object',
		her: 'Object',
		it: 'Object',
		your: 'Object',
		us: 'Object',
		them: 'Object',
	});
};
