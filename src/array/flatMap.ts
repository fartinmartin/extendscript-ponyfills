import { map } from "./map";
import { flat } from "./flat";

export type FlatMapCallback<T> = (value: T, index: number, array: T[]) => T[];

export function flatMap<T>(array: T[], callback: FlatMapCallback<T>) {
	return flat(map(array, callback), 1);
}
