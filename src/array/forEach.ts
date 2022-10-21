export type ForEachCallback<T> = (value: T, index: number, array: T[]) => void;

export function forEach<T>(array: T[], callback: ForEachCallback<T>) {
	for (let index = 0; index < array.length; index += 1) {
		const value = array[index];

		callback(value, index, array);
	}
	return array;
}
