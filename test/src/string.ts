import {
	endsWith,
	includes,
	padEnd,
	padStart,
	repeat,
	startsWith,
	trim,
} from "../../src";

import { test } from "./_utils";

test(() => endsWith("Hello world!", "1"))
	.describe("'Hello world!' ends with '1'")
	.expect(false)
	.run();

test(() => includes("Hello world!", "e"))
	.describe("'Hello world!' contains 'e'")
	.expect(true)
	.run();

test(() => padEnd("4", 2)) // ⛔
	.describe("pad end '4' with '00'")
	.expect("400")
	.run();

test(() => padStart("4", 2)) // ⛔
	.describe("pad start '4' with '00'")
	.expect("004")
	.run();

test(() => repeat("Hello world!", 2))
	.describe("'Hello world!' but twice")
	.expect("Hello world!Hello world!")
	.run();

test(() => startsWith("Hello world!", "H"))
	.describe("'Hello world!' starts with 'H'")
	.expect(true)
	.run();

test(() => trim(`Hello world! \n\t`))
	.describe("'Hello world! \n\t' with no trailing whitespace")
	.expect("Hello world!")
	.run();
