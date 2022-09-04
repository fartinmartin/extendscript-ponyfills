type EveryCallback<T> = (value: T, index: number, array: T[]) => boolean;

export function every<T>(array: T[], callback: EveryCallback<T>) {
	for (let index = 0; index < array.length; index += 1) {
		const value = array[index];

		if (!callback(value, index, array)) {
			return false;
		}
	}

	return true;
}
