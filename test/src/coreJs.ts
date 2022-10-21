// why not use `core-js-pure`?
// well, swc compiles this into code that errors in AE
// would a different bundler do better?
// or, is it that `core-js-pure` is not Extendscript friendly?

// npm install --D core-js-pure
import find from "core-js-pure/actual/array/find";

const v = find([1, 2, 3, 4, 5], (it: number) => it === 2);
alert(v); // 2
