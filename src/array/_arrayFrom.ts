import { reduce } from "./reduce";

// https://github.com/eserozvataf/ponyfills/blob/development/src/arrayFrom.ts
export function arrayFrom(source: any, mapFn?: Function, thisArg?: any): any {
	// @ts-ignore
	const caller = thisArg === null || thisArg === undefined ? this : thisArg;

	if (source === null || source === undefined) {
		throw new Error(
			"TypeError: Array.from requires an array-like object - not null or undefined"
		);
	}

	let asArray;
	if (source instanceof Collection) {
		// Error "Collection is undefined" 🤔
		const ret = Array.prototype.slice.call(source, 1);
		const len = source.length; // @ts-ignore
		if (len !== 0) ret.push(source[len]);
		asArray = source as any[];
	} else {
		asArray = [...source];
	}

	if (mapFn !== null && mapFn !== undefined) {
		if (!(mapFn instanceof Function)) {
			throw new Error(
				"TypeError: Array.from: when provided, the second argument must be a function"
			);
		}

		return reduce(
			asArray,
			(prev, curr, idx) => prev.concat([mapFn.call(caller, curr, idx)]),
			[] as any[]
		);
	}

	return asArray;
}
