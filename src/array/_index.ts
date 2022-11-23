// https://github.com/maciejcieslar/array-methods
export { arrayFrom } from "./arrayFrom";
export { arrayIncludes } from "./includes";
export { every, EveryCallback } from "./every";
export { fill } from "./fill";
export { filter, FilterCallback } from "./filter";
export { find, FindCallback } from "./find";
export { findIndex, FindIndexCallback } from "./findIndex";
export { flat } from "./flat";
export { flatMap, FlatMapCallback } from "./flatMap";
export { forEach, ForEachCallback } from "./forEach";
export { groupBy } from "./groupBy";
export { indexOf } from "./indexOf";
export { isArray } from "./isArray";
export { lastIndexOf } from "./lastIndexOf";
export { map, MapCallback } from "./map";
export { reduce, ReduceCallback } from "./reduce";
export { some, SomeCallback } from "./some";

import { arrayFrom } from "./arrayFrom";
import { arrayIncludes } from "./includes";
import { every } from "./every";
import { fill } from "./fill";
import { filter } from "./filter";
import { find } from "./find";
import { findIndex } from "./findIndex";
import { flat } from "./flat";
import { flatMap } from "./flatMap";
import { forEach } from "./forEach";
import { groupBy } from "./groupBy";
import { indexOf } from "./indexOf";
import { isArray } from "./isArray";
import { lastIndexOf } from "./lastIndexOf";
import { map } from "./map";
import { reduce } from "./reduce";
import { some } from "./some";

export const _Array = {
	arrayFrom,
	every,
	fill,
	filter,
	find,
	findIndex,
	flat,
	flatMap,
	forEach,
	groupBy,
	includes: arrayIncludes,
	indexOf,
	isArray,
	lastIndexOf,
	map,
	reduce,
	some,
};
