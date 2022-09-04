type SomeCallback<T> = (value: T, index: number, array: T[]) => boolean;

export function some<T>(array: T[], callback: SomeCallback<T>) {
	for (let index = 0; index < array.length; index += 1) {
		const value = array[index];

		if (callback(value, index, array)) {
			return true;
		}
	}

	return false;
}
