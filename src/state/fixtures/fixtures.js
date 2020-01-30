import CharacterFactory from '../characters/characterFactory.js';

export const generateCharacter = (name, coefficients) => {
	return CharacterFactory.setName(name)
		.massAssignCoefficients(coefficients)
		.build();
}
