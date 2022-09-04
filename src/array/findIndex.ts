type FindIndexCallback<T> = (value: T, index: number, array: T[]) => boolean;

export function findIndex<T>(array: T[], callback: FindIndexCallback<T>) {
	for (let index = 0; index < array.length; index += 1) {
		const value = array[index];

		if (callback(value, index, array)) {
			return index;
		}
	}

	return -1;
}
