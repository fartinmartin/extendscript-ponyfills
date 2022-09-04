import { findIndex } from "./findIndex";

type FindCallback<T> = (value: T, index: number, array: T[]) => boolean;

export function find<T>(array: T[], callback: FindCallback<T>) {
	const index = findIndex(array, callback);

	if (index === -1) {
		return undefined;
	}

	return array[index];
}
