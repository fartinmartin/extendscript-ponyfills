// https://dev.to/uddeshjain/creating-your-own-bind-polyfill-of-bind-433j
export function bind(thisArg: any, obj: any, ...args: any[]) {
	return function (...newArgs: any[]) {
		thisArg.apply(obj, [...args, ...newArgs]);
	};
}
