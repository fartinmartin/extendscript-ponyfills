// import { reduce } from "./reduce";
// import { isArray } from "./isArray";

// export function flat<T>(array: T | T[], depth = 0) {
// 	if (depth < 1 || !isArray(array)) {
// 		return array;
// 	}

// 	return reduce<T, T[]>(
// 		array,
// 		(result, current) => {
// 			return result.concat(flat<T>(current, depth - 1));
// 		},
// 		[]
// 	);
// }
