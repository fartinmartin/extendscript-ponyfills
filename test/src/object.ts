import {
	create,
	defineProperties,
	defineProperty,
	getOwnPropertyDescriptor,
	getOwnPropertyNames,
	getPrototypeOf,
	keys,
} from "../../src";

const obj = { name: "test", value: 2 };

// const a = create(obj, { new: true }); // ⛔
// const a = defineProperty(obj, "new", { vaule: true }); // ⛔
// const a = defineProperties(obj, [{ name: "new", vaule: true }]); // ⛔
// const a = getOwnPropertyDescriptor(obj, "value"); // 🚧
// const a = getOwnPropertyNames(obj); // ✅
// const a = getPrototypeOf(obj); // 🚧
const a = keys(obj); // ✅

alert(a.toString());
