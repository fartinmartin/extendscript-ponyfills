import { isArray } from "../array/isArray";

// https://github.com/angus-c/just/blob/master/packages/collection-clone/index.cjs
export function clone(object: any) {
	let result = object;
	const type = {}.toString.call(object).slice(8, -1);
	if (type == "Array" || type == "Object") {
		result = isArray(object) ? [] : {};
		for (const key in object) {
			try {
				result[key] = clone(object[key]);
			} catch (error) {
				// skips AE's "Unable to access [property] because [object] is not [type]." errors
			}
		}
	}
	// primitives and non-supported objects (e.g. functions) land here
	return result;
}
