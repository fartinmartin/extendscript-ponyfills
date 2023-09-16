import { filter } from "./filter";
import { reduce } from "./reduce";
import { some } from "./some";

export type Comparator<T> = (value: T, searchedValue: T) => boolean;

export function intersectionWith<T>(arrays: T[][], comparator: Comparator<T>) {
	return reduce(
		arrays,
		(a: T[], b: T[]) => filter(a, (c) => _includes(b, c, comparator)),
		[]
	);
}

function _includes<T>(array: T[], searchedValue: T, comparator: Comparator<T>) {
	return some(array, (value) => comparator(value, searchedValue));
}
