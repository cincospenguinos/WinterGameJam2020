import CharacterFactory from './characterFactory.js';

const sexDriver = {
	bodilyPleasure: 1,
	intimacy: 2,
	preside: 1,
};

const frontFacingCellphoneCamera = {
	appearance: 2,
	kindness: 1,
	emotionalAcceptance: -1,
};

const fatherMater = {
	charity: 2,
	kindness: 1,
	preside: 1,
	bodilyPleasure: -1,
};

const dukeFlauros = {
	justice: 1,
	kindness: -1,
	charity: -1,
	emotionalAcceptance: 2,
};

export const SexDriver = () => {
	return CharacterFactory.massAssignCoefficients(sexDriver)
		.setName('Sex Driver')
		.build();
};

export const FrontFacingCellphoneCamera = () => {
	return CharacterFactory.massAssignCoefficients(frontFacingCellphoneCamera)
		.setName('Front Facing Cellphone Camera')
		.build();
};

export const FatherMater = () => {
	return CharacterFactory.massAssignCoefficients(fatherMater)
		.setName('Father Mater')
		.build();
};

export const DukeFlauros = () => {
	return CharacterFactory.massAssignCoefficients(dukeFlauros)
		.setName('Duke Flauros')
		.build();
};
