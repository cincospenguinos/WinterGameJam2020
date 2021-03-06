import * as actions from '../actions/characterActions.js';
import * as fixtures from '../fixtures/fixtures.js';
import reducer from './characterReducer';

describe('src/state/reducers/characterReducer', () => {
	it('handles character creation', () => {
		const character = fixtures.generateCharacter('Joe', {
				bodilyPleasure: 1.2,
				justice: 0.5,
				appearance: -1.2,
			});
		const characterAction = actions.createCharacter(character);
		const state = reducer(characterAction);

		expect(state[character.name]).toBeTruthy();
	});

	describe('when a conversation happens', () => {
		it('updates a single character', () => {
			const character = fixtures.generateCharacter('Joe', {
				bodilyPleasure: 1.2,
				justice: 0.5,
				appearance: -1.2,
			});
			let state = reducer(actions.createCharacter(character));
			state = reducer(actions.submitConversation({ justice: 2 }), state);

			expect(state['Joe'].overallRelationship).toEqual(1);
		});
	});
});
