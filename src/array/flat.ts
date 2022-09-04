import { reduce } from "./reduce";
import { isArray } from "./isArray";

export function flat<T>(array: T | T[], depth = 0): T[] {
	if (depth < 1 || !isArray(array)) {
		return array as T[];
	}

	return reduce<T, T[]>(
		array as T[],
		(result, current) => {
			return result.concat(flat<T>(current, depth - 1));
		},
		[]
	);
}
