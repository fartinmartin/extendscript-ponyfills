export function getPrototypeOf(object: any) {
	var proto = object.__proto__;

	if (proto || proto === null) {
		return proto;
	} else if (object.constructor.toString() === "[object Function]") {
		return object.constructor.prototype;
	} else if (object instanceof Object) {
		return object.prototype;
	} else {
		// Correctly return null for Objects created with 'Object.create(null)'
		// (shammed or native) or '{ __proto__: null}'.  Also returns null for
		// cross-realm objects on browsers that lack '__proto__' support (like
		// IE <11), but that's the best we can do.
		return null;
	}
}
