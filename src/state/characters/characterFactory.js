import CONST from '../../constants/index.js';

const defaultInfo = () => {
	return { overallRelationship: 0 };
};

export default class CharacterFactory {
	static DEFAULT_COEFFICIENT = 0;
	static CHARACTER_INFO = defaultInfo();

	static reset() {
		CharacterFactory.CHARACTER_INFO = defaultInfo();
	}

	static setName(name) {
		CharacterFactory.CHARACTER_INFO.name = name;
		return this;
	}

	static setCoefficient(value, coefficient) {
		if (!this._coefficientDefinedFor(value)) {
			CharacterFactory.CHARACTER_INFO[value] = {};
		}

		CharacterFactory.CHARACTER_INFO[value].coefficient = coefficient;
		return this;
	}

	static massAssignCoefficients(coefficients) {
		Object.keys(coefficients)
			.forEach((value) => this.setCoefficient(value, coefficients[value]));

		return this;
	}

	static setOverallRelationship(value) {
		CharacterFactory.CHARACTER_INFO.overallRelationship = value;
		return this;
	}

	static build() {
		const info = { ...CharacterFactory.CHARACTER_INFO };

		CONST.characterValues.forEach((value) => {
			if (!info[value] || !info[value].coefficient) {
				info[value] = {
					coefficient: CharacterFactory.DEFAULT_COEFFICIENT,
				};
			};
		});

		return info;
	}

	static _coefficientDefinedFor(value) {
		const info = CharacterFactory.CHARACTER_INFO;

		return info[value] && info[value] !== null && info[value] !== undefined;
	}
}
