import CONST from '../../constants/index.js';

export const createCharacter = (characterInfo) => {
	const coefficients = {};

	CONST.characterValues.forEach((value) => {
		coefficients[value] = characterInfo[value].coefficient;
	});

	return {
		type: 'CREATE_CHARACTER',
		payload: {
			name: characterInfo.name,
			overallRelationship: characterInfo.overallRelationship,
			...coefficients,
		},
	};
}

export const submitConversation = (conversationData) => {
	return {
		type: 'CONVERSATION_COMPLETE',
		payload: conversationData,
	};
}
