import {
	every,
	fill,
	filter,
	find,
	findIndex,
	flat,
	flatMap,
	forEach,
	groupBy,
	arrayIncludes,
	indexOf,
	isArray,
	lastIndexOf,
	map,
	reduce,
	some,
} from "../../src";
import { test } from "./_utils";

test(
	"every item is number",
	() => every([1, 2, 3], (number) => typeof number === "string"),
	false
);

test(
	"every item is number",
	() => every([1, 2, 3], (number) => typeof number === "string"),
	true
);
