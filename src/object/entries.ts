function entries(obj: object | null) {
	if (obj == null) {
		throw new Error("Cannot convert undefined or null to object");
	}

	const pairs = [];
	for (const key in obj) {
		if (has(obj, key) && isEnumerable(obj, key)) {
			// @ts-ignore
			pairs.push([key, obj[key]]);
		}
	}

	return pairs;
}

function has(obj: object, prop: string) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
}
function isEnumerable(obj: object, prop: string) {
	return Object.prototype.propertyIsEnumerable.call(obj, prop);
}
