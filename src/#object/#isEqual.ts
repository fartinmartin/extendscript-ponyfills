import { every } from "../array/every";
import { keys } from "./keys";

// Shallow compare
export function isEqual(a: any, b: any) {
	const keysA = keys(a);
	const keysB = keys(a);
	return (
		keysA.length === keysB.length &&
		every(keysA, (key) => b.hasOwnProperty(key) && a[key] === b[key])
	);
}
