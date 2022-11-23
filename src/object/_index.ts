// https://github.com/fusepilot/babel-preset-extendscript/blob/master/src/transformers.js
export { create } from "./_create";
export { defineProperties } from "./_defineProperties";
export { defineProperty } from "./_defineProperty";
export { getOwnPropertyDescriptor } from "./_getOwnPropertyDescriptor";
export { getOwnPropertyNames } from "./getOwnPropertyNames";
export { getPrototypeOf } from "./_getPrototypeOf";
export { keys } from "./keys";

import { create } from "./_create";
import { defineProperties } from "./_defineProperties";
import { defineProperty } from "./_defineProperty";
import { getOwnPropertyDescriptor } from "./_getOwnPropertyDescriptor";
import { getOwnPropertyNames } from "./getOwnPropertyNames";
import { getPrototypeOf } from "./_getPrototypeOf";
import { keys } from "./keys";

export const _Object = {
	create,
	defineProperties,
	defineProperty,
	getOwnPropertyDescriptor,
	getOwnPropertyNames,
	getPrototypeOf,
	keys,
};
