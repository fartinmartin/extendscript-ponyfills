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
} from "../../../src";
import { test } from "../_utils";

test(() => every([1, 2, 3], (num) => typeof num === "string"))
	.describe("every item is number")
	.expect(false)
	.run();

test(() => fill([1, 2, 3], 5))
	.describe("array is now all fives")
	.expect([5, 5, 5])
	.run();

test(() => filter([1, "2", 3], (item) => typeof item === "string"))
	.describe("array is just string items now")
	.expect(["2"])
	.run();

test(() => find([1, "2", 3], (item) => typeof item === "string"))
	.describe("found first string items")
	.expect("2")
	.run();

test(() => findIndex([1, 2, 3], (item) => item === 2))
	.describe("found index of item")
	.expect(1)
	.run();

test(() => flat([[1, 2, 3], [4, 5, 6]])) // prettier-ignore
	.describe("array is now flat")
	.expect([1, 2, 3, 4, 5, 6])
	.run();

test(() => flatMap<any>([1, 2, [3], [4, 5], 6, []], (num) => num))
	.describe("flatMap: map and then flat")
	.expect([1, 2, 3, 4, 5, 6])
	.run();

test(() => forEach([1, 2, 3], (item, index, arr) => (arr[index] = arr[index] * 2))) // prettier-ignore
	.describe("double items via forEach")
	.expect([2, 4, 6])
	.run();

test(() => groupBy([{num:1, cat: "dog"}, {num:2, cat: "dog"}, {num:3, cat: "cat"}], "cat")) // prettier-ignore
	.describe("array is now an object organized by `key`") // prettier-ignore
	.expect({cat: [{num:3, cat: "cat"}], dog: [{num:1, cat: "dog"}, {num:2, cat: "dog"}]}) // prettier-ignore
	.run(); // prettier-ignore

test(() => arrayIncludes([1, 2, 3], 2))
	.describe("array contains `2`")
	.expect(true)
	.run();

test(() => indexOf([1, 2, 3], 2))
	.describe("found index of item `2`")
	.expect(1)
	.run();

test(() => isArray([1, 2, 3]))
	.describe("test if `[1, 2, 3]` is an array")
	.expect(true)
	.run();

test(() => isArray("i am not an array"))
	.describe("test if a string is an array")
	.expect(false)
	.run();

test(() => lastIndexOf([1, 2, 3, 1], 1))
	.describe("find the index of the last instance of `1`")
	.expect(3)
	.run();

test(() => map([1, 2, 3], (item) => item * 2))
	.describe("map over array, duplicating item values")
	.expect([2, 4, 6])
	.run();

test(() => reduce<number, number>([1, 2, 3], (prev, current) => prev + current, 0)) // prettier-ignore
	.describe("sum array with reduce")
	.expect(6)
	.run();

test(() => some([1, 2, 3], (item) => typeof item === "string"))
	.describe("find string in array of numbers")
	.expect(false)
	.run();
