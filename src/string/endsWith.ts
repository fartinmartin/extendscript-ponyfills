export function endsWith(
	string: string,
	searchString: string,
	position?: number
) {
	if (
		typeof position !== "number" ||
		!isFinite(position) ||
		Math.floor(position) !== position ||
		position > string.length
	) {
		position = string.length;
	}
	position -= searchString.length;
	var lastIndex = string.lastIndexOf(searchString, position);
	return lastIndex !== -1 && lastIndex === position;
}
