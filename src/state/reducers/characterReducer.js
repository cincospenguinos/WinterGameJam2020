const charactersModifiedBy = (conversation, state) => {
	const changedCharacters = {};

	Object.keys(state).forEach((characterKey) => {
		const character = state[characterKey];
		const oldRelationship = character.overallRelationship;

		const newRelationship = Object.keys(conversation)
			.map((valueKey) => {
				const changeAmount = conversation[valueKey];
				return changeAmount * character[valueKey];
			}).reduce((a, b) => a + b, 0);

		if (oldRelationship !== newRelationship) {
			changedCharacters[characterKey] = newRelationship;
		}
	});

	return changedCharacters;
};

export default function (action, state = {}) {
	switch(action.type) {
		case 'CREATE_CHARACTER': {
			const character = Object.assign({}, action.payload);

			return {
				...state,
				[character.name]: {
					...character,
				}
			}
		}
		case 'CONVERSATION_COMPLETE': {
			const conversation = action.payload;
			const changedCharacters = charactersModifiedBy(conversation, state);

			const newState = { ...state };

			Object.keys(changedCharacters).forEach((characterKey) => {
				const character = newState[characterKey];
				character.overallRelationship = changedCharacters[characterKey];
			});

			return newState;
		}
		default: {
			return {
				...state,
			};
		};
	};
}
