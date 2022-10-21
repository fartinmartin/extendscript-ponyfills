// https://gist.github.com/xulapp/1116996
export function bind(fn: Function, thisArg: any, ...argArray: any[]) {
	const method = fn;
	const args = Array.prototype.slice.call(arguments, 2);

	return function bound() {
		const _args = args.concat(Array.prototype.slice.call(arguments));

		if (!(fn instanceof bound)) {
			return method.apply(thisArg, _args);
		}

		const __args = [];
		for (var i = 0, len = _args.length; i < len; i++)
			__args.push("_args[" + i + "]");

		return eval("new method(" + __args.join(",") + ")");
	};
}
