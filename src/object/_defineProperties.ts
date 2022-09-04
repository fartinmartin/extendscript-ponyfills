// import { defineProperty } from "./defineProperty";

// // ES 15.2.3.7 Object.defineProperties ( O, Properties )
// export function defineProperties(object: object, properties: object) {
// 	if (object !== Object(object)) {
// 		throw Error("TypeError: Object.defineProperties called on non-object");
// 	}
// 	var name;
// 	for (name in properties) {
// 		if (Object.prototype.hasOwnProperty.call(properties, name)) {
// 			defineProperty(object, name, properties[name]);
// 		}
// 	}
// 	return o;
// }
