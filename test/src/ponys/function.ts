import { reduce } from "../../../src";
import { arrayFrom } from "../../../src/array/arrayFrom";
import { bind } from "../../../src/function/bind";

const myModule = {
	x: 42,
	getX: function () {
		return this.x;
	},
	test1: function (...argArray: number[]) {
		const args = arrayFrom(arguments);
		return this.x + reduce(args, (a: number, b: number) => a + b, 0);
	},
	test2: function (array: number[], extra: number) {
		return this.x + extra + reduce(array, (a: number, b: number) => a + b, 0);
	},
};

const unboundGetX = myModule.getX;
alert(typeof unboundGetX()); // The function gets invoked at the global scope // expected output: undefined

const boundGetX = bind(unboundGetX, myModule);
alert(boundGetX()); // expected output: 42

const boundTest1 = bind(myModule.test1, myModule, 1, 2, 3);
alert(boundTest1()); // expected output: 42 + 1 + 2 + 3 = 48

const boundTest2 = bind(myModule.test2, myModule, [1, 2, 3], 2);
alert(boundTest2()); // expected output: 42 + 1 + 2 + 3 + 2 = 50
