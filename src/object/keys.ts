export function keys(object: object) {
	if (object !== Object(object)) {
		throw Error("TypeError: Object.keys called on non-object");
	}
	var ret = [],
		p;
	for (p in object) {
		if (Object.prototype.hasOwnProperty.call(object, p)) {
			ret.push(p);
		}
	}
	return ret;
}
