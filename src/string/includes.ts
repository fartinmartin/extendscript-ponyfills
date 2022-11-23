export function stringIncludes(
	string: string,
	searchString: string,
	start?: number
) {
	if (typeof start !== "number") {
		start = 0;
	}
	if (start + searchString.length > string.length) {
		return false;
	} else {
		return string.indexOf(searchString, start) !== -1;
	}
}
