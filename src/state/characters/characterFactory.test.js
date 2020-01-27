import CharacterFactory from './characterFactory.js';

describe('src/state/characters/characterFactory', () => {
	afterEach(() => {
		CharacterFactory.reset();
	});

	it('sets the name', () => {
		const character = CharacterFactory.setName('Hey there homie').build();
		expect(character.name).toEqual('Hey there homie');
	});

	it('allows setting a value coefficient', () => {
		const character = CharacterFactory.setCoefficient('intimacy', 2.3).build();
		expect(character.intimacy.coefficient).toEqual(2.3);
	});

	it('defaults all coefficients to 0', () => {
		const values = ['bodilyPleasure','intimacy','emotionalAcceptance',
			'appearance','structure','preside','justice','kindness','charity'];
		const character = CharacterFactory.build();

		values.forEach((value) => expect(character[value].coefficient).toEqual(0));
	});

	it('sets an overall relationship score', () => {
		const character = CharacterFactory.setOverallRelationship(22).build();
		expect(character.overallRelationship).toEqual(22);
	});
});
