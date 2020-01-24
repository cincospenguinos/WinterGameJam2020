import * as characterActions from './characterActions.js';

describe('/src/state/actions/characterActions', () => {
	it('takes the correct shape', () => {
		expect(characterActions.foo()).toEqual({
			type: 'FOO',
			payload: 'bar',
		});
	});
});
