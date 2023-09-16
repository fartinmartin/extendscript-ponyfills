export function stringify(value: any) {
	if (value === null || typeof value !== "object") {
		return '"' + String(value) + '"';
	} else {
		return value.toSource().replace(/[\\(\\)]/g, "");
	}
}
