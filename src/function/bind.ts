export function bind(this: Function, thisArg: any, ...argArray: any[]) {
	var method = this;
	var args = Array.prototype.slice.call(arguments, 1);

	return function bound(this: Function) {
		var _args = args.concat(Array.prototype.slice.call(arguments));
		if (!(this instanceof bound)) return method.apply(thisArg, _args);

		var __args = [];
		for (var i = 0, len = _args.length; i < len; i++)
			__args.push("_args[" + i + "]");

		return eval("new method(" + __args.join(",") + ")");
	};
}
