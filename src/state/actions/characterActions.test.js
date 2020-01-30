import CharacterFactory from '../characters/characterFactory.js';
import * as fixtures from '../fixtures/fixtures.js';
import * as actions from './characterActions.js';

describe('src/state/actions/characterActions', () => {
	beforeEach(() => {
		CharacterFactory.reset();
	});

	describe('#createCharacter', () => {
		it('has the correct shape', () => {
			const character = fixtures.generateCharacter('Joe', {
				bodilyPleasure: 1.2,
				justice: 0.5,
				appearance: -1.2,
			});
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

	describe('#submitConversation', () => {
		it('has the correct shape', () => {
			const conversation = {
				bodilyPleasure: 1,
				justice: -1,
				preside: 0.2,
			};
			const action = actions.submitConversation(conversation);

			expect(action.type).toEqual('CONVERSATION_COMPLETE');
			expect(action.payload).toEqual({
				bodilyPleasure: 1,
				justice: -1,
				preside: 0.2,
			});
		});
	});
});
