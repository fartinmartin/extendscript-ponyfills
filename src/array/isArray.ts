export function isArray(subject: any) {
	return Boolean(
		subject &&
			Object.prototype.toString.call(Object(subject)) === "[object Array]"
	);
}
