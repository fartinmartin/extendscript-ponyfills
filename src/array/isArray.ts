export function isArray<T>(array: T[] | any) {
	return Boolean(
		array && Object.prototype.toString.call(Object(array)) === "[object Array]"
	);
}
