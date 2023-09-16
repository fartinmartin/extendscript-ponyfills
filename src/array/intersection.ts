import { filter } from "./filter";
import { arrayIncludes } from "./includes";
import { reduce } from "./reduce";

export function intersection<T>(arrays: T[][]) {
	return reduce(
		arrays,
		(a: T[], b: T[]) => filter(a, (c) => arrayIncludes(b, c)),
		[]
	);
}
