const values = {
	bodilyPleasure: 0,
	intimacy: 0,
	emotionalAcceptance: 0,
	appearance: 0,
	structure: 0,
	preside: 0,
	justice: 0,
	kindness: 0,
	charity: 0,
};

const defaultInfo = () => {
	return { overallRelationship: 0 };
};

export default class CharacterFactory {
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

	static setOverallRelationship(value) {
		CharacterFactory.CHARACTER_INFO.overallRelationship = value;
		return this;
	}

	static build() {
		const info = { ...CharacterFactory.CHARACTER_INFO };

		Object.keys(values).forEach((value) => {
			if (!info[value] || !info[value].coefficient) {
				info[value] = {
					coefficient: values[value],
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
