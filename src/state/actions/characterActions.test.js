import CharacterFactory from '../characters/characterFactory.js';
import * as actions from './characterActions.js';

describe('src/state/actions/characterActions', () => {
	beforeEach(() => {
		CharacterFactory.reset();
	});

	describe('#createCharacter', () => {
		it('has the correct shape', () => {
			const character = CharacterFactory.setName('Joe')
				.setCoefficient('bodilyPleasure', 1.2)
				.setCoefficient('justice', 0.5)
				.setCoefficient('appearance', -1.2)
				.build();
			const shape = actions.createCharacter(character);

			expect(shape.type).toEqual('CREATE_CHARACTER');
			expect(shape.payload).toEqual({
				bodilyPleasure: 1.2,
				intimacy: 0,
				emotionalAcceptance: 0,
				appearance: -1.2,
				structure: 0,
				preside: 0,
				justice: 0.5,
				kindness: 0,
				charity: 0,
				overallRelationship: character.overallRelationship,
				name: 'Joe',
			});
		});
	});
});
