// import { defineProperties } from "./defineProperties";

// // ES5 15.2.3.5 Object.create ( O [, Properties] )
// export function create(prototype: object, properties: object) {
// 	if (typeof prototype !== "object") {
// 		throw Error("TypeError: Object.create needs an object.");
// 	}

// 	function Ctor() {}
// 	Ctor.prototype = prototype;
// 	var o = new Ctor();
// 	if (prototype) {
// 		o.constructor = Ctor;
// 	}
// 	if (properties !== undefined) {
// 		if (properties !== Object(properties)) {
// 			throw Error("TypeError: Object.create needs an object.");
// 		}
// 		defineProperties(o, properties);
// 	}
// 	return o;
// }
