export function fill<T>(
	array: T[],
	value: T,
	startIndex: number = 0,
	endIndex: number = array.length
) {
	for (let index = startIndex; index < endIndex; index += 1) {
		array[index] = value;
	}

	return array;
}
