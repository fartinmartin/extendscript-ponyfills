export function lastIndexOf<T>(array: T[], searchedValue: T): number {
	for (let index = array.length - 1; index > -1; index -= 1) {
		const value = array[index];

		if (value === searchedValue) {
			return index;
		}
	}

	return -1;
}
