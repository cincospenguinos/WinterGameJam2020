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
		default: {
			return {
				...state,
			};
		};
	};
}
