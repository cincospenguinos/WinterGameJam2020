import sprites from './sprites.js';
import * as helpers from './helpers';

const extractKeysFrom = (obj) => {
	const keys = {};

	Object.keys(obj).forEach((key) => {
		keys[key] = key;
	});

	return keys;
};

const keys = {
	...extractKeysFrom(sprites),
};

const CONSTANTS = {
	keys,
	sprites: helpers.appendKeysTo(sprites),
};

export default CONSTANTS;