export function startsWith(
	string: string,
	searchString: string,
	position?: number
) {
	position = position || 0;
	return string.substr(position, searchString.length) === searchString;
}
