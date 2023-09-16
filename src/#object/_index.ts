// https://github.com/fusepilot/babel-preset-extendscript/blob/master/src/transformers.js
// export { create } from "./#create";
// export { defineProperties } from "./#defineProperties";
// export { defineProperty } from "./#defineProperty";
// export { getOwnPropertyDescriptor } from "./#getOwnPropertyDescriptor";
export { getOwnPropertyNames } from "./#getOwnPropertyNames";
export { getPrototypeOf } from "./#getPrototypeOf";
export { keys } from "./#keys";

import { create } from "./#create";
// import { defineProperties } from "./#defineProperties";
// import { defineProperty } from "./#defineProperty";
// import { getOwnPropertyDescriptor } from "./#getOwnPropertyDescriptor";
import { getOwnPropertyNames } from "./#getOwnPropertyNames";
import { getPrototypeOf } from "./#getPrototypeOf";
import { keys } from "./#keys";

export const _Object = {
	create,
	// defineProperties,
	// defineProperty,
	// getOwnPropertyDescriptor,
	getOwnPropertyNames,
	getPrototypeOf,
	keys,
};
