import { filter } from "./filter";
import { some } from "./some";

export type Comparator<T> = (value: T, searchedValue: T) => boolean;

export function differenceWith<T>(
	array: T[],
	exclude: T[],
	comparator: Comparator<T>
) {
	return filter(array, (item) => !_includes(exclude, item, comparator));
}

function _includes<T>(array: T[], searchedValue: T, comparator: Comparator<T>) {
	return some(array, (value) => comparator(value, searchedValue));
}
