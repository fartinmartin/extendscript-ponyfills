// https://github.com/angus-c/just/blob/master/packages/object-merge/index.cjs

export function merge(/* obj1, obj2, [objn] */) {
	const args = [].slice.call(arguments);
	let arg;
	let i = args.length;
	while (((arg = args[i - 1]), i--)) {
		if (!arg || (typeof arg != "object" && typeof arg != "function")) {
			throw new Error("expected object, got " + arg);
		}
	}
	const result = args[0];
	const extenders = args.slice(1);
	const len = extenders.length;
	for (let i = 0; i < len; i++) {
		const extender = extenders[i];
		for (const key in extender) {
			try {
				result[key] = extender[key];
			} catch (error) {
				// skips AE's "Unable to access [property] because [object] is not [type]." errors
			}
		}
	}
	return result;
}
