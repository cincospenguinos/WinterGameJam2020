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

const characterValues = [
	'appearance',
	'bodilyPleasure',
	'charity',
	'emotionalAcceptance',
	'intimacy',
	'justice',
	'kindness',
	'preside',
	'structure',
];

const CONSTANTS = {
	characterValues,
	keys,
	sprites: helpers.appendKeysTo(sprites),
};

export default CONSTANTS;