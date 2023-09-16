import { filter } from "./filter";
import { arrayIncludes } from "./includes";

export function difference<T>(array: T[], exclude: T[]) {
	return filter(array, (item) => !arrayIncludes(exclude, item));
}
