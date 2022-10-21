export type FilterCallback<T> = (
	value: T,
	index: number,
	array: T[]
) => boolean;

// TODO: accept (optional?) additional type parameter to indicate return value
// function filter<T, K>(array: T[], callback: FilterCallback<T>): K
// pseudo example: filter<Item, CompItem>(app.project.items, (item) => item instanceof CompItem)

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
