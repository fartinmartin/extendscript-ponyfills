export function assign(target: any, source: any) {
	let from;
	const to = toObject(target);

	for (let i = 1; i < arguments.length; i++) {
		from = Object(arguments[i]);
		for (const key in from) {
			if (Object.prototype.hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}
	}

	return to;
}

function toObject(val: any) {
	if (val === null || val === undefined) {
		throw new Error("Object.assign cannot be called with null or undefined");
	}

	return Object(val);
}
