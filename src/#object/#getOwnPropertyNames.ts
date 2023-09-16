export function getOwnPropertyNames(object: object) {
	if (object !== Object(object)) {
		throw Error("TypeError: Object.getOwnPropertyNames called on non-object");
	}
	var props = [],
		p;
	for (p in object) {
		if (Object.prototype.hasOwnProperty.call(object, p)) {
			props.push(p);
		}
	}
	return props;
}
