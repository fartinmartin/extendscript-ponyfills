export type MapCallback<T, N> = (value: T, index: number, array: T[]) => N;

export function map<T, N>(array: T[], callback: MapCallback<T, N>): N[] {
	const result = [];

	for (let index = 0; index < array.length; index += 1) {
		const value = array[index];

		result[index] = callback(value, index, array);
	}

	return result;
}
