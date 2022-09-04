export function isArray<T>(array: T[]) {
	return Boolean(
		array && Object.prototype.toString.call(Object(array)) === "[object Array]"
	);
}
