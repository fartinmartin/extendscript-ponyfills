import { reduce } from "./reduce";

export function groupBy<T>(array: T[], key: string) {
	return reduce(
		array,
		(acc: any, currentValue: any) => {
			let groupKey = currentValue[key];
			if (!acc[groupKey]) {
				acc[groupKey] = [];
			}
			acc[groupKey].push(currentValue);
			return acc;
		},
		{}
	);
}
