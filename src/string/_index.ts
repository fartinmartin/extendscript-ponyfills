// https://github.com/behnammodi/polyfill/blob/master/string.polyfill.js
export { endsWith } from "./endsWith";
export { padEnd } from "./padEnd";
export { padStart } from "./padStart";
export { repeat } from "./repeat";
export { startsWith } from "./startsWith";
export { stringIncludes } from "./includes";
export { trim } from "./trim";

import { endsWith } from "./endsWith";
import { padEnd } from "./padEnd";
import { padStart } from "./padStart";
import { repeat } from "./repeat";
import { startsWith } from "./startsWith";
import { stringIncludes } from "./includes";
import { trim } from "./trim";

export const _String = {
	endsWith,
	includes: stringIncludes,
	padEnd,
	padStart,
	repeat,
	startsWith,
	trim,
};
