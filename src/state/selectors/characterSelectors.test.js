import * as actions from '../actions/characterActions.js';
import * as fixtures from '../fixtures/fixtures.js';
import reducer from '../reducers/characterReducer';
import * as selectors from './characterSelectors.js';

describe('src/state/selectors/characterSelectors', () => {
	const generateState = () => {
		const character = fixtures.generateCharacter('Joe', {
				bodilyPleasure: 1.2,
				justice: 0.5,
				appearance: -1.2,
			});
		const characterAction = actions.createCharacter(character);
		return reducer(characterAction);
	};

	describe('#getCharacter', () => {
		it('returns a character given a name', () => {
			const state = generateState();
			const character = selectors.getCharacter(state, 'Joe');

			expect(character.bodilyPleasure).toEqual(1.2);
			expect(character.justice).toEqual(0.5);
			expect(character.appearance).toEqual(-1.2);
		});
	});
});
