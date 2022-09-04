import { defineProperty } from "./defineProperty";

export function defineProperties(object: any, descriptors: any) {
	let property;
	for (property in descriptors) {
		defineProperty(object, property, descriptors[property]);
	}
	return object;
}
