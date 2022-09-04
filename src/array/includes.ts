import { some } from "./some";

export function includes<T>(array: T[], searchedValue: T) {
	return some(array, (value) => value === searchedValue);
}
