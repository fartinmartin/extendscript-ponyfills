// // ES5 15.2
// export function getOwnPropertyDescriptor(object: object, name: string) {
// 	if (object !== Object(object)) {
// 		throw Error(
// 			"TypeError: Object.getOwnPropertyDescriptor called on non-object"
// 		);
// 	}
// 	if (object.hasOwnProperty(name)) {
// 		return {
// 			value: object[name],
// 			enumerable: true,
// 			writable: true,
// 			configurable: true,
// 		};
// 	}
// }
