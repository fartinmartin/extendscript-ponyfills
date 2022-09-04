import { arrayIncludes, isArray } from "../array/_index";
import { stringIncludes } from "../string/_index";

// prettier-ignore
// type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
// type Extract<T, U> = T extends U ? T : never; // ⚠️ doesn't help this typedoc error: error TS2318: Cannot find global type 'Extract'.

export function includes<T>(array: T[], searchedValue: T): boolean;
export function includes(
	string: string,
	searchString: string,
	start?: number
): boolean;
export function includes(a: unknown, b: unknown, c?: unknown) {
	if (
		typeof a === "string" &&
		typeof b === "string" &&
		(typeof c === "number" || typeof c === "undefined")
	) {
		return stringIncludes(a, b, c);
	} else if (isArray(a)) {
		return arrayIncludes(a as any, b);
	} else {
		return false;
	}
}
