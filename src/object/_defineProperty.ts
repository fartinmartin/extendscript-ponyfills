// export function defineProperty(object: object, prop: string, desc) {
// 	if (object !== Object(object)) {
// 		throw Error("TypeError: Object.defineProperty called on non-object");
// 	}
// 	if (Object.prototype.__defineGetter__ && "get" in desc) {
// 		Object.prototype.__defineGetter__.call(object, prop, desc.get);
// 	}
// 	if (Object.prototype.__defineSetter__ && "set" in desc) {
// 		Object.prototype.__defineSetter__.call(object, prop, desc.set);
// 	}
// 	if ("value" in desc) {
// 		object[prop] = desc.value;
// 	}
// 	return object;
// }
