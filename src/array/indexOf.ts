import { findIndex } from "./findIndex";

export function indexOf<T>(array: T[], searchedValue: T) {
	return findIndex(array, (value) => value === searchedValue);
}
