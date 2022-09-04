type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean;

export function filter<T>(array: T[], callback: FilterCallback<T>) {
	const result: T[] = [];

	for (let index = 0; index < array.length; index += 1) {
		const value = array[index];

		if (callback(value, index, array)) {
			result.push(value);
		}
	}

	return result;
}
