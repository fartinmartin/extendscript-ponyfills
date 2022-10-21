import { map, MapCallback } from "./map";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
export function arrayFrom(source: any, mapFn?: MapCallback<any, any>): any {
	if (!source.length) return [];
	const asArray = [];

	try {
		for (let i = 0; i < source.length; i++) asArray.push(source[i]);
	} catch {
		// https://ae-scripting.docsforadobe.dev/other/collection.html#collection
		// The index numbering of a Collection starts with 1, not 0.
		for (let i = 1; i <= source.length; i++) asArray.push(source[i]);
	}

	return mapFn ? map(asArray, mapFn) : asArray;
}
