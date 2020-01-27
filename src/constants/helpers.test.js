import * as helpers from './helpers.js';

describe('src/constants/helpers.js', () => {
	describe('#appendKeysTo()', () => {
		it('appends default keys to an object', () => {
			const obj = {
				foo: {
					bar: 'bar',
				},
			};

			expect(helpers.appendKeysTo(obj).foo.key).toEqual('foo');
		});
	});
});
