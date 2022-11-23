import { some } from "./some";

export function arrayIncludes<T>(array: T[], searchedValue: T) {
	return some(array, (value) => value === searchedValue);
}
