export const appendKeysTo = (obj) => {
	const newObj = Object.assign({}, obj);

	Object.keys(obj).forEach((key) => {
		newObj[key].key = key;
	});

	return newObj;
};
